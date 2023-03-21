import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledLink = styled(Link)`
  width: 115px;
  height: 32px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 26px;
  font-weight: bold;
  
  transform: scaleX(1.1);

  text-decoration: none;
  &:visited { color: black;}
`

const Logo = () => {

    return (
        <StyledLink to={"/"}>
            ☀LOGO
        </StyledLink>
    )
}
export default Logo;