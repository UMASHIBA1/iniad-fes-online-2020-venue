import React from "react";
import styled from "styled-components";
import ViewingProp from "../../typings/ViewingProp";
import Modal from "../atoms/Modal/Modal";
import { MusicEnvAttr } from "../../typings/RoomPropType/ClassRoomProps";
import IFrameWrap from "../atoms/IFrameWrap";
import Title from "../atoms/Title";
import breakPoints from "../../constants/breakPoints";
import { radiusMd } from "../../cssProps/radius";
import H2 from "../atoms/H2";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
  title: string;
  pickupMusics: MusicEnvAttr["pickUpIframes"];
  musics: MusicEnvAttr["musicIframes"];
  isMobile: boolean;
}

function MusicModal({
  isShow,
  onClose,
  viewingScreen,
  title,
  musics,
  pickupMusics,
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
        <MusicWrapper>
          <PickUpWrapper>
            <H2 color="#ff7700">Pick Up!</H2>
            {pickupMusics.map((musicIframe) => (
              <OneMusic key={musicIframe}>
                <IFrameWrap iframeCode={musicIframe} />
              </OneMusic>
            ))}
          </PickUpWrapper>
          <NormalMusicWrapper>
            {musics.map((musicIframe) => (
              <OneMusic key={musicIframe}>
                <IFrameWrap iframeCode={musicIframe} />
              </OneMusic>
            ))}
          </NormalMusicWrapper>
        </MusicWrapper>
      </Wrapper>
    </Modal>
  );
}

const OneMusic = styled.div`
  margin: 24px;
  width: 360px;
  max-width: 98%;
  height: 300px;
`;

const PickUpWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: calc(100% - 32px);
  border: #ff7700 2px solid;
  ${radiusMd}

  >${H2} {
    padding: 24px 0 8px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const NormalMusicWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: calc(100% - 32px);
`;

const MusicWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  width: 100%;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 84px 1fr;
  justify-content: center;
  height: 70vh;

  ${breakPoints.downSm} {
    grid-template-rows: 64px 1fr;
  }
`;

export default MusicModal;
