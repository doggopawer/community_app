import styled from "styled-components";
import {useParams} from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import {useEffect} from "react";

const Container = styled.div`
  width: 95%;
  margin: 36px auto;
`;
const UserInfo = styled.div`
  width: 100%;
  height: 44px;
  margin-bottom: 36px;
  
  display: flex;
  justify-content: left;
  align-items: center;
`;
const Profile = styled.div`
  width: 44px;
  height: 44px;
  border: 1px solid #000;
  border-radius: 50%;
`;
const Author = styled.div`
  height: 24px;
  margin-left: 10px;
  
  font-size: 16px;
  color: #111827;
`;
const WritingInfo = styled.div`
   
`
const Title = styled.div`
  text-align: left;
  font-size: 30px;
  font-weight: 600;
`;
const Description = styled.div`
  margin: 2rem 0;
  
  text-align: left;
  font-size: 16px;
  color: #374151;
`;



const WritingDetail = () => {
    const { writingId } = useParams();
    const [writingData] = useQuery({url:`/writings?id=${writingId}`});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [writingId]);

    console.log(writingData);
    return (
        <Container>
            <UserInfo>
                <Profile/>
                <Author>{writingData[0]?.["author"]}</Author>
            </UserInfo>
            <WritingInfo>
                <Title>{writingData[0]?.["title"]}</Title>
                <Description>{writingData[0]?.["description"]}</Description>
            </WritingInfo>
        </Container>
    )
}

export default WritingDetail;