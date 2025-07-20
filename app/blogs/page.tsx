"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, Sparkles } from "lucide-react"

const BlogsPage = () => {
  const comingSoonBlogs = [
    {
      id: 1,
      title: "🚀 Something Cool",
      description: "A mysterious blog post is brewing...",
      category: "Coming Soon",
      estimatedDate: "Soon™"
    },
    {
      id: 2,
      title: "💡 Mind Blowing Stuff",
      description: "This will be epic, I promise!",
      category: "Coming Soon",
      estimatedDate: "Soon™"
    },
    {
      id: 3,
      title: "🎯 Tech Adventures",
      description: "Adventures in the digital realm...",
      category: "Coming Soon",
      estimatedDate: "Soon™"
    },
    {
      id: 4,
      title: "⚡ Lightning Fast",
      description: "Speed and efficiency combined!",
      category: "Coming Soon",
      estimatedDate: "Soon™"
    },
    {
      id: 5,
      title: "🎨 Creative Chaos",
      description: "Where creativity meets code...",
      category: "Coming Soon",
      estimatedDate: "Soon™"
    },
    {
      id: 6,
      title: "🌟 Future Tech",
      description: "Exploring tomorrow's technology today!",
      category: "Coming Soon",
      estimatedDate: "Soon™"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Blog 📝
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My thoughts, adventures, and random tech discoveries... coming soon! 🚀
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comingSoonBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-teal-100 text-teal-700 border-teal-200">
                      {blog.category}
                    </Badge>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Sparkles className="h-5 w-5 text-teal-500" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-teal-600 transition-colors">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {blog.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{blog.estimatedDate}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-teal-600 font-medium">
                    <BookOpen className="h-4 w-4" />
                    <span>Coming Soon ✨</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-4">
            More awesome content coming soon... 🎉
          </p>
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            <Sparkles className="h-8 w-8 text-teal-500" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogsPage