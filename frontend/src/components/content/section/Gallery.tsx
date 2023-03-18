import styled from "styled-components";
import React from "react";
import WritingList from "./WritingList";

const Container = styled.div`
    margin : 50px 0;
`;
const GalleryTitle = styled.div`
    width : 400px;
    height: 64px;
    border: 1px solid #000;
`;

type titleProps = {
    id: string,
    title: string
}


const Gallery : React.FC<titleProps> = ({id,title}) => {
    return (
        <Container>
            <GalleryTitle>
                {title}
            </GalleryTitle>
            <WritingList  gallery={id}/>
        </Container>
    )
}

export default Gallery;