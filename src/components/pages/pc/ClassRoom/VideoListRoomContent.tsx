import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { VideoListEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import ObjectMark from "../../../atoms/ObjectMark";
import VideoModal from "../../../molecules/VideoModal";
import EscapeGameQuestionModal from "../../../molecules/EscapeGameQuestionModal";
import { useDispatch } from "react-redux";
import { DispatchType, useTypedSelector } from "../../../../redux/store";
import { answerQ1, changeCourse, incrementGrade } from "../../../../redux/modules/escapeGameUserInfo";
import SelectCourseModal from "../../../organisms/SelectCourseModal";
import { EscapeGameCourses } from "../../../../typings/EscapeGame/EscapeGameUserInfo";
import CircleDescriptionModal from "../../../organisms/CircleDescriptionModal";

interface Props {
  videoEnvProps: VideoListEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "videoListroomcontent-obj-button",
  escapeGameButton: "videolistroom-escapegame-button",
  door: "videoListroomcontent-left-door",
};

function VideoListRoomContent({ videoEnvProps: env, history }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const [isShowQuestionModal, changeIsShowQuestionModal] = useState(false);
  const [isShowSelectCourseModal, changeIsShowSelectCourseModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  const dispatch: DispatchType = useDispatch();
  const { grade, userAnswer } = useTypedSelector(
    ({ escapeGameUserInfo }) => escapeGameUserInfo
  );
  const q1Answer = userAnswer.q1;

  useEffect(() => {
    changeIsShowSelectCourseModal(grade === 1 && q1Answer !== null);
  }, [grade, userAnswer]);

  return (
    <Wrapper leftOrRight={env.leftOrRight}>
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
        title="動画"
        onClick={() => changeIsShowModal(true)}
        dataControllId={dataControllId.objButton}
      />
      <VideoModal
        title={env.title}
        description={env.description}
        isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        videoPropList={env.VideoProps}
        isMobile={false}
        link={env.link}
      />
      {env.escapeGameQuestion ? (
        <React.Fragment>
          {q1Answer === null && (
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
            onSubmit={(str) => {
              dispatch(answerQ1(str));
              changeIsShowQuestionModal(false);
              alert("問題1の答えを受け取ったよ！");
            }}
          />
          {grade === 1 ? (
            <SelectCourseModal
              isMobile={false}
              isShow={isShowSelectCourseModal}
              onSubmit={(selected) => {
                dispatch(changeCourse(selected as EscapeGameCourses));
                dispatch(incrementGrade());
              }}
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
      leftOrRight === "right" &&
      css`
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
      `}

    ${({ leftOrRight }) =>
      leftOrRight === "left" &&
      css`
        &[data-controll-id=${dataControllId.door}] {
          position: absolute;
          top: 47%;
          right: 5%;
        }

        &[data-controll-id=${dataControllId.objButton}] {
          position: absolute;
          top: 30%;
          left: 33%;
        }

        &[data-controll-id=${dataControllId.escapeGameButton}] {
          position: absolute;
          top: 28%;
          right: 33%;
        }
      `}
  }
`;

export default VideoListRoomContent;
