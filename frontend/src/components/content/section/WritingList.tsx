import styled from "styled-components";
import Writing from "./Writing";
import React from "react";
import useQuery from "../../../hooks/useQuery";

const Container = styled.div`
    

`;

type WritingListProps = {
    gallery : string
};

const WritingList : React.FC<WritingListProps> = ({gallery}) => {
    const [writingListData] = useQuery({url:`/writings?gallery=${gallery}`});

    return (
        <Container>
            {
                writingListData.map(item =>
                    <Writing
                        key={item["id"]}
                        id={item["id"]}
                        author={item["author"]}
                        title={item["title"]}
                    />)
            }
        </Container>
    )
}

export default WritingList;