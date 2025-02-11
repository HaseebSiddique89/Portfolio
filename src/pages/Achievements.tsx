import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const achievements = [
  {
    id: 1,
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    title: 'Best AI Innovation Award 2024',
    organization: 'Global Tech Summit',
    description: 'Recognized for developing an innovative AI-powered healthcare diagnostic system.',
  },
  {
    id: 2,
    icon: <Award className="w-8 h-8 text-blue-500" />,
    title: 'Research Excellence',
    organization: 'AI Research Institute',
    description: 'Published 5 papers in top-tier conferences with over 1000+ citations.',
  },
  {
    id: 3,
    icon: <Star className="w-8 h-8 text-purple-500" />,
    title: 'Open Source Contributor',
    organization: 'GitHub',
    description: 'Maintained popular AI libraries with 10k+ stars and 1k+ forks.',
  },
  {
    id: 4,
    icon: <Medal className="w-8 h-8 text-red-500" />,
    title: 'Distinguished Speaker',
    organization: 'Tech Conferences',
    description: 'Keynote speaker at 10+ international AI and ML conferences.',
  },
];

const Achievements = () => {
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
          Achievements
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-container group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-primary/10 transition-colors">
                  {achievement.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.organization}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;