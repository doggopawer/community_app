import styled from "styled-components";

const Box = styled.div`
  display: flex;
  margin-left: 102px;
`
const UserNick = styled.div`
  width: 64px;
  height: 32px;
  margin-right: 1.25rem;
  
  display: flex;
  align-items: center;
`
const ProfileImg = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #000;
  border-radius: 50%;
`

const Profile = () => {

    return (
        <Box>
            <UserNick>user1</UserNick>
            <ProfileImg/>
        </Box>
    )
}

export default Profile;