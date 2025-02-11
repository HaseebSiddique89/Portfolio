import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-glow">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-glow">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;