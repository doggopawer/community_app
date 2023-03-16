import React from 'react';
import './App.css';
import PageLayout from "./components/layout/PageLayout";
import HeaderLayout from "./components/layout/header/HeaderLayout";
import Logo from "./components/content/header/Logo";
import Navigation from "./components/content/header/Navigation";
import SearchText from "./components/content/header/SearchText";
import Profile from "./components/content/header/Profile";
import DarkModeToggle from "./components/content/header/DarkModeToggle";

const App : React.FC = () => {
  return (
    <div className="App">
        <PageLayout header={<HeaderLayout
            headerLeft={
            <>
                <Logo/>
                <Navigation/>
            </>}
            headerRightLeft={
            <>
                <SearchText/>
                <DarkModeToggle/>
            </>}
            headerRightRight={<Profile/>}
        />}
                center={"center"}
                footer={"footer"}
                left={"left"}
                right={"right"}/>
                </div>
  )
}

export default App;
