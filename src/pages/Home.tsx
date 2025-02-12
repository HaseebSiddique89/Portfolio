import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
const profileImage = new URL('../public/profile.jpg', import.meta.url).href;

const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    href: 'https://github.com/yourusername',
    label: 'GitHub',
    color: 'hover:text-[#333]',
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
    color: 'hover:text-[#0077b5]',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    href: 'mailto:your.email@example.com',
    label: 'Email',
    color: 'hover:text-[#EA4335]',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    href: '/cv.pdf',
    label: 'CV',
    color: 'hover:text-primary',
  },
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="mb-6">
              <span className="text-3xl sm:text-4xl text-gray-700 dark:text-gray-100 block font-bold leading-none mb-2">
                Hi, I'm
              </span>
              <span className="text-5xl sm:text-6xl text-gradient block font-bold leading-tight">
                Haseeb Siddique
              </span>
            </div>
            <div className="text-2xl sm:text-3xl mb-6 h-20 font-light">
              <Typewriter
                options={{
                  strings: [
                    'AI Developer and Researcher',
                    'LLMs | RAGs | Langchain',
                    'Django Expert'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-lg mb-8">
              Passionate about creating innovative solutions using cutting-edge AI technologies
              and building scalable applications that make a difference.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${link.color} transform transition-all duration-300 hover:shadow-lg`}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-square rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;