import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import GalleryFeed from "./components/pages/galleryFeed";
import SingleImage from "./components/pages/singleImage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<GalleryFeed />} />
        <Route path="/image" element={<SingleImage />} />
      </Routes>
    </div>
  );
}

export default App;
