import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const recommendationsRef = useRef(null); 

  const scrollToRecommendations = () => {
    window.scrollTo({
      top: 355, 
      behavior: 'smooth', 
    });
  };

  return (
    <main className="flex-grow">
      {/* Hero Section */}
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

      <section
        id="daily-recommendations"
        ref={recommendationsRef} 
        className="py-16 px-6 bg-gray-100"
      >
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            每日推薦
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">夏が僕らを呼ぶのなら</h3>
              <p className="text-gray-700">*Luna</p>
              <iframe
                width="250"
                height="250"
                src="https://www.youtube.com/embed/d8P4Jq4lGqc?list=RDd8P4Jq4lGqc"
                title="*Luna - 夏が僕らを呼ぶのなら ( If Summer is calling us) feat.わかばやし | 2024 Ver."
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">キミシダイ列車</h3>
              <p className="text-gray-700">One Ok Rock</p>
              <iframe
                width="250"
                height="250"
                src="https://www.youtube.com/embed/GtyivRFy07c"
                title="キミシダイ列車"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Wherever you are</h3>
              <p className="text-gray-700">One Ok Rock</p>
              <iframe
                width="250"
                height="250"
                src="https://www.youtube.com/embed/eoQAnGx4Pss"
                title="Wherever you are"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
