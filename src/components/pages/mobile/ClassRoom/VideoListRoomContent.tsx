import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { VideoListEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import ObjectMark from "../../../atoms/ObjectMark";
import VideoModal from "../../../molecules/VideoModal";
import { DispatchType, useTypedSelector } from "../../../../redux/store";
import EscapeGameQuestionModal from "../../../molecules/EscapeGameQuestionModal";
import { useDispatch } from "react-redux";
import {
  answerQ1,
  changeCourse,
  incrementGrade,
} from "../../../../redux/modules/escapeGameUserInfo";
import SelectCourseModal from "../../../organisms/SelectCourseModal";
import { EscapeGameCourses } from "../../../../typings/EscapeGame/EscapeGameUserInfo";

interface Props {
  videoEnvProps: VideoListEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "videolistroomcontent-obj-button",
  escapeGameButton: "videolistroom-escapegame-button",
  door: "videolistroomcontent-left-door",
};

function VideoListRoomContent({ videoEnvProps, history }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const [isShowQuestionModal, changeIsShowQuestionModal] = useState(false);
  const [isShowSelectCourseModal, changeIsShowSelectCourseModal] = useState(
    false
  );
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  const {
    grade,
    userAnswer,
    viewingScreen,
  } = useTypedSelector(
    ({ escapeGameUserInfo: { grade, userAnswer }, viewingScreen }) => ({
      grade,
      userAnswer,
      viewingScreen,
    })
  );
  const q1Answer = userAnswer.q1;
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    changeIsShowSelectCourseModal(grade === 1 && q1Answer !== null);
  }, [grade, userAnswer]);

  return (
    <Wrapper leftOrRight={videoEnvProps.leftOrRight}>
      <RoomMark
        imgPath={videoEnvProps.door.imgPath}
        dataControllId={dataControllId.door}
        roomTitle={videoEnvProps.door.title}
        onClick={() => {
          gotoTargetUrl(videoEnvProps.door.url);
        }}
      />
      <ObjectMark
        title="動画"
        onClick={() => changeIsShowModal(true)}
        dataControllId={dataControllId.objButton}
      />
      <VideoModal
        isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        title={videoEnvProps.title}
        description={videoEnvProps.description}
        videoPropList={videoEnvProps.VideoProps}
        viewingScreen={viewingScreen}
        isMobile={true}
      />
      {videoEnvProps.escapeGameQuestion ? (
        <React.Fragment>
          {q1Answer === null && (
            <ObjectMark
              color="blue"
              title={videoEnvProps.escapeGameQuestion.title}
              onClick={() => changeIsShowQuestionModal(true)}
              dataControllId={dataControllId.escapeGameButton}
            />
          )}
          <EscapeGameQuestionModal
            escapeGameProps={videoEnvProps.escapeGameQuestion}
            isMobile={false}
            isShow={isShowQuestionModal}
            onClose={() => changeIsShowQuestionModal(false)}
            onSubmit={(str) => {
              dispatch(answerQ1(str));
              changeIsShowQuestionModal(false);
              alert("問題1の答えを受け取ったよ！");
            }}
            viewing={viewingScreen}
          />
          {grade === 1 ? (
            <SelectCourseModal
              isMobile={false}
              isShow={isShowSelectCourseModal}
              onSubmit={(selected) => {
                dispatch(changeCourse(selected as EscapeGameCourses));
                dispatch(incrementGrade());
              }}
              viewingScreen={viewingScreen}
              onClose={() => {}}
              title={"2年生になるよ！ どのコースに進む？"}
              optionList={[
                {
                  label: "エンジニア",
                  value: "engineer",
                },
                {
                  label: "デザイン",
                  value: "design",
                },
                {
                  label: "ビジネス",
                  value: "business",
                },
                {
                  label: "シビル",
                  value: "civil",
                },
              ]}
            />
          ) : null}
        </React.Fragment>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ leftOrRight: VideoListEnvAttr["leftOrRight"] }>`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > button {
    ${({ leftOrRight }) =>
      leftOrRight === "left" &&
      css`
        &[data-controll-id=${dataControllId.door}] {
          position: absolute;
          top: 50%;
          right: 5%;
        }

        &[data-controll-id=${dataControllId.objButton}] {
          position: absolute;
          top: 25%;
          left: 37%;
        }
      `}

    ${({ leftOrRight }) =>
      leftOrRight === "right" &&
      css`
        &[data-controll-id=${dataControllId.door}] {
          position: absolute;
          top: 50%;
          left: 5%;
        }

        &[data-controll-id=${dataControllId.objButton}] {
          position: absolute;
          top: 25%;
          right: 37%;
        }
      `}


        &[data-controll-id=${dataControllId.escapeGameButton}] {
      position: absolute;
      top: 13%;
      left: 10%;
    }
  }
`;

export default VideoListRoomContent;
