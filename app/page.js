'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'


export default function Home() {
  const typedRef = useRef(null)
  
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Frontend Dev',
        'Product Engineer',
        'Software Dev',
        'Graphic Designer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    })

    return () => typed.destroy()
  }, [])

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 md:mx-12 lg:px-16 py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Left Content Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 space-y-6 text-center md:text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-3"
        >
          <h2 className="text-lg md:text-2xl text-gray-600 dark:text-gray-300">
            Hello, I am
          </h2>
          <h1 className="bamfa text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
            BAMFA CEESAY 
          </h1>
          <div className="text-xl md:text-2xl text-primary font-semibold">
            I'm a <span ref={typedRef}></span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto md:mx-0"
        >
          A Product Engineer and an aspiring software developer fascinated by frontend development 
          and beautiful designs. I transform ideas into elegant, 
          user-friendly digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a 
            href="/projects" 
            className="px-8 py-3 bg-primary hover:bg-primary/90 hover:font-semibold text-white rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
          <a 
            href="/contact" 
            className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 hover:font-semibold dark:hover:bg-gray-700 text-gray-800 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 mt-12 md:mt-0"
      >
        <div className="relative w-full max-w-lg mx-auto">
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full"
          >
            <div className="relative w-full pt-[100%] rounded-full overflow-hidden shadow-2xl">
              <img
                src="/images/Bamfa_PP.png"
                alt="Bamfa Ceesay"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
    </div>
  )
}