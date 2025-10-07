"use client"

import Link from "next/link"
import { Github, X, Twitter, Linkedin, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <nav className="flex justify-between items-center mb-20 md:mb-32">
        <Link href="/" className="text-xl font-mono hover:text-gray-400 transition-colors">
          sravan.avvaru
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/experience" className="text-gray-400 hover:text-white text-sm font-mono transition-colors">
            experience
          </Link>
          <Link href="/blogs" className="text-gray-400 hover:text-white text-sm font-mono transition-colors">
            blogs
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Hi, I&apos;m Sravan Avvaru<br />
          <span className="text-gray-400"> Full-stack developer & ML enthusiast</span>
        </h1>
        
        <p className="text-gray-400 text-lg mb-12 max-w-xl leading-relaxed">
          I build full-stack applications. Currently exploring on building AI-powered applications at the intersection of design and technology.
        </p>

        <div className="flex flex-wrap gap-4 mb-24">
          <a 
            href="https://github.com/Sravan1011" 
            target="github" 
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 border border-gray-800 rounded-full hover:bg-gray-900 transition-colors group"
          >
            <span>GitHub</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="https://www.linkedin.com/in/sravan-avvaru-b8543220b/" 
            target="linkedin" 
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 border border-gray-800 rounded-full hover:bg-gray-900 transition-colors group"
          >
            <span>LinkedIn</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
          href="https://x.com/Sravan1011" 
          target="twitter" 
          rel="noopener noreferrer"
          className="flex items-center px-6 py-3 border border-gray-800 rounded-full hover:bg-gray-900 transition-colors group"
          aria-label="Twitter"
          >
           <X className="h-4 w-4" />
           <span className="ml-2">Twitter</span>
           <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
        </div>
       <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a passionate full-stack developer with a strong interest in Generative AI. 
                I love building efficient, and impactful applications that solve real-world problems.
              </p>
              <p>
                With an  expertise in Full-Stack Development and a keen eye for design, I specialize in creating 
                seamless user experiences while writing clean, maintainable code under the hood.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring the latest in AI research, contributing to open-source projects, 
                or sharing my learnings with the developer community.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-12">
            <h2 className="text-gray-500 text-sm font-mono mb-6">RECENT WORK</h2>
            <div className="space-y-6">
              <ProjectItem 
                title="FuzzyHyper Boxes" 
                description="We are currently exploring fuzzyhyper box theory, aiming to generalize classical hyperbox models by incorporating fuzzy membership and uncertainty — preliminary experiments show promise in handling ambiguous data distributions"
                tags={["Python , Numpy , Matplotlib"]}
                link="https://colab.research.google.com/drive/1XYZQQ8Wr9Z-zXT4ozn6dNawv2V_vNiJP"
              />
              <div className="text-center pt-2">
                <Link 
                  href="/projects" 
                  className="text-blue-400 hover:text-blue-300 text-sm font-mono transition-colors group inline-flex items-center"
                >
                  Explore more of my work
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-32 mb-12 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Sravan Avvaru. All rights reserved.</p>
      </footer>
    </div>
  )
}

function ProjectItem({ title, description, tags, link }: { 
  title: string; 
  description: string; 
  tags: string[];
  link: string;
}) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 hover:bg-gray-900 rounded-lg transition-colors">
        <div>
          <h3 className="text-xl font-medium mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="text-gray-400">{description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, i) => (
              <span key={i} className="text-xs bg-gray-900 text-gray-400 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  )
}