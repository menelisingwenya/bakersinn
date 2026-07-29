export default function Donation() {
  return (
    <main className="contact-page-main pb-[56px]">
      <section className="relative w-[calc(100%-186px)] min-h-[530px] mx-auto overflow-hidden rounded-[8px] max-[1500px]:w-[calc(100%-84px)] max-[1500px]:min-h-[460px] max-md:w-[calc(100%-40px)] max-md:min-h-[390px] max-sm:w-[calc(100%-16px)] max-sm:min-h-[320px]" style={{ background: 'url(/asset/contactstore.png) center center / cover no-repeat' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.1) 52%, rgba(0,0,0,0.78) 100%)' }} />
        <div className="relative z-[1] flex items-end justify-between min-h-[530px] px-[38px] pb-[30px] max-md:min-h-[390px] max-md:px-[26px] max-md:pb-[22px] max-sm:min-h-[320px] max-sm:px-[20px] max-sm:pb-[18px]">
          <h1 className="m-0 text-white font-heading text-[54px] font-bold leading-none tracking-[-1.6px] max-md:text-[40px] max-sm:text-[34px]">Request A Donation</h1>
          <a href="#donation-form" className="inline-flex items-center justify-center w-[72px] h-[72px] max-md:w-[60px] max-md:h-[60px] max-sm:w-[48px] max-sm:h-[48px]">
            <img src="/asset/OIP.webp" alt="" className="w-[54px] h-[54px] object-contain max-md:w-[46px] max-md:h-[46px] max-sm:w-[36px] max-sm:h-[36px]" />
          </a>
        </div>
      </section>

      <section className="px-[94px] pt-[72px] max-[1500px]:px-[42px] max-[1500px]:pt-[56px] max-md:px-[20px] max-md:pt-[40px]" id="donation-form">
        <div className="px-[64px] py-[56px] rounded-[8px] bg-[#f7f4e2] max-md:px-[24px] max-md:py-[32px] max-sm:px-[16px] max-sm:py-[24px]">
          <div className="text-center">
            <h2 className="m-0 text-[#2d237d] font-heading text-[54px] font-bold leading-[1.04] tracking-[-1.4px] max-md:text-[36px] max-sm:text-[30px]">Tell Us About Your Event</h2>
            <p className="max-w-[720px] mx-auto mt-[16px] text-[#2d237d] font-heading text-[24px] leading-[1.5] tracking-[-0.3px] max-md:text-[18px] max-sm:text-[18px]">
              We are happy to support community events and charitable causes. Please share your donation request details and our team will review it promptly.
            </p>
          </div>
          <form className="max-w-[860px] mx-auto mt-[40px]" method="POST" action="mailto:menelisingwenya7@gmail.com?subject=Donation%20Request">
            <div className="grid grid-cols-2 gap-[28px] max-md:grid-cols-1">
              <div className="flex flex-col">
                <label htmlFor="donation-name" className="mb-[8px] text-[#2d237d] font-heading text-[20px] font-bold">Your Name</label>
                <input type="text" id="donation-name" name="name" required placeholder="Enter your name" className="w-full px-[20px] py-[16px] border-2 border-[#d4c8a0] rounded-[6px] bg-white text-[#2d237d] font-body text-[18px] outline-none focus:border-gold" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="donation-email" className="mb-[8px] text-[#2d237d] font-heading text-[20px] font-bold">Your Email</label>
                <input type="email" id="donation-email" name="email" required placeholder="Enter your email" className="w-full px-[20px] py-[16px] border-2 border-[#d4c8a0] rounded-[6px] bg-white text-[#2d237d] font-body text-[18px] outline-none focus:border-gold" />
              </div>
            </div>
            <div className="flex flex-col mt-[24px]">
              <label htmlFor="donation-organization" className="mb-[8px] text-[#2d237d] font-heading text-[20px] font-bold">Organization / Event</label>
              <input type="text" id="donation-organization" name="organization" required placeholder="Enter organization or event name" className="w-full px-[20px] py-[16px] border-2 border-[#d4c8a0] rounded-[6px] bg-white text-[#2d237d] font-body text-[18px] outline-none focus:border-gold" />
            </div>
            <div className="flex flex-col mt-[24px]">
              <label htmlFor="donation-date" className="mb-[8px] text-[#2d237d] font-heading text-[20px] font-bold">Event Date</label>
              <input type="date" id="donation-date" name="event_date" required className="w-full px-[20px] py-[16px] border-2 border-[#d4c8a0] rounded-[6px] bg-white text-[#2d237d] font-body text-[18px] outline-none focus:border-gold" />
            </div>
            <div className="flex flex-col mt-[24px]">
              <label htmlFor="donation-message" className="mb-[8px] text-[#2d237d] font-heading text-[20px] font-bold">Request Details</label>
              <textarea id="donation-message" name="message" required placeholder="Describe your donation request and how it will help your community..." rows="6" className="w-full px-[20px] py-[16px] border-2 border-[#d4c8a0] rounded-[6px] bg-white text-[#2d237d] font-body text-[18px] outline-none focus:border-gold resize-vertical min-h-[160px]"></textarea>
            </div>
            <button type="submit" className="block w-[min(100%,320px)] mx-auto mt-[32px] px-[28px] py-[18px] border-none rounded-[4px] bg-gold text-white text-center font-heading text-[26px] font-bold cursor-pointer hover:bg-[#a8843a] transition-colors">Send Donation Request</button>
          </form>
        </div>
      </section>

      <section className="px-[94px] pt-[72px] text-center max-[1500px]:px-[42px] max-[1500px]:pt-[56px] max-md:px-[20px] max-md:pt-[40px]">
        <h2 className="m-0 text-[#2d237d] font-heading text-[54px] font-bold leading-[1.04] tracking-[-1.4px] max-md:text-[36px] max-sm:text-[30px]">Need Support?</h2>
        <p className="max-w-[760px] mx-auto mt-[16px] text-[#2d237d] font-heading text-[24px] leading-[1.5] tracking-[-0.3px] max-md:text-[18px] max-sm:text-[18px]">
          You can also reach us directly through our phone or email if you have urgent donation questions.
        </p>
        <div className="mt-[40px]">
          <img src="/asset/contactstore.png" alt="Baker's Inn donation support" className="block w-full max-w-[1000px] h-auto mx-auto rounded-[8px]" />
        </div>
      </section>
    </main>
  )
}