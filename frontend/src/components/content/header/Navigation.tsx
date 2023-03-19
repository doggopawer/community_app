import React from "react";
import styled from "styled-components";
import useQuery from "../../../hooks/useQuery";

const NavigationContainer = styled.div`
  display: flex;
  margin-left: 100px;
`
const NavigationItem = styled.div`
  height: 32px;
  margin-right: 24px;
  
  display: flex;
  align-items: center;
  
  
  font-size: 14px;
  font-weight: 500;
  color: #111827;
`;
const Navigation : React.FC = () => {
    const [navigationData] = useQuery({url:"/galleries"});
    return (
        <NavigationContainer>
            {
                navigationData.map(item => <NavigationItem key={item["id"]}>{item["title"]}</NavigationItem>)
            }
        </NavigationContainer>
    )
}
export default Navigation;