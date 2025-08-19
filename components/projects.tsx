const projects = [
    {
      title: "Pelvix",
      href: "https://pelvix.vercel.app",
      description: "AI for both text generation and image creation" ,
      icon: "🤖",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "AI-Driven_Task_Management ",
      href: "https://github.com/Sravan1011/AI-Driven_Task_Management",
      description: "A Machine Learning model that predicts the completion time of a task based on the task description and the user's previous task history.",
      icon: "💬",
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "AImathsolver",
      href: "https://github.com/Sravan1011/AImathsolver",
      description: "A Machine Learning model that solves math problems.",
      icon: "⚡",
      color: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      title: "OmniSight",
      href: "https://omnisight.in",
      description: "AI Pioneered Intelligent Crowd and Safety System",
      icon: "📄",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ]
  
  export function Projects() {
    return (
      <section id="projects" className="py-16 scroll-mt-24">
        <h2 className="text-xl font-medium text-gray-900 mb-8">projects</h2>
  
        <div className="space-y-6">
          {projects.map((project) => {
            const content = (
              <>
                <div
                  className={`w-10 h-10 ${project.color} rounded-lg flex items-center justify-center flex-shrink-0 project-icon`}
                >
                  <span className={`text-lg ${project.iconColor}`}>{project.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </>
            )
            return project.href ? (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 project-item rounded-md p-2 hover:bg-gray-50 transition"
              >
                {content}
              </a>
            ) : (
              <div key={project.title} className="flex items-start gap-4 project-item">
                {content}
              </div>
            )
          })}
        </div>
      </section>
    )
  }
  