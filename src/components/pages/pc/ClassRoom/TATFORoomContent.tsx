import React, { useState } from "react";
import { TATFOEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import ObjectMark from "../../../atoms/ObjectMark";
import RoomMark from "../../../atoms/RoomMark";
import logoPath from "../../../../statics/svgs/iniadfes-logo.svg";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import styled from "styled-components";
import PDFModal from "../../../molecules/PDFModal";

interface Props {
  tatfoEnvProps: TATFOEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "tatforoomcontent-obj-button",
  door: "tatforoomcontent-left-door",
};

function TATFORoomContent({ tatfoEnvProps, history }: Props) {
  const [isShowViewingPDFModal, changeIsShowViewingPDFModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  return (
    <Wrapper>
      TATFORoom
      <RoomMark
        imgPath={logoPath}
        dataControllId={dataControllId.door}
        roomTitle={tatfoEnvProps.door.title}
        onClick={() => {
          gotoTargetUrl(tatfoEnvProps.door.url);
        }}
      />
      <ObjectMark title="PDF" onClick={() => changeIsShowViewingPDFModal(true)} dataControllId={dataControllId.objButton} />
      <PDFModal
        isShow={isShowViewingPDFModal}
        onClose={() => changeIsShowViewingPDFModal(false)}
        isMobile={false}
        pdfProps={tatfoEnvProps.viewingPDFProps}
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

export default TATFORoomContent;
