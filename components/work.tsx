const workExperience = [
    {
      company: "Honeywell",
      role: "Technical Intern",
      period: "2024 - present",
      description:
        "worked on control builder to build logic and instrumentations part of the substations.",
      achievements: [
        "Assisted in logic creation for substations with a focus on secure and scalable network design",
        "Gained exposure to real-world control systems and communication protocols relevant to embedded systems."
      ],
    },
    {
      company: "Mignited",
      role: "Computer Vision Intern",
      period: "July 2024 - August 2024",
      description: "Combined Machine Learning and Machine Vision techniques to solve complex automation challenge.",
      achievements: [ 
        "Developed a machine learning model to detect and classify different types of vehicles in real-time",
        "Worked on a real-time object detection system using YOLOv8 and OpenCV",
      ],
    },
  ]
  
  export function Work() {
    return (
      <section id="work" className="py-16 scroll-mt-24">
        <h2 className="text-xl font-medium text-gray-900 mb-8">work</h2>
  
        <div className="space-y-8">
          {workExperience.map((work) => (
            <div key={work.company} className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-medium text-gray-900">{work.company}</h3>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{work.role}</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{work.period}</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  {work.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  