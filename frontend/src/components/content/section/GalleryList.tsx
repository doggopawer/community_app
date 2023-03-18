import styled from "styled-components";
import useQuery from "../../../hooks/useQuery";
import React from "react";
import Gallery from "./Gallery";


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const GalleryList = () => {
    const [galleryListData] = useQuery({url:"/galleries"});

    return (
        <Container>
            {
                galleryListData.map(item => <Gallery key={item["id"]} title={item["title"]} id={item["id"]}/>)
            }
        </Container>
    )
}

export default GalleryList;