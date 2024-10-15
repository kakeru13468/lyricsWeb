// Categories.jsx
import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'JPOP', img: "./assets/Jpop.jpg" },
  { name: 'VOCALOID', img: './assets/Hatsune_miku.png' },
  { name: 'ANIME', img: './assets/kita.jpg' },
  { name: 'ROCK', img: './assets/one_ok_rock.jpg' },
  { name: 'Lyricism', img: './assets/yorushika.jpg' },
  { name: 'Rapping', img: './assets/rorder.jpg' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 100,
    },
  }),
  hover: { 
    scale: 1.05, 
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)', 
  },
};

const Categories = () => {
    return (
      <div className="flex justify-center p-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg w-full">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative select-none rounded-lg shadow-lg overflow-hidden aspect-square bg-gray-200 flex items-center justify-center"
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
