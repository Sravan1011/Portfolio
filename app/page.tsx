"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, X, ExternalLink, ChevronRight, Download, Loader2 } from "lucide-react"

// Pollinations Image Component
const PollinationsImage = ({ prompt, alt, className = "" }: { prompt: string; alt: string; className?: string }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        setIsLoading(true);
        // Encode the prompt for URL
        const encodedPrompt = encodeURIComponent(prompt);
        const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=600&height=400&nologo=true`;
        
        // Check if the image loads successfully
        const img = new window.Image();
        img.onload = () => {
          setImageUrl(url);
          setIsLoading(false);
        };
        img.onerror = () => {
          // Fallback to a placeholder if the image fails to load
          setImageUrl(`https://placehold.co/600x400/1a1a1a/ffffff?text=${encodeURIComponent(prompt.split(' ').slice(0, 3).join('+'))}`);
          setIsLoading(false);
        };
        img.src = url;
      } catch (err) {
        console.error('Error loading image:', err);
        setError('Failed to load image');
        setIsLoading(false);
      }
    };

    getImage();
  }, [prompt]);

  if (error) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <span className="text-xs text-muted-foreground">Image generation failed</span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center bg-muted">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
          unoptimized
        />
      )}
    </div>
  );
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects","Research","blogs"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      title: "Athena.ai",
      description: "AI Fact Checking Agent",
      tech: ["Nextjs", "Node.js", "Gemini", "Supabase"],
      github: "https://github.com/Sravan1011/Athena.ai",
      live: "https://athenai.vercel.app/",
      imagePrompt: "A futuristic AI fact-checking AI Agent"
    },
    {
      title: "Pelvix 🤖",
      description: "Powerful AI client for Image Generation and Text Generation",
      tech: ["Next.js", "TypeScript", "Pollination", "Flux"],
      github: "https://github.com/Sravan1011/Pelvix",
      live: "https://pelvix.vercel.app",
      imagePrompt: "A modern AI art generation interface with a prompt input and beautiful AI-generated artwork, digital art style"
    },
    {
      title: "MemeFlux 🌊",
      description: "AI meme generator on Live feed with AI meme generator",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
      github: "https://github.com/Sravan1011/weather-dashboard",
      live: "#",
      imagePrompt: "A fun and colorful meme generator interface with trending memes and customization options, cartoon style"
    },
  ]

  const experiences = [
    {
      period: "2025 — PRESENT",
      title: "Technical Support Intern",
      company: "Honeywell",
      description:
        "Assisted in logic creation for substations with a focus on secure and scalable network design. Gained exposure to real-world control systems and communication protocols relevant to control system.",
      tech: ["C300 Controller", "Scada", "Modbus", "OPC"],
    },
    {
      period: "2021 — 2022",
      title: "Computer Vision Intern",
      company: "Mignited",
      description: "Developed a machine learning model to detect and classify different types of vehicles in real-time. Worked on a real-time object detection system using YOLOv8 and OpenCV.",
      tech: ["Python", "OpenCV", "YOLOv8", "FastAPI", "Cognex"],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated Space Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-space-deep via-space-mid to-space-surface"></div>

        {/* Stars */}
        <div className="stars-container">
          <div className="stars stars-small"></div>
          <div className="stars stars-medium"></div>
          <div className="stars stars-large"></div>
        </div>

        {/* Space Objects */}
        <div className="space-objects">
          {/* Earth */}
          <div className="space-object earth">
            <div className="earth-surface"></div>
            <div className="earth-atmosphere"></div>
          </div>

          {/* Moon */}
          <div className="space-object moon">
            <div className="moon-surface"></div>
            <div className="moon-craters"></div>
          </div>

          {/* Sun */}
          <div className="space-object sun">
            <div className="sun-core"></div>
            <div className="sun-corona"></div>
          </div>

          {/* Rockets */}
          <div className="rocket rocket-1">
            <div className="rocket-body"></div>
            <div className="rocket-flame"></div>
          </div>

          <div className="rocket rocket-2">
            <div className="rocket-body"></div>
            <div className="rocket-flame"></div>
          </div>

          {/* Satellites */}
          <div className="satellite satellite-1">
            <div className="satellite-body"></div>
            <div className="satellite-panels"></div>
          </div>

          <div className="satellite satellite-2">
            <div className="satellite-body"></div>
            <div className="satellite-panels"></div>
          </div>

          {/* Asteroids */}
          <div className="asteroid asteroid-1"></div>
          <div className="asteroid asteroid-2"></div>
          <div className="asteroid asteroid-3"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Sravan Avvaru</div>
            <div className="hidden md:flex items-center space-x-8">
              {["about", "experience", "projects", "research"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
              <a
                href="/blogs"
                className="text-sm uppercase tracking-wider transition-colors hover:text-primary text-muted-foreground"
              >
                Blogs
              </a>
              <a
                href="#contributions"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contributions')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                  activeSection === 'contributions' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Contributions
              </a>
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-transparent hover:bg-primary/10"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-balance">Sravan Avvaru</h1>
                <h2 className="text-xl lg:text-2xl text-muted-foreground font-light">Full-Stack Developer</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  I build accessible, pixel-perfect digital experiences for the web, specializing in Full-Stack Development, Generative AI, and Machine Learning .
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button size="lg" className="group">
                  View My Work
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" >
                    <a href="https://github.com/Sravan1011" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <a href="https://linkedin.com/in/sravan-avvaru" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <a href="https://x.com/Sravan1011">
                      <X className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-card rounded-full border-4 border-border/50 overflow-hidden">
                  <Image
                    src="/profile-avatar.jpg" 
                    alt="Sravan Avvaru" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">About</h2>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I&apos;m Sravan, a passionate full-stack developer and machine learning enthusiast who thrives on transforming ideas into impactful digital solutions. With expertise spanning both frontend and backend development, I specialize in building robust, scalable applications that deliver exceptional user experiences.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My technical toolkit includes <span className="text-foreground font-medium">React, Next.js, and TypeScript</span> for crafting responsive interfaces, while I leverage <span className="text-foreground font-medium">Node.js, Express, and various databases</span> to build powerful backends. In the AI/ML space, I work with <span className="text-foreground font-medium">TensorFlow, PyTorch, and LangChain</span> to create intelligent applications that solve complex problems.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My journey in tech has been diverse - from contributing to innovative startups to freelancing for global clients, I&apos;ve honed my skills in delivering high-quality solutions under various constraints. As a <span className="text-foreground font-medium">Technical Intern at Honeywell</span>, I gained hands-on experience with industrial automation and control systems, working on projects that required both technical precision and creative problem-solving.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Beyond development, I&apos;m deeply passionate about <span className="text-foreground font-medium">machine learning research</span>, constantly exploring new techniques and contributing to open-source projects. I believe in building tools that not only function flawlessly but also make a tangible difference in people&apos;s lives.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Currently, I&apos;m seeking new opportunities where I can apply my diverse skill set to challenging problems. Whether it&apos;s developing cutting-edge web applications or pushing the boundaries of what&apos;s possible with AI, I&apos;m always excited to collaborate on meaningful projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">Experience</h2>
              </div>
              <div className="lg:col-span-2 space-y-8">
                {experiences.map((exp, index) => (
                  <Card key={index} className="group hover:bg-accent/50 transition-colors cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="text-sm text-muted-foreground font-mono min-w-fit">{exp.period}</div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                              {exp.title} · {exp.company}
                              <ExternalLink className="w-4 h-4 inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">Projects</h2>
              </div>
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <Card
                      key={index}
                      className="group hover:bg-accent/50 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <CardContent className="p-0">
                        <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                          {project.imagePrompt ? (
                            <PollinationsImage 
                              prompt={project.imagePrompt} 
                              alt={project.title}
                              className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center">
                              <span className="text-muted-foreground">No preview</span>
                            </div>
                          )}
                        </div>
                        <div className="p-6 space-y-4">
                          <div>
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mt-2">{project.description}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-3 pt-2">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Button variant="ghost" size="sm" className="p-0 h-auto">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </Button>
                            </a>
                            {project.live && project.live !== '#' && (
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="sm" className="p-0 h-auto">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </Button>
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Papers Section */}
        <section id="research" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">Research</h2>
              </div>
              <div className="lg:col-span-2 space-y-8">
                {/* Published Paper */}
                <Card className="group hover:bg-accent/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-muted-foreground">PUBLISHED</span>
                        <span className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full">IEEE</span>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        <a 
                          href="https://ieeexplore.ieee.org/abstract/document/10940327" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center"
                        >
                          Deep Learning-Based Real-Time Vehicle Detection and Classification Using YOLO and OpenCV
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </h3>
                      <p className="text-muted-foreground">
                        Published in 2024 11th International Conference on Computing for Sustainable Global Development (INDIACom)
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Deep Learning</Badge>
                        <Badge variant="secondary" className="text-xs">Computer Vision</Badge>
                        <Badge variant="secondary" className="text-xs">YOLO</Badge>
                        <Badge variant="secondary" className="text-xs">OpenCV</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Publishing Section */}
                <div className="pt-8">
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">Publishing</h3>
                  <div className="space-y-6 pl-6 border-l-2 border-border/50">
                    <div className="relative">
                      <div className="absolute -left-[14px] top-2 w-2.5 h-2.5 rounded-full bg-muted-foreground/30"></div>
                      <p className="text-muted-foreground italic">More research work coming soon...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contributions Section */}
        <section id="contributions" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">Contributions</h2>
              </div>
              <div className="lg:col-span-2">
                <Card className="group hover:bg-accent/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        Open Source Contributions
                      </h3>
                      <p className="text-muted-foreground">
                        I&apos;m actively contributing to open source projects and will be sharing my contributions here soon.
                        Check back later to see my work on various open-source initiatives and community projects.
                      </p>
                      <div className="pt-4 border-t border-border/50">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>Coming soon</span>
                          <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-pulse"></span>
                          <span>Stay tuned for updates</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
