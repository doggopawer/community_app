import styled from "styled-components";

const StyledDiv = styled.div`
  width: 115px;
  height: 32px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 26px;
  font-weight: bold;
  
  transform: scaleX(1.1);
  
`

const Logo = () => {

    return (
        <StyledDiv>
            ☀LOGO
        </StyledDiv>
    )
}
export default Logo;