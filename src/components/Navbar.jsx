import { useState, useEffect } from 'react'

const links = ['Work', 'Skills', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || menuOpen
        ? 'bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/[0.08]'
        : ''
    }`}>
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-[18px] font-bold bg-gradient-to-r from-[#3B82F6] to-[#6366F1] bg-clip-text text-transparent">
          MB.
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-[#94A3B8] text-sm font-medium hover:text-[#F8FAFC] transition-colors duration-200">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-[#94A3B8] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-[#94A3B8] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-[#94A3B8] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col px-6 pb-6 gap-1 list-none border-t border-white/[0.06] pt-4">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={handleLinkClick}
                className="block py-3 px-4 text-[#94A3B8] text-[15px] font-medium hover:text-[#F8FAFC] hover:bg-white/[0.04] rounded-xl transition-all duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
