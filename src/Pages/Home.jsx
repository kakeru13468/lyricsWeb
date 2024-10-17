import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ReactPlayer from "react-player";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    window.scrollTo({ top: 650, behavior: "smooth" });
  };

  return (
    <main className="flex-grow">
      <section className="relative bg-blue-600 text-white py-20 px-6 md:py-32">
        <div className="max-w-screen-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-6 py-12 text-center bg-gradient-to-b from-blue-100 to-white rounded-lg shadow-lg md:py-16 md:px-12"
          >
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800 md:text-5xl">
               歡迎來到 KX Lyrics
            </h1>
            <div className="text-left md:max-w-2xl md:mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <h2 className="text-2xl font-semibold mb-2 text-blue-600">🔍 搜尋功能：</h2>
                <p className="text-gray-700">
                  我們的搜尋系統目前僅支援根據**歌曲名稱**進行查找。未來將會持續更新搜尋引擎！
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6"
              >
                <h2 className="text-2xl font-semibold mb-2 text-green-600">💫 許願表單：</h2>
                <p className="text-gray-700">
                  找不到你喜歡的歌曲嗎？在許願表單留下你的心願，我們將努力幫助你實現它！
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-2xl font-semibold mb-2 text-yellow-600">☕ 支持我們：</h2>
                <p className="text-gray-700">
                  喜歡我們的服務嗎？點擊下方按鈕**贊助我們喝杯咖啡**，你的支持是我們持續前進的動力！
                </p>
              </motion.div>
            </div>
          </motion.div>

          <p className="text-lg md:text-xl mb-6"></p>
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

