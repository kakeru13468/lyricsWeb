import React from 'react';
import { motion } from 'framer-motion'; 

const Error = ({ message, onClose }) => {
  const variants = {
    initial: { y: -50, opacity: 0 },  
    animate: { y: 0, opacity: 1 },    
    exit: { y: 50, opacity: 0 },      
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} 
    >
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit" 
        transition={{ duration: 0.3 }} 
        className="bg-white p-6 rounded-lg shadow-lg w-80 text-center"
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className="text-xl font-bold mb-4">錯誤</h2>
        <p className="mb-4">{message}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          onClick={onClose} 
        >
          關閉
        </button>
      </motion.div>
    </div>
  );
};

export default Error;
