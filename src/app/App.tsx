import "./App.scss";
import { Routes, Route } from "react-router-dom";
import GalleryFeed from "./pages/GalleryFeed";
import SingleImage from "./pages/SingleImage";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<GalleryFeed />} />
          <Route path="/image/:id" element={<SingleImage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
