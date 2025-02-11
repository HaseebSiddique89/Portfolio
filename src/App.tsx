import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Research from './pages/Research';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';
import MouseTracker from './components/MouseTracker';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <AnimatedBackground />
          <MouseTracker />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/research" element={<Research />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;