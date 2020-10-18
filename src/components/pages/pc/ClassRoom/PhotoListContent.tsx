import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { PhotoListEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import PhotoListModal from "../../../organisms/PhotoListModal";
import logoPath from "../../../../statics/svgs/iniadfes-logo.svg";
import ObjectMark from "../../../atoms/ObjectMark";

interface Props {
  photoListEnvProps: PhotoListEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "photolistRoomContent-obj-button",
  door: "photolistRoomContent-left-door",
};

function PhotoListContent({ photoListEnvProps, history }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  return (
    <Wrapper>
      PhotoListContent
      <RoomMark
        imgPath={logoPath}
        dataControllId={dataControllId.door}
        roomTitle={photoListEnvProps.door.title}
        onClick={() => {
          gotoTargetUrl(photoListEnvProps.door.url);
        }}
      />
      <ObjectMark
        onClick={() => changeIsShowModal(true)}
        dataControllId={dataControllId.objButton}
      />
      <PhotoListModal
        isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        photos={photoListEnvProps.photos}
        title={photoListEnvProps.title}
        description={photoListEnvProps.description}
        isMobile={false}
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
  }`

export default PhotoListContent;
