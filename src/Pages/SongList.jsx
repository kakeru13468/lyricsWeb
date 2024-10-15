import React from 'react';
import { useLocation } from 'react-router-dom';

const SongList = () => {
    const location = useLocation();
    const { songData } = location.state || {}; 

    if (!songData) {
        return <p>找不到歌曲資料</p>;
    }

    return (
        <div className="flex flex-wrap justify-center p-8 mt-16">
            {songData.map((song) => (
                <div key={song.id} className="m-4 p-4 border rounded-lg shadow-md max-w-xs">
                    <h2 className="text-xl font-bold">{song.title}</h2>
                    <p className="text-gray-700">Artist: {song.artist}</p>
                    <p className="text-gray-600">Style: {song.songstyle}</p>
                    <a href={song.url} className="text-blue-500 hover:underline">Listen</a>
                </div>
            ))}
        </div>
    );
}

export default SongList;
