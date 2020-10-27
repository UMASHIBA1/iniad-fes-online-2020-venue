import React from "react";
import styled from "styled-components";
import ViewingProp from "../../typings/ViewingProp";
import Modal from "../atoms/Modal/Modal";
import { ArtListEnvAttr } from "../../typings/RoomPropType/ClassRoomProps";
import Title from "../atoms/Title";
import breakPoints from "../../constants/breakPoints";
import Img from "../atoms/Img";
import { normalShadow } from "../../cssProps/shadow";
import { radiusMd } from "../../cssProps/radius";
import H2 from "../atoms/H2";
import { blackColor } from "../../constants/colors";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
  title: string;
  artList: ArtListEnvAttr["artList"];
  isMobile: boolean;
}

function ArtListModal({
  isShow,
  onClose,
  viewingScreen,
  title,
  artList,
  isMobile,
}: Props) {
  return (
    <Modal
      isShow={isShow}
      onClose={onClose}
      viewing={viewingScreen}
      isMobile={isMobile}
    >
      <Wrapper>
        <TitleWrapper>
          <Title title={title} />
        </TitleWrapper>
        <ArtList>
          {artList.map((art) => (
            <OneArt key={art.url + art.title}>
              <Img src={art.url} alt={art.title} />
              <H2 color={blackColor}>{art.title}</H2>
            </OneArt>
          ))}
        </ArtList>
      </Wrapper>
    </Modal>
  );
}

const TitleWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const ArtList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: calc(100% - 32px);
  height: 100%;
  overflow: auto;
`;

const OneArt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 360px;
  margin: 16px;
  ${normalShadow(3)}
  ${radiusMd}
    > ${Img} {
    object-fit: contain;
    height: 100%;
    padding: 16px 32px;
    object-fit: contain;
    border-bottom: #808080 1px solid;
  }

  > ${H2} {
    padding: 4px 32px 32px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 84px 1fr;
  justify-items: center;
  height: 90vh;

  ${breakPoints.downSm} {
    grid-template-rows: 64px 1fr;
    height: 80vh;
  }
`;

export default ArtListModal;
