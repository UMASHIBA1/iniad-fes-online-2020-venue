import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { VideoEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import logoPath from "../../../../statics/svgs/iniadfes-logo.svg";
import ObjectMark from "../../../atoms/ObjectMark";
import VideoModal from "../../../molecules/VideoModal";


interface Props {
  videoEnvProps: VideoEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "videoroomcontent-obj-button",
  door: "videoroomcontent-left-door",
};

function VideoRoomContent({ videoEnvProps, history }: Props) {
    const [isShowModal, changeIsShowModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  return(
    <Wrapper>
      Video Room
      <RoomMark
              imgPath={logoPath}
        dataControllId={dataControllId.door}
        roomTitle={videoEnvProps.door.title}
        onClick={() => {
          gotoTargetUrl(videoEnvProps.door.url);
        }}
      />
      <ObjectMark onClick={() => changeIsShowModal(true)} dataControllId={dataControllId.objButton} />
      <VideoModal
      isShow={isShowModal}
      onClose={() => changeIsShowModal(false)}
      videoProps={videoEnvProps.VideoProps}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
    position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

    > button {
    &[data-controll-id=${dataControllId.door}] {
      position: absolute;
      top: 60%;
      left: 20%;
    }

    &[data-controll-id=${dataControllId.objButton}] {
      position: absolute;
      top: 50%;
      left: 45%;
    }
  }
`

export default VideoRoomContent;
