import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const convertTimeToSeconds = (timeString) => {
    const parts = timeString.split(/[:,]/);
    return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
};

const LyricsPlayer = ({ videoUrl, lyricsData }) => {
    const [currentIndex, setCurrentIndex] = useState(-1);

    const handleProgress = (progress) => {
        const currentTime = progress.playedSeconds;

        const index = lyricsData.findIndex((line, idx) => {
            const startTime = convertTimeToSeconds(line.time);
            const endTime = convertTimeToSeconds(lyricsData[idx + 1]?.time || "00:99:99,999");
            return currentTime >= startTime && currentTime < endTime;
        });

        if (index !== -1 && index !== currentIndex) {
            setCurrentIndex(index);
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 p-8 mt-16">
            <div className="w-full h-128 bg-gray-100 p-6 rounded-lg">
                <ReactPlayer
                    url={videoUrl}
                    controls={true}
                    width="100%"
                    height="100%" 
                    onProgress={handleProgress}
                />
            </div>

            <div className="w-full h-128 text-center bg-gray-100 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">歌詞</h2>
                <div className="w-full h-112 overflow-y-auto">
                    {lyricsData.map((line, index) => (
                        <p key={index} className={`transition-colors duration-300 ${index === currentIndex ? 'text-blue-600' : 'text-black'}`}>
                            {line.text}
                        </p>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default LyricsPlayer;
