import React from 'react';
import LyricsPlayer from '../Components/LyricsPlayer/LyricsPlayer';
import SongInfo from '../Components/SongInfo/SongInfo';
import { useLocation } from 'react-router-dom';
const LyricsStudy = () => {
    const location = useLocation();
    const { songData } = location.state || {}; 
    if (!songData) {
        return <p>找不到歌曲資料</p>;
    }
    const songName = songData.title;
    const songAuthor = songData.artist;
    const videoURL = songData.url;
    const lyricsData = songData.lyrics;
    
    return (
        <>
        <SongInfo songName={songName} songAuthor={songAuthor}/>
        <LyricsPlayer videoUrl={videoURL} lyricsData={lyricsData} />
        </>
    );
};

export default LyricsStudy;

