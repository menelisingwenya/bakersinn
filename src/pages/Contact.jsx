import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <main className="contact-page-main pb-[56px]">
      <section className="relative w-[calc(100%-186px)] min-h-[530px] mx-auto overflow-hidden rounded-[8px] max-[1500px]:w-[calc(100%-84px)] max-[1500px]:min-h-[460px] max-md:w-[calc(100%-40px)] max-md:min-h-[390px] max-sm:w-[calc(100%-16px)] max-sm:min-h-[320px]" style={{ background: 'url(/asset/contactstore.png) center center / cover no-repeat' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.1) 52%, rgba(0,0,0,0.78) 100%)' }} />
        <div className="relative z-[1] flex items-end justify-between min-h-[530px] px-[38px] pb-[30px] max-md:min-h-[390px] max-md:px-[26px] max-md:pb-[22px] max-sm:min-h-[320px] max-sm:px-[20px] max-sm:pb-[18px]">
          <h1 className="m-0 text-white font-heading text-[54px] font-bold leading-none tracking-[-1.6px] max-md:text-[40px] max-sm:text-[34px]">Contact Us</h1>
          <a href="#contact-details" className="inline-flex items-center justify-center w-[72px] h-[72px] max-md:w-[60px] max-md:h-[60px] max-sm:w-[48px] max-sm:h-[48px]">
            <img src="/asset/OIP.webp" alt="" className="w-[54px] h-[54px] object-contain max-md:w-[46px] max-md:h-[46px] max-sm:w-[36px] max-sm:h-[36px]" />
          </a>
        </div>
      </section>

      <section className="px-[94px] pt-[72px] max-[1500px]:px-[42px] max-[1500px]:pt-[56px] max-md:px-[20px] max-md:pt-[40px]" id="contact-details">
        <div className="grid grid-cols-3 gap-[40px] max-md:grid-cols-1 max-md:max-w-[520px] max-md:mx-auto max-[1500px]:gap-[28px]">
          {[
            { icon: 'mdi:phone', title: 'Phone', lines: ['08080151', '08080152', '+263 242 751 481', '+263 242 710 334'] },
            { icon: 'mdi:email', title: 'Email', lines: ['marketing@bakersinnzim.com'] },
            { icon: 'mdi:map-marker', title: 'Address', lines: ['1 Sheperton Road,', 'Graniteside,', 'Harare,', 'Zimbabwe.'] },
          ].map((card, i) => (
            <article key={i} className="flex flex-col items-center text-center px-[32px] py-[48px] rounded-[8px] bg-[#f7f4e2] max-md:px-[24px] max-md:py-[36px] max-sm:px-[20px] max-sm:py-[28px] max-w-[400px] mx-auto">
              <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-[#cfab5c] max-sm:w-[80px] max-sm:h-[80px]">
                <iconify-icon icon={card.icon} className="text-[48px] text-white max-sm:text-[36px]" aria-hidden="true" />
              </div>
              <h2 className="mt-[24px] m-0 text-[#2d237d] font-heading text-[36px] font-bold leading-[1.05] tracking-[-0.8px] max-sm:text-[28px]">{card.title}</h2>
              {card.lines.map((line, j) => (
                <p key={j} className="mt-[10px] m-0 text-[#2d237d] font-heading text-[22px] leading-[1.45] tracking-[-0.2px] max-sm:text-[18px]">{line}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="px-[94px] pt-[72px] max-[1500px]:px-[42px] max-[1500px]:pt-[56px] max-md:px-[20px] max-md:pt-[40px]">
        <div className="px-[64px] py-[56px] rounded-[8px] bg-[#f7f4e2] max-md:px-[24px] max-md:py-[32px] max-sm:px-[16px] max-sm:py-[24px]">
          <div className="text-center">
            <h2 className="m-0 text-[#2d237d] font-heading text-[54px] font-bold leading-[1.04] tracking-[-1.4px] max-md:text-[36px] max-sm:text-[30px]">Get In Touch</h2>
            <p className="max-w-[720px] mx-auto mt-[16px] text-[#2d237d] font-heading text-[24px] leading-[1.5] tracking-[-0.3px] max-md:text-[18px] max-sm:text-[18px]">
              Have a question, feedback, or want to book a factory tour? Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>
          <form className="max-w-[860px] mx-auto mt-[40px]" method="POST" action="mailto:menelisingwenya7@gmail.com?subject=Contact%20from%20Website">
            <div className="grid grid-cols-2 gap-[28px] max-md:grid-cols-1">
              <div className="flex flex-col">
                <label htmlFor="contact-name" className="mb-[8px] text-[#2d237d] font-heading text-[20px] font-bold">Your Name</label>
                <input type="text" id="contact-name" name="name" required placeholder="Enter your name" className="w-full px-[20px] py-[16px] border-2 border-[#d4c8a0] rounded-[6px] bg-white text-[#2d237d] font-body text-[18px] outline-none focus:border-gold" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="contact-email" className="mb-[8px] text-[#2d237d] font-heading text-[20px] font-bold">Your Email</label>
                <input type="email" id="contact-email" name="email" required placeholder="Enter your email" className="w-full px-[20px] py-[16px] border-2 border-[#d4c8a0] rounded-[6px] bg-white text-[#2d237d] font-body text-[18px] outline-none focus:border-gold" />
              </div>
            </div>
            <div className="flex flex-col mt-[24px]">
              <label htmlFor="contact-subject" className="mb-[8px] text-[#2d237d] font-heading text-[20px] font-bold">Subject</label>
              <input type="text" id="contact-subject" name="subject" required placeholder="How can we help you?" className="w-full px-[20px] py-[16px] border-2 border-[#d4c8a0] rounded-[6px] bg-white text-[#2d237d] font-body text-[18px] outline-none focus:border-gold" />
            </div>
            <div className="flex flex-col mt-[24px]">
              <label htmlFor="contact-message" className="mb-[8px] text-[#2d237d] font-heading text-[20px] font-bold">Message</label>
              <textarea id="contact-message" name="message" required placeholder="Write your message here..." rows="6" className="w-full px-[20px] py-[16px] border-2 border-[#d4c8a0] rounded-[6px] bg-white text-[#2d237d] font-body text-[18px] outline-none focus:border-gold resize-vertical min-h-[160px]"></textarea>
            </div>
            <button type="submit" className="block w-[min(100%,320px)] mx-auto mt-[32px] px-[28px] py-[18px] border-none rounded-[4px] bg-gold text-white text-center font-heading text-[26px] font-bold cursor-pointer hover:bg-[#a8843a] transition-colors">Send Message</button>
          </form>
        </div>
      </section>

      <section className="px-[94px] pt-[72px] text-center max-[1500px]:px-[42px] max-[1500px]:pt-[56px] max-md:px-[20px] max-md:pt-[40px]">
        <h2 className="m-0 text-[#2d237d] font-heading text-[54px] font-bold leading-[1.04] tracking-[-1.4px] max-md:text-[36px] max-sm:text-[30px]">Visit Our Stores</h2>
        <p className="max-w-[760px] mx-auto mt-[16px] text-[#2d237d] font-heading text-[24px] leading-[1.5] tracking-[-0.3px] max-md:text-[18px] max-sm:text-[18px]">
          Find a Baker's Inn store or retail outlet near you. We have a wide network of stores across Zimbabwe.
        </p>
        <div className="mt-[40px]">
          <img src="/asset/contactstore.png" alt="Baker's Inn store" className="block w-full max-w-[1000px] h-auto mx-auto rounded-[8px]" />
        </div>
      </section>
    </main>
  )
}