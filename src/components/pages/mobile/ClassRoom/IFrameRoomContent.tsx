import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import { IframeEnvAttr, OneVideoEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import styled, { css } from "styled-components";
import IFramePageModal from "../../../organisms/IFramePageModal";
import ObjectMark from "../../../atoms/ObjectMark";
import ViewingProp from "../../../../typings/ViewingProp";

interface Props {
  iframeRoomProps: IframeEnvAttr;
  history: ReturnType<typeof useHistory>;
  viewingScreen: ViewingProp;
}

const dataControllId = {
  door: "iframeRoomContent-left-door",
  objButton: "iframeRoomContent-objbutton"
};

function IFrameRoomContent({ iframeRoomProps: env, history, viewingScreen }: Props) {
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
        title="コンテンツ"
        onClick={() => changeIsShowModal(true)}
        dataControllId={dataControllId.objButton}
      />
      <IFramePageModal
      viewingScreen={viewingScreen}
      iframeCode={env.iframeCode}
      isMobile={false}
      isShow={isShowModal}
      onClose={() => {changeIsShowModal(false)}}
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

export default IFrameRoomContent;
