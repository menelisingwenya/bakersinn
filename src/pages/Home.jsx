import { Link } from 'react-router-dom'
import { recipeData, productData } from '../data/products'
import { useState } from 'react'

function RecipeSection() {
  const [tab, setTab] = useState('kids')
  const recipe = recipeData[tab]
  const tabs = [
    { key: 'kids', label: "For Kid's" },
    { key: 'vegans', label: 'For Vegans' },
    { key: 'family', label: 'For Family' },
  ]

  return (
    <section className="px-[64px] py-[6px] pb-[30px] bg-white max-md:px-[24px] max-sm:px-[20px] max-sm:py-[28px] max-sm:pb-[18px]">
      <h2 className="m-0 text-[#2d237d] text-center font-heading text-[66px] font-bold leading-[1.04] tracking-[-1.6px] max-md:text-[56px] max-sm:text-[40px]">Baker's Recipes</h2>
      <div className="flex justify-center gap-[32px] mt-[28px] flex-wrap">
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
      {recipe && (
        <div className="grid grid-cols-3 gap-[39px] mt-[95px] px-[64px] max-md:grid-cols-2 max-md:gap-[26px] max-md:mt-[70px] max-md:px-0 max-sm:grid-cols-1 max-sm:gap-[24px] max-sm:mt-[42px]">
          {[1, 2, 3].map(i => (
            <article key={i} className="overflow-hidden rounded-[10px] bg-white shadow-[0_8px_26px_rgba(48,43,80,0.14)] max-w-[440px] mx-auto max-md:max-w-[400px] max-sm:max-w-full">
              <img src={recipe.image} alt={recipe.alt} className="block w-[calc(100%-18px)] h-[280px] mx-[9px] mt-[9px] object-cover rounded-[4px] max-md:h-[248px] max-sm:h-[220px]" />
              <div className="p-[18px_26px_30px] max-md:p-[16px_18px_24px]">
                <h3 className="m-0 text-[#2d237d] font-heading text-[38px] font-bold leading-[1.08] tracking-[-0.8px] max-md:text-[32px] max-sm:text-[28px]">{recipe.title}</h3>
                <p className="mt-[16px] text-[#23207d] font-heading text-[27px] leading-[1.16] max-md:text-[23px] max-sm:text-[20px]">
                  Prep Time : <span className="text-gold">20 min</span>
                </p>
                <p className="mt-[16px] text-[#23207d] font-heading text-[27px] leading-[1.16] max-md:text-[23px] max-sm:text-[20px]">
                  Serves : <span className="text-gold">6 people</span>
                </p>
                <a href="#" className="inline-flex items-center justify-center mt-[18px] w-[58px] h-[58px] rounded-full bg-gold text-white text-[42px] leading-none cursor-pointer hover:bg-gold-dark transition-colors max-md:w-[52px] max-md:h-[52px] max-md:text-[36px]" aria-label={`View ${recipe.title} recipe`}>
                  &rarr;
                </a>
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
  )
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center gap-[22px] w-[calc(100%-186px)] min-h-[728px] mx-auto my-0 px-[72px] py-[77px] pb-[68px] overflow-hidden rounded-[9px_9px_0_0] bg-[#2f247d] max-[1500px]:w-[calc(100%-84px)] max-[1500px]:p-[64px_42px_56px] max-md:flex-col max-md:w-[calc(100%-40px)] max-md:p-[46px_26px_38px] max-sm:w-[calc(100%-16px)] max-sm:p-[30px_16px_24px]">
        <div className="absolute inset-0 opacity-16 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 0 76px, rgba(117,97,179,0.52) 76px 80px, transparent 80px 152px),
            linear-gradient(0deg, transparent 0 76px, rgba(117,97,179,0.45) 76px 80px, transparent 80px 152px),
            radial-gradient(circle at 20px 20px, transparent 0 16px, rgba(117,97,179,0.45) 16px 20px, transparent 20px 100%),
            repeating-linear-gradient(45deg, rgba(117,97,179,0.4) 0 6px, transparent 6px 16px)
          `,
          backgroundSize: '152px 152px, 152px 152px, 152px 152px, 232px 232px',
          backgroundPosition: '0 0, 0 0, 0 0, 38px 16px'
        }} />
        <div className="relative z-[1] flex-[0_0_36%] max-w-[520px] pt-[18px] max-md:max-w-none max-md:w-full">
          <h1 className="m-0 text-white text-[58px] font-[800] leading-[1.09] tracking-[-1.8px] max-[1500px]:text-[48px] max-md:text-[42px] max-sm:text-[38px] max-sm:leading-[1.14]">
            Bringing you the
            <span className="block">best value at the</span>
            <span className="block underline decoration-[#c4a24b] decoration-[6px] underline-offset-[4px]">best prices.</span>
          </h1>
          <p className="mt-[27px] m-0 text-white text-[32px] font-[500] leading-[1.48] tracking-[-0.5px] max-[1500px]:text-[27px] max-md:text-[23px] max-sm:text-[21px] max-sm:leading-[1.5]">
            The freshest sandwiches you can make with Baker's inn soft white loaf.
          </p>
          <Link to="/about" className="inline-block relative z-[2] mt-[26px] w-[min(100%,325px)] px-[28px] py-[21px] pb-[20px] rounded-[4px] bg-[#c19d4b] text-white text-center text-[30px] font-bold cursor-pointer max-sm:w-full max-sm:text-[24px]">
            READ MORE
          </Link>
        </div>
        <div className="relative z-[1] flex items-end justify-end flex-1 min-h-full pt-[34px] max-md:w-full max-md:justify-center max-md:pt-[14px]">
          <img src="/asset/groupheader bread.png" alt="Baker's Inn bread range" className="block w-full max-w-[860px] h-auto max-sm:max-w-full" />
        </div>
      </section>

      {/* About Section */}
      <section className="px-[109px] py-[110px] pb-[58px] bg-white max-[1500px]:px-[52px] max-[1500px]:py-[88px] max-[1500px]:pb-[48px] max-md:px-[24px] max-sm:px-[20px] max-sm:py-[54px] max-sm:pb-[34px]">
        <div className="grid grid-cols-[1.03fr_1.6fr] items-start gap-x-[100px] max-md:grid-cols-1 max-md:gap-y-[28px]">
          <h2 className="m-0 text-[#2d237d] font-heading text-[62px] font-bold leading-[1.05] tracking-[-1.6px] max-[1500px]:text-[50px] max-md:text-[40px]">About Baker's Inn</h2>
          <div className="max-w-[960px]">
            <p className="m-0 text-[#2f247d] font-heading text-[34px] leading-[1.47] tracking-[-0.6px] max-[1500px]:text-[28px] max-md:text-[22px] max-sm:text-[22px] max-sm:leading-[1.45]">
              It all started in the eighties when Baker's Inn was just a small confectionery company that employed 40 people and produced about 30,000 loaves a day. We now aim to provide a nourishing, convinient and accessible answer to hunger's call.
            </p>
            <Link to="/about" className="inline-block relative z-[2] w-[min(100%,320px)] mt-[24px] px-[28px] py-[19px] pb-[20px] rounded-[4px] bg-gold text-white text-center font-heading text-[33px] font-bold leading-none cursor-pointer max-sm:w-full max-sm:text-[24px]">
              READ MORE
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[73px] mt-[96px] max-md:grid-cols-2 max-md:gap-[30px] max-md:mt-[72px] max-sm:grid-cols-1 max-sm:gap-[24px] max-sm:mt-[48px]">
          {['/asset/sandwich.png', '/asset/pie.png', '/asset/doughnut tea.png', '/asset/slices.png'].map((src, i) => (
            <img key={i} src={src} alt="" className="block w-full h-[290px] object-cover rounded-[4px] max-sm:h-auto" />
          ))}
        </div>
      </section>

      {/* Product Range */}
      <section className="px-[66px] py-[82px] pb-[58px] bg-white text-center max-[1500px]:px-[42px] max-[1500px]:py-[72px] max-[1500px]:pb-[48px] max-md:px-[24px] max-sm:px-[20px] max-sm:py-[54px] max-sm:pb-[34px]">
        <h2 className="m-0 text-[#2d237d] font-heading text-[58px] font-bold leading-[1.05] tracking-[-1.4px] max-[1500px]:text-[48px] max-md:text-[40px]">Our Product Range</h2>
        <div className="grid grid-cols-4 gap-[28px] mt-[78px] max-md:grid-cols-2 max-md:gap-[24px] max-md:mt-[56px] max-sm:grid-cols-1 max-sm:gap-[24px] max-sm:mt-[42px]">
          {['/asset/slices.png', '/asset/pie.png', '/asset/doughnut tea.png', '/asset/doughnut tea.png'].map((src, i) => (
            <img key={i} src={src} alt="" className="block w-full h-[360px] object-cover rounded-[4px] max-sm:h-auto max-[1500px]:h-[320px] max-md:h-auto" />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-[24px] mt-[49px]">
          <Link to="/products" className="inline-block relative z-[2] w-[min(100%,508px)] px-[28px] py-[18px] pb-[19px] rounded-[4px] bg-gold text-white text-center font-heading text-[32px] font-bold leading-none cursor-pointer max-sm:w-full max-sm:text-[24px]">
            VIEW COMPLETE RANGE
          </Link>
          <Link to="/order" className="inline-block relative z-[2] w-[min(100%,508px)] px-[28px] py-[18px] pb-[19px] rounded-[4px] bg-primary text-white text-center font-heading text-[32px] font-bold leading-none cursor-pointer hover:bg-primary-dark transition-colors max-sm:w-full max-sm:text-[24px]">
            ORDER ONLINE
          </Link>
        </div>
      </section>

      {/* Factory Tour */}
      <section className="grid grid-cols-[1fr_1.02fr] items-center gap-[72px] px-[94px] py-[90px] pb-[78px] bg-white max-[1500px]:gap-[40px] max-[1500px]:px-[42px] max-[1500px]:py-[72px] max-[1500px]:pb-[52px] max-md:grid-cols-1 max-md:px-[32px] max-md:py-[64px] max-md:pb-[48px] max-sm:px-[20px] max-sm:py-[54px] max-sm:pb-[34px]">
        <div className="max-w-[810px]">
          <h2 className="m-0 text-[#2d237d] font-heading text-[64px] font-bold leading-[1.02] tracking-[-1.5px] max-[1500px]:text-[52px] max-md:text-[40px]">Book A Factory Tour</h2>
          <p className="mt-[26px] m-0 text-[#2f247d] font-heading text-[28px] leading-[1.56] tracking-[-0.4px] max-[1500px]:text-[24px] max-md:text-[22px] max-sm:text-[22px] max-sm:leading-[1.48]">
            Keep on seeing how Baker's Inn products are made? Are you intrested in a feild trip day for your school's className? Get in touch with us to book a tour of our factory that is closest to you. Fill in the booking form and will get back to you.
          </p>
          <Link to="/contact" className="inline-block relative z-[2] w-[min(100%,410px)] mt-[28px] px-[28px] py-[18px] pb-[19px] rounded-[4px] bg-gold text-white text-center font-heading text-[28px] font-bold leading-none cursor-pointer max-sm:w-full max-sm:text-[24px]">
            BOOK FACTORY TOUR
          </Link>
        </div>
        <div className="flex justify-end max-md:justify-center">
          <img src="/asset/factory bread.png" alt="Bread loaves in factory" className="block w-full max-w-[715px] h-auto" />
        </div>
      </section>

      {/* Donation */}
      <section className="grid grid-cols-[1.02fr_1fr] items-center gap-[84px] px-[104px] py-[60px] pb-[76px] bg-white max-[1500px]:gap-[44px] max-[1500px]:px-[42px] max-[1500px]:py-[52px] max-[1500px]:pb-[56px] max-md:grid-cols-1 max-md:px-[32px] max-md:py-[48px] max-md:pb-[52px] max-sm:px-[20px] max-sm:py-[36px] max-sm:pb-[34px]">
        <div className="flex justify-start">
          <img src="/asset/donate .png" alt="People packing donation supplies" className="block w-full max-w-[714px] h-auto" />
        </div>
        <div className="max-w-[790px]">
          <h2 className="m-0 text-[#2d237d] font-heading text-[60px] font-bold leading-[1.04] tracking-[-1.4px] max-[1500px]:text-[50px] max-md:text-[40px]">Request A Donation</h2>
          <p className="mt-[28px] m-0 text-[#2f247d] font-heading text-[28px] leading-[1.55] tracking-[-0.4px] max-[1500px]:text-[24px] max-md:text-[22px] max-sm:text-[22px] max-sm:leading-[1.48]">
            If you are holding an event that you wish to have us donate to we're more than glad to help. Fill in the donation form for us to best understand how we can increase your event's impact in the local community.
          </p>
          <Link to="/donation" className="inline-block relative z-[2] w-[min(100%,410px)] mt-[28px] px-[28px] py-[18px] pb-[19px] rounded-[4px] bg-gold text-white text-center font-heading text-[28px] font-bold leading-none cursor-pointer max-sm:w-full max-sm:text-[24px]">
            REQUEST DONATION
          </Link>
        </div>
      </section>

      {/* Kid's Corner */}
      <section className="relative grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-center mx-[93px] mt-[26px] min-h-[752px] pr-[44px] overflow-hidden rounded-[8px] shadow-[0_16px_38px_rgba(30,20,88,0.12)] max-[1500px]:mx-[42px] max-[1500px]:min-h-[626px] max-[1500px]:pr-[24px] max-md:grid-cols-1 max-md:mx-[20px] max-md:mt-[24px] max-md:p-0 max-sm:mx-[16px] max-sm:min-h-0" style={{
        background: 'radial-gradient(circle at 73% 34%, rgba(92,72,204,0.32), transparent 32%), radial-gradient(circle at 18% 56%, rgba(34,23,91,0.68), transparent 34%), linear-gradient(135deg, #342487 0%, #2c2078 58%, #2a1f73 100%)'
      }}>
        <div className="absolute inset-0 opacity-9 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 0 76px, rgba(123,103,200,0.72) 76px 80px, transparent 80px 152px),
            linear-gradient(0deg, transparent 0 76px, rgba(123,103,200,0.56) 76px 80px, transparent 80px 152px),
            radial-gradient(circle at 20px 20px, transparent 0 16px, rgba(123,103,200,0.56) 16px 20px, transparent 20px 100%),
            repeating-linear-gradient(45deg, rgba(123,103,200,0.34) 0 6px, transparent 6px 16px)
          `,
          backgroundSize: '152px 152px, 152px 152px, 152px 152px, 232px 232px',
          backgroundPosition: '0 0, 0 0, 0 0, 38px 16px'
        }} />
        <div className="relative z-[2] flex items-end justify-start h-full overflow-visible max-md:justify-center max-md:pt-[18px]">
          <img src="/asset/mariofinal.png" alt="Kid's Corner character art" className="block w-full max-w-[760px] ml-[-110px] mb-[-38px] drop-shadow-[0_16px_24px_rgba(10,8,41,0.2)] max-[1500px]:max-w-[650px] max-[1500px]:ml-[-86px] max-[1500px]:mb-[-28px] max-md:max-w-[580px] max-md:ml-[-24px] max-md:mb-[-22px] max-sm:max-w-[470px] max-sm:ml-0 max-sm:max-w-[360px]" />
        </div>
        <div className="relative z-[2] flex flex-col items-center justify-center px-[74px] py-[34px] pl-[12px] text-center max-[1500px]:px-[34px] max-[1500px]:py-[28px] max-[1500px]:pl-[8px] max-md:px-[28px] max-md:py-[4px] max-md:pb-[38px] max-sm:px-[24px] max-sm:pb-[34px]">
          <div className="w-full max-w-[620px] text-white font-cabin font-bold leading-[0.92]" style={{ textShadow: '0 2px 0 rgba(255,255,255,0.1), 0 0 1px rgba(255,255,255,0.6), 2px 2px 0 rgba(255,255,255,0.22)' }}>
            <span className="block text-[98px] tracking-[0.2px] max-[1500px]:text-[76px] max-md:text-[64px] max-sm:text-[52px] max-sm:text-[48px]">Kid's</span>
            <span className="block mt-[8px] text-[102px] tracking-[0.2px] max-[1500px]:text-[80px] max-md:text-[68px] max-sm:text-[54px] max-sm:text-[50px]">Corner</span>
          </div>
          <p className="max-w-[580px] mt-[24px] m-0 text-[rgba(255,255,255,0.94)] font-body text-[18px] font-[500] leading-[1.9] max-[1500px]:max-w-[500px] max-[1500px]:text-[16px] max-sm:text-[15px] max-sm:leading-[1.7]">
            let your children join the fun. Explore a place with exciting games and the top winners stand a chance to win exciting monthly prices!
          </p>
          <Link to="/kids" className="inline-flex items-center justify-center relative z-[3] w-[min(100%,248px)] mt-[28px] px-[26px] py-[18px] rounded-[12px] text-white text-center font-body text-[22px] font-bold leading-[1.45] tracking-[0.08em] uppercase cursor-pointer transition-all hover:scale-[1.03] max-sm:w-full max-sm:max-w-[220px] max-sm:text-[18px]" style={{
            background: 'linear-gradient(180deg, #ff2117 0%, #ef180e 100%)',
            boxShadow: '0 14px 28px rgba(255,23,13,0.24)'
          }}>
            PLAY<br />GAMES
          </Link>
        </div>
      </section>

      {/* Recipes */}
      <RecipeSection />

      {/* Promo Signup */}
      <section className="relative grid grid-cols-[minmax(0,0.64fr)_minmax(0,0.36fr)] items-center gap-[20px] mx-[51px] mt-[56px] px-[64px] py-[52px] pb-[42px] overflow-hidden rounded-[9px] bg-[#c09a4b] max-[1500px]:mx-[42px] max-[1500px]:px-[38px] max-[1500px]:py-[42px] max-[1500px]:pb-[34px] max-md:grid-cols-1 max-md:mx-[20px] max-md:gap-[18px] max-sm:mx-[16px] max-sm:px-[20px] max-sm:py-[32px] max-sm:pb-[26px]">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 0 76px, rgba(232,211,146,0.68) 76px 80px, transparent 80px 152px),
            linear-gradient(0deg, transparent 0 76px, rgba(232,211,146,0.5) 76px 80px, transparent 80px 152px),
            radial-gradient(circle at 20px 20px, transparent 0 16px, rgba(232,211,146,0.54) 16px 20px, transparent 20px 100%),
            repeating-linear-gradient(45deg, rgba(232,211,146,0.34) 0 6px, transparent 6px 16px)
          `,
          backgroundSize: '152px 152px, 152px 152px, 152px 152px, 232px 232px',
          backgroundPosition: '0 0, 0 0, 0 0, 38px 16px'
        }} />
        <div className="relative z-[1]">
          <h2 className="m-0 text-white font-heading text-[63px] font-bold leading-[1.14] tracking-[-1.4px] max-[1500px]:text-[52px] max-md:text-[40px] max-sm:text-[40px] max-sm:leading-[1.2]">Get Notified About Promotions We Offer</h2>
          <form className="flex items-stretch max-w-[820px] mt-[18px] max-sm:flex-col max-sm:gap-[12px]">
            <input type="email" placeholder="your email" className="flex-1 min-w-0 h-[84px] px-[24px] border-none rounded-[4px_0_0_4px] bg-[rgba(227,197,129,0.72)] text-[#6d6f78] font-body text-[22px] font-[600] outline-none max-sm:w-full max-sm:h-[64px] max-sm:rounded-[4px] max-sm:text-[19px]" aria-label="your email" />
            <button type="submit" className="w-[min(292px,100%)] h-[84px] border-none rounded-[4px] ml-[-3px] relative z-[2] bg-primary text-white font-body text-[24px] font-bold cursor-pointer hover:bg-primary-dark transition-colors max-sm:w-full max-sm:h-[64px] max-sm:ml-0 max-sm:rounded-[4px] max-sm:text-[19px]">
              SUBMIT
            </button>
          </form>
        </div>
        <div className="relative z-[1] justify-self-end w-full max-w-[590px] h-[366px] translate-x-[28px] -translate-y-[46px] max-[1500px]:max-w-[470px] max-[1500px]:h-[310px] max-[1500px]:translate-x-[20px] max-[1500px]:-translate-y-[26px] max-md:justify-self-center max-md:max-w-[520px] max-md:w-full max-md:translate-x-0 max-md:translate-y-0 max-sm:h-[220px]" style={{ background: 'url(/asset/groupheader bread.png) no-repeat center top / contain' }} />
      </section>
    </main>
  )
}