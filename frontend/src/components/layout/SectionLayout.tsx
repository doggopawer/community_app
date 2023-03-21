import styled from "styled-components";
import React, {ReactNode} from "react";

const Container = styled.div`
  width: 100%;
`
type SectionLayoutProps = {
    section: ReactNode
}



const SectionLayout: React.FC<SectionLayoutProps> = ({section}) => {

    return (
        <Container>
            {section}
        </Container>
    )
}

export default SectionLayout;