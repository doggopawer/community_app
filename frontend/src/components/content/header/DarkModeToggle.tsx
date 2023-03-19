import styled from "styled-components";

const StyledButton = styled.div`
  box-sizing: border-box;
  width: 44px;
  height: 24px;
  border: 1px solid #000;
  border-radius: 9999px;
    
  cursor: pointer;
`;

const DarkModeToggle = () => {

    return (
        <StyledButton/>
    )
}

export default DarkModeToggle;