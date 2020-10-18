import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { PhotoListEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import Description from "../../../atoms/Description";
import Title from "../../../atoms/Title";
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
      <Title title="ID/graph" />
      <Description description="しゃしんたくさんとったのでみてね！ by ID/graph" />
      <PhotoListModal
      isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        photoIframes={photoListEnvProps.photoIframes}
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
