import { useState, useEffect, useCallback } from 'react'
import { gameImages, puzzleImages } from '../data/products'
import styled from 'styled-components'

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: ${props => props.$open ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1200;
  background: rgba(0,0,0,0.5);
`

const ModalPanel = styled.div`
  background: linear-gradient(135deg, #fffbe6, #fff3c4);
  border: 3px solid #ffd700;
  border-radius: 16px;
  padding: 32px 40px;
  text-align: center;
  max-width: 480px;
`

function WinModal({ open, title, children, onClose }) {
  return (
    <ModalOverlay $open={open} onClick={onClose}>
      <ModalPanel onClick={e => e.stopPropagation()}>
        <span className="text-[56px]">&#11088;</span>
        <h3 className="m-0 text-[#27277f] font-cabin text-[42px] mt-[8px]">{title}</h3>
        <div className="text-[#6a5cac] font-body text-[20px] mt-[8px]">{children}</div>
        <button onClick={onClose} className="mt-[16px] px-[34px] py-[14px] border-none rounded-[10px] bg-gradient-to-b from-[#ff2117] to-[#ef180e] text-white font-body text-[18px] font-bold uppercase cursor-pointer hover:scale-[1.04] transition-transform">Play Again</button>
      </ModalPanel>
    </ModalOverlay>
  )
}

function MemoryGame() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)
  const [score, setScore] = useState(0)
  const [locked, setLocked] = useState(false)
  const [won, setWon] = useState(false)

  function shuffle(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  function init() {
    const doubled = shuffle([...gameImages, ...gameImages])
    setCards(doubled)
    setFlipped([])
    setMatched([])
    setMoves(0)
    setScore(0)
    setLocked(false)
    setWon(false)
  }

  useEffect(() => { init() }, [])

  function handleFlip(index) {
    if (locked || flipped.includes(index) || matched.includes(index)) return
    if (flipped.length >= 2) return

    const newFlipped = [...flipped, index]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(m => m + 1)
      setLocked(true)
      const [first, second] = newFlipped
      if (cards[first].name === cards[second].name) {
        setScore(s => s + 10)
        const newMatched = [...matched, first, second]
        setMatched(newMatched)
        setFlipped([])
        setLocked(false)
        if (newMatched.length === cards.length) {
          setTimeout(() => setWon(true), 500)
        }
      } else {
        setTimeout(() => {
          setFlipped([])
          setLocked(false)
        }, 1000)
      }
    }
  }

  return (
    <section className="px-[40px] py-[64px] pb-[80px] bg-white text-center max-md:px-[24px] max-md:py-[48px] max-md:pb-[60px] max-sm:px-[16px]">
      <h2 className="m-0 text-[#27277f] font-cabin text-[72px] font-bold leading-none tracking-[0.4px] max-md:text-[56px] max-sm:text-[44px]">Memory Match Game</h2>
      <p className="mt-[16px] text-[#6a5cac] font-body text-[20px] font-[500]">Flip the cards and find all the matching pairs!</p>
      
      <div className="grid grid-cols-4 gap-[18px] max-w-[820px] mx-auto mt-[40px] px-[20px] max-md:max-w-[620px] max-md:gap-[14px] max-sm:max-w-[400px] max-sm:gap-[10px] max-sm:px-[10px]">
        {cards.map((item, i) => (
          <div
            key={i}
            onClick={() => handleFlip(i)}
            className="aspect-square cursor-pointer"
            style={{ perspective: '1000px' }}
          >
            <div
              className="relative w-full h-full rounded-[12px] transition-transform duration-500"
              style={{
                transformStyle: 'preserve-3d',
                transform: flipped.includes(i) || matched.includes(i) ? 'rotateY(180deg)' : ''
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center rounded-[12px] bg-gradient-to-br from-[#35269b] to-[#4d3bbf] border-[3px] border-[#c4a24b] shadow-[0_6px_18px_rgba(52,36,135,0.18)]" style={{ backfaceVisibility: 'hidden' }}>
                <span className="font-cabin text-[52px] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] max-sm:text-[32px]">?</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center rounded-[12px] bg-white border-[3px] border-[#c4a24b] shadow-[0_6px_18px_rgba(52,36,135,0.18)] p-[8px]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <img src={item.src} alt={item.name} className="block w-full h-full object-contain rounded-[8px]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-[40px] mt-[36px] flex-wrap max-md:gap-[24px] max-sm:gap-[16px] max-sm:flex-col">
        <span className="font-body text-[22px] font-[600] text-[#27277f] max-md:text-[19px]">Score: <span className="text-gold">{score}</span></span>
        <span className="font-body text-[22px] font-[600] text-[#27277f] max-md:text-[19px]">Moves: <span className="text-gold">{moves}</span></span>
        <button onClick={init} className="px-[34px] py-[14px] border-none rounded-[10px] bg-gradient-to-b from-[#ff2117] to-[#ef180e] text-white font-body text-[18px] font-bold uppercase cursor-pointer shadow-[0_8px_20px_rgba(255,23,13,0.24)] hover:scale-[1.04] transition-transform">Play Again</button>
      </div>

      <WinModal open={won} title="Congratulations!" onClose={init}>
        <p className="m-0">You found all the pairs!</p>
      </WinModal>
    </section>
  )
}

function SlidePuzzle() {
  const [tiles, setTiles] = useState([])
  const [emptyIdx, setEmptyIdx] = useState(8)
  const [moves, setMoves] = useState(0)
  const [won, setWon] = useState(false)
  const [puzzleImg, setPuzzleImg] = useState('')
  const gridSize = 3

  function isSolvable(arr) {
    let inv = 0
    for (let i = 0; i < 9; i++) {
      for (let j = i + 1; j < 9; j++) {
        if (arr[i] && arr[j] && arr[i] > arr[j]) inv++
      }
    }
    return inv % 2 === 0
  }

  function shufflePuzzle() {
    const arr = [1,2,3,4,5,6,7,8,0]
    do {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    } while (!isSolvable(arr) || arr[8] !== 0)
    return arr
  }

  function init() {
    const img = puzzleImages[Math.floor(Math.random() * puzzleImages.length)]
    setPuzzleImg(img)
    const t = shufflePuzzle()
    setTiles(t)
    setEmptyIdx(t.indexOf(0))
    setMoves(0)
    setWon(false)
  }

  useEffect(() => { init() }, [])

  function canMove(idx) {
    const emptyRow = Math.floor(emptyIdx / gridSize)
    const emptyCol = emptyIdx % gridSize
    const tileRow = Math.floor(idx / gridSize)
    const tileCol = idx % gridSize
    const dr = Math.abs(emptyRow - tileRow)
    const dc = Math.abs(emptyCol - tileCol)
    return (dr === 1 && dc === 0) || (dr === 0 && dc === 1)
  }

  function handleClick(idx) {
    if (won || !canMove(idx)) return
    const newTiles = [...tiles];
    [newTiles[emptyIdx], newTiles[idx]] = [newTiles[idx], newTiles[emptyIdx]]
    setTiles(newTiles)
    setEmptyIdx(idx)
    const newMoves = moves + 1
    setMoves(newMoves)
    
    let solved = true
    for (let i = 0; i < 8; i++) {
      if (newTiles[i] !== i + 1) { solved = false; break }
    }
    if (solved && newTiles[8] === 0) setWon(true)
  }

  return (
    <section className="px-[40px] py-[36px] pb-[80px] bg-[#f9f7ff] text-center max-md:px-[24px] max-md:py-[28px] max-md:pb-[60px]">
      <h2 className="m-0 text-[#27277f] font-cabin text-[72px] font-bold leading-none tracking-[0.4px] max-md:text-[56px] max-sm:text-[44px]">Slide Puzzle</h2>
      <p className="mt-[16px] text-[#6a5cac] font-body text-[20px] font-[500]">Click the tiles to slide them and complete the picture!</p>
      
      <div className="flex items-start justify-center gap-[40px] mt-[40px] max-w-[860px] mx-auto px-[20px] flex-wrap max-md:gap-[24px]">
        <div
          className="grid gap-[4px] p-[8px] rounded-[12px]"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, 100px)`,
            background: 'linear-gradient(135deg, #35269b, #4d3bbf)',
            boxShadow: '0 8px 28px rgba(52,36,135,0.22)',
          }}
        >
          {tiles.map((val, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(idx)}
              className={val === 0 ? '' : 'cursor-pointer hover:scale-[1.04] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]'}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: '"Cabin Sketch", cursive',
                fontSize: '28px',
                fontWeight: 700,
                color: val !== 0 ? '#ffffff' : 'transparent',
                textShadow: val !== 0 ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
                backgroundColor: val !== 0 ? '#e8d9a0' : 'rgba(255,255,255,0.12)',
                backgroundImage: val !== 0 ? `url(${puzzleImg})` : 'none',
                backgroundSize: '300px 300px',
                backgroundPosition: val !== 0 ? `${-((val - 1) % gridSize) * 100}px ${-Math.floor((val - 1) / gridSize) * 100}px` : '',
                userSelect: 'none',
                transition: 'transform 120ms ease, box-shadow 120ms ease',
              }}
            >
              {val !== 0 ? val : ''}
            </div>
          ))}
        </div>

        <div className="w-[160px] text-center max-sm:w-[120px]">
          <img src={puzzleImg} alt="Reference" className="block w-full rounded-[10px] border-[3px] border-[#c4a24b] shadow-[0_6px_18px_rgba(52,36,135,0.14)]" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-[40px] mt-[28px] flex-wrap max-md:gap-[24px] max-sm:gap-[20px] max-sm:flex-col">
        <span className="font-body text-[22px] font-[600] text-[#27277f]">Moves: <span className="text-gold">{moves}</span></span>
        <button onClick={init} className="px-[34px] py-[14px] border-none rounded-[10px] bg-gradient-to-b from-[#ff2117] to-[#ef180e] text-white font-body text-[18px] font-bold uppercase cursor-pointer shadow-[0_8px_20px_rgba(255,23,13,0.24)] hover:scale-[1.04] transition-transform">New Puzzle</button>
      </div>

      <WinModal open={won} title="Puzzle Solved!" onClose={init}>
        <p className="m-0">You completed the puzzle in <span className="text-gold font-bold">{moves}</span> moves!</p>
      </WinModal>
    </section>
  )
}

export default function KidsCorner() {
  return (
    <main className="min-h-[calc(100vh-129px)]" style={{ background: 'radial-gradient(circle at 73% 28%, rgba(166,130,255,0.22) 0, rgba(166,130,255,0.12) 12%, transparent 32%), linear-gradient(180deg, #ffffff 0%, #fffefc 100%)' }}>
      {/* Hero */}
      <section className="grid grid-cols-[minmax(300px,0.62fr)_minmax(0,1.38fr)] items-end min-h-[calc(100vh-129px)] px-[28px] pt-[24px] pl-[46px] overflow-hidden max-[1500px]:grid-cols-[minmax(280px,0.66fr)_minmax(0,1.34fr)] max-[1500px]:px-[22px] max-[1500px]:pt-[18px] max-[1500px]:pl-[34px] max-[1100px]:grid-cols-1 max-[1100px]:min-h-auto max-[1100px]:px-[20px] max-[1100px]:pt-[12px] max-sm:px-[16px] max-sm:pt-[8px]">
        <div className="self-center pb-[90px] max-[1100px]:pb-[24px] max-[1100px]:text-center">
          <h1 className="m-0 text-[#27277f] font-cabin text-[126px] font-bold leading-[0.9] tracking-[0.6px] max-[1500px]:text-[102px] max-[1100px]:text-[88px] max-sm:text-[64px]">
            <span className="block">Kid's</span>
            <span className="block mt-[40px] max-[1100px]:mt-[20px]">Corner</span>
          </h1>
        </div>
        <div className="relative min-h-[780px] max-[1500px]:min-h-[700px] max-[1100px]:min-h-[640px] max-sm:min-h-[410px]">
          <div className="absolute right-[16%] top-[8%] w-[420px] h-[420px] rounded-full pointer-events-none max-[1500px]:right-[14%] max-[1500px]:w-[340px] max-[1500px]:h-[340px] max-[1100px]:right-[18%] max-[1100px]:top-[12%] max-[1100px]:w-[290px] max-[1100px]:h-[290px] max-sm:right-[18%] max-sm:top-[10%] max-sm:w-[180px] max-sm:h-[180px]" style={{
            background: 'radial-gradient(circle, rgba(192,154,255,0.34) 0, rgba(192,154,255,0.2) 22%, rgba(192,154,255,0.08) 44%, transparent 72%)',
            filter: 'blur(8px)',
          }} />
          <img src="/asset/Desktop - 1.png" alt="" className="absolute left-[-18%] bottom-[-60px] w-[1500px] h-[900px] max-w-none z-[5] pointer-events-none select-none max-[1500px]:left-[-14%] max-[1500px]:bottom-[-48px] max-[1500px]:w-[1300px] max-[1500px]:h-[780px] max-[1100px]:left-[-14%] max-[1100px]:bottom-[-40px] max-[1100px]:w-[1100px] max-[1100px]:h-[660px] max-sm:left-[-12%] max-sm:bottom-[-24px] max-sm:w-[680px] max-sm:h-[420px]" />
        </div>
      </section>

      <MemoryGame />
      <SlidePuzzle />
    </main>
  )
}