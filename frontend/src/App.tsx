import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/page/MainPage";
import GalleryPage from "./components/page/GalleryPage";
import WritingPage from "./components/page/WritingPage";
import WritingCreatePage from "./components/page/WritingCreatePage";

const App : React.FC = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/:galleryId" element={<GalleryPage />}></Route>
                <Route path="/writings/new" element={<WritingCreatePage />}></Route>
                <Route path="/writings/:writingId" element={<WritingPage />}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App;
