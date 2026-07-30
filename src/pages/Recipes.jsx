import { Link } from 'react-router-dom'
import { recipeData } from '../data/products'
import { useState } from 'react'

const tabs = [
  { key: 'kids', label: "For Kid's" },
  { key: 'vegans', label: 'For Vegans' },
  { key: 'family', label: 'For Family' },
]

export default function Recipes() {
  const [tab, setTab] = useState('kids')
  const recipe = recipeData[tab]

  return (
    <main className="bg-white">
      <section className="grid grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] items-end gap-[54px] px-[78px] py-[88px] pb-[36px] max-[1500px]:grid-cols-[minmax(0,1fr)_minmax(360px,0.92fr)] max-[1500px]:gap-[40px] max-[1500px]:px-[42px] max-[1500px]:py-[74px] max-[1500px]:pb-[34px] max-[1100px]:grid-cols-1 max-[1100px]:px-[24px] max-[1100px]:py-[56px] max-[1100px]:pb-[28px] max-sm:px-[20px] max-sm:py-[34px] max-sm:pb-[22px]" style={{ background: 'radial-gradient(circle at 24% 78%, rgba(224,203,151,0.18) 0, rgba(224,203,151,0.18) 14%, transparent 40%), linear-gradient(180deg, #ffffff 0%, #fcfbff 100%)' }}>
        <div className="max-w-[860px] pb-[56px] max-[1100px]:max-w-full max-[1100px]:pb-0">
          <h1 className="m-0 text-[#2d237d] font-heading text-[64px] font-bold leading-[1.06] tracking-[-1.8px] max-[1500px]:text-[54px] max-sm:text-[40px]">The Finest of Baker's Tik Tok Community Recipes</h1>
          <p className="max-w-[900px] mt-[26px] text-[#2d237d] font-heading text-[34px] leading-[1.32] tracking-[-0.6px] max-[1500px]:text-[28px] max-sm:text-[22px] max-sm:mt-[18px]">
            Forget Chimodho, here's a better recipe that makes use of those same ingredients #Chimodho #Local #Baker's_Inn
          </p>
          <p className="mt-[30px] text-gold font-heading text-[44px] font-bold leading-[1.1] tracking-[-0.8px] max-[1500px]:text-[38px] max-sm:text-[28px] max-sm:mt-[22px]">@The_Bakers_Inn</p>
        </div>
        <div className="grid grid-cols-2 gap-[14px] self-start max-[1100px]:w-[min(100%,780px)] max-[1100px]:mx-auto max-sm:gap-[10px]">
          <div className="h-[424px] overflow-hidden max-[1500px]:h-[360px] max-sm:h-[210px]"><img src="/asset/factory bread.png" alt="" className="block w-full h-full object-cover rounded-[8px]" /></div>
          <div className="h-[424px] overflow-hidden max-[1500px]:h-[360px] max-sm:h-[210px]"><img src="/asset/contactstore.png" alt="" className="block w-full h-full object-cover rounded-[8px]" /></div>
          <div className="h-[258px] overflow-hidden max-[1500px]:h-[220px] max-sm:h-[150px]"><img src="/asset/cream.png" alt="" className="block w-full h-full object-cover rounded-[8px]" /></div>
          <div className="h-[258px] overflow-hidden max-[1500px]:h-[220px] max-sm:h-[150px]"><img src="/asset/groupheader bread.png" alt="" className="block w-full h-full object-cover rounded-[8px]" /></div>
        </div>
      </section>

      <section className="px-[64px] pt-[34px] pb-[76px] max-md:px-[24px] max-sm:px-[20px] max-sm:pt-[20px] max-sm:pb-[40px]">
        <h2 className="m-0 text-[#2d237d] text-center font-heading text-[66px] font-bold leading-[1.04] tracking-[-1.6px] max-md:text-[56px] max-sm:text-[40px]">Baker's Recipes</h2>
        <div className="flex justify-center gap-[32px] mt-[28px] flex-wrap max-md:gap-[16px] max-md:mt-[16px]">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`relative text-[41px] font-heading font-bold leading-[1.05] tracking-[-0.8px] transition-colors bg-transparent border-none cursor-pointer max-md:text-[32px] max-sm:text-[24px] ${
                tab === t.key ? 'text-[#2d237d]' : 'text-[#9d91cb]'
              }`}
            >
              {t.label}
              {tab === t.key && <span className="absolute left-0 right-0 h-[13px] bottom-[-12px] rounded-[6px] bg-gold" />}
            </button>
          ))}
        </div>
        <div className="relative w-full max-w-[1674px] h-[33px] mx-auto mt-[10px] max-md:h-[18px]">
          <span className="absolute left-0 right-0 top-[18px] h-[3px] bg-[#a38dc9] max-md:top-[8px]" />
        </div>

        {recipe && (
          <div className="grid grid-cols-3 gap-[39px] mt-[95px] px-[64px] max-md:grid-cols-2 max-md:gap-[26px] max-md:mt-[70px] max-md:px-0 max-sm:grid-cols-1 max-sm:gap-[24px] max-sm:mt-[42px]">
            {[1, 2, 3].map(i => (
              <article key={i} className="overflow-hidden rounded-[10px] bg-white shadow-[0_8px_26px_rgba(48,43,80,0.14)] max-w-[440px] mx-auto max-md:max-w-[400px] max-sm:max-w-full">
                <img src={recipe.image} alt={recipe.alt} className="block w-[calc(100%-18px)] h-[280px] mx-[9px] mt-[9px] object-cover rounded-[4px] max-md:h-[248px] max-sm:h-[220px]" />
                <div className="p-[18px_26px_30px] max-md:p-[16px_18px_24px]">
                  <h3 className="m-0 text-[#2d237d] font-heading text-[38px] font-bold leading-[1.08] tracking-[-0.8px] max-md:text-[32px] max-sm:text-[28px]">{recipe.title}</h3>
                  <p className="mt-[16px] text-[#23207d] font-heading text-[27px] leading-[1.16] max-md:text-[23px] max-sm:text-[20px]">Prep Time : <span className="text-gold">20 min</span></p>
                  <p className="mt-[16px] text-[#23207d] font-heading text-[27px] leading-[1.16] max-md:text-[23px] max-sm:text-[20px]">Serves : <span className="text-gold">6 people</span></p>
                  <a href="#" className="inline-flex items-center justify-center mt-[18px] w-[58px] h-[58px] rounded-full bg-gold text-white text-[42px] leading-none cursor-pointer max-md:w-[52px] max-md:h-[52px] max-md:text-[36px]" aria-label={`View ${recipe.title} recipe`}>&rarr;</a>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-[24px] mt-[56px] pb-[20px]">
          <Link to="/order" className="inline-block relative z-[2] w-[min(100%,508px)] px-[28px] py-[18px] pb-[19px] rounded-[4px] bg-primary text-white text-center font-heading text-[32px] font-bold leading-none cursor-pointer hover:bg-primary-dark transition-colors max-sm:w-full max-sm:text-[24px]">
            ORDER BAKERY PRODUCTS
          </Link>
        </div>
      </section>
    </main>
  )
}