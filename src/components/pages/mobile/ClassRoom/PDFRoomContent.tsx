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
import EscapeGameUserInfo, {
  AnswerSelection,
} from "../../../../typings/EscapeGame/EscapeGameUserInfo";
import { useDispatch } from "react-redux";
import { DispatchType, useTypedSelector } from "../../../../redux/store";
import EscapeGameQuestionModal from "../../../molecules/EscapeGameQuestionModal";
import {
  answerQ2,
  incrementGrade,
} from "../../../../redux/modules/escapeGameUserInfo";

interface Props {
  pdfEnvProps: PDFRoomEnvAttr;
  history: ReturnType<typeof useHistory>;
  viewingScreen: ViewingProp;
}

const dataControllId = {
  objButton: "pdfroomContent-obj-button",
  escapeGameButton: "pdfroom-escapegame-button",
  videoObjButton: "pdfroom-video-content-obj-button",
  door: "pdfroomContent-left-door",
};

const judgeUsersCourseProps = (
  course: EscapeGameUserInfo["course"],
  pdfEnvProps: PDFRoomEnvAttr
) => {
  if (course === "engineer" && pdfEnvProps.engEscapeGameQuestion) {
    return pdfEnvProps.engEscapeGameQuestion;
  } else if (course === "design" && pdfEnvProps.designEscapeGameQuestion) {
    return pdfEnvProps.designEscapeGameQuestion;
  } else if (course === "business" && pdfEnvProps.busiEscapeGameQuestion) {
    return pdfEnvProps.busiEscapeGameQuestion;
  } else if (course === "civil" && pdfEnvProps.civilEscapeGameQuetion) {
    return pdfEnvProps.civilEscapeGameQuetion;
  } else {
    return null;
  }
};

function PDFRoomContent({ pdfEnvProps, history, viewingScreen }: Props) {
  const [isShowQuestionModal, changeIsShowQuestionModal] = useState(false);
  const [isShowModal, changeIsShowModal] = useState(false);
  const [isShowVideoModal, changeIsShowVideoModal] = useState(false);

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  const dispatch: DispatchType = useDispatch();
  const { userAnswer, course } = useTypedSelector(
    ({ escapeGameUserInfo }) => escapeGameUserInfo
  );
  const q2Answer = userAnswer.q2;

  const usersCourseQuestion = judgeUsersCourseProps(course, pdfEnvProps);

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
      {usersCourseQuestion ? (
        <React.Fragment>
          {q2Answer === null && (
            <ObjectMark
              color="blue"
              title={usersCourseQuestion.title}
              onClick={() => changeIsShowQuestionModal(true)}
              dataControllId={dataControllId.escapeGameButton}
            />
          )}
          <EscapeGameQuestionModal
            escapeGameProps={usersCourseQuestion}
            isMobile={false}
            isShow={isShowQuestionModal}
            viewing={viewingScreen}
            onClose={() => changeIsShowQuestionModal(false)}
            onSubmit={(str) => {
              dispatch(answerQ2(str as AnswerSelection)); // NOTE: Q2でテキストを選択させるものはないよってAnswerSelectionでasしておけ
              dispatch(incrementGrade());
              changeIsShowQuestionModal(false);
              alert("問題2の答えを受け取ったよ！");
            }}
            onSubmitMulti={(multiAnswer) => {
              dispatch(answerQ2(multiAnswer));
              dispatch(incrementGrade());
              changeIsShowQuestionModal(false);
              alert("問題2の答えを受け取ったよ！");
            }}
          />
        </React.Fragment>
      ) : null}
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

    &[data-controll-id=${dataControllId.escapeGameButton}] {
      position: absolute;
      top: 24%;
      right: 32%;
    }

    &[data-controll-id=${dataControllId.videoObjButton}] {
      position: absolute;
      top: 12%;
      right: 18%;
    }
  }
`;

export default PDFRoomContent;
