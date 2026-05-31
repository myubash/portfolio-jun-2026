import { useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

import orderPlanner from '../assets/order_planner.png'
import routing from '../assets/routing.png'
import dashboard from '../assets/dashboard.png'
import assignDriver from '../assets/assign_driver.png'

const tabs = [
  {
    label: '🗺️ Order Planner',
    img: orderPlanner,
    badge: 'K-Fleet · Planner',
    title: 'Live Order Planner with Map',
    desc: 'Real-time fleet positions across Java with integrated order management — built with Web GIS & WebSocket',
  },
  {
    label: '🛣️ Route Planning',
    img: routing,
    badge: 'K-Fleet · Routing',
    title: 'Port-to-Port Route Planning',
    desc: 'Dynamic route calculation with sea crossing support, toll inclusion, and multi-stop waypoints',
  },
  {
    label: '📊 Dashboard',
    img: dashboard,
    badge: 'K-Fleet · Insight',
    title: 'Transporter Analytics Dashboard',
    desc: 'Order monitoring, shipment analytics by tonnage, and fleet status — all in one view',
  },
  {
    label: '🚚 Driver Assignment',
    img: assignDriver,
    badge: 'K-Fleet · Operations',
    title: 'Driver Assignment Flow',
    desc: 'Assign drivers to orders with full shipment context — route, tonnage, pricing, and fleet recommendation',
  },
]

const tags = [
  { label: 'React',      color: 'blue' },
  { label: 'Node.js',    color: 'blue' },
  { label: 'MongoDB',    color: 'blue' },
  { label: 'Express',    color: 'blue' },
  { label: 'AWS',        color: 'green' },
  { label: 'Next.js',    color: 'green' },
  { label: 'Web GIS',    color: 'green' },
  { label: 'WebSocket',  color: 'purple' },
  { label: 'REST API',   color: 'purple' },
]

const tagStyles = {
  blue:   'bg-[#3B82F6]/10 border-[#3B82F6]/20 text-[#93C5FD]',
  green:  'bg-[#10B981]/10 border-[#10B981]/20 text-[#6EE7B7]',
  purple: 'bg-[#6366F1]/10 border-[#6366F1]/20 text-[#A5B4FC]',
}

const meta = [
  'Architected from scratch',
  'Full-stack ownership',
  'Production since 2020',
  'Jakarta, Indonesia',
]

export default function Work() {
  const [active, setActive] = useState(0)
  const header = useFadeUp()
  const card = useFadeUp()

  return (
    <section id="work" className="relative z-10 py-28">
      <div className="max-w-[1280px] mx-auto px-8">

        <div ref={header.ref} className={`transition-all duration-700 ${header.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="block text-xs font-semibold tracking-[2px] uppercase text-[#3B82F6] mb-3">Featured Work</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold tracking-tight mb-4">What I've Shipped</h2>
          <p className="text-[17px] text-[#94A3B8] max-w-[560px]">
            A production enterprise platform I architected and built from the ground up — from database design to cloud deployment.
          </p>
        </div>

        <div ref={card.ref} className={`mt-12 transition-all duration-700 delay-150 ${card.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="bg-[#111827] border border-white/[0.08] rounded-[20px] overflow-hidden hover:-translate-y-1 hover:border-[#3B82F6]/40 hover:shadow-[0_20px_60px_rgba(59,130,246,0.08)] transition-all duration-300">

            {/* Header */}
            <div className="px-8 pt-8 pb-6 bg-gradient-to-r from-[#3B82F6]/[0.08] to-[#6366F1]/[0.08] border-b border-white/[0.08] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#6366F1] flex items-center justify-center text-[22px] flex-shrink-0">🚚</div>
              <div>
                <div className="text-[22px] font-bold">Karlo</div>
                <div className="text-[14px] text-[#94A3B8] mt-0.5">Logistics Ecosystem Platform · PT Star Karlo Indonesia</div>
              </div>
            </div>

            {/* Body */}
            <div className="px-8 py-8">
              <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-6">
                A full-stack logistics operating system I designed and built end-to-end — connecting shippers, transporters and drivers in real time. I owned the entire technical architecture: from MongoDB schema design and Node.js APIs to the React frontend, WebSocket-based live tracking, and AWS infrastructure.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((t) => (
                  <span key={t.label} className={`border rounded-full px-3 py-1 text-[12px] font-medium ${tagStyles[t.color]}`}>{t.label}</span>
                ))}
              </div>

              {/* Gallery tabs */}
              <div className="flex gap-0 border-b border-white/[0.08] overflow-x-auto scrollbar-none mb-0">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.label}
                    onClick={() => setActive(i)}
                    className={`flex-shrink-0 px-4 py-3 text-[13px] font-medium border-b-2 transition-all duration-200 whitespace-nowrap ${
                      active === i
                        ? 'text-[#F8FAFC] border-[#3B82F6]'
                        : 'text-[#94A3B8] border-transparent hover:text-[#F8FAFC]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Screenshot */}
              <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0d1117] relative mt-4">
                <img src={tabs[active].img} alt={tabs[active].title} className="w-full block" />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4" style={{background:'linear-gradient(transparent,rgba(11,17,32,0.95))'}}>
                  <span className="inline-flex items-center gap-1.5 bg-[#3B82F6]/20 border border-[#3B82F6]/30 rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-[#93C5FD] mb-1.5">
                    {tabs[active].badge}
                  </span>
                  <p className="text-[14px] font-semibold text-[#F8FAFC] mb-0.5">{tabs[active].title}</p>
                  <p className="text-[12px] text-[#94A3B8]">{tabs[active].desc}</p>
                </div>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 mt-6">
                {meta.map((m) => (
                  <span key={m} className="flex items-center gap-2 text-[13px] text-[#94A3B8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />{m}
                  </span>
                ))}
              </div>

              <a href="https://karlo.id" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#3B82F6] text-[14px] font-medium mt-5 hover:gap-3 transition-all duration-200">
                Visit karlo.id <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
