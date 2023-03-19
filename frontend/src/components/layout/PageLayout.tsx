import styled from "styled-components";
import React, {ReactNode} from "react";

const Header = styled.header`
  height: 64px;
  background: #FFF;
  border-bottom: 1px solid lightgray;
  
  position : sticky;
  top: 0;
  left: 0;
  right: 0;
`;
const HeaderWrapper = styled.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Main = styled.main`
`;
const MainWrapper = styled.div`
  width : 1280px;
  height: 100%;
  min-height: 1200px;
  margin: 0 auto;
  
  display: flex;
  
`;
const Section = styled.section`
  width: 70%;
  display: flex;
  justify-content: center;
`;
const Aside = styled.aside`
  width: 15%;
`;
const Footer = styled.footer`
  height: 183px;
`;
const FooterWrapper = styled.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
`
interface BaseTemplateProps {
    header: ReactNode,
    footer: ReactNode,
    left?: ReactNode,
    right?: ReactNode,
    center: ReactNode
}
const PageLayout : React.FC<BaseTemplateProps> = ({header, footer, center,left, right}) => {
    return (
        <>
            <Header>
                <HeaderWrapper>
                        {header}
                </HeaderWrapper>
            </Header>
            <Main>
                <MainWrapper>
                    <Aside>{left}</Aside>
                    <Section>
                        {center}
                    </Section>
                    <Aside>{right}</Aside>
                </MainWrapper>
            </Main>
            <Footer>
                <FooterWrapper>
                    {footer}
                </FooterWrapper>
            </Footer>
        </>
    )
}

export default PageLayout;