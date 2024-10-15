import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [songData, setSongData] = useState(null);
  const searchBoxRef = useRef(null);
  const location = useLocation();

  const toggleSearchBox = () => setIsSearchVisible((prev) => !prev);


  useEffect(() => {
    const searchOut = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener('mousedown', searchOut);
    return () => document.removeEventListener('mousedown', searchOut);
  }, [searchBoxRef]);

  const isActive = (path) => location.pathname === path;


  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/songs?title=${encodeURIComponent(searchTerm)}`);
      if (response.ok) {
        const data = await response.json();
        setSongData(data);
      } else {
        setSongData(null);
        console.error('找不到該歌曲');
      }
    } catch (error) {
      console.error('搜尋發生錯誤:', error);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link to="/">
              <p className="sr-only">Website Title</p>
            </Link>
          </div>

          <div className="flex flex-grow items-center justify-between">
            <div className="flex items-center justify-center gap-5">
              <Link
                to="/"
                className={`inline-block select-none rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 ${isActive('/') ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                  }`}
              >
                首頁
              </Link>

              <div className="relative inline-block" ref={searchBoxRef}>
                <button
                  onClick={toggleSearchBox}
                  className="inline-block select-none cursor-pointer rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                >
                  搜尋
                </button>

                {isSearchVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 rounded-lg border border-gray-300 bg-white p-4 shadow-lg"
                  >
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="輸入歌曲名稱"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                      onClick={handleSearch}
                      className="mt-2 w-full rounded-md bg-blue-500 text-white py-2 px-3 hover:bg-blue-600"
                    >
                      送出
                    </button>
                  </motion.div>
                )}
              </div>

              <Link
                to="/Categories"
                className={`inline-block select-none rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 ${isActive('/categories') ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                  }`}
              >
                分類
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/Register"
                className="hidden select-none items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
              >
                註冊
              </Link>
              <Link
                to="/login"
                className="inline-flex select-none items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                登入
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
