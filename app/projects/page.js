// app/projects/page.js
'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Code2, 
  Layout,
  Server
} from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.",
      image: "/images/portfolio.png",
      tags: ["frontend"],
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://bamfa-portfolio.vercel.app",
      githubLink: "https://github.com/BCEESAY10/bamfa-portfolio",
      featured: true
    },
    {
      title: "Munaff Website",
      description: "A static website for Minaff dental clinic, built with HTML, Tailwind CSS, and JavaScript.",
      image: "/images/munaff_homepage.png",
      tags: ["frontend"],
      tech: ["HTML", "Tailwind", "JavaScript"],
      liveLink: "https://munaffdentalclinic.com",
      githubLink: "https://github.com/BCEESAY10/munaff-website",
      featured: true
    },
    {
      title: "Chatbot API",
      description: "API for a chatbot application that uses Gemini API for natural language processing.",
      image: "/images/api.png",
      tags: ["backend"],
      tech: ["Node.js", "Express", "PostgreSQL", "Gemini API","JWT", "Axios"],
      liveLink: "#",
      githubLink: "https://github.com/BCEESAY10/chatbot-api",
    },
    {
      title: "Product Catalog",
      description: "A product catalog application built with React with search and filter functionality.",
      image: "/images/product_catalog.png",
      tags: ["frontend"],
      tech: ["React", "Tailwind"],
      liveLink: "https://product-catalogue-b326.onrender.com",
      githubLink: "https://github.com/BCEESAY10/product-catalog",
    },
    {
      title: "Chatbot",
      description: "A simple chatbot application built with Next js and Gemini API for natural language processing.",
      image: "/images/Bamfa_PP.png",
      tags: ["fullstack"],
      tech: ["Next Js", "Tailwind", "Gemini API", "Axios", "PostgreSQL", "Drizzle"],
      liveLink: "https://chatbottutorial.vercel.app",
      githubLink: "https://github.com/BCEESAY10/First-Next-Supabase-Project",
    }
    ,
    {
      title: "Task Manager",
      description: "A simple task manager web app that allows users to perform CRUD operations.",
      image: "/images/Bamfa_PP.png",
      tags: ["fullstack"],
      tech: ["React", "Tailwind", "Python3", "Flask-API", "PostgreSQL", "Drizzle"],
      liveLink: "https://task-manager-frontend-mxft.onrender.com",
      githubLink: "https://github.com/BCEESAY10/task-manager-frontend",
    },
    {
      title: "Patients Record System",
      description: "A patients record management system build for Munaff Clinic to keep bio data and clinic transactions of patients.",
      image: "/images/patients.png",
      tags: ["fullstack"],
      tech: ["React", "Tailwind", "Mysql"],
      liveLink: "https://patients-record-system-ui-1.onrender.com/",
      githubLink: "https://github.com/BCEESAY10/patients-record-system-ui",
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
    <div className="min-h-screen py-8 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Featured Projects
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-300 md:text-xl max-w-2xl mx-auto">
            A collection of projects that showcase my skills in frontend, backend, and full-stack development.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center mb-12">
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
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:mb-24"
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
                <div className="relative h-36 md:h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-105"
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