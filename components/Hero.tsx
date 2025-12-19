'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-gray-400 mb-4">Hello, I&apos;m a</h2>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Data Scientist/ Machine Learning<br /> Engineer
          </h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-4xl text-gray-400 font-light"
          >
            Specialized in <span className="text-white font-medium">ML</span> & <span className="text-white font-medium">Applied NLP</span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 text-gray-400 max-w-2xl text-lg leading-relaxed"
          >
            Building robust, scalable AI solutions. Transforming research into production-grade applications with end-to-end pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex gap-4"
          >
             <a 
              href="#projects"
              className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all"
            >
              View Work
            </a>
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
