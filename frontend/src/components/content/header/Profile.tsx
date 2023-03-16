import styled from "styled-components";

const Box = styled.div`
    display: flex;
    margin-left: 100px;
`
const UserNick = styled.div`
  width: 64px;
  height: 32px;
  border: 1px solid #000;
`
const ProfileImg = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #000;
`

const Profile = () => {

    return (
        <Box>
            <UserNick>nickname</UserNick>
            <ProfileImg/>
        </Box>
    )
}

export default Profile;