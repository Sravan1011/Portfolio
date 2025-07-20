import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, ExternalLink, X } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      title: "Vibe Radar",
      description: "Multiple LLMs Answers Opinion Based Questions.",
      image: "/Viberradar.png",
      tags: ["Next.js", "TypeScript", "Shadcn",  "OpenAI", "Gemini ","Mistral AI"],
      link: "https://github.com/Sravan1011/Vibe-Radar",
    },
    {
      title: "OmniSight",
      description: "AI Pioneered Intelligent Crowd and Safety System",
      image: "/OmniSight.png",
      tags: ["Nextjs", "Python", "TypeScript", "YoloV8", "OpenCV", "Flask",],
      link: "https://github.com/Sravan1011/OmniSight",
    },
    
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-teal-600">Sravan Avvaru</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#work" className="text-gray-600 hover:text-teal-600 transition-colors">
              Work
            </a>
            <a href="/blogs" className="text-gray-600 hover:text-teal-600 transition-colors">
              Blogs
            </a>
          </nav>
        </div>
      </header>

      {/* Hero/About Me Section */}
      <section id="about" className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">About Me</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                Hello 👋,
I am Sravan Avvaru. I am a 21 year old engineering student working on building SaaS & Gen  AI applications. I am building AI Agents and working on Computer Vision Applications too.
I like experimenting with side projects through different approaches and learning new technologies or even playing chess.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new design trends, learning finance
                 or enjoying a good cup of coffee while sketching new ideas.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <span className="inline-block w-10 h-10 rounded-full overflow-hidden ring-2 ring-teal-200">
                  <Image
                    src="/profile-avatar.jpg"
                    alt="Sravan Avvaru Avatar"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </span>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Linux", "Git"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          className="bg-gray-100 text-gray-700 border-gray-200 hover:bg-teal-100 hover:text-teal-700"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/profile-avatar.jpg"
                alt="Sravan Avvaru"
                width={160}
                height={160}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold mb-12 text-gray-900">Selected Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:shadow-teal-100 transition-all duration-300 bg-white border-gray-200 flex flex-col"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg bg-gray-100 flex items-center justify-center">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="flex-1">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-gray-900">{project.title}</CardTitle>
                    <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className="bg-teal-100 text-teal-700 border-teal-200 text-xs hover:bg-teal-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="contact" className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Contact Me</h3>
            <p className="text-lg text-gray-600 mb-8">
              Feel free to reach out for collaborations, project inquiries, or just to say hello!
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent">
                <a href="mailto:sravanavvaru1011@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent">
                <a href="https://drive.google.com/file/d/1GQeP_ws5PMw9at3Cys3_8ESdCpNAwa-H/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent">
                <a href="https://www.linkedin.com/in/sravan-avvaru-b8543220b/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent">
                <a href="https://x.com/Sravan1011" target="_blank" rel="noopener noreferrer">
                  <X className="mr-2 h-5 w-5" />
                  X (Twitter)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
