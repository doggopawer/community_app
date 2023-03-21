import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/page/MainPage";
import GalleryPage from "./components/page/GalleryPage";

const App : React.FC = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/:galleryId" element={<GalleryPage />}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App;
