// app/skills/page.js
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  GitBranch, 
  MessagesSquare,
  Workflow,
  Brain,
  Paintbrush, 
  FileText
} from 'lucide-react'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  const skillCategories = {
    frontend: {
      title: "Frontend Technologies",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { 
          name: "HTML/CSS",
          icon: <Code2 className="w-5 h-5" />,
          description: "Modern, responsive web development with semantic HTML and CSS"
        },
        { 
          name: "React.js",
          icon: <Code2 className="w-5 h-5" />,
          description: "Building interactive UIs with React and its ecosystem"
        },
        { 
          name: "Next.js",
          icon: <Code2 className="w-5 h-5" />,
          description: "Server-side rendering and static site generation"
        }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { 
          name: "Node.js",
          icon: <Server className="w-5 h-5" />,
          description: "Server-side JavaScript runtime environment"
        },
        { 
          name: "Express.js",
          icon: <Server className="w-5 h-5" />,
          description: "Web application framework for Node.js"
        },
        { 
          name: "Python",
          icon: <Server className="w-5 h-5" />,
          description: "General-purpose programming and backend development"
        },
        { 
          name: "Java",
          icon: <Server className="w-5 h-5" />,
          description: "Object-oriented programming and enterprise applications"
        },
        { 
          name: "PHP",
          icon: <Server className="w-5 h-5" />,
          description: "Server-side scripting and web development"
        }
      ]
    },
    database: {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { 
          name: "SQL",
          icon: <Database className="w-5 h-5" />,
          description: "Relational database management and querying"
        },
        { 
          name: "Git & GitHub",
          icon: <GitBranch className="w-5 h-5" />,
          description: "Version control and collaborative development"
        },
        { 
          name: "MySQL",
          icon: <Database className="w-5 h-5" />,
          description: "Open-source relational database management system"
        },
        { 
          name: "PostgreSQL",
          icon: <Database className="w-5 h-5" />,
          description: "Object-relational database system"
        }
      ]
    },
    professional: {
      title: "Professional Skills",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { 
          name: "Communication",
          icon: <MessagesSquare className="w-5 h-5" />,
          description: "Effective team collaboration and client interaction"
        },
        { 
          name: "Workflow Diagrams",
          icon: <Workflow className="w-5 h-5" />,
          description: "Process modeling and system documentation"
        },
        { 
          name: "Figma & Canva",
          icon: <Paintbrush className="w-5 h-5" />,
          description: "Wireframing, prototyping, and graphic design"
        },
        { 
          name: "Microsoft Suite",
          icon: <FileText className="w-5 h-5" />,
          description: "Word, Excel and Powerpoint"
        }
      ]
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen py-10 px-4 md:px-8 lg:px-16 md:mb-36 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Skills
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"/>
          <p className="text-gray-600 dark:text-gray-300 md:text-xl max-w-2xl mx-auto">
            A collection of technologies and tools I use to bring ideas to life. 
          </p>
        </motion.div>

         {/* Mobile Dropdown */}
      <div className="md:hidden mb-6">
        <select
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          <option value="all">All Skills</option>
          {Object.entries(skillCategories).map(([key, { title }]) => (
            <option key={key} value={key}>{title}</option>
          ))}
        </select>
      </div>

        {/* Category Tabs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex flex-wrap justify-center md:text-xl md:gap-4 mb-6"
        >
          <motion.button
            variants={itemVariants}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-primary text-white'
                : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All Skills
          </motion.button>
          {Object.entries(skillCategories).map(([key, { title }]) => (
            <motion.button
              key={key}
              variants={itemVariants}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === key
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(key)}
            >
              {title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skillCategories).map(([category, { skills }]) => {
            if (activeTab !== 'all' && activeTab !== category) return null;
            
            return skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ));
          })}
        </motion.div>

        {/* Decorative Elements */}
        <div className="fixed -z-10 top-1/4 right-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="fixed -z-10 bottom-1/4 left-0 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
      </motion.div>
    </div>
  )
}