import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { VideoListEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import ObjectMark from "../../../atoms/ObjectMark";
import VideoModal from "../../../molecules/VideoModal";
import { useTypedSelector } from "../../../../redux/store";

interface Props {
  videoEnvProps: VideoListEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "videolistroomcontent-obj-button",
  door: "videolistroomcontent-left-door",
};

function VideoListRoomContent({ videoEnvProps, history }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  const viewingScreen = useTypedSelector(({ viewingScreen }) => viewingScreen);

  return (
    <Wrapper leftOrRight={videoEnvProps.leftOrRight}>
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
        isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        title={videoEnvProps.title}
        description={videoEnvProps.description}
        videoPropList={videoEnvProps.VideoProps}
        viewingScreen={viewingScreen}
        isMobile={true}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div<{leftOrRight: VideoListEnvAttr["leftOrRight"]}>`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > button {

    ${({leftOrRight}) => (leftOrRight === "left"&& css`
    &[data-controll-id=${dataControllId.door}] {
      position: absolute;
      top: 50%;
      right: 5%;
    }

    &[data-controll-id=${dataControllId.objButton}] {
      position: absolute;
      top: 25%;
      left: 37%;
    }
    `)}

    ${({leftOrRight}) => (leftOrRight === "right"&& css`
    &[data-controll-id=${dataControllId.door}] {
      position: absolute;
      top: 50%;
      left: 5%;
    }

    &[data-controll-id=${dataControllId.objButton}] {
      position: absolute;
      top: 25%;
      right: 37%;
    }
    `)}


  }
`;

export default VideoListRoomContent;
