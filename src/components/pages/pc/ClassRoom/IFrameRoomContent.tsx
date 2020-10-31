import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import { IframeEnvAttr, OneVideoEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import styled, { css } from "styled-components";
import IFramePageModal from "../../../organisms/IFramePageModal";
import ObjectMark from "../../../atoms/ObjectMark";
import CircleDescriptionModal from "../../../organisms/CircleDescriptionModal";

interface Props {
  iframeRoomProps: IframeEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  door: "iframeRoomContent-left-door",
  objButton: "iframeRoomContent-objbutton"
};

function IFrameRoomContent({ iframeRoomProps: env, history }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  return (
    <Wrapper leftOrRight={env.leftOrRight}>
      <CircleDescriptionModal isMobile={false} description={env.circleDescription} title={env.circleTitle} />
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
          top: 30%;
          left: 33%;
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
          top: 30%;
          right: 33%;
        }

      `}
  }
`;

export default IFrameRoomContent;
