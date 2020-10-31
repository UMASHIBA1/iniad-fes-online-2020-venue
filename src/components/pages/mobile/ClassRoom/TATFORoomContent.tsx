import React, { useState } from "react";
import { TATFOEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import ObjectMark from "../../../atoms/ObjectMark";
import RoomMark from "../../../atoms/RoomMark";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import styled from "styled-components";
import PDFModal from "../../../molecules/PDFModal";
import VideoModal from "../../../molecules/VideoModal";
import ViewingProp from "../../../../typings/ViewingProp";
import CircleDescriptionModal from "../../../organisms/CircleDescriptionModal";

interface Props {
  tatfoEnvProps: TATFOEnvAttr;
  history: ReturnType<typeof useHistory>;
  viewingScreen: ViewingProp;
}

const dataControllId = {
  objButton1: "tatforoomcontent-obj-button1",
  objButton2: "tatforoomcontent-obj-button2",
  objButton3: "tatforoomcontent-obj-button3",
  objButton4: "tatforoomcontent-obj-button4",
  videoButton: "tatfovideocntent-obj-button",
  door: "tatforoomcontent-left-door",
};

function TATFORoomContent({ tatfoEnvProps: env, history, viewingScreen }: Props) {
  const [isShowPDF1Modal, changeIsShowPDF1Modal] = useState(false);
  const [isShowPDF2Modal, changeIsShowPDF2Modal] = useState(false);
  const [isShowPDF3Modal, changeIsShowPDF3Modal] = useState(false);
  const [isShowPDF4Modal, changeIsShowPDF4Modal] = useState(false);
  const [isShowVideoModal, changeIsShowVideoModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  return (
    <Wrapper>
      <CircleDescriptionModal isMobile={true} description={env.circleDescription} title={env.circleTitle} viewingScreen={viewingScreen} />
      <RoomMark
        imgPath={env.door.imgPath}
        dataControllId={dataControllId.door}
        roomTitle={env.door.title}
        onClick={() => {
          gotoTargetUrl(env.door.url);
        }}
      />
      <ObjectMark
        title="すごろくでSDGsを知ろう！"
        onClick={() => changeIsShowPDF1Modal(true)}
        dataControllId={dataControllId.objButton1}
      />
      <PDFModal
        isShow={isShowPDF1Modal}
        onClose={() => changeIsShowPDF1Modal(false)}
        isMobile={false}
        pdfProps={env.pdfPropList[0]}
        viewing={viewingScreen}
      />
      <ObjectMark
        title="あなたの願う未来は?"
        onClick={() => changeIsShowPDF2Modal(true)}
        dataControllId={dataControllId.objButton2}
      />
      <PDFModal
        isShow={isShowPDF2Modal}
        onClose={() => changeIsShowPDF2Modal(false)}
        isMobile={false}
        viewing={viewingScreen}
        pdfProps={env.pdfPropList[1]}
      />
      <ObjectMark
        title="SDGsを知ろう！"
        onClick={() => changeIsShowPDF3Modal(true)}
        dataControllId={dataControllId.objButton3}
      />
      <PDFModal
        isShow={isShowPDF3Modal}
        onClose={() => changeIsShowPDF3Modal(false)}
        isMobile={false}
        pdfProps={env.pdfPropList[2]}
        viewing={viewingScreen}
      />
      <ObjectMark
        title="TATFOの願う未来"
        onClick={() => changeIsShowPDF4Modal(true)}
        dataControllId={dataControllId.objButton4}
      />
      <PDFModal
        isShow={isShowPDF4Modal}
        onClose={() => changeIsShowPDF4Modal(false)}
        isMobile={false}
        pdfProps={env.pdfPropList[3]}
        viewing={viewingScreen}
      />
      <ObjectMark
        title="動画"
        onClick={() => changeIsShowVideoModal(true)}
        dataControllId={dataControllId.videoButton}
      />
      <VideoModal
        isShow={isShowVideoModal}
        onClose={() => changeIsShowVideoModal(false)}
        isMobile={false}
        videoPropList={[env.videoProps]}
        title="TATFO 動画"
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

    &[data-controll-id=${dataControllId.objButton1}] {
      position: absolute;
      top: 21%;
      left: 34%;
    }
    &[data-controll-id=${dataControllId.objButton2}] {
      position: absolute;
      top: 12%;
      right: 14%;
    }
    &[data-controll-id=${dataControllId.objButton3}] {
      position: absolute;
      top: 23%;
      left: 22%;
    }
    &[data-controll-id=${dataControllId.objButton4}] {
      position: absolute;
      top: 24%;
      right: 22%;
    }
    &[data-controll-id=${dataControllId.videoButton}] {
      position: absolute;
      top: 23%;
      right: 36%;
    }
  }
`;

export default TATFORoomContent;
