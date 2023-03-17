import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "../../../axios";
import useQuery from "../../../hooks/useQuery";

const NavigationContainer = styled.div`
  display: flex;
  margin-left: 100px;
`
const NavigationItem = styled.div`
  height: 32px;
  border: 1px solid #000;
  margin-right: 40px;
`;
const Navigation : React.FC = () => {
    const [navigationData] = useQuery({url:"/galleries"});
    return (
        <NavigationContainer>
            {
                navigationData.map(item => <NavigationItem>{item["title"]}</NavigationItem>)
            }
        </NavigationContainer>
    )
}
export default Navigation;