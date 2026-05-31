import { useState, useEffect } from 'react'

const links = ['Work', 'Skills', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1120]/85 backdrop-blur-xl border-b border-white/[0.08]'
          : ''
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center">
        <a
          href="#hero"
          className="text-[18px] font-bold bg-gradient-to-r from-[#3B82F6] to-[#6366F1] bg-clip-text text-transparent"
        >
          MB.
        </a>
        <ul className="flex gap-8 list-none">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[#94A3B8] text-sm font-medium hover:text-[#F8FAFC] transition-colors duration-200"
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
