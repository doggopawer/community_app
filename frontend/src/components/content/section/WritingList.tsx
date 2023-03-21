import styled from "styled-components";
import Writing from "./Writing";
import React from "react";
import useQuery from "../../../hooks/useQuery";

const Container = styled.div`
    

`;
const WritingBox = styled.div`
  height: 80px;
`

type WritingListProps = {
    gallery : string
};

const WritingList : React.FC<WritingListProps> = ({gallery}) => {
    const [writingListData] = useQuery({url:`/writings?galleryId=${gallery}&_start=0&_end=5`});

    return (
        <Container>
            {
                writingListData.map(item =>
                    <WritingBox key={item["id"]}>
                        <Writing
                            id={item["id"]}
                            author={item["author"]}
                            title={item["title"]}
                        />
                    </WritingBox>
                )
            }
        </Container>
    )
}

export default WritingList;