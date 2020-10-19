import React from "react";
import styled from "styled-components";
import ViewingProp from "../../typings/ViewingProp";
import Modal from "../atoms/Modal/Modal";
import { MusicEnvAttr } from "../../typings/RoomPropType/ClassRoomProps";
import IFrameWrap from "../atoms/IFrameWrap";
import Title from "../atoms/Title";
import breakPoints from "../../constants/breakPoints";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
  title: string;
  musics: MusicEnvAttr["musicIframes"];
  isMobile: boolean;
}

function MusicModal({
  isShow,
  onClose,
  viewingScreen,
  title,
  musics,
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
          {musics.map((musicIframe) => (
            <OneMusic>
              <IFrameWrap iframeCode={musicIframe} />
            </OneMusic>
          ))}
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
  height: 90vh;

  ${breakPoints.downSm} {
  grid-template-rows: 64px 1fr;
  }
`;

export default MusicModal;
