// import React, { useState } from 'react';
// import ReactPlayer from 'react-player';


// const convertTimeToSeconds = (timeString) => {
//     const parts = timeString.split(/[:,]/);
//     return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
// };

// const LyricsPlayer = ({ videoUrl, lyricsData }) => {
    
//     if (!Array.isArray(lyricsData)) {
//         return <div>Loading...</div>; 
//     }
//     const [currentIndex, setCurrentIndex] = useState(-1);

//     const handleProgress = (progress) => {
//         const currentTime = progress.playedSeconds;

//         const index = lyricsData.findIndex((line, idx) => {
//             const startTime = convertTimeToSeconds(line.time);
//             const endTime = convertTimeToSeconds(lyricsData[idx + 1]?.time || "00:99:99,999");
//             return currentTime >= startTime && currentTime < endTime;
//         });

//         if (index !== -1 && index !== currentIndex) {
//             setCurrentIndex(index);
//         }
//     };

//     return (
//         <div className="flex flex-col md:flex-row gap-8 p-8 mt-2">
//             <div className="w-full h-128 bg-gray-100 p-6 rounded-lg">
//                 <ReactPlayer
//                     url={videoUrl}
//                     controls={true}
//                     width="100%"
//                     height="100%" 
//                     onProgress={handleProgress}
//                 />
//             </div>

//             <div className="w-full h-128 text-center bg-gray-100 p-6 rounded-lg">
//                 <h2 className="text-2xl font-bold mb-4">歌詞</h2>
//                 <div className="w-full h-112 overflow-y-auto">
//                     {lyricsData.map((line, index) => (
//                         <p key={index} className={`transition-colors duration-300 ${index === currentIndex ? 'text-blue-600' : 'text-black'}`}>
//                             {line.text}
//                         </p>
//                     ))}
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default LyricsPlayer;
import React, { useState } from 'react';
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

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 mt-2">
      <div className="w-full h-128 bg-gray-100 p-6 rounded-lg">
        <ReactPlayer
          url={videoUrl}
          controls={true}
          width="100%"
          height="100%"
          onProgress={handleProgress}
        />
      </div>

      <div className="w-full h-128 text-center bg-gray-100 p-6 rounded-lg overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">歌詞</h2>
        <div className="flex flex-col gap-4">
          {lyricsData.map((line, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-lg shadow-md bg-white`}
              initial={{ scale: 1 }}
              animate={
                index === currentIndex
                  ? { scale: 1.05, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)' }
                  : { scale: 1, boxShadow: 'none' }
              }
              transition={{ duration: 0.3 }}
            >
              <p
                className={`text-lg font-medium transition-colors duration-300 ${
                  index === currentIndex ? 'text-blue-600' : 'text-black'
                }`}
              >
                {line.text}
              </p>
              {line.cnText && ( 
                <p className="text-lg font-medium text-gray-600">
                  {line.cnText} 
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LyricsPlayer;
