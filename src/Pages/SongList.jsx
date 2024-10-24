import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion'; 

const SongList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const location = useLocation();
    const navigate = useNavigate();
    const { songData } = location.state || {}; 
    console.log('Received songData:', songData); 

    if (!songData) {
        return <p>找不到歌曲資料</p>;
    }

    const handleSongClick = (song) => {
        navigate('/LyricsStudy', { state: { songData: song } });
    };

    return (
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-8 mt-16">
        {songData.map((song) => (
            <motion.div 
                key={song.id}
                className="m-4 p-4 border rounded-lg shadow-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSongClick(song)}
            >
                <h2 className="text-xl font-bold">{song.title}</h2>
                <p className="text-gray-700">作者: {song.artist}</p>
                <ReactPlayer 
                    url={song.url} 
                    className="react-player" 
                    controls={true} 
                    width='100%' 
                    height='200px' 
                    onClick={(e) => e.stopPropagation()} 
                />
            </motion.div>
        ))}
    </div>
    
    );
}

export default SongList;
