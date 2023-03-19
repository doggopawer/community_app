import HeaderLayout from "../layout/HeaderLayout";
import Logo from "../content/header/Logo";
import Navigation from "../content/header/Navigation";
import SearchText from "../content/header/SearchText";
import DarkModeToggle from "../content/header/DarkModeToggle";
import Profile from "../content/header/Profile";
import SectionLayout from "../layout/SectionLayout";
import GalleryList from "../content/section/GalleryList";
import PageLayout from "../layout/PageLayout";
import React from "react";

const MainPage = () => {

    return (
        <PageLayout
            header={<HeaderLayout
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
            center={<SectionLayout
                section={<GalleryList/>}
            />}

            footer={""}
            left={""}
            right={""}/>
    )
}

export default MainPage;