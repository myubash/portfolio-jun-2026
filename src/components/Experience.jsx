import { useFadeUp } from '../hooks/useFadeUp'

const jobs = [
  {
    icon: '👑',
    role: 'Head of Technology',
    company: 'PT Star Karlo Indonesia',
    date: 'Jan 2024 — Present · Jakarta, Indonesia',
    current: true,
    desc: "Leading the entire technology function at Karlo, overseeing architecture, product infrastructure, and cross-functional team delivery. Driving engineering excellence across web development, AI initiatives, QA processes, and UI/UX design — ensuring the platform scales reliably to serve Indonesia's logistics industry at enterprise level.",
    teams: ['Web Development', 'Artificial Intelligence', 'Quality Assurance', 'UI/UX Design'],
  },
  {
    icon: '🚀',
    role: 'Lead Web Developer',
    company: 'PT Star Karlo Indonesia',
    date: 'Jan 2022 — Jan 2024 · Jakarta, Indonesia',
    desc: "Led the web development team building Karlo's logistics ecosystem. Architected full-stack solutions with MongoDB, React, Node.js, Express, and AWS. Drove code quality, team coordination, and cloud infrastructure to deliver a platform trusted by 3,000+ fleets.",
  },
  {
    icon: '⚡',
    role: 'Full-Stack Developer',
    company: 'PT Star Karlo Indonesia',
    date: 'Feb 2020 — Jan 2022 · Jakarta, Indonesia',
    desc: 'End-to-end development across the MERN stack, bridging frontend and backend to build robust, scalable web applications. Focused on performance, clean code, and continuous improvement as the platform grew.',
  },
  {
    icon: '🎓',
    role: 'QA Intern',
    company: 'transcosmos inc.',
    date: 'Sep 2014 — Nov 2014 · Yokohama, Japan',
    desc: 'Functional, regression, and usability testing. Executed test plans, documented results, and collaborated with development teams to resolve defects and improve software stability.',
  },
]

const education = [
  {
    icon: '📚',
    role: 'Fullstack Web Development',
    company: 'Purwadhika Digital Technology School',
    date: '2019',
  },
  {
    icon: '🏛️',
    role: "Bachelor's Degree — Telecommunications Engineering",
    company: 'Telkom University',
    date: '2011 — 2018',
  },
]

function TimelineItem({ item }) {
  return (
    <div className="flex gap-8 mb-8">
      {/* Dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-[14px] z-10 flex-shrink-0 ${
            item.current
              ? 'bg-gradient-to-br from-[#10B981] to-[#3B82F6] shadow-[0_0_0_4px_rgba(16,185,129,0.15)]'
              : 'bg-gradient-to-br from-[#3B82F6] to-[#6366F1]'
          }`}
        >
          {item.icon}
        </div>
      </div>

      {/* Card */}
      <div
        className={`flex-1 rounded-2xl p-6 border transition-colors duration-200 ${
          item.current
            ? 'bg-gradient-to-br from-[#10B981]/[0.05] to-[#3B82F6]/[0.05] border-[#10B981]/25 hover:border-[#10B981]/50'
            : 'bg-[#111827] border-white/[0.08] hover:border-[#3B82F6]/30'
        }`}
      >
        <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
          <div className="text-[17px] font-semibold">{item.role}</div>
          {item.current && (
            <span className="bg-[#10B981]/15 border border-[#10B981]/25 text-[#6EE7B7] rounded-full px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap">
              Current
            </span>
          )}
        </div>
        <div className="text-[14px] text-[#3B82F6] font-medium mb-1">
          {item.company}
        </div>
        <div className="text-[12px] text-[#94A3B8] mb-4">{item.date}</div>
        {item.desc && (
          <p className="text-[14px] text-[#94A3B8] leading-relaxed">
            {item.desc}
          </p>
        )}
        {item.teams && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.teams.map((t) => (
              <span
                key={t}
                className="bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#A5B4FC] rounded-lg px-2.5 py-1 text-[12px]"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  const header = useFadeUp()
  const timeline = useFadeUp()
  const eduHeader = useFadeUp()
  const eduTimeline = useFadeUp()

  return (
    <section id="experience" className="relative z-10 py-28">
      <div className="max-w-[1280px] mx-auto px-8">

        <div
          ref={header.ref}
          className={`transition-all duration-700 ${header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="block text-xs font-semibold tracking-[2px] uppercase text-[#3B82F6] mb-3">
            Experience
          </span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold tracking-tight mb-12">
            Career Timeline
          </h2>
        </div>

        {/* Timeline vertical line wrapper */}
        <div
          ref={timeline.ref}
          className={`relative transition-all duration-700 delay-150 ${timeline.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/[0.08]" />
          {jobs.map((job) => (
            <TimelineItem key={job.role + job.date} item={job} />
          ))}
        </div>

        {/* Education */}
        <div
          ref={eduHeader.ref}
          className={`mt-16 transition-all duration-700 ${eduHeader.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="block text-xs font-semibold tracking-[2px] uppercase text-[#3B82F6] mb-6">
            Education
          </span>
        </div>

        <div
          ref={eduTimeline.ref}
          className={`relative transition-all duration-700 delay-100 ${eduTimeline.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/[0.08]" />
          {education.map((edu) => (
            <TimelineItem key={edu.role} item={edu} />
          ))}
        </div>

      </div>
    </section>
  )
}
