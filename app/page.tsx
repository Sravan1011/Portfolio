import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Work } from "@/components/work"


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Hero />
        <Projects />
        <Work />
      </div>
    </main>
  )
}