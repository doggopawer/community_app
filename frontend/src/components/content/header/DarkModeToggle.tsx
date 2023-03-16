import styled from "styled-components";

const StyledButton = styled.div`
  box-sizing: border-box;
    width: 44px;
    height: 32px;
    border: 1px solid #000;
`;

const DarkModeToggle = () => {

    return (
        <StyledButton>
            토글
        </StyledButton>
    )
}

export default DarkModeToggle;