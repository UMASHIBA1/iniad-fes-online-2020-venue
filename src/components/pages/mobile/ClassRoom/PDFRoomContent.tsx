import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { PDFRoomEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import ObjectMark from "../../../atoms/ObjectMark";
import PDFModal from "../../../molecules/PDFModal";
import ViewingProp from "../../../../typings/ViewingProp";
import VideoModal from "../../../molecules/VideoModal";

interface Props {
  pdfEnvProps: PDFRoomEnvAttr;
  history: ReturnType<typeof useHistory>;
  viewingScreen: ViewingProp;
}

const dataControllId = {
  objButton: "pdfroomContent-obj-button",
  videoObjButton: "pdfroom-video-content-obj-button",
  door: "pdfroomContent-left-door",
};

function PDFRoomContent({ pdfEnvProps, history, viewingScreen }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const [isShowVideoModal, changeIsShowVideoModal] = useState(false);

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };


  return (
    <Wrapper>
      <RoomMark
        imgPath={pdfEnvProps.door.imgPath}
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
      <ObjectMark
        title="動画"
        onClick={() => changeIsShowVideoModal(true)}
        dataControllId={dataControllId.videoObjButton}
      />
      <PDFModal
        isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        pdfProps={pdfEnvProps.pdfProps}
        viewing={viewingScreen}
        isMobile={true}
      />
      <VideoModal
        isMobile={true}
        isShow={isShowVideoModal}
        onClose={() => changeIsShowVideoModal(false)}
        title={pdfEnvProps.title}
        description={pdfEnvProps.description}
        videoPropList={[pdfEnvProps.videoProps]}
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
      top: 22%;
      left: 36%;
    }

    &[data-controll-id=${dataControllId.videoObjButton}] {
      position: absolute;
      top: 12%;
      right: 18%;
    }

  }
`;

export default PDFRoomContent;
