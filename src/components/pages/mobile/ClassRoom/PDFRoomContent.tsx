import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { PDFRoomEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import logoPath from "../../../../statics/svgs/iniadfes-logo.svg";
import ObjectMark from "../../../atoms/ObjectMark";
import PDFModal from "../../../molecules/PDFModal";
import useDidMount from "../../../../hooks/useDidMount/useDidMount";
import ViewingProp from "../../../../typings/ViewingProp";

interface Props {
  pdfEnvProps: PDFRoomEnvAttr;
  history: ReturnType<typeof useHistory>;
  viewingScreen: ViewingProp;
}

const dataControllId = {
  objButton: "pdfroomContent-obj-button",
  door: "pdfroomContent-left-door",
};

function PDFRoomContent({ pdfEnvProps, history, viewingScreen }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  useDidMount(() =>{
    setTimeout(() => {
    changeIsShowModal(true);
    }, 300);
  })

  return (
    <Wrapper>
      PDFRoom
      <RoomMark
        imgPath={logoPath}
        dataControllId={dataControllId.door}
        roomTitle={pdfEnvProps.door.title}
        onClick={() => {
          gotoTargetUrl(pdfEnvProps.door.url);
        }}
      />
      <ObjectMark
      title="PDF"
        onClick={() => changeIsShowModal(true)}
        dataControllId={dataControllId.objButton}
      />
      <PDFModal
        isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        pdfProps={pdfEnvProps.pdfProps}
        viewing={viewingScreen}
        isMobile={true}
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
  }
`;

export default PDFRoomContent;
