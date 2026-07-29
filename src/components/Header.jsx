import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/about', label: 'About us' },
  { path: '/products', label: 'Products' },
  { path: '/recipes', label: 'Recipes' },
  { path: '/kids', label: "Kid's Corner" },
]

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className="flex items-center justify-between min-h-[129px] px-[49px] py-[23px] px-[79px] max-md:flex-wrap max-md:gap-[22px] max-md:min-h-0 max-md:p-[24px_28px_30px] max-sm:justify-center max-sm:p-[24px_20px_28px] border-t-4 border-[#3b2c36]">
      <Link to="/" className="inline-flex items-center flex-shrink-0" aria-label="Baker's Inn">
        <img src="/asset/bakersinnlogo.png" alt="Baker's Inn logo" className="w-[180px] h-auto" />
      </Link>

      <nav className="flex items-center gap-[34px] ml-auto mr-[28px] text-[#9f91cb] font-heading text-[22px] font-bold leading-none tracking-[-0.4px] max-md:order-3 max-md:w-full max-md:justify-center max-md:flex-wrap max-md:m-0 max-md:text-[24px] max-md:tracking-normal max-sm:gap-[16px] max-sm:text-[18px] max-sm:leading-[1.2]">
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`inline-block relative ${
              pathname === link.path ? 'text-[#2d237d] after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-6px] after:h-[4px] after:bg-[#bf9a4a] after:rounded-[2px]' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        to="/contact"
        className="w-[min(100%,230px)] px-[22px] py-[16px] rounded-[4px] bg-gold text-white text-center font-heading text-[22px] font-bold leading-none tracking-[-0.3px] max-md:ml-auto max-sm:w-full max-sm:max-w-[260px] max-sm:ml-0 max-sm:py-[18px] max-sm:text-[20px]"
      >
        Contact Us
      </Link>
    </header>
  )
}