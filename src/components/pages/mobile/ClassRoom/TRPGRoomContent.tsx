import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import { TRPGEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import styled from "styled-components";
import ObjectMark from "../../../atoms/ObjectMark";
import ViewingProp from "../../../../typings/ViewingProp";
import TRPGModal from "../../../organisms/TRPGModal";
import useQuestionaireDatas from "../../../../hooks/useQuestionaireDatas";

interface Props {
  trpgRoomProps: TRPGEnvAttr;
  history: ReturnType<typeof useHistory>;
  viewingScreen: ViewingProp;
}

const dataControllId = {
  door: "oneVideoRoomContent-left-door",
  objButton: "onevideoroomcontent-obj-button",
};

function TRPGRoomContent({
  trpgRoomProps: env,
  history,
  viewingScreen,
}: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  const [optionList, changeOptionList] = useState<string[] | undefined>(
    undefined
  );
  const { questionaire, sendFC } = useQuestionaireDatas(env.room_id);

  useEffect(() => {
    if (questionaire) {
      if (questionaire.object.is_open) {
        changeOptionList(questionaire?.object.choices);
      } else {
        changeOptionList(undefined);
      }
    }
  }, [questionaire]);

  return (
    <Wrapper>
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
      <TRPGModal
        isMobile={true}
        isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        video={env.video}
        viewingScreen={viewingScreen}
        onSubmitQuestionaire={(answer) => {
          if (questionaire) {
            sendFC({ answer: answer, problem_id: questionaire.object.id })
              .then(() => {
                alert("回答を受け取りました。");
              })
              .catch((err) => {
                console.error("アンケートの回答に失敗", err);
              });
            changeOptionList(undefined);
          } else {
            alert("申し訳ありません。回答の送信に失敗しました。");
          }
        }}
        optionList={optionList}
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
      top: 40%;
      left: 3%;
    }
    &[data-controll-id=${dataControllId.objButton}] {
      position: absolute;
      top: 23%;
      left: 36%;
    }
  }
`;

export default TRPGRoomContent;
