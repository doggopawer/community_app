import {useParams} from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import styled from "styled-components";
import Writing from "./Writing";
import React from "react";

const Container = styled.div`
  margin: 36px 0;
`;

const GalleryTitle = styled.div`
  box-sizing: border-box;
  width: 95%;
  height: 80px;
  padding : 16px 32px;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 10px;
    
  display: flex;
  justify-content: left;
  align-items: center;
    
  font-size: 20px;
  font-weight: 600;
`;
const GalleryButtonBox = styled.div`
  box-sizing: border-box;
  width: 95%;
  height: 36px;
  margin: 1.5rem auto;
  
  display: flex;
  justify-content: space-between;
`;
const GalleryCreateButton = styled.div`
  box-sizing: border-box;
  width: 96.4px;
  height: 36px;
  padding: 8px 16px 8px 12px;
  border: 1px solid #000;
  border-radius: 7.5px;
  
  font-size: 14px;
  line-height: 24px;
`;
const GallerySortButton = styled.div`
  box-sizing: border-box;
  width: 96.4px;
  height: 36px;
  padding: 8px 16px 8px 12px;
  border: 1px solid #000;
  border-radius: 7.5px;

  font-size: 14px;
  line-height: 24px;
`;
const WritingBox = styled.div`
  height: 113px;
`;
const GalleryDetailWritingList = styled.div`
  border-top: 1px solid #e5e7eb;
  width: 95%;
  margin: 0 auto;
`

const GalleryDetail = () => {
    let { galleryId } = useParams();
    const [galleryData] = useQuery({url:`/galleries?id=${galleryId}`});
    const [writingData] = useQuery({url:`/writings?galleryId=${galleryId}&_start=0&_end=20`});

    return (
        <Container>
            <GalleryTitle>
                {galleryData[0]?.["title"]}
            </GalleryTitle>
            <GalleryButtonBox>
                <GalleryCreateButton>작성하기</GalleryCreateButton>
                <GallerySortButton>정렬 순</GallerySortButton>
            </GalleryButtonBox>
            <GalleryDetailWritingList>
                {

                    writingData.map(item =>
                        <WritingBox key={item["id"]}>
                            <Writing
                                id={item["id"]}
                                author={item["author"]}
                                title={item["title"]}
                            />
                        </WritingBox>
                    )
                }
            </GalleryDetailWritingList>
        </Container>
    )
}

export default GalleryDetail;