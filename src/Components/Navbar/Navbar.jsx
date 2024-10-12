import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchBoxRef = useRef(null);

  const toggleSearchBox = () => {
    setIsSearchVisible(prevState => !prevState);
  };

  useEffect(() => {
    const searchOut = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener('mousedown', searchOut);
    
    return () => {
      document.removeEventListener('mousedown', searchOut);
    };
  }, [searchBoxRef]);

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <p className="sr-only">Website Title</p>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a aria-current="page"
              className="inline-block select-none rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#">首頁</a>
            <a className="inline-block select-none rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#">收藏</a>
            <div className="relative inline-block" ref={searchBoxRef}>
              <a
                onClick={toggleSearchBox}
                className="inline-block select-none cursor-pointer rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              >
                搜尋
              </a>
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
                    placeholder="輸入搜尋內容"
                  />
                </motion.div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end gap-3">
            <a className="hidden select-none items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
              href="/login">註冊</a>
            <a className="inline-flex select-none items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="/login">登入</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
