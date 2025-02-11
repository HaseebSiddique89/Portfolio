import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Content Generator',
    description: 'An advanced content generation platform using GPT-4 and LangChain',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
    tags: ['AI', 'NLP', 'React', 'Python'],
    fullDescription: 'A sophisticated content generation platform that leverages GPT-4 and LangChain to create high-quality, contextually relevant content. Features include template customization, multi-language support, and content optimization suggestions.',
    technologies: ['OpenAI API', 'LangChain', 'React', 'FastAPI', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'Smart Document Analysis',
    description: 'Document analysis system using computer vision and NLP',
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&auto=format&fit=crop&q=80',
    tags: ['Computer Vision', 'NLP', 'Python'],
    fullDescription: 'An intelligent document analysis system that combines computer vision and natural language processing to extract, categorize, and analyze information from various document types.',
    technologies: ['PyTorch', 'Tesseract', 'spaCy', 'FastAPI', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive analytics dashboard with real-time data processing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    tags: ['Analytics', 'React', 'Node.js'],
    fullDescription: 'A comprehensive analytics dashboard that processes and visualizes data in real-time. Features include customizable widgets, automated reporting, and predictive analytics.',
    technologies: ['React', 'Node.js', 'Socket.io', 'D3.js', 'ClickHouse'],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
          className="text-4xl font-bold mb-12 text-gradient"
        >
          Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="card group cursor-pointer"
            >
              <div className="image-container h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="image-hover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.fullDescription}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;