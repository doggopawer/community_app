import React, {ReactNode} from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const HeaderLeft = styled.div`
  display: flex;
`;
const HeaderRight = styled.div`
  display: flex;
`;
const HeaderRightLeft = styled.div`
  width: 303px;
  height: 35px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderRightRight = styled.div`
  display: flex;
`;
type HeaderLayoutProps = {
    headerLeft : ReactNode,
    headerRightLeft : ReactNode,
    headerRightRight : ReactNode,
}

const HeaderLayout : React.FC<HeaderLayoutProps> = ({headerLeft, headerRightLeft, headerRightRight}) => {
    return (
        <Container>
            <HeaderLeft>
                {headerLeft}
            </HeaderLeft>
            <HeaderRight>
                <HeaderRightLeft>
                    {headerRightLeft}
                </HeaderRightLeft>
                <HeaderRightRight>
                    {headerRightRight}
                </HeaderRightRight>
            </HeaderRight>
        </Container>
    )
}
export default HeaderLayout;