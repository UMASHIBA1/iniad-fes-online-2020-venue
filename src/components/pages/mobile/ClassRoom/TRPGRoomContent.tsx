import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import {
  OneVideoEnvAttr,
  TRPGEnvAttr,
} from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import styled from "styled-components";
import ObjectMark from "../../../atoms/ObjectMark";
import VideoModal from "../../../molecules/VideoModal";
import ViewingProp from "../../../../typings/ViewingProp";
import TRPGModal from "../../../organisms/TRPGModal";

interface Props {
  trpgRoomProps: TRPGEnvAttr;
  history: ReturnType<typeof useHistory>;
  viewingScreen: ViewingProp;
}

const dataControllId = {
  door: "oneVideoRoomContent-left-door",
  objButton: "onevideoroomcontent-obj-button",
};

function TRPGRoomContent({
  trpgRoomProps: env,
  history,
  viewingScreen,
}: Props) {
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
      <TRPGModal
        isMobile={true}
        isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        video={env.video}
        viewingScreen={viewingScreen}
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
  }
`;

export default TRPGRoomContent;
