import { useFadeUp } from '../hooks/useFadeUp'

const stats = [
  { num: '6+', label: 'Years of Experience' },
  { num: '4+', label: 'Teams Led' },
  { num: 'MERN', label: 'Full-Stack Specialist' },
]

export default function Hero() {
  const left = useFadeUp()
  const right = useFadeUp()
  const statsRef = useFadeUp()

  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div
            ref={left.ref}
            className={`transition-all duration-700 ${left.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/25 rounded-full px-4 py-1.5 text-[13px] text-[#3B82F6] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              Open to new opportunities
            </div>

            <h1 className="text-[clamp(42px,5vw,68px)] font-bold leading-[1.1] tracking-[-1.5px] mb-6">
              I build things
              <br />
              for the{' '}
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#10B981] bg-clip-text text-transparent">
                web.
              </span>
            </h1>

            <p className="text-[18px] text-[#94A3B8] max-w-[480px] mb-10 leading-relaxed">
              Full-stack engineer & Head of Technology with 6+ years of experience
              turning complex business problems into clean, scalable web applications.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a href="#work" className="px-7 py-3.5 rounded-xl text-[15px] font-semibold bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] transition-all duration-200">
                View My Work
              </a>
              <a href="#contact" className="px-7 py-3.5 rounded-xl text-[15px] font-medium border border-white/[0.08] text-[#F8FAFC] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-200">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Tech Graph */}
          <div
            ref={right.ref}
            className={`hidden lg:flex items-center justify-center transition-all duration-700 delay-150 ${right.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <svg viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[440px]">
              <defs>
                <radialGradient id="gc" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25"/><stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/></radialGradient>
                <radialGradient id="g1" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#10B981" stopOpacity="0.2"/><stop offset="100%" stopColor="#10B981" stopOpacity="0"/></radialGradient>
                <radialGradient id="g2" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#6366F1" stopOpacity="0.2"/><stop offset="100%" stopColor="#6366F1" stopOpacity="0"/></radialGradient>
                <radialGradient id="g3" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2"/><stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/></radialGradient>
                <radialGradient id="g4" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#EC4899" stopOpacity="0.2"/><stop offset="100%" stopColor="#EC4899" stopOpacity="0"/></radialGradient>
                <radialGradient id="g5" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2"/><stop offset="100%" stopColor="#06B6D4" stopOpacity="0"/></radialGradient>
              </defs>

              {/* glow halos */}
              <circle cx="210" cy="185" r="52" fill="url(#gc)"/>
              <circle cx="75"  cy="95"  r="36" fill="url(#g1)"/>
              <circle cx="345" cy="95"  r="36" fill="url(#g2)"/>
              <circle cx="75"  cy="275" r="36" fill="url(#g3)"/>
              <circle cx="345" cy="275" r="36" fill="url(#g1)"/>
              <circle cx="210" cy="42"  r="30" fill="url(#g4)"/>
              <circle cx="210" cy="338" r="30" fill="url(#g5)"/>

              {/* connector lines */}
              <line x1="210" y1="185" x2="75"  y2="95"  stroke="#10B981" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="5 4"/>
              <line x1="210" y1="185" x2="345" y2="95"  stroke="#6366F1" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="5 4"/>
              <line x1="210" y1="185" x2="75"  y2="275" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="5 4"/>
              <line x1="210" y1="185" x2="345" y2="275" stroke="#10B981" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="5 4"/>
              <line x1="210" y1="185" x2="210" y2="42"  stroke="#EC4899" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="5 4"/>
              <line x1="210" y1="185" x2="210" y2="338" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="5 4"/>
              <line x1="75"  y1="95"  x2="210" y2="42"  stroke="#3B82F6" strokeWidth="0.5" strokeOpacity="0.15"/>
              <line x1="345" y1="95"  x2="210" y2="42"  stroke="#3B82F6" strokeWidth="0.5" strokeOpacity="0.15"/>
              <line x1="75"  y1="275" x2="75"  y2="95"  stroke="#3B82F6" strokeWidth="0.5" strokeOpacity="0.12"/>
              <line x1="345" y1="275" x2="345" y2="95"  stroke="#3B82F6" strokeWidth="0.5" strokeOpacity="0.12"/>

              {/* center: Node.js */}
              <circle cx="210" cy="185" r="38" fill="#0d1117" stroke="#3B82F6" strokeWidth="1.5"/>
              <text x="210" y="180" textAnchor="middle" fill="#93C5FD" fontSize="11" fontWeight="700" fontFamily="monospace">Node.js</text>
              <text x="210" y="193" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="monospace">Express</text>
              <circle cx="210" cy="185" r="44" fill="none" stroke="#3B82F6" strokeWidth="0.6" strokeOpacity="0.35">
                <animate attributeName="r" values="38;52;38" dur="3s" repeatCount="indefinite"/>
                <animate attributeName="stroke-opacity" values="0.35;0;0.35" dur="3s" repeatCount="indefinite"/>
              </circle>

              {/* React */}
              <circle cx="75" cy="95" r="28" fill="#0d1117" stroke="#10B981" strokeWidth="1.5"/>
              <text x="75" y="91" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="700" fontFamily="monospace">React</text>
              <text x="75" y="103" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="monospace">Next.js</text>

              {/* MongoDB */}
              <circle cx="345" cy="95" r="28" fill="#0d1117" stroke="#6366F1" strokeWidth="1.5"/>
              <text x="345" y="91" textAnchor="middle" fill="#A5B4FC" fontSize="10" fontWeight="700" fontFamily="monospace">Mongo</text>
              <text x="345" y="103" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="monospace">DB</text>

              {/* AWS */}
              <circle cx="75" cy="275" r="28" fill="#0d1117" stroke="#F59E0B" strokeWidth="1.5"/>
              <text x="75" y="279" textAnchor="middle" fill="#FCD34D" fontSize="11" fontWeight="700" fontFamily="monospace">AWS</text>

              {/* Web GIS */}
              <circle cx="345" cy="275" r="28" fill="#0d1117" stroke="#10B981" strokeWidth="1.5"/>
              <text x="345" y="271" textAnchor="middle" fill="#6EE7B7" fontSize="9" fontWeight="700" fontFamily="monospace">Web</text>
              <text x="345" y="282" textAnchor="middle" fill="#6EE7B7" fontSize="9" fontWeight="700" fontFamily="monospace">GIS</text>

              {/* TypeScript */}
              <circle cx="210" cy="42" r="22" fill="#0d1117" stroke="#EC4899" strokeWidth="1.5"/>
              <text x="210" y="46" textAnchor="middle" fill="#F9A8D4" fontSize="10" fontWeight="700" fontFamily="monospace">TS</text>

              {/* WebSocket */}
              <circle cx="210" cy="338" r="22" fill="#0d1117" stroke="#06B6D4" strokeWidth="1.5"/>
              <text x="210" y="334" textAnchor="middle" fill="#67E8F9" fontSize="8" fontWeight="700" fontFamily="monospace">Web</text>
              <text x="210" y="345" textAnchor="middle" fill="#67E8F9" fontSize="8" fontWeight="700" fontFamily="monospace">Socket</text>
            </svg>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef.ref}
          className={`mt-16 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-700 delay-300 ${statsRef.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-[#111827] py-8 text-center">
              <div className="text-[40px] font-bold leading-none bg-gradient-to-r from-[#3B82F6] to-[#6366F1] bg-clip-text text-transparent mb-2">
                {s.num}
              </div>
              <div className="text-[14px] text-[#94A3B8]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
