import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { PhotoListEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import PhotoListModal from "../../../organisms/PhotoListModal";
import ObjectMark from "../../../atoms/ObjectMark";
import useDidMount from "../../../../hooks/useDidMount/useDidMount";
import { DispatchType, useTypedSelector } from "../../../../redux/store";
import EscapeGameQuestionModal from "../../../molecules/EscapeGameQuestionModal";
import { useDispatch } from "react-redux";
import { answerQ3, incrementGrade } from "../../../../redux/modules/escapeGameUserInfo";

interface Props {
  photoListEnvProps: PhotoListEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "photolistRoomContent-obj-button",
  escapeGameButton: "photolistRoomContent-escapeGame-button",
  door: "photolistRoomContent-left-door",
};

function PhotoListContent({ photoListEnvProps, history }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const [isShowQuestionModal, changeIsShowQuestionModal] = useState(false);
  const dispatch: DispatchType = useDispatch();

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
    const q3Answer = useTypedSelector(
    ({ escapeGameUserInfo }) => escapeGameUserInfo.userAnswer.q3
  );

  return (
    <Wrapper>
      <RoomMark
        imgPath={photoListEnvProps.door.imgPath}
        dataControllId={dataControllId.door}
        roomTitle={photoListEnvProps.door.title}
        onClick={() => {
          gotoTargetUrl(photoListEnvProps.door.url);
        }}
      />
      <ObjectMark
      title="写真"
        onClick={() => changeIsShowModal(true)}
        dataControllId={dataControllId.objButton}
      />
      <PhotoListModal
        isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        photos={photoListEnvProps.photos}
        title={photoListEnvProps.title}
        description={photoListEnvProps.description}
        isMobile={false}
      />
      {
        photoListEnvProps.escapeGameQuestion?(
          <React.Fragment>
            {q3Answer === null && (
              <ObjectMark
              color="blue"
              title={photoListEnvProps.escapeGameQuestion.title}
              onClick={() => changeIsShowQuestionModal(true)}
              dataControllId={dataControllId.escapeGameButton}
              />
            )}
            <EscapeGameQuestionModal
            escapeGameProps={photoListEnvProps.escapeGameQuestion}
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
