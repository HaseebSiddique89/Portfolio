import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Network } from 'lucide-react';

const skills = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'AI & Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'LangChain'],
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Programming',
    items: ['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js'],
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Supabase'],
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'DevOps & Cloud',
    items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Microservices'],
  },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-gradient">
            About Me
          </h1>
          <div className="text-container mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a passionate AI Developer and Researcher with 5+ years of experience in building
              cutting-edge AI solutions. My expertise spans across machine learning, natural language
              processing, and full-stack development. I'm particularly interested in developing
              AI systems that can make a positive impact on society.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-container group"
            >
              <div className="flex items-center mb-4 text-primary">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-2 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600 dark:text-gray-300">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;