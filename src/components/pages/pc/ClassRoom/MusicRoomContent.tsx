import React, { useState } from "react";
import { MusicEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import ObjectMark from "../../../atoms/ObjectMark";
import RoomMark from "../../../atoms/RoomMark";
import MusicModal from "../../../organisms/MusicModal";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import styled from "styled-components";
import useDidMount from "../../../../hooks/useDidMount/useDidMount";
import EscapeGameUserInfo from "../../../../typings/EscapeGame/EscapeGameUserInfo";
import { useDispatch } from "react-redux";
import { DispatchType, useTypedSelector } from "../../../../redux/store";
import EscapeGameQuestionModal from "../../../molecules/EscapeGameQuestionModal";
import { answerQ4, incrementGrade } from "../../../../redux/modules/escapeGameUserInfo";

interface Props {
  musicEnvProps: MusicEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "musicroomcontent-obj-button",
  door: "musicroomcontent-left-door",
  escapeGameButton: "musicRoomContent-escapegame-button",
};


const judgeUsersCourseProps = (course: EscapeGameUserInfo["course"], musicEnvProps: MusicEnvAttr) => {
  if(course === "engineer" && musicEnvProps.engEscapeGameQuestion) {
    return musicEnvProps.engEscapeGameQuestion;
  }else if(course === "design" && musicEnvProps.designEscapeGameQuestion) {
    return musicEnvProps.designEscapeGameQuestion;
  }else if(course === "business" && musicEnvProps.busiEscapeGameQuestion) {
    return musicEnvProps.busiEscapeGameQuestion;
  }else if(course==="civil" && musicEnvProps.civilEscapeGameQuetion) {
    return musicEnvProps.civilEscapeGameQuetion;
  } else {
    return null;
  }
}

function MusicRoomContent({ musicEnvProps, history }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const [isShowQuestionModal, changeIsShowQuestionModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  const dispatch: DispatchType = useDispatch();
  const {userAnswer, course} = useTypedSelector(({escapeGameUserInfo}) => escapeGameUserInfo);
  const q4Answer = userAnswer.q4;

  const usersCourseQuestion = judgeUsersCourseProps(course, musicEnvProps);

  return (
    <Wrapper>
      <RoomMark
        imgPath={musicEnvProps.door.imgPath}
        dataControllId={dataControllId.door}
        roomTitle={musicEnvProps.door.title}
        onClick={() => {
          gotoTargetUrl(musicEnvProps.door.url);
        }}
      />
      <ObjectMark title="音楽" onClick={() => changeIsShowModal(true)} dataControllId={dataControllId.objButton} />
      <MusicModal
        isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        title={musicEnvProps.title}
        musics={musicEnvProps.musicIframes}
        pickupMusics={musicEnvProps.pickUpIframes}
        isMobile={false}
      />
      {usersCourseQuestion?(
        <React.Fragment>
          {q4Answer === null &&(
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
            onClose={() => changeIsShowQuestionModal(false)}
            onSubmit={(str) => {
              dispatch(answerQ4(str));
              changeIsShowQuestionModal(false);
              alert("問題4の答えを受け取ったよ！")
            }}
            onSubmitMulti={(list1) => {
              dispatch(answerQ4(list1));
              changeIsShowQuestionModal(false);
              alert("問題4の答えを受け取ったよ！");
            }}
          />
        </React.Fragment>
      ): null}
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
