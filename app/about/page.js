// app/about/page.js
'use client'
import { motion } from 'framer-motion'
import { Code2, Rocket, Brain, Clock } from 'lucide-react'

export default function About() {
  const qualities = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Technical Prowess",
      description: "Passionate about crafting clean, efficient code and staying current with modern web technologies."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Fast Learner",
      description: "Quickly adapt to new technologies and methodologies, transforming challenges into opportunities for growth."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Approach challenges with analytical thinking and creative solutions, always seeking optimal outcomes."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Pressure Handler",
      description: "Thrive in fast-paced environments, maintaining quality and efficiency under demanding circumstances."
    }
  ]

  return (
    <div className="min-h-screen py-8 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
          >
            About Me
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-20 h-1 bg-primary mx-auto mb-6"
          />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/Bamfa.jpg"
                alt="Bamfa Ceesay"
                className="w-full h-auto md:h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-20" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary rounded-full opacity-20" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Crafting Digital Experiences with Passion
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Hello! I'm Bamfa Ceesay, a trained Product Engineer and an Aspiring Software developer. I earned a BSc in computer science from the University of The Gambia in 2025. My journey in tech is driven by a deep 
              fascination with creating beautiful, intuitive digital experiences that make a difference. 
            </p>

            <div className="pt-4">
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 hover:font-semibold text-white rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        </div>

        {/* Qualities Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mb-24"
        >
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index + 0.8, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary mb-4">
                {quality.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {quality.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {quality.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}