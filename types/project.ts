export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Athena.ai",
    description: "A web application for combating misinformation which uses multiple sources to generate a summary of articles using the Gemini-flash model.",
    tech: ["Next.js", "TypeScript", "Gemini AI", "Tailwind CSS"],
    github: "https://github.com/Sravan1011/Athena.ai",
    live: "https://athenai.vercel.app/"
  },
  {
    title: "sravan avvaru",
    description: "A personal portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    github: "https://github.com/Sravan1011/Portfolio",
    live: "https://sravanavvaru.vercel.app/"
  },
  {
    title: "Pelvix",
    description: "A modern full-stack AI chatbot with personality, powered by DeepSeek-R1 and featuring AI image generation, GSAP animations, and real-time chat capabilities.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Sravan1011/Pelvix",
    live: "https://pelvix.vercel.app/"
  },
  {
    title: "InceptionV3-architecture",
    description: "An architechure of InceptionV3 model for image classification.Classifying Oil Spill images on real-time. on water bodies ",
    tech: ["Python", "Numpy", "Matplotlib","Tensorflow","Keras","OpenCV","Scikit-learn","Scipy","Pandas","Nltk","TensorFlow"],
    github: "https://github.com/Sravan1011/InceptionV3-architecture",
  }
];
