import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { PhotoListEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import ObjectMark from "../../../atoms/ObjectMark";
import ViewingProp from "../../../../typings/ViewingProp";
import IFramePageModal from "../../../organisms/IFramePageModal";

interface Props {
  photoListEnvProps: PhotoListEnvAttr;
  history: ReturnType<typeof useHistory>;
  viewingScreen: ViewingProp;
}

const dataControllId = {
  objButton: "photolistRoomContent-obj-button",
  door: "photolistRoomContent-left-door",
};

function PhotoListContent({ photoListEnvProps, history, viewingScreen }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  return (
    <Wrapper>
      <RoomMark
        imgPath={photoListEnvProps.door.imgPath}
        dataControllId={dataControllId.door}
        roomTitle={photoListEnvProps.door.title}
        onClick={() => {
          gotoTargetUrl(photoListEnvProps.door.url);
        }}
      />
      <ObjectMark
      title="写真"
        onClick={() => changeIsShowModal(true)}
        dataControllId={dataControllId.objButton}
      />
      <IFramePageModal
      iframeCode={photoListEnvProps.iframeCode}
      isMobile={false}
      isShow={isShowModal}
      onClose={() => {
        changeIsShowModal(false);
      }}
      viewingScreen={viewingScreen}
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
      top: 50%;
      left: 5%;
    }

    &[data-controll-id=${dataControllId.objButton}] {
      position: absolute;
      top: 24%;
      left: 60%;
    }
  }`

export default PhotoListContent;
