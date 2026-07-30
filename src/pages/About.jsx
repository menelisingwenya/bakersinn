import { Link } from 'react-router-dom'

const coreValues = [
  { image: '/asset/teamwork.png', title: 'Teamwork', text: 'we set inspiring goals that we persue with passion, unity and focus. We support each other, build our strengths and ensure that every player in our team contributes fully.We play to win and realise that energy , communication and alignment bind us together.' },
  { image: '/asset/respect.png', title: 'Respect', text: 'We build self-esteem by treating each other fairly,communicating directly and respectfully. We have empathy discipline and build onour diversity as a source of strength, creativity and innovation.' },
  { image: '/asset/integrity.png', title: 'integrity', text: 'We uphold the highest professional and ethical standards.We guard the reputaion of our brands. Our promises are bankable.', lower: true },
  { image: '/asset/commitment.png', title: 'Commitment', text: 'We are accountable to our stakeholders and commit to deliver wat we promise. We translate plans into actions; strategies into achievements and tangible returns.' },
  { image: '/asset/cream.png', title: 'Excellence', text: 'We strive to be the best in our business. We improve all the time, In all aspects and passionately deliver at the highest level.We offer superior value and present our offering with pride.' },
]

export default function About() {
  return (
    <main className="page-about min-h-screen pb-[56px]">
      <section className="relative w-[calc(100%-186px)] min-h-[530px] mx-auto overflow-hidden rounded-[8px] max-[1500px]:w-[calc(100%-84px)] max-[1500px]:min-h-[460px] max-md:w-[calc(100%-40px)] max-md:min-h-[390px] max-sm:w-[calc(100%-16px)] max-sm:min-h-[320px] max-[560px]:min-h-[250px] max-[560px]:min-h-[220px]" style={{ background: 'url(/asset/factory bread.png) center center / cover no-repeat' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.1) 52%, rgba(0,0,0,0.78) 100%)' }} />
        <div className="relative z-[1] flex items-end justify-between min-h-[530px] px-[38px] pb-[30px] max-md:min-h-[390px] max-md:px-[26px] max-md:pb-[22px] max-sm:min-h-[320px] max-sm:px-[20px] max-sm:pb-[18px] max-[560px]:min-h-[250px] max-[560px]:px-[14px] max-[560px]:pb-[14px] max-[560px]:min-h-[220px]">
          <h1 className="m-0 text-white font-heading text-[54px] font-bold leading-none tracking-[-1.6px] max-md:text-[46px] max-sm:text-[38px] max-[560px]:text-[32px] max-[560px]:text-[28px]">About Us</h1>
          <Link to="/contact" className="inline-flex items-center justify-center w-[72px] h-[72px] max-md:w-[60px] max-md:h-[60px] max-sm:w-[48px] max-sm:h-[48px] max-[560px]:w-[48px] max-[560px]:h-[48px]">
            <img src="/asset/OIP.webp" alt="" className="w-[54px] h-[54px] object-contain max-md:w-[46px] max-md:h-[46px] max-sm:w-[36px] max-sm:h-[36px]" />
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-[94px] pt-[48px] max-[1500px]:px-[42px] max-md:px-[20px] max-sm:px-[16px]">
        <div className="grid grid-cols-2 gap-[56px] p-[64px_72px] rounded-[8px] bg-[#f7f4e2] max-md:grid-cols-1 max-md:gap-[30px] max-md:p-[34px_28px] max-sm:p-[28px_20px] max-[560px]:p-[24px_16px]">
          {[
            { icon: '/asset/groupheader bread.png', title: 'Our Mission', text: 'To sharpen our edge in the manufacture and marketing of quality baked products' },
            { icon: '/asset/ceo.png', title: 'Our Vision', text: 'To provide a nourishing, convinient and accessible answer to hunger\'s call' },
          ].map((item, i) => (
            <article key={i} className="flex items-center gap-[34px] max-md:gap-[24px] max-sm:flex-col max-sm:gap-[18px]">
              <div className="flex items-center justify-center w-[144px] h-[144px] flex-shrink-0 rounded-full bg-[#cfab5c] max-md:w-[118px] max-md:h-[118px] max-md:flex-shrink-0 max-sm:w-[96px] max-sm:h-[96px] max-[560px]:w-[96px] max-[560px]:h-[96px]">
                <img src={item.icon} alt="" className="w-[74px] h-[74px] object-contain max-md:w-[60px] max-md:h-[60px] max-sm:w-[50px] max-sm:h-[50px]" />
              </div>
              <div className="max-w-[420px]">
                <h2 className="m-0 text-[#2d237d] font-heading text-[44px] font-bold leading-[1.02] tracking-[-1.3px] max-md:text-[38px] max-sm:text-[32px] max-[560px]:text-[28px]">{item.title}</h2>
                <p className="mt-[18px] m-0 text-[#2d237d] font-heading text-[22px] leading-[1.45] tracking-[-0.2px] max-md:text-[22px] max-sm:text-[20px] max-[560px]:text-[18px]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="px-[90px] pt-[72px] max-[1500px]:px-[42px] max-md:px-[20px] max-sm:px-[16px] max-sm:pt-[36px]">
        <h2 className="m-0 text-[#2d237d] text-center font-heading text-[54px] font-bold leading-[1.04] tracking-[-1.6px] max-md:text-[44px] max-sm:text-[34px] max-[560px]:text-[30px]">Our Core Values</h2>
        <div className="grid grid-cols-3 gap-[54px] mt-[84px] max-md:grid-cols-1 max-md:gap-[42px] max-md:mt-[62px] max-sm:gap-[34px] max-sm:mt-[40px]">
          {coreValues.slice(0, 3).map((val, i) => (
            <article key={i} className="text-center max-w-[360px] mx-auto max-md:max-w-[330px]">
              <img src={val.image} alt={val.title} className="block w-full h-[350px] object-cover rounded-[8px] max-md:h-[300px] max-sm:h-[260px] max-[560px]:h-[220px]" />
              <h3 className={`mt-[26px] m-0 text-[#2d237d] font-heading text-[42px] font-bold leading-[1.02] tracking-[-1.2px] max-md:text-[38px] max-sm:text-[32px] max-[560px]:text-[28px] ${val.lower ? 'lowercase' : ''}`}>{val.title}</h3>
              <p className="mt-[18px] mx-auto m-0 max-w-[470px] text-[#2d237d] font-heading text-[22px] leading-[1.45] tracking-[-0.2px] max-md:text-[22px] max-sm:text-[20px] max-[560px]:text-[18px]">{val.text}</p>
            </article>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-[54px] max-w-[1120px] mx-auto mt-[54px] max-md:grid-cols-1 max-md:gap-[42px] max-md:max-w-none max-sm:gap-[34px]">
          {coreValues.slice(3).map((val, i) => (
            <article key={i} className="text-center max-w-[360px] mx-auto max-md:max-w-[330px]">
              <img src={val.image} alt={val.title} className="block w-full h-[350px] object-cover rounded-[8px] max-md:h-[300px] max-sm:h-[260px] max-[560px]:h-[220px]" />
              <h3 className="mt-[26px] m-0 text-[#2d237d] font-heading text-[42px] font-bold leading-[1.02] tracking-[-1.2px] max-md:text-[38px] max-sm:text-[32px] max-[560px]:text-[28px]">{val.title}</h3>
              <p className="mt-[18px] mx-auto m-0 max-w-[470px] text-[#2d237d] font-heading text-[22px] leading-[1.45] tracking-[-0.2px] max-md:text-[22px] max-sm:text-[20px] max-[560px]:text-[18px]">{val.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Promise of Quality */}
      <section className="px-[94px] pt-[82px] max-[1500px]:px-[42px] max-md:px-[20px] max-sm:px-[16px] max-sm:pt-[42px]">
        <div className="grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-start gap-[72px] max-md:grid-cols-1 max-md:gap-[34px]">
          <div>
            <img src="/asset/ceo.png" alt="Chief executive officer" className="block w-full" />
          </div>
          <div>
            <h2 className="m-0 text-[#2d237d] font-heading text-[46px] font-bold leading-[1.04] tracking-[-1.5px] max-md:text-[44px] max-sm:text-[34px] max-[560px]:text-[30px]">Promise of quality</h2>
            <p className="mt-[24px] m-0 text-[#2d237d] font-heading text-[17px] leading-[1.12] tracking-[-0.2px] max-md:text-[20px] max-sm:text-[18px] max-[560px]:text-[17px]">
              Thank you for visiting our website. At baker's Inn, we are commited to delivering quality premium bread to our customers. We work with a team of over 1500 employees nationwide.Our aim is to uphold the highest ethical standards and perpectuate excellence in the delivery of our products. For us at baker's Inn, we aim to improve the accesibility of our bread. We are accountable to our stakeholders to deliver what we promise.
            </p>
            <p className="mt-[24px] m-0 text-[#2d237d] font-heading text-[17px] leading-[1.12] tracking-[-0.2px] max-md:text-[20px] max-sm:text-[18px] max-[560px]:text-[17px]">
              We translate plans into action; dreams into reality; strategies into achievements and tangible returns. We strive to be the best in our business and i our partnerships.We are committed to every retail outlet, tuckshop, vender and consumer in Zimbabwe. We have built our top quality brand and continue to grow as a company because of you. Thank you for your continues support of our brand.
            </p>
            <p className="mt-[24px] m-0 text-[#2d237d] font-heading text-[17px] leading-[1.12] tracking-[-0.2px] max-md:text-[20px] max-sm:text-[18px] max-[560px]:text-[17px]">
              We set inspiring goals we set with passion, unity and focus. We support each other, build on our strengths and ensure that every player in our team contributes fully. We play to win and realise that energy , communication and alignment bind us together.
            </p>
            <div className="flex items-end justify-end gap-[10px] mt-[22px] flex-wrap">
              <span className="text-[#2d237d] font-heading text-[40px] font-bold leading-none tracking-[-1px] max-md:text-[30px] max-[560px]:text-[26px]">C:E:O:</span>
              <img src="/asset/bakersinnlogo.png" alt="CEO signature" className="block w-[330px] max-w-full pb-[6px] border-b border-[#d1d5f6] max-[560px]:w-[220px] max-[560px]:w-[190px]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}