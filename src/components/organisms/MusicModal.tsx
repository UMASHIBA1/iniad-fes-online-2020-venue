import React from "react";
import styled from "styled-components";
import ViewingProp from "../../typings/ViewingProp";
import Modal from "../atoms/Modal/Modal";
import {MusicEnvAttr} from "../../typings/RoomPropType/ClassRoomProps";
import IFrameWrap from "../atoms/IFrameWrap";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewing?: ViewingProp;
  musics: MusicEnvAttr["musicIframes"];
}

function MusicModal({isShow, onClose, viewing, musics}: Props) {
  return(
    <Modal isShow={isShow} onClose={onClose} viewing={viewing} >
      <Wrapper>
        {musics.map((musicIframe) => (
          <OneMusic>
            <IFrameWrap iframeCode={musicIframe} />
          </OneMusic>
        ))}
      </Wrapper>
    </Modal>
  );
}

const OneMusic = styled.div`
  margin: 24px;
  width: 360px;
  height: 300px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  width: 100%;
  max-height: 90vh;
`;

export default MusicModal;
