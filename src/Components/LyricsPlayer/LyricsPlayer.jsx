import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

const convertTimeToSeconds = (timeString) => {
  const parts = timeString.split(/[:,]/);
  return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
};

const LyricsPlayer = ({ videoUrl, lyricsData }) => {
  if (!Array.isArray(lyricsData)) {
    return <div>Loading...</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [playing, setPlaying] = useState(false); // 新增播放狀態
  const playerRef = useRef(null); 

  const handleProgress = (progress) => {
    const currentTime = progress.playedSeconds;

    const index = lyricsData.findIndex((line, idx) => {
      const startTime = convertTimeToSeconds(line.time);
      const endTime = convertTimeToSeconds(lyricsData[idx + 1]?.time || '00:99:99,999');
      return currentTime >= startTime && currentTime < endTime;
    });

    if (index !== -1 && index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const handleLyricsClick = (time) => {
    const seconds = convertTimeToSeconds(time);
    playerRef.current.seekTo(seconds);
    setPlaying(true); 
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-8 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <motion.div
        className="w-full h-128 bg-gray-100 p-6 rounded-lg shadow-lg"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <ReactPlayer
          ref={playerRef} 
          url={videoUrl}
          controls={true}
          width="100%"
          height="100%"
          playing={playing} 
          onProgress={handleProgress}
        />
      </motion.div>

      <motion.div
        className="w-full h-128 text-center bg-gray-100 p-6 rounded-lg shadow-lg overflow-y-auto"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">歌詞</h2>
        <div className="flex flex-col gap-6">
          {lyricsData.map((line, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg bg-white shadow-md cursor-pointer" 
              initial={{ scale: 1 }}
              animate={
                index === currentIndex
                  ? { scale: 1.06, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }
                  : { scale: 1 }
              }
              transition={{ duration: 0.3 }}
              onClick={() => handleLyricsClick(line.time)} 
            >
              <p
                className={`text-xl font-medium transition-colors duration-300 ${
                  index === currentIndex ? 'text-blue-600' : 'text-gray-800'
                }`}
              >
                {line.text}
              </p>
              {line.cnText && (
                <p className="text-lg font-light text-gray-600 mt-2">{line.cnText}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LyricsPlayer;
