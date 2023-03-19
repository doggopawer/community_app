import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/page/MainPage";

const App : React.FC = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App;
