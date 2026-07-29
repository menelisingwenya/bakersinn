import { Link } from 'react-router-dom'
import { productData } from '../data/products'
import { useState } from 'react'

const tabs = [
  { key: 'bread', label: 'Bread' },
  { key: 'pies', label: 'Meat Pies' },
  { key: 'scones', label: 'Scones' },
  { key: 'donuts', label: 'Donuts' },
]

export default function Products() {
  const [tab, setTab] = useState('bread')
  const products = productData[tab] || []

  return (
    <main className="products-page-main pb-[56px]">
      <section className="relative w-[calc(100%-186px)] min-h-[530px] mx-auto overflow-hidden rounded-[8px] max-[1500px]:w-[calc(100%-84px)] max-[1500px]:min-h-[460px] max-md:w-[calc(100%-40px)] max-md:min-h-[390px] max-sm:w-[calc(100%-16px)] max-sm:min-h-[320px] max-[560px]:min-h-[250px]" style={{ background: 'url(/asset/about us header.png) center center / cover no-repeat' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.08) 54%, rgba(0,0,0,0.78) 100%)' }} />
        <div className="relative z-[1] flex items-end justify-between min-h-[530px] px-[38px] pb-[30px] max-md:min-h-[390px] max-md:px-[26px] max-md:pb-[22px] max-sm:min-h-[320px] max-sm:px-[20px] max-sm:pb-[18px] max-[560px]:min-h-[250px] max-[560px]:px-[14px] max-[560px]:pb-[14px]">
          <h1 className="m-0 text-white font-heading text-[54px] font-bold leading-none tracking-[-1.4px] max-md:text-[46px] max-sm:text-[38px] max-[560px]:text-[32px]">Our Products Range</h1>
          <Link to="/contact" className="inline-flex items-center justify-center w-[72px] h-[72px] max-md:w-[60px] max-md:h-[60px] max-sm:w-[48px] max-sm:h-[48px]">
            <img src="/asset/about us header (1).png" alt="" className="w-[54px] h-[54px] object-contain max-md:w-[46px] max-md:h-[46px] max-sm:w-[36px] max-sm:h-[36px]" />
          </Link>
        </div>
      </section>

      <section className="pt-[44px] max-md:pt-[36px] max-sm:pt-[28px]">
        <h2 className="m-0 text-[#2d237d] text-center font-heading text-[64px] font-bold leading-[1.04] tracking-[-1.5px] max-md:text-[54px] max-sm:text-[44px] max-[560px]:text-[34px] max-[560px]:text-[30px]">Our Product Range</h2>
        <p className="max-w-[880px] mx-auto mt-[16px] text-[#4c4795] text-center text-[20px] leading-[1.8]">Browse our full line of breads, pies, scones and donuts made fresh daily for every meal and occasion.</p>

        <div className="flex justify-center gap-[20px] mt-[34px] flex-wrap max-md:gap-[14px] max-md:mt-[24px] max-sm:gap-[10px] max-sm:px-[16px]">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`relative text-[30px] font-heading font-bold leading-[1.05] tracking-[-0.8px] transition-colors bg-transparent border-none cursor-pointer max-md:text-[26px] max-sm:text-[20px] max-sm:text-[18px] ${
                tab === t.key ? 'text-[#2d237d]' : 'text-[#9d91cb]'
              }`}
            >
              {t.label}
              {tab === t.key && <span className="absolute left-0 right-0 h-[12px] bottom-[-12px] rounded-[6px] bg-gold" />}
            </button>
          ))}
        </div>
        <div className="relative w-full max-w-[520px] h-[32px] mx-auto mt-[10px] max-md:h-[18px] max-md:max-w-full max-md:mt-[16px]">
          <span className="absolute left-0 right-0 top-[18px] h-[3px] bg-[#ebe7da] max-md:top-[8px]" />
        </div>

        <div className="mt-[42px] overflow-x-auto pb-[18px] max-md:mt-[30px]" style={{ scrollbarWidth: 'thin', scrollbarColor: '#b7b1cf #ece7d7' }}>
          <div className="flex gap-[12px] px-[12px] w-max">
            {products.map((product, i) => (
              <article key={i} className="w-[380px] min-h-[620px] flex-shrink-0 rounded-[8px] bg-[#f7f4e2] shadow-[0_10px_24px_rgba(52,36,135,0.08)] max-md:w-[340px] max-md:min-h-[580px] max-sm:w-[310px] max-sm:min-h-[620px] max-[560px]:w-[280px] max-[560px]:min-h-[560px]" style={{ flex: '0 0 auto' }}>
                <div className="flex items-start justify-center min-h-[285px] px-[18px] pt-[22px] pb-[8px] max-md:min-h-[255px] max-sm:min-h-[320px] max-[560px]:min-h-[270px]">
                  <img src={product.image} alt={product.alt} className="block max-w-full max-h-[235px] w-auto h-auto max-md:max-h-[210px] max-sm:max-h-[280px] max-[560px]:max-h-[220px]" />
                </div>
                <div className="px-[22px] pb-[24px] pt-[8px] text-center max-md:px-[18px] max-md:pb-[22px] max-sm:px-[20px] max-sm:pb-[28px] max-[560px]:px-[18px] max-[560px]:pb-[22px]">
                  <h3 className="m-0 text-[#2d237d] font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.8px] max-md:text-[25px] max-sm:text-[30px] max-[560px]:text-[24px]">{product.title}</h3>
                  <p className="max-w-[310px] mx-auto mt-[12px] text-[#2d237d] font-heading text-[18px] leading-[1.35] tracking-[-0.2px] max-md:text-[17px] max-sm:text-[20px] max-[560px]:text-[17px]">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-[24px] mt-[48px] pb-[40px]">
          <Link to="/order" className="inline-block relative z-[2] w-[min(100%,508px)] px-[28px] py-[18px] pb-[19px] rounded-[4px] bg-primary text-white text-center font-heading text-[32px] font-bold leading-none cursor-pointer hover:bg-primary-dark transition-colors max-sm:w-full max-sm:text-[24px]">
            ORDER NOW
          </Link>
        </div>
      </section>
    </main>
  )
}