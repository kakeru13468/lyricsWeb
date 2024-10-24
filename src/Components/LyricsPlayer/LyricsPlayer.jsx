import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { FaPlayCircle } from 'react-icons/fa';

const convertTimeToSeconds = (timeString) => {
  const parts = timeString.split(/[:,]/);
  return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
};

const LyricsPlayer = ({ videoUrl, lyricsData }) => {
  if (!Array.isArray(lyricsData)) {
    return <div>Loading...</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);
  const lyricsContainerRef = useRef(null); 

  const handleProgress = (progress) => {
    const currentTime = progress.playedSeconds;

    const index = lyricsData.findIndex((line, idx) => {
      const startTime = convertTimeToSeconds(line.time);
      const endTime = convertTimeToSeconds(lyricsData[idx + 1]?.time || '00:99:99,999');
      return currentTime >= startTime && currentTime < endTime;
    });

    if (index !== -1 && index !== currentIndex) {
      setCurrentIndex(index);
      const lyricElement = document.getElementById(`lyric-${index}`);
      if (lyricElement && lyricsContainerRef.current) {
        const container = lyricsContainerRef.current;
        const containerRect = container.getBoundingClientRect();
        const lyricRect = lyricElement.getBoundingClientRect();

        const offset = 20; 
        const scrollPosition = lyricRect.top - containerRect.top + container.scrollTop - offset;

        container.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }
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
        ref={lyricsContainerRef} 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">歌詞</h2>
        <div className="flex flex-col gap-6">
          {lyricsData.map((line, index) => (
            <motion.div
              key={index}
              id={`lyric-${index}`}  
              className="p-4 rounded-lg bg-white shadow-md cursor-pointer flex items-center justify-between"
              initial={{ scale: 1 }}
              animate={
                index === currentIndex
                  ? { scale: 1.06, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }
                  : { scale: 1 }
              }
              transition={{ duration: 0.3 }}
              onClick={() => handleLyricsClick(line.time)}
            >
              <div>
                <p
                  className={`text-xl text-left font-medium transition-colors duration-300 ${index === currentIndex ? 'text-blue-600' : 'text-gray-800'
                    }`}
                >
                  {line.text}
                </p>
                {line.cnText && (
                  <p className="text-lg text-left font-light text-gray-600 mt-2">{line.cnText}</p>
                )}
              </div>
              <FaPlayCircle
                className={`text-2xl transition-colors duration-300 ${index === currentIndex ? 'text-blue-600' : 'text-gray-400'
                  }`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LyricsPlayer;
