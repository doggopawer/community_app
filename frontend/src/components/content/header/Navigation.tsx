import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";

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
            const response =  await axios.get("http://localhost:4000/galleries");
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