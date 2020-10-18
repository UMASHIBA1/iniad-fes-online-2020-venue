import React from "react";
import styled from "styled-components";
import breakPoints from "../../constants/breakPoints";
import { whiteBGColor } from "../../cssProps/colors";
import { PhotoListEnvAttr } from "../../typings/RoomPropType/ClassRoomProps";
import ViewingProp from "../../typings/ViewingProp";
import Description from "../atoms/Description";
import Modal from "../atoms/Modal/Modal";
import Title from "../atoms/Title";
import { Tweet } from 'react-twitter-widgets'

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
  photos: PhotoListEnvAttr["photos"];
  title: string;
  description: string;
}

function PhotoListModal({
  isShow,
  onClose,
  viewingScreen,
  photos,
  title,
  description
}: Props) {


  return (
    <Modal isShow={isShow} onClose={onClose} viewing={viewingScreen}>
      <Wrapper>
      <TextWrapper>
        <Title title={title} />
        <Description description={description} />
      </TextWrapper>
      <ListWrapper>
        {photos.map((snsProp) => {
          if(snsProp.sns === "twitter" ){
            return(
          <Tweet tweetId={snsProp.tweetId} />
            )
          }else {
            return(null);
          }
        }
        )}
      </ListWrapper>
      </Wrapper>
    </Modal>
  );
}

const TextWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 800px;
  justify-content: center;
  grid-template-rows: auto auto;
  gap: 16px;
  width: 100%;
  padding: 32px 0;

  @media screen and (max-width: 895px) {
  grid-template-columns: 400px;
  }

  ${breakPoints.downSm} {
    grid-template-columns: 300px;
  }

`;


const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  justify-content: center;
  gap: 8px;
  box-sizing: border-box;
  width: 100%;

  ${breakPoints.downSm} {
  grid-template-columns: repeat(auto-fill, 300px);
  }
`;

const Wrapper = styled.div`
  ${whiteBGColor}
  height: 90vh;
  width: calc(100% - 16px);
  overflow: auto;
`

export default PhotoListModal;
