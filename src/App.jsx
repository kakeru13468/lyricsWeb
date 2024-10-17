import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import LyricsStudy from './Pages/LyricsStudy';
import Categories from './Pages/Categories';
import SongList from './Pages/SongList';
import Wishlist from './Pages/Wishlist';


function App() {
  return (
      <Router>
        <div className="App flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/LyricsStudy" element={<LyricsStudy />} />
              <Route path="/Categories" element={<Categories />} />
              <Route path="/SongList" element={<SongList />} />
              <Route path="/Wishlist" element={<Wishlist />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
