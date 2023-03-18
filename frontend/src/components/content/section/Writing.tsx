import styled from "styled-components";
import React from "react";

const Container = styled.div`
    width: 400px;
    height: 80px;
    border-top: 1px solid #000;
`;

const WritingAuthor = styled.div`
    height: 30%;
`
const WritingTitle = styled.div`
    height: 70%;
`


type WritingProps = {
    id: number;
    title: string;
    author: string;

};


const Writing : React.FC<WritingProps> = ({id, author, title}) => {


    return (
        <Container>
            <WritingAuthor>
                {author}
            </WritingAuthor>
            <WritingTitle>
                {title}
            </WritingTitle>
        </Container>
    )
}

export default Writing;