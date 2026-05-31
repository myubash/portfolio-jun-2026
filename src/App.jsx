import { Analytics } from "@vercel/analytics/next"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0B1120] text-[#F8FAFC] font-sans overflow-x-hidden">
      <Analytics/>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
