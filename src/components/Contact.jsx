import { useFadeUp } from '../hooks/useFadeUp'

const links = [
  { href: 'mailto:myubash@gmail.com', icon: '✉️', label: 'myubash@gmail.com' },
  { href: 'https://linkedin.com/in/myubash', icon: '💼', label: 'LinkedIn', external: true },
]

export default function Contact() {
  const content = useFadeUp()

  return (
    <section id="contact" className="relative z-10 py-28 bg-[#111827] border-t border-b border-white/[0.08] text-center">
      <div className="max-w-[1280px] mx-auto px-8">
        <div ref={content.ref} className={`max-w-[640px] mx-auto transition-all duration-700 ${content.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="block text-xs font-semibold tracking-[2px] uppercase text-[#3B82F6] mb-3">Contact</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold tracking-tight mb-4">Let's Work Together</h2>
          <p className="text-[17px] text-[#94A3B8]">
            I'm open to new opportunities, interesting projects, or just a conversation about building things on the web.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mt-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-xl px-5 py-3 text-[14px] font-medium text-[#F8FAFC] hover:bg-[#3B82F6]/10 hover:border-[#3B82F6]/30 transition-all duration-200"
              >
                <span>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
