"use client";

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { experiences } from "@/types/experience";
import Image from "next/image";

// Company logo component with direct image URLs
function CompanyLogo({ company }: { company: string }) {
  const logoMap: Record<string, string> = {
    'honeywell': 'https://www.honeywell.com/content/dam/honeywell/en/images/logo/honeywell-logo-rgb-blue.png',
    'tech solutions inc.': 'https://via.placeholder.com/24/1a1a1a/ffffff?text=TS',
    'startup co.': 'https://via.placeholder.com/24/1a1a1a/ffffff?text=SC'
  };

  const logoUrl = logoMap[company.toLowerCase()];
  
  if (!logoUrl) {
    // Fallback to first letters if no logo found
    const initials = company
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
      
    return (
      <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-xs font-medium text-gray-300 mr-2">
        {initials}
      </div>
    );
  }

  return (
    <div className="w-6 h-6 relative mr-2">
      <img
        src={logoUrl}
        alt={`${company} logo`}
        className="w-full h-full object-contain"
        onError={(e) => {
          // Fallback to initials if image fails to load
          const target = e.target as HTMLImageElement;
          const parent = target.parentElement;
          if (parent) {
            const initials = company
              .split(' ')
              .map(word => word[0])
              .join('')
              .toUpperCase()
              .substring(0, 2);
              
            parent.outerHTML = `
              <div class="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-xs font-medium text-gray-300 mr-2">
                ${initials}
              </div>
            `;
          }
        }}
      />
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <nav className="flex justify-between items-center mb-12">
        <Link 
          href="/" 
          className="text-xl font-mono hover:text-gray-400 transition-colors"
        >
          sravan.avvaru
        </Link>
        <div className="flex items-center space-x-6">
          <Link 
            href="/experience" 
            className="text-white text-sm font-mono transition-colors border-b-2 border-white pb-1"
          >
            experience
          </Link>
          <Link 
            href="/projects" 
            className="text-gray-400 hover:text-white text-sm font-mono transition-colors"
          >
            work
          </Link>
          <Link 
            href="/blogs" 
            className="text-gray-400 hover:text-white text-sm font-mono transition-colors"
          >
            blogs
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
          <h1 className="text-3xl font-bold mt-4">Experience</h1>
          <p className="text-gray-400 mt-2">My professional journey and contributions</p>
        </div>

        <div className="relative
          before:absolute before:left-[9px] md:before:left-[11px] before:top-0 before:h-full before:w-0.5 before:bg-gray-800">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10 pb-12 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-black border-2 border-white flex items-center justify-center z-10">
                <div className={`w-2 h-2 rounded-full ${exp.isLatest ? 'bg-blue-500' : 'bg-white'}`} />
              </div>
              
              {/* Card */}
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <div className="flex items-center mt-1">
                      <CompanyLogo company={exp.company} />
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline inline-flex items-center"
                      >
                        @ {exp.company}
                      </a>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">▹</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
