import styled from "styled-components";
import React from "react";
import WritingList from "./WritingList";
import {Link} from "react-router-dom";

const Container = styled.div`
    margin : 32px 0;
`;
const GalleryTitle = styled(Link)`
    box-sizing: border-box;
    width : 400px;
    height: 64px;
    padding : 0 32px;
    border: 1px solid #000;
    border-radius: 10px;
  
    display: flex;
    justify-content: left;
    align-items: center;
  
    color: #111827;
    font-size: 18px;
    font-weight: 600;

    text-decoration: none;
    &:visited { color: black;}
`;

type titleProps = {
    id: string,
    title: string
}


const Gallery : React.FC<titleProps> = ({id,title}) => {
    return (
        <Container>
            <GalleryTitle to={`/${id}`}>
                {title}
            </GalleryTitle>
            <WritingList  gallery={id}/>
        </Container>
    )
}

export default Gallery;