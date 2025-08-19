import { LinkWithTooltip } from "./LinkWithTooltip";
export function Hero() {
    return (
      <section id="about" className="pt-24 pb-16 relative">
        <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
  
        <div className="flex flex-col lg:flex-row items-start gap-12 relative z-10">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-2xl font-medium text-gray-900">hi, i'm Sravan.</h1>
  
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>i like building and scaling my ideas.</p>
              <p className="mb-8 text-base text-[var(--foreground)]">
                <LinkWithTooltip
                  text="frontend"
                  description="React, Next.js, Tailwind CSS, TypeScript"
                />
                ,{" "}
                <LinkWithTooltip
                  text="backend"
                  description="Node.js, Express, MongoDB, PostgreSQL"
                />
                ,{" "}
                <LinkWithTooltip
                  text="ai"
                  description="TensorFlow, PyTorch, LangChain, Hugging Face"
                />
                {" "}— whatever gets the job done.
              </p>
              <p>
                i haved worked for <span className="text-gray-900 font-medium">startups</span>, spend a lot of time as
                <span className="text-gray-900 font-medium"> freelancer and editor </span>, and love building things that
                <span className="text-gray-900 font-medium"> solve real-time problems</span>.
              </p>
              <p>
                also spend time doing <a className="text-black-600 underline" href="https://ieeexplore.ieee.org/abstract/document/10940327" target="research paper" >Machine learning research</a>.
              </p>
              <p>
                <span className="text-gray-900 font-medium">previously</span> was a{" "}
                <span className="text-gray-900 font-medium">Technical intern</span> at
                <span className="text-gray-900 font-medium"> honeywell </span> and{" "}and building websites took like someone
                useful.
              </p>
              <p>
                <span className="text-gray-900 font-medium">currently</span> i'm{" "}
                <span className="text-black-600 underline">open to</span>
                <span className="text-gray-900 font-medium"> new opportunities</span>.
              </p>
            </div>
  
            <div className="flex items-center space-x-4 pt-4">
              <a href="https://x.com/Sravan1011" className="text-blue-600 hover:text-blue-700 transition-colors">
                <span className="text-sm">x</span>
              </a>
              <a href="https://github.com/Sravan1011" className="text-blue-600 hover:text-blue-700 transition-colors">
                <span className="text-sm">github</span>
              </a>
              <a href="https://www.linkedin.com/in/sravan-avvaru-b8543220b/" className="text-blue-600 hover:text-blue-700 transition-colors">
                <span className="text-sm">linkedin</span>
              </a>
              <a href="/blogs" className="text-blue-600 hover:text-blue-700 transition-colors">
                <span className="text-sm">blog</span>
              </a>
            </div>
          </div>
                  {/* avatar */}
                  <div className="relative mt-10 mb-2 h-40">
                    <div className="absolute left-6 bottom-0 w-36 h-36 rounded-full bg-gradient-to-r from-blue-400 to-orange-400 p-1 shadow-lg">
                      <div className="rounded-full bg-gray-900 p-1">
                        <img
                          src="/profile-avatar.jpg"
                          alt="Sravan Avvaru"
                          className="w-32 h-32 rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* subtle glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-orange-600/20 rounded-2xl blur-xl -z-10"></div>
                </div>
      </section>
    );  }
