import React, { useEffect,useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 

const Categories = () => {
    useEffect(() =>{
        window.scrollTo(0,0);
    },[])
  const [songData, setSongData] = useState(null); 
  const navigate = useNavigate(); 

  const categories = [
    { name: 'JPOP', img: './assets/Jpop.jpg' },
    { name: 'VOCALOIDO', img: './assets/Hatsune_miku.png' },
    { name: 'ANIME', img: './assets/kita.jpg' },
    { name: 'ROCK', img: './assets/one_ok_rock.jpg' },
    { name: 'Lyricism', img: './assets/yorushika.jpg' },
    { name: 'Rapping', img: './assets/rorder.jpg' },
  ];

  const handleCategoryClick = async (songStyle) => {
    try {
      const response = await fetch(`http://localhost:5000/songs?songstyle=${encodeURIComponent(songStyle)}`);
      if (response.ok) {
        const data = await response.json();
        setSongData(data); 
        navigate('/SongList', { state: { songData: data } }); 
      } else {
        setSongData(null);
        console.error('找不到該歌曲');
      }
    } catch (error) {
      console.error('搜尋發生錯誤:', error);
    }
  };

  return (
    <div className="flex justify-center p-8 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg w-full">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative select-none rounded-lg shadow-lg overflow-hidden aspect-square bg-gray-200 flex items-center justify-center cursor-pointer"
            onClick={() => handleCategoryClick(category.name)} 
          >
            <img
              src={category.img}
              alt={category.name}
              className="absolute select-none inset-0 w-full h-full object-cover opacity-20"
            />
            <h2 className="z-10 select-none text-2xl font-bold text-black">{category.name}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
