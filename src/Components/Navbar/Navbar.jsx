import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Error from '../Error/Error';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true); 
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [songData, setSongData] = useState(null);
  const [showError, setShowError] = useState(false);
  const searchBoxRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldHide = currentScrollY > 100 && currentScrollY > lastScrollY;
      setIsNavbarOpen(!shouldHide);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSearchBox = () => setIsSearchVisible((prev) => !prev);

  const isActive = (path) => location.pathname === path;

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/songs?title=${encodeURIComponent(searchTerm)}`
      );
      if (response.ok) {
        const data = await response.json();
        const formattedData = Array.isArray(data) ? data : [data];
        setSongData(formattedData);

        if (formattedData.length === 0) {
          setShowError(true);
        } else {
          navigate('/SongList', { state: { songData: formattedData } });
        }
      } else {
        setSongData([]);
        setShowError(true);
      }
    } catch (error) {
      console.error('搜尋發生錯誤:', error);
      setShowError(true);
    }
  };

  return (
    <>
      <motion.nav
        className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg"
        animate={isNavbarOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className="px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex shrink-0">
              <img
                src="./assets/KX-foto.png"
                alt="Home Icon"
                className="w-32 h-8 object-contain"
              />
              <p className="sr-only">Website Title</p>
            </Link>

            <div className="flex items-center gap-5">
              <Link
                to="/"
                className={`inline-block px-2 py-1 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 ${
                  isActive('/') ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                }`}
              >
                首頁
              </Link>

              <div className="relative inline-block" ref={searchBoxRef}>
                <button
                  onClick={toggleSearchBox}
                  className="inline-block px-2 py-1 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-100 hover:text-gray-900"
                >
                  搜尋
                </button>

                {isSearchVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-1/2 mt-2 w-64 p-4 bg-white rounded-lg shadow-lg border border-gray-300 transform -translate-x-1/2"
                  >
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="輸入歌曲名稱"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                      onClick={handleSearch}
                      className="w-full py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                      送出
                    </button>
                  </motion.div>
                )}
              </div>

              <Link
                to="/Categories"
                className={`inline-block px-2 py-1 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 ${
                  isActive('/categories') ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                }`}
              >
                分類
              </Link>
              <Link
                to="/Wishlist"
                className="inline-block px-2 py-1 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-100 hover:text-gray-900"
              >
                許願
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {showError && <Error message="查無此歌曲" onClose={() => setShowError(false)} />}
    </>
  );
};

export default Navbar;
