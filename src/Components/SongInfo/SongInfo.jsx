import React from 'react';
import { motion } from 'framer-motion';

const SongInfo = ({ songName, songAuthor, lyricssource}) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2 p-8 mt-24 bg-white shadow-lg rounded-lg"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.h2
        className="text-4xl font-extrabold text-gray-800 tracking-tight mb-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {songName}
      </motion.h2>

      <motion.p
        className="text-xl font-medium text-gray-600"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        作者: <span >{songAuthor}</span>
      </motion.p>
      <motion.p
        className="text-xl font-medium text-gray-600"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        歌詞出處: <span >{lyricssource}</span>
      </motion.p>
      
    </motion.div>
  );
};

export default SongInfo;
