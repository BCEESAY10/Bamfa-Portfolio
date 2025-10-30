"use client";

import { motion } from "framer-motion";

export default function CVPage() {
  return (
    <div className="min-h-auto">
      {/* CV Section */}
      <div className="py-10 px-4 md:px-8 lg:px-16 bg-transparent dark:from-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              My CV
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-gray-600 dark:text-gray-300 md:text-xl max-w-2xl mx-auto">
              Take a look at my latest CV.
            </p>
          </motion.div>

          {/* CV PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-900 mx-auto">
            <iframe
              src="/Bamfa_CV-Oct-2025.pdf"
              title="CV PDF"
              className="w-full h-[80vh] min-h-[500px] border-0"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed -z-10 top-1/4 right-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
      <div className="fixed -z-10 bottom-1/4 left-0 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
    </div>
  );
}
