import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Advancing LLM Capabilities Through Efficient Fine-tuning',
    date: 'March 15, 2024',
    category: 'Research',
    excerpt: 'Exploring novel approaches to fine-tuning large language models for improved performance and reduced computational requirements.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Implementing RAG Systems for Enhanced Information Retrieval',
    date: 'March 10, 2024',
    category: 'Tutorial',
    excerpt: 'A comprehensive guide to implementing Retrieval-Augmented Generation systems for more accurate and contextual responses.',
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'The Future of AI: Trends and Predictions for 2025',
    date: 'March 5, 2024',
    category: 'Blog',
    excerpt: 'Analyzing current AI trends and making informed predictions about the direction of AI technology in the coming year.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80',
  },
];

const Research = () => {
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
          Research & Blogs
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="image-container h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="image-hover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-sm bg-primary text-white rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <button className="flex items-center text-primary hover:text-primary-dark transition-colors">
                  <span className="mr-2">Read More</span>
                  <BookOpen size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Research;