import React, { useState } from "react";
import { MusicEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import ObjectMark from "../../../atoms/ObjectMark";
import RoomMark from "../../../atoms/RoomMark";
import MusicModal from "../../../organisms/MusicModal";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import styled from "styled-components";
import useDidMount from "../../../../hooks/useDidMount/useDidMount";

interface Props {
  musicEnvProps: MusicEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "musicroomcontent-obj-button",
  door: "musicroomcontent-left-door",
};

function MusicRoomContent({ musicEnvProps, history }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  useDidMount(() => {
    setTimeout(() => {
      changeIsShowModal(true)
    }, 200);
  })

  return (
    <Wrapper>
      <RoomMark
        imgPath={musicEnvProps.door.imgPath}
        dataControllId={dataControllId.door}
        roomTitle={musicEnvProps.door.title}
        onClick={() => {
          gotoTargetUrl(musicEnvProps.door.url);
        }}
      />
      <ObjectMark title="音楽" onClick={() => changeIsShowModal(true)} dataControllId={dataControllId.objButton} />
      <MusicModal
        isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        title={musicEnvProps.title}
        musics={musicEnvProps.musicIframes}
        pickupMusics={musicEnvProps.pickUpIframes}
        isMobile={false}
      />
    </Wrapper>
  );
}

// NOTE: RAISON DETREしかないので左側教室版のみ作る
const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > button {
    &[data-controll-id=${dataControllId.door}] {
      position: absolute;
      top: 47%;
      right: 5%;
    }

    &[data-controll-id=${dataControllId.objButton}] {
      position: absolute;
      top: 31%;
      left: 33%;
    }
  }
`;

export default MusicRoomContent;
