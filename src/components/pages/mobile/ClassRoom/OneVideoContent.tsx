import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import { OneVideoEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import styled, { css } from "styled-components";
import ObjectMark from "../../../atoms/ObjectMark";
import VideoModal from "../../../molecules/VideoModal";
import ViewingProp from "../../../../typings/ViewingProp";

interface Props {
  oneVideoProps: OneVideoEnvAttr;
  history: ReturnType<typeof useHistory>;
  viewingScreen: ViewingProp;
}

const dataControllId = {
  door: "oneVideoRoomContent-left-door",
  objButton: "onevideoroomcontent-obj-button",
};

function OneVideoContent({ oneVideoProps: env, history, viewingScreen }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  return (
    <Wrapper leftOrRight={env.leftOrRight}>
      <RoomMark
        imgPath={env.door.imgPath}
        dataControllId={dataControllId.door}
        roomTitle={env.door.title}
        onClick={() => {
          gotoTargetUrl(env.door.url);
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
        title={env.title}
        description={env.description}
        videoPropList={[env.videoProps]}
        viewingScreen={viewingScreen}
        isMobile={true}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ leftOrRight: OneVideoEnvAttr["leftOrRight"] }>`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > button {
    ${({ leftOrRight }) =>
      leftOrRight === "left" &&
      css`
        &[data-controll-id=${dataControllId.door}] {
          position: absolute;
          top: 40%;
          right: 3%;
        }
        &[data-controll-id=${dataControllId.objButton}] {
          position: absolute;
          top: 26%;
          left: 36%;
        }
      `}

    ${({ leftOrRight }) =>
      leftOrRight === "right" &&
      css`
        &[data-controll-id=${dataControllId.door}] {
          position: absolute;
          top: 40%;
          left: 3%;
        }
        &[data-controll-id=${dataControllId.objButton}] {
          position: absolute;
          top: 23%;
          left: 36%;
        }
      `}
  }
`;

export default OneVideoContent;
