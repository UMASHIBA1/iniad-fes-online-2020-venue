import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { PhotoListEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import PhotoListModal from "../../../organisms/PhotoListModal";
import ObjectMark from "../../../atoms/ObjectMark";
import useDidMount from "../../../../hooks/useDidMount/useDidMount";

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

  useDidMount(() => {
    setTimeout(() => {
      changeIsShowModal(true);
    }, 200);
  })

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
      top: 47%;
      left: 5%;
    }

    &[data-controll-id=${dataControllId.objButton}] {
      position: absolute;
      top: 30%;
      right: 33%;
    }
  }`

export default PhotoListContent;
