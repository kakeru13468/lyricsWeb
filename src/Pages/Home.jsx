import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ReactPlayer from "react-player";

const Home = () => {
  const [songs, setSongs] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/songs"); 
        setSongs(response.data); 
      } catch (error) {
        console.error("Error fetching songs:", error);
        setError("無法載入歌曲，請稍後再試。");
      }
    };

    fetchSongs(); 
  }, []);

  const scrollToRecommendations = () => {
    window.scrollTo({ top: 355, behavior: "smooth" });
  };

  return (
    <main className="flex-grow">
      <section className="relative bg-blue-600 text-white py-20 px-6 md:py-32">
        <div className="max-w-screen-md mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold mb-4 md:text-6xl"
          >
            なんで春日影やったの
          </motion.h1>
          <p className="text-lg md:text-xl mb-6">なんで春日影やったの</p>
          <motion.button
            onClick={scrollToRecommendations}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-200"
          >
            開始使用
          </motion.button>
        </div>
      </section>

      <section id="daily-recommendations" className="py-16 px-6 bg-gray-100">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            每日推薦
          </h2>
          {error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {songs.map((song, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">{song.title}</h3>
                  <p className="text-gray-700">{song.artist}</p>
                  <ReactPlayer 
                    url={song.url} 
                    width="100%" 
                    height="250px" 
                    controls 
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;

