import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.div 
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)',
        borderRadius: '24px',
      }}
    >
      {/* Border gradient effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(66,153,225,0.1),_transparent_50%)]"></div>
      
      {/* Glow effects */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full"></div>
      
      {/* Animated dot pattern */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-[0.15]"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at center,rgb(27, 62, 90) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="relative z-10 px-8 py-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Start Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Project
            </span>?
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with custom solutions designed specifically to meet your unique needs.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full
                transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(66,153,225,0.3)]
                border border-blue-500/20 hover:border-blue-400"
            >
              Let's Work Together
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CallToAction; 