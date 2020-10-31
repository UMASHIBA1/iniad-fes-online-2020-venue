import React, { useState } from "react";
import { ArtListEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import ObjectMark from "../../../atoms/ObjectMark";
import RoomMark from "../../../atoms/RoomMark";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import styled from "styled-components";
import ArtListModal from "../../../organisms/ArtListModal";
import CircleDescriptionModal from "../../../organisms/CircleDescriptionModal";

interface Props {
  artListEnvProps: ArtListEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "artlistroomcontent-obj-button",
  door: "artlistroomcontent-left-door",
};

function ArtListRoomContent({ artListEnvProps: env, history }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  return (
    <Wrapper>
      <CircleDescriptionModal isMobile={false} description={env.circleDescription} title={env.circleTitle} />
      <RoomMark
        imgPath={env.door.imgPath}
        dataControllId={dataControllId.door}
        roomTitle={env.door.title}
        onClick={() => {
          gotoTargetUrl(env.door.url);
        }}
      />
      <ObjectMark title="イラスト" onClick={() => changeIsShowModal(true)} dataControllId={dataControllId.objButton} />
      <ArtListModal artList={env.artList} isMobile={false} isShow={isShowModal} onClose={() => changeIsShowModal(false)} title={env.title} />
    </Wrapper>
  );
}

// NOTE: RAISON DETREしかないので左側教室版のみ作る
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
      right: 5%;
    }

    &[data-controll-id=${dataControllId.objButton}] {
      position: absolute;
      top: 31%;
      left: 33%;
    }
  }
`;

export default ArtListRoomContent;
