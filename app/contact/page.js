// app/contact/page.js
"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  //const currentYear = new Date().getFullYear()

  const contacts = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-8 h-8" />,
      link: "https://wa.me/2207109836",
      color: "hover:bg-green-500",
      description: "Quick chat on WhatsApp",
    },
    {
      name: "Gmail",
      icon: <Mail className="w-8 h-8" />,
      link: "mailto:bamfaceesay30@gmail.com",
      color: "hover:bg-yellow-500",
      description: "Send me an email",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-8 h-8" />,
      link: "https://www.linkedin.com/in/bamfa-ceesay-b581042b4/",
      color: "hover:bg-blue-600",
      description: "Connect professionally",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-8 h-8" />,
      link: "https://www.facebook.com/alhagieomarbamfa.ceesay",
      color: "hover:bg-blue-800",
      description: "Follow me on Facebook",
    },
    {
      name: "GitHub",
      icon: <Github className="w-8 h-8" />,
      link: "https://github.com/BCEESAY10",
      color: "hover:bg-gray-800",
      description: "Check out my code",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Contact Section */}
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
              Let's Connect
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-gray-600 dark:text-gray-300 md:text-xl max-w-2xl mx-auto">
              Feel free to reach out through any of these platforms. I'm always
              open to discussing new projects, creative ideas, or opportunities
              to be part of your visions.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg 
                  hover:shadow-xl transition-all duration-300 ${contact.color} hover:text-white group`}>
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {contact.icon}
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-1">{contact.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {contact.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed -z-10 top-1/4 right-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
      <div className="fixed -z-10 bottom-1/4 left-0 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
    </div>
  );
}
