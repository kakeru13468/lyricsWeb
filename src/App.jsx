import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import LyricsStudy from './Pages/LyricsStudy';
// import Favorites from './Pages/Favorites';
// import Categories from './Pages/Categories';
// import Login from './Pages/Login';
// import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LyricsStudy" element={<LyricsStudy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
