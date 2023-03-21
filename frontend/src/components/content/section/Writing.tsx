import styled from "styled-components";
import React from "react";
import {Link} from "react-router-dom";

const Container = styled(Link)`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 16px 0;
  border-bottom: 1px solid #e5e7eb;
  
  display: inline-block;

  text-decoration: none;
  &:visited { color: black;}
`;

const WritingAuthor = styled.div`
  height: 20px;
  
  text-align: left;
  color: #374151;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.25rem;
`
const WritingTitle = styled.div`
  height: 20px;
  
  text-align: left;
  color: #111827;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25rem;
`


type WritingProps = {
    id: number;
    title: string;
    author: string;
};


const Writing : React.FC<WritingProps> = ({id, author, title}) => {

    return (
        <Container to ={`/writings/${id}`}>
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