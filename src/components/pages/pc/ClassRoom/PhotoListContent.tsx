import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { PhotoListEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import PhotoListModal from "../../../organisms/PhotoListModal";

interface Props {
  photoListEnvProps: PhotoListEnvAttr;
  history: ReturnType<typeof useHistory>;
}

function PhotoListContent({photoListEnvProps, history}: Props) {
    const [isShowModal, changeIsShowModal] = useState(true);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  return(
    <Wrapper>
      PhotoListContent
      <PhotoListModal
      isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        photoIframes={photoListEnvProps.photoIframes}
        title={photoListEnvProps.title}
        description={photoListEnvProps.description}
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
`

export default PhotoListContent;
