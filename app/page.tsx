"use client";

import React from "react";
import { ChevronRight, Globe, Mail, Github, GitMerge, GitPullRequest } from "lucide-react";
import Image from "next/image";
export default function Portfolio() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-2xl mx-auto py-12 sm:py-24 px-6">

      {/* Hero Section */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <div className="flex">
                <span className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi,👋 I&apos;m Sravan
                </span>
              </div>
              <div className="flex">
                <span className="inline-block max-w-[600px] md:text-xl text-muted-foreground">
                  Building AI products and scaling them.
                </span>
              </div>
              <div>
                <a
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline transition-all mt-2"
                  href="mailto:samikshasy2908@gmail.com"
                >
                  <Mail className="size-4" />
                  sravan.avvaru@gmail.com

                </a>
              </div>
            </div>
            <div>
              <span className="relative flex shrink-0 overflow-hidden rounded-full size-32 sm:size-36 border flex-shrink-0">
                <Image src="/profile-avatar.jpg" alt="Sravan Profile Avatar" fill className="object-cover" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div>
          <h2 className="text-xl font-bold mb-4">About</h2>
        </div>
        <div>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <p>
              AI Product Engineer specializing in LLM applications, agentic systems, and full-stack development. I build intelligent products that combine AI reasoning, retrieval,
              automation, and modern web technologies. My interests span AI infrastructure, developer tooling, open source, and creating seamless user experiences powered by machine intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <div>
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>
          </div>

          <a className="block cursor-pointer" href="#">
            <div className="rounded-lg bg-card text-card-foreground flex">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted font-bold">
                    <Github className="size-6" />
                  </span>
                </span>
              </div>
              <div className="flex-grow ml-4 items-center flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                      Open Source Contributor
                      <span className="inline-flex gap-x-1"></span>
                      <ChevronRight className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                    </h3>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                      Present
                    </div>
                  </div>
                  <div className="font-sans text-xs">GitHub</div>
                </div>
                <div className="mt-2 text-xs sm:text-sm whitespace-pre-line text-muted-foreground">
                  • Actively contributing to various open-source projects on GitHub<br />
                  • Participating in developer communities and building public tools
                </div>
              </div>
            </div>
          </a>
          <a className="block cursor-pointer mt-4" href="#">
            <div className="rounded-lg bg-card text-card-foreground flex">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted">
                  <Image src="/open_specimen_logo.jpeg" alt="OpenSpecimen Logo" fill className="object-cover" />
                </span>
              </div>
              <div className="flex-grow ml-4 items-center flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                      OpenSpecimen
                      <span className="inline-flex gap-x-1"></span>
                      <ChevronRight className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                    </h3>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                      January 2026 - March 2026
                    </div>
                  </div>
                  <div className="font-sans text-xs">Product Engineering Intern</div>
                </div>
                <div className="mt-2 text-xs sm:text-sm whitespace-pre-line text-muted-foreground">
                  • Worked on the BioTrust platform a global registry for cancer research studies<br />
                  • Working on integration of Wren Ai with the existing platform<br />
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Open Source Contributions Section */}
      <section id="open-source">
        <div className="flex min-h-0 flex-col gap-y-3">
          <div>
            <h2 className="text-xl font-bold mb-4">Open Source Contributions</h2>
          </div>

          <a className="block cursor-pointer mt-4" href="https://github.com/usemoss/moss/pull/175" target="_blank">
            <div className="rounded-lg bg-card text-card-foreground flex">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted">
                  <Image src="/mossdev_logo.jpeg" alt="Moss Logo" fill className="object-cover" />
                </span>
              </div>
              <div className="flex-grow ml-4 items-center flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                      Moss
                      <span className="inline-flex gap-x-1"></span>
                      <ChevronRight className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                    </h3>
                  </div>
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground w-fit">
                    <GitMerge className="size-4 text-purple-500" />
                    <span className="font-medium text-purple-500">Merged</span>
                    <span>- Pull Request #175</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground w-fit">
                    <GitPullRequest className="size-4 text-green-500" />
                    <span className="font-medium text-green-500">Ongoing</span>
                    <span>- Pull Request #251</span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a className="block cursor-pointer mt-4" href="https://github.com/json-schema-org/website/pull/2397" target="_blank">
            <div className="rounded-lg bg-card text-card-foreground flex">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted">
                  <Image src="/json_schema.jpeg" alt="JSON Schema Logo" fill className="object-cover p-1" />
                </span>
              </div>
              <div className="flex-grow ml-4 items-center flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                      JSON Schema
                      <span className="inline-flex gap-x-1"></span>
                      <ChevronRight className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                    </h3>
                  </div>
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground w-fit">
                    <GitMerge className="size-4 text-purple-500" />
                    <span className="font-medium text-purple-500">Merged</span>
                    <span>- Pull Request #2397</span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a className="block cursor-pointer mt-4" href="https://github.com/mermaid-js/mermaid/pull/7814" target="_blank">
            <div className="rounded-lg bg-card text-card-foreground flex">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted">
                  <Image src="/mermaid_chart_logo.jpeg" alt="Mermaid Logo" fill className="object-cover" />
                </span>
              </div>
              <div className="flex-grow ml-4 items-center flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                      Mermaid
                      <span className="inline-flex gap-x-1"></span>
                      <ChevronRight className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                    </h3>
                  </div>
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground w-fit">
                    <GitPullRequest className="size-4 text-green-500" />
                    <span className="font-medium text-green-500">Ongoing</span>
                    <span>- Pull Request #7814</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <div>
            <h2 className="text-xl font-bold mb-4">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Python", "TypeScript", "JavaScript", "SQL",
              "FastAPI", "Flask", "Express.js", "Node.js", "REST APIs", "Webhooks",
              "PostgreSQL", "Supabase", "MongoDB", "Firebase",
              "Next.js", "React.js", "Tailwind CSS", "Shadcn UI",
              "LLMs (Gemini, ChatGPT)", "Agentic AI", "LangChain", "LangGraph", "TensorFlow", "OpenCV", "LightGBM", "Stable Diffusion", "NumPy", "Pandas"
            ].map((skill) => (
              <div key={skill}>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/80">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-medium">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of AI/ML projects, from memory systems to workflow automation platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
            {/* Project 1 */}
            <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
              <div className="flex flex-col px-4 pt-4">
                <div className="space-y-1">
                  <h3 className="font-semibold tracking-tight mt-1 text-base">ContextMemory</h3>
                  <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                    <p>A memory system for AI apps that builds context graphs from interactions. Extracts facts as connected semantic and episodic memories, enables intelligent retrieval.</p>
                  </div>
                </div>
              </div>
              <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-4">
                <div className="mt-2 flex flex-wrap gap-1">
                  {["Python", "OpenAI", "PostgreSQL", "RAG"].map((tag) => (
                    <div key={tag} className="inline-flex items-center rounded-md border font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center pt-4 px-4 pb-4">
                <div className="flex flex-row flex-wrap items-start gap-2">
                  <a target="_blank" href="#">
                    <div className="items-center rounded-md border font-semibold bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                      <Globe className="size-3" /> Website
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
              <div className="flex flex-col px-4 pt-4">
                <div className="space-y-1">
                  <h3 className="font-semibold tracking-tight mt-1 text-base">AIxAI</h3>
                  <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                    <p>MCP-powered system that generates Pydantic AI agents using multi-agent LangGraph workflows. Crawls and chunks docs, stores in Supabase.</p>
                  </div>
                </div>
              </div>
              <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-4">
                <div className="mt-2 flex flex-wrap gap-1">
                  {["Agentic AI", "LangGraph", "Supabase", "MCP"].map((tag) => (
                    <div key={tag} className="inline-flex items-center rounded-md border font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center pt-4 px-4 pb-4">
                <div className="flex flex-row flex-wrap items-start gap-2">
                  <a target="_blank" href="#">
                    <div className="items-center rounded-md border font-semibold bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                      <Globe className="size-3" /> Source
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-medium">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">I like building things</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Solving real-world problems with innovative tech, from IoT systems to blockchain applications.
                </p>
              </div>
            </div>
          </div>
          <div>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l border-border">
              <li className="relative ml-10 py-4">
                <div className="absolute -left-16 top-2 flex items-center justify-center bg-background rounded-full">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted font-bold">S</span>
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-start gap-1">
                  <time className="text-xs text-muted-foreground">August 25th - 26th, 2022</time>
                  <h2 className="font-semibold leading-none">Smart India Hackathon (SIH)</h2>
                  <p className="text-sm text-muted-foreground">India</p>
                  <span className="prose dark:prose-invert text-sm text-muted-foreground mt-2 block">
                    Represented 6-member team in designing IoT-based Sewage Problem Alert system, securing top finalist position among 30,000+ participating teams.
                  </span>
                </div>
              </li>
              <li className="relative ml-10 py-4">
                <div className="absolute -left-16 top-2 flex items-center justify-center bg-background rounded-full">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted font-bold">H</span>
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-start gap-1">
                  <time className="text-xs text-muted-foreground">March 3rd - 4th, 2023</time>
                  <h2 className="font-semibold leading-none">Hack JKLU</h2>
                  <p className="text-sm text-muted-foreground">India</p>
                  <span className="prose dark:prose-invert text-sm text-muted-foreground mt-2 block">
                    Conceptualised and prototyped Blockchain-based eVault system with 256-bit encryption, earning 3rd place recognition for innovation.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <div>
            <h2 className="text-xl font-bold mb-4">Education</h2>
          </div>
          <a className="block cursor-pointer" href="#">
            <div className="rounded-lg bg-card text-card-foreground flex">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted font-bold">U</span>
                </span>
              </div>
              <div className="flex-grow ml-4 items-center flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                      University Name
                      <span className="inline-flex gap-x-1"></span>
                    </h3>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                      2020 - 2024
                    </div>
                  </div>
                  <div className="font-sans text-xs">Bachelor of Technology in Computer Science</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
