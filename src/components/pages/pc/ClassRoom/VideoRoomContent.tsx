import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { VideoEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
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
  return (
    <Wrapper leftOrRight={videoEnvProps.leftOrRight}>
      Video Room
      <RoomMark
        imgPath={videoEnvProps.door.imgPath}
        dataControllId={dataControllId.door}
        roomTitle={videoEnvProps.door.title}
        onClick={() => {
          gotoTargetUrl(videoEnvProps.door.url);
        }}
      />
      <ObjectMark
        title="動画"
        onClick={() => changeIsShowModal(true)}
        dataControllId={dataControllId.objButton}
      />
      <VideoModal
        title={videoEnvProps.title}
        description={videoEnvProps.description}
        isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        videoPropList={videoEnvProps.VideoProps}
        isMobile={false}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div<{leftOrRight: VideoEnvAttr["leftOrRight"]}>`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > button {

    ${({leftOrRight}) => (leftOrRight==="right"&&css`
    &[data-controll-id=${dataControllId.door}] {
      position: absolute;
      top:  47%;
      left: 5%;
    }

    &[data-controll-id=${dataControllId.objButton}] {
      position: absolute;
      top: 30%;
      right: 33%;
    }
    `)}

        ${({leftOrRight}) => (leftOrRight==="left"&&css`
    &[data-controll-id=${dataControllId.door}] {
      position: absolute;
      top:  47%;
      right: 5%;
    }

    &[data-controll-id=${dataControllId.objButton}] {
      position: absolute;
      top: 30%;
      left: 33%;
    }
    `)}

  }
`;

export default VideoRoomContent;
