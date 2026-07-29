import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-[96px] bg-[#31237d] text-white px-[18px] pt-[18px] max-sm:mt-[56px]">
      <div className="footer-top">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-[34px] max-sm:grid-cols-1 max-sm:gap-[18px]">
          <span className="block h-[4px] bg-white"></span>
          <img src="/asset/footer logo.png" alt="Baker's Inn footer logo" className="w-[150px] h-auto max-sm:mx-auto max-sm:w-[112px]" />
          <span className="block h-[4px] bg-white max-sm:hidden"></span>
        </div>

        <div className="grid grid-cols-[1.7fr_0.58fr_0.94fr_0.46fr] gap-[56px] py-[98px] pb-[72px] max-[1500px]:gap-[32px] max-[1500px]:pt-[78px] max-[1180px]:grid-cols-2 max-md:grid-cols-1 max-md:py-[48px] max-md:pb-[38px]">
          <section>
            <h3 className="text-[32px] font-heading font-bold mb-[18px] leading-[1.1] max-md:text-[28px]">Instagram Feed</h3>
            <div className="flex gap-[36px] max-[1500px]:gap-[20px] max-md:flex-wrap">
              <img src="/asset/doughnut tea.png" alt="Instagram food post" className="w-[146px] h-[136px] object-cover max-[1500px]:w-[124px] max-[1500px]:h-[118px] max-md:w-[108px] max-md:h-[100px]" />
              <img src="/asset/sandwich.png" alt="Instagram food post" className="w-[146px] h-[136px] object-cover max-[1500px]:w-[124px] max-[1500px]:h-[118px] max-md:w-[108px] max-md:h-[100px]" />
              <img src="/asset/pie.png" alt="Instagram food post" className="w-[146px] h-[136px] object-cover max-[1500px]:w-[124px] max-[1500px]:h-[118px] max-md:w-[108px] max-md:h-[100px]" />
            </div>
          </section>

          <section>
            <h3 className="text-[32px] font-heading font-bold mb-[18px] leading-[1.1] max-md:text-[28px]">Our Location</h3>
            <p className="font-body text-[23px] leading-[1.42] m-0 max-[1500px]:text-[20px] max-md:text-[18px]">
              1 Sheperton Road,<br />Graniteside,<br />Harare,<br />Zimbabwe.
            </p>
          </section>

          <section>
            <h3 className="text-[32px] font-heading font-bold mb-[18px] leading-[1.1] max-md:text-[28px]">Get In Touch With Us</h3>
            <ul className="m-0 p-0 list-none">
              {[
                { icon: 'mdi:phone', text: '08080151' },
                { text: '08080152' },
                { text: '+263 242 751 481' },
                { text: '+263 242 710 334' },
                { icon: 'mdi:email', text: 'marketing@bakersinnzim.com' },
              ].map((item, i) => (
                <li key={i} className="flex items-start pl-[36px] relative font-body text-[23px] leading-[1.42] max-[1500px]:text-[20px] max-md:text-[18px]">
                  {item.icon && (
                    <span className="absolute left-0 top-[4px] text-[28px] text-[#c39e4f]">
                      <iconify-icon icon={item.icon} aria-hidden="true"></iconify-icon>
                    </span>
                  )}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </section>

          <nav className="flex flex-col" aria-label="Footer sitemap">
            <h3 className="text-[32px] font-heading font-bold mb-[18px] leading-[1.1] max-md:text-[28px]">Sitemap</h3>
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact Us' },
              { to: '/products', label: 'Products' },
              { to: '/recipes', label: 'Recipes' },
              { to: '/kids', label: "Kid's" },
              { to: '/order', label: 'Order' },
            ].map(link => (
              <Link key={link.to} to={link.to} className="text-[#bf9a4a] font-body text-[23px] leading-[1.42] hover:text-[#d9ae5a] transition-colors max-[1500px]:text-[20px] max-md:text-[18px]">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex items-center justify-between gap-[24px] px-[46px] py-[28px] pb-[16px] border-t-4 border-white max-[1180px]:flex-col max-[1180px]:items-start max-md:px-[20px] max-md:py-[22px]">
        <span className="font-body text-[24px] font-medium max-[1500px]:text-[20px] max-md:text-[18px]">
          subsidiary of <span className="ml-[4px] text-[22px] tracking-[0.03em] opacity-80 max-md:text-[18px]">INNSCOR</span>
        </span>
        <p className="m-0 font-body text-[23px] max-[1500px]:text-[20px] max-md:text-[18px]">
          Copyright &copy; 2022 Bakers Inn. Mock up site Developed by <a href="#" className="text-[#c39e4f]">Menelisi Ngwenya</a>
        </p>
      </div>
    </footer>
  )
}