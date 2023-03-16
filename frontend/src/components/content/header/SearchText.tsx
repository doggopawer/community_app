import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 235px;
  height: 32px;
  border: 1px solid #000;
`;


const SearchText: React.FC = () => {
    return (
        <StyledInput type={"text"} placeholder={"검색"}>
        </StyledInput>
    );
};

export default SearchText;
