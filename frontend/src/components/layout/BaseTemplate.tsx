import styled from "styled-components";
import React, {ReactNode} from "react";

const Header = styled.header`
  height: 64px;
  border-bottom: 1px solid #000;
`;
const HeaderContainer = styled.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  border-right: 1px solid #000;
  border-left: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Main = styled.main`
`;
const MainContainer = styled.div`
  width : 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;
const Section = styled.section`
  width: 70%;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  display: flex;
  justify-content: center;
`;
const Aside = styled.aside`
  width: 15%;
`;
const Footer = styled.footer`
  border-top : 1px solid #000;
  height: 183px;
`;
const FooterContainer = styled.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`

interface BaseTemplateProps {
    header: JSX.Element,
    footer: ReactNode,
    left?: ReactNode,
    right?: ReactNode,
    center: ReactNode
}


function BaseTemplate({header, footer, center,left, right}: BaseTemplateProps) {
    return (
        <>
            <Header>
                <HeaderContainer>
                        {header}
                </HeaderContainer>
            </Header>
            <Main>
                <MainContainer>
                    <Aside>{left}</Aside>
                    <Section>
                        {center}
                    </Section>
                    <Aside>{right}</Aside>
                </MainContainer>
            </Main>
            <Footer>
                <FooterContainer>
                    {footer}
                </FooterContainer>
            </Footer>
        </>
    )
}

export default BaseTemplate;