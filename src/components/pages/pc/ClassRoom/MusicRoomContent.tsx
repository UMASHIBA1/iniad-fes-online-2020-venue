import React, { useState } from "react";
import { MusicEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import ObjectMark from "../../../atoms/ObjectMark";
import RoomMark from "../../../atoms/RoomMark";
import MusicModal from "../../../organisms/MusicModal";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import styled from "styled-components";
import EscapeGameUserInfo from "../../../../typings/EscapeGame/EscapeGameUserInfo";
import { useDispatch } from "react-redux";
import { DispatchType, useTypedSelector } from "../../../../redux/store";
import EscapeGameQuestionModal from "../../../molecules/EscapeGameQuestionModal";
import { answerQ4 } from "../../../../redux/modules/escapeGameUserInfo";
import FinishEscapeGameModal from "../../../organisms/FinishEscapeGameModal";
import CircleDescriptionModal from "../../../organisms/CircleDescriptionModal";

interface Props {
  musicEnvProps: MusicEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "musicroomcontent-obj-button",
  door: "musicroomcontent-left-door",
  escapeGameButton: "musicRoomContent-escapegame-button",
};

const judgeUsersCourseProps = (
  course: EscapeGameUserInfo["course"],
  musicEnvProps: MusicEnvAttr
) => {
  if (course === "engineer" && musicEnvProps.engEscapeGameQuestion) {
    return musicEnvProps.engEscapeGameQuestion;
  } else if (course === "design" && musicEnvProps.designEscapeGameQuestion) {
    return musicEnvProps.designEscapeGameQuestion;
  } else if (course === "business" && musicEnvProps.busiEscapeGameQuestion) {
    return musicEnvProps.busiEscapeGameQuestion;
  } else if (course === "civil" && musicEnvProps.civilEscapeGameQuetion) {
    return musicEnvProps.civilEscapeGameQuetion;
  } else {
    return null;
  }
};

function MusicRoomContent({ musicEnvProps: env, history }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const [isShowQuestionModal, changeIsShowQuestionModal] = useState(false);
  const [isShowFinishGameModal, changeIsShowFinishGameModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  const dispatch: DispatchType = useDispatch();
  const { userAnswer, course, grade } = useTypedSelector(
    ({ escapeGameUserInfo }) => escapeGameUserInfo
  );
  const q4Answer = userAnswer.q4;

  const usersCourseQuestion = judgeUsersCourseProps(course, env);

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
      <ObjectMark
        title="音楽"
        onClick={() => changeIsShowModal(true)}
        dataControllId={dataControllId.objButton}
      />
      <MusicModal
        isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        title={env.title}
        musics={env.musicIframes}
        pickupMusics={env.pickUpIframes}
        isMobile={false}
      />
      {usersCourseQuestion ? (
        <React.Fragment>
          {q4Answer === null && grade===4 && (
            <ObjectMark
              color="blue"
              title={usersCourseQuestion.title}
              onClick={() => changeIsShowQuestionModal(true)}
              dataControllId={dataControllId.escapeGameButton}
            />
          )}
          {q4Answer !== null ? (
            <ObjectMark
              color="blue"
              title="4年間の成績"
              onClick={() => changeIsShowFinishGameModal(true)}
              dataControllId={dataControllId.escapeGameButton}
            />
          ) : null}
          <EscapeGameQuestionModal
            escapeGameProps={usersCourseQuestion}
            isMobile={false}
            isShow={isShowQuestionModal}
            onClose={() => changeIsShowQuestionModal(false)}
            onSubmit={(str) => {
              dispatch(answerQ4(str));
              changeIsShowQuestionModal(false);
              alert("問題4の答えを受け取ったよ！");
              changeIsShowFinishGameModal(true);
            }}
            onSubmitMulti={(list1) => {
              dispatch(answerQ4(list1));
              changeIsShowQuestionModal(false);
              alert("問題4の答えを受け取ったよ！");
              changeIsShowFinishGameModal(true);
            }}
          />
          <FinishEscapeGameModal
            isMobile={false}
            isShow={isShowFinishGameModal}
            onClose={() => {
              changeIsShowFinishGameModal(false);
            }}
          />
        </React.Fragment>
      ) : null}
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

    &[data-controll-id=${dataControllId.escapeGameButton}] {
      position: absolute;
      top: 28%;
      right: 33%;
    }
  }
`;

export default MusicRoomContent;
