import React from "react";
import styled from "styled-components";
import { whiteBGColor } from "../../cssProps/colors";
import { radiusMd } from "../../cssProps/radius";
import { PhotoListEnvAttr } from "../../typings/RoomPropType/ClassRoomProps";
import ViewingProp from "../../typings/ViewingProp";
import IFrameWrap from "../atoms/IFrameWrap";
import Modal from "../atoms/Modal/Modal";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
  photoIframes: PhotoListEnvAttr["photoIframes"];
}

function PhotoListModal({
  isShow,
  onClose,
  viewingScreen,
  photoIframes,
}: Props) {
  return (
    <Modal isShow={isShow} onClose={onClose} viewing={viewingScreen}>
      <Wrapper>
        {photoIframes.map((photocode, i) => (
          <OnePhoto key={i}>
            <IFrameWrap iframeCode={photocode} />
          </OnePhoto>
        ))}
      </Wrapper>
    </Modal>
  );
}

const OnePhoto = styled.div`
  ${radiusMd}
  ${whiteBGColor}
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  grid-auto-flow: dense;
  justify-content: center;
  gap: 8px;
  height: 90vh;
  width: 100%;
  margin: 16px;
`;

export default PhotoListModal;
