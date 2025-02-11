import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/research', label: 'Research & Blogs' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden sm:block sm:ml-6 flex-1">
            <div className="flex space-x-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  {link.path === location.pathname && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-0.5 w-full bg-primary"
                    />
                  )}
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-gray-100"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      link.path === location.pathname
                        ? 'bg-primary text-white'
                        : 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;