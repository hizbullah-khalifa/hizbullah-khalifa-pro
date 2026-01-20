import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-[#2F2D73] to-black space-y-8">
      {/* Main animated loader */}
      <div className="relative w-24 h-24 md:w-32 md:h-32">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-red-600 border-r-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
        
        {/* Middle ring */}
        <motion.div
          className="absolute inset-2 border-4 border-transparent border-b-white border-l-[#2F2D73] rounded-full"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
        
        {/* Inner dot */}
        <motion.div
          className="absolute inset-6 bg-red-600 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Text with animated dots */}
      <div className="text-white font-medium text-xl md:text-2xl flex items-center">
        Welcome to Devnora Solutions
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.3 }}
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.2, repeatDelay: 0.3 }}
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.4, repeatDelay: 0.3 }}
        >
          .
        </motion.span>
      </div>
    </div>
  );
};

export default Loader;