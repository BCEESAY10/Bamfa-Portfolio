// app/projects/page.js
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Github, 
  ExternalLink, 
  Code2, 
  Layout,
  Server
} from 'lucide-react'
import Image from 'next/image'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.",
      image: "/Bamfa.jpg",
      tags: ["frontend"],
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, product management, and payment integration.",
      image: "/Bamfa.jpg",
      tags: ["fullstack"],
      tech: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true
    },
    {
      title: "Task Management API",
      description: "RESTful API for task management with user roles, task assignment, and email notifications.",
      image: "/Bamfa.jpg",
      tags: ["backend"],
      tech: ["Node.js", "Express", "PostgreSQL"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with location-based forecasts and interactive maps.",
      image: "/Bamfa.jpg",
      tags: ["frontend"],
      tech: ["React", "OpenWeather API", "Mapbox"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Layout className="w-4 h-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Code2 className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Layout className="w-4 h-4" /> }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter))

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Featured Projects
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in frontend, backend, and full-stack development.
            Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            layout
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Decorative Elements */}
        <div className="fixed -z-10 top-1/4 right-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="fixed -z-10 bottom-1/4 left-0 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
      </motion.div>
    </div>
  )
}