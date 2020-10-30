import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import {
  TRPGEnvAttr,
} from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import styled from "styled-components";
import ObjectMark from "../../../atoms/ObjectMark";
import TRPGModal from "../../../organisms/TRPGModal";
import useQuestionaireDatas from "../../../../hooks/useQuestionaireDatas";

interface Props {
  trpgRoomProps: TRPGEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  door: "oneVideoRoomContent-left-door",
  objButton: "onevideoroomcontent-obj-button",
};

function TRPGRoomContent({
  trpgRoomProps: env,
  history,
}: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  const [optionList, changeOptionList] = useState<string[] | undefined>(undefined);
  const {questionaire, sendFC} = useQuestionaireDatas(env.room_id);

  useEffect(() => {
    if(questionaire) {
    changeOptionList(questionaire?.object.choices);
    }
  }, [questionaire]);

  console.log("questionaire change", questionaire);

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
        title="TRPG"
        onClick={() => changeIsShowModal(true)}
        dataControllId={dataControllId.objButton}
      />
      <TRPGModal
        isMobile={false}
        isShow={isShowModal}
        onClose={() => changeIsShowModal(false)}
        video={env.video}
        onSubmitQuestionaire={(answer) => {
          if(questionaire) {
            sendFC({answer: answer, problem_id: questionaire.object.id});
            changeOptionList(undefined);
          }else{
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
