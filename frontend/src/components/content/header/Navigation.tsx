import React from "react";
import styled from "styled-components";
import useQuery from "../../../hooks/useQuery";
import {Link} from "react-router-dom";

const NavigationContainer = styled.div`
  display: flex;
  margin-left: 100px;
`
const NavigationItem = styled(Link)`
  height: 32px;
  margin-right: 24px;
  
  display: flex;
  align-items: center;
  
  
  font-size: 14px;
  font-weight: 500;
  color: #111827;

  text-decoration: none;
  &:visited { color: black;}
`;
const Navigation : React.FC = () => {
    const [navigationData] = useQuery({url:"/galleries"});
    return (
        <NavigationContainer>
            {
                navigationData.map(item => <NavigationItem to={`/${item["id"]}`} key={item["id"]}>{item["title"]}</NavigationItem>)
            }
        </NavigationContainer>
    )
}
export default Navigation;