import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "../../../axios";

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
    const [data, setData] = useState([]);
    useEffect(() => {
        (async() => {
            const response =  await axios.get("/galleries");
            setData(response.data);
        })();
    },[]);

    return (
        <NavigationContainer>
            {
                data.map(item => <NavigationItem>{item["title"]}</NavigationItem>)
            }
        </NavigationContainer>
    )
}
export default Navigation;