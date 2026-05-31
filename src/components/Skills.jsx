import { useFadeUp } from '../hooks/useFadeUp'

const skillGroups = [
  { title: 'Frontend',      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
  { title: 'Backend',       skills: ['Node.js', 'Express', 'REST APIs', 'WebSocket'] },
  { title: 'Database',      skills: ['MongoDB', 'Query Optimization', 'DB Administration', 'Data Modeling'] },
  { title: 'Cloud & Infra', skills: ['AWS', 'CI/CD', 'Deployment', 'Scaling'] },
  { title: 'Geospatial',    skills: ['Web GIS', 'Geomapid', 'Route Optimization', 'Map Integration'] },
  { title: 'Leadership',    skills: ['Team Lead', 'Code Review', 'Architecture', 'Cross-functional'] },
]

export default function Skills() {
  const header = useFadeUp()
  const grid   = useFadeUp()

  return (
    <section id="skills" className="relative z-10 py-20 sm:py-28 bg-[#111827] border-t border-b border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">

        <div ref={header.ref} className={`transition-all duration-700 ${header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="block text-xs font-semibold tracking-[2px] uppercase text-[#3B82F6] mb-3">Technical Skills</span>
          <h2 className="text-[clamp(26px,3.5vw,40px)] font-bold tracking-tight mb-3">What I Work With</h2>
          <p className="text-[15px] sm:text-[17px] text-[#94A3B8] max-w-[560px]">
            Six years deep in the MERN stack, with strong expertise in geospatial systems, cloud infrastructure, and database performance.
          </p>
        </div>

        <div ref={grid.ref} className={`mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 transition-all duration-700 delay-150 ${grid.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-[#0B1120] border border-white/[0.08] rounded-2xl p-4 sm:p-6">
              <div className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[1.5px] text-[#94A3B8] mb-3 sm:mb-4">{group.title}</div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="bg-white/[0.05] border border-white/[0.08] rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5 text-[12px] sm:text-[13px] text-[#F8FAFC] hover:border-white/20 transition-colors duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
