import HeaderLayout from "../layout/HeaderLayout";
import Logo from "../content/header/Logo";
import Navigation from "../content/header/Navigation";
import SearchText from "../content/header/SearchText";
import DarkModeToggle from "../content/header/DarkModeToggle";
import Profile from "../content/header/Profile";
import SectionLayout from "../layout/SectionLayout";
import PageLayout from "../layout/PageLayout";
import React from "react";
import GalleryDetail from "../content/section/GalleryDetail";

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
                section={<GalleryDetail/>}
            />}

            footer={""}
            left={""}
            right={""}/>
    )
}

export default MainPage;