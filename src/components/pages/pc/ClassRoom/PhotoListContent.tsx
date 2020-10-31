import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { PhotoListEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import ObjectMark from "../../../atoms/ObjectMark";
import { DispatchType, useTypedSelector } from "../../../../redux/store";
import EscapeGameQuestionModal from "../../../molecules/EscapeGameQuestionModal";
import { useDispatch } from "react-redux";
import { answerQ3, incrementGrade } from "../../../../redux/modules/escapeGameUserInfo";
import IFramePageModal from "../../../organisms/IFramePageModal";
import CircleDescriptionModal from "../../../organisms/CircleDescriptionModal";

interface Props {
  photoListEnvProps: PhotoListEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "photolistRoomContent-obj-button",
  escapeGameButton: "photolistRoomContent-escapeGame-button",
  door: "photolistRoomContent-left-door",
};

function PhotoListContent({ photoListEnvProps: env, history }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const [isShowQuestionModal, changeIsShowQuestionModal] = useState(false);
  const dispatch: DispatchType = useDispatch();

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
    const {userAnswer, grade} = useTypedSelector(
    ({ escapeGameUserInfo }) => escapeGameUserInfo
  );
  const q3Answer = userAnswer.q3;

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
      title="写真"
        onClick={() => changeIsShowModal(true)}
        dataControllId={dataControllId.objButton}
      />
      <IFramePageModal
      iframeCode={env.iframeCode}
      isMobile={false}
      isShow={isShowModal}
      onClose={() => {
        changeIsShowModal(false);
      }}
      />
      {
        env.escapeGameQuestion?(
          <React.Fragment>
            {q3Answer === null && grade === 3 && (
              <ObjectMark
              color="blue"
              title={env.escapeGameQuestion.title}
              onClick={() => changeIsShowQuestionModal(true)}
              dataControllId={dataControllId.escapeGameButton}
              />
            )}
            <EscapeGameQuestionModal
            escapeGameProps={env.escapeGameQuestion}
            isMobile={false}
            isShow={isShowQuestionModal}
            onClose={() => changeIsShowQuestionModal(false)}
            onSubmitMulti={(strList) => {
              dispatch(answerQ3(strList));
              dispatch(incrementGrade());
              changeIsShowQuestionModal(false);
              alert("問題3の答えを受け取ったよ！");
            }}
            />
          </React.Fragment>
        ): null
      }
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
      top: 47%;
      left: 5%;
    }

    &[data-controll-id=${dataControllId.objButton}] {
      position: absolute;
      top: 30%;
      right: 33%;
    }
    &[data-controll-id=${dataControllId.escapeGameButton}] {
      position: absolute;
      top: 26%;
      left: 33%;
    }

  }`

export default PhotoListContent;
