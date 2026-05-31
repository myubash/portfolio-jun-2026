import { useFadeUp } from '../hooks/useFadeUp'

const jobs = [
  {
    icon: '👑', hot: true,
    role: 'Head of Technology', company: 'PT Star Karlo Indonesia',
    date: 'Jan 2024 — Present · Jakarta, Indonesia', current: true,
    desc: 'Leading the entire technology function — overseeing architecture decisions, platform infrastructure, and cross-functional delivery. Driving engineering excellence across all technical disciplines.',
    teams: ['Web Development', 'Artificial Intelligence', 'Quality Assurance', 'UI/UX Design'],
  },
  {
    icon: '🚀',
    role: 'Lead Web Developer', company: 'PT Star Karlo Indonesia',
    date: 'Jan 2022 — Jan 2024 · Jakarta, Indonesia',
    desc: 'Led a team of developers building and scaling the web platform. Defined technical standards, conducted code reviews, and architected solutions using MongoDB, React, Node.js, Express, and AWS.',
  },
  {
    icon: '⚡',
    role: 'Full-Stack Developer', company: 'PT Star Karlo Indonesia',
    date: 'Feb 2020 — Jan 2022 · Jakarta, Indonesia',
    desc: 'Built end-to-end features across the MERN stack. Owned both frontend interfaces and backend APIs, focusing on performance, reliability, and clean code as the product scaled.',
  },
  {
    icon: '🎓',
    role: 'QA Intern', company: 'transcosmos inc.',
    date: 'Sep 2014 — Nov 2014 · Yokohama, Japan',
    desc: 'Executed test plans, performed functional and regression testing, and worked with dev teams to resolve defects and ensure software quality.',
  },
]

const education = [
  { icon: '📚', role: 'Fullstack Web Development',                      company: 'Purwadhika Digital Technology School', date: '2019' },
  { icon: '🏛️', role: "Bachelor's Degree — Telecommunications Engineering", company: 'Telkom University',                   date: '2011 — 2018' },
]

function TimelineItem({ item }) {
  return (
    <div className="flex gap-4 sm:gap-8 mb-6 sm:mb-8">
      <div className="flex flex-col items-center">
        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[12px] sm:text-[14px] z-10 flex-shrink-0 ${
          item.hot
            ? 'bg-gradient-to-br from-[#10B981] to-[#3B82F6] shadow-[0_0_0_4px_rgba(16,185,129,0.15)]'
            : 'bg-gradient-to-br from-[#3B82F6] to-[#6366F1]'
        }`}>
          {item.icon}
        </div>
      </div>
      <div className={`flex-1 rounded-xl sm:rounded-2xl p-4 sm:p-6 border transition-colors duration-200 ${
        item.hot
          ? 'bg-gradient-to-br from-[#10B981]/[0.04] to-[#3B82F6]/[0.04] border-[#10B981]/25 hover:border-[#10B981]/50'
          : 'bg-[#111827] border-white/[0.08] hover:border-[#3B82F6]/30'
      }`}>
        <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
          <div className="text-[14px] sm:text-[17px] font-semibold leading-snug">{item.role}</div>
          {item.current && (
            <span className="bg-[#10B981]/15 border border-[#10B981]/25 text-[#6EE7B7] rounded-full px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold whitespace-nowrap flex-shrink-0">
              Current
            </span>
          )}
        </div>
        <div className="text-[12px] sm:text-[14px] text-[#3B82F6] font-medium mb-1">{item.company}</div>
        <div className="text-[11px] sm:text-[12px] text-[#94A3B8] mb-3">{item.date}</div>
        {item.desc && <p className="text-[12px] sm:text-[14px] text-[#94A3B8] leading-relaxed">{item.desc}</p>}
        {item.teams && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
            {item.teams.map((t) => (
              <span key={t} className="bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#A5B4FC] rounded-lg px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[12px]">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  const header      = useFadeUp()
  const timeline    = useFadeUp()
  const eduHeader   = useFadeUp()
  const eduTimeline = useFadeUp()

  return (
    <section id="experience" className="relative z-10 py-20 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">

        <div ref={header.ref} className={`transition-all duration-700 ${header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="block text-xs font-semibold tracking-[2px] uppercase text-[#3B82F6] mb-3">Experience</span>
          <h2 className="text-[clamp(26px,3.5vw,40px)] font-bold tracking-tight mb-8 sm:mb-12">Career Timeline</h2>
        </div>

        <div ref={timeline.ref} className={`relative transition-all duration-700 delay-150 ${timeline.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-white/[0.08]" />
          {jobs.map((job) => <TimelineItem key={job.role + job.date} item={job} />)}
        </div>

        <div ref={eduHeader.ref} className={`mt-12 sm:mt-16 transition-all duration-700 ${eduHeader.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="block text-xs font-semibold tracking-[2px] uppercase text-[#3B82F6] mb-5">Education</span>
        </div>

        <div ref={eduTimeline.ref} className={`relative transition-all duration-700 delay-100 ${eduTimeline.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-white/[0.08]" />
          {education.map((edu) => <TimelineItem key={edu.role} item={edu} />)}
        </div>
      </div>
    </section>
  )
}
