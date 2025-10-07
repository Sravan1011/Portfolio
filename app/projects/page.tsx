import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Project, projects } from "@/types/project"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
        <h1 className="text-3xl font-bold mt-4">Projects</h1>
        <p className="text-muted-foreground mt-2">A collection of my recent work and contributions.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="border rounded-lg p-6 hover:bg-accent/50 transition-colors">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-muted-foreground mt-2">{project.description}</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                >
                  Live Demo
                </Link>
              )}
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline inline-flex items-center"
              >
                View Code
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
