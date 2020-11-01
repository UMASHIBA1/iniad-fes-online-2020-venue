import React, { useState } from "react";
import styled from "styled-components";
import breakPoints from "../../constants/breakPoints";
import VideoProps from "../../typings/RoomPropType/VideoProps";
import ViewingProp from "../../typings/ViewingProp";
import Modal from "../atoms/Modal/Modal";
import VideoPlayer from "../atoms/VideoPlayer";
import RadioSelect from "../atoms/RadioSelect";
import H2 from "../atoms/H2";
import { blackColor } from "../../constants/colors";
import Button from "../atoms/Button/Button";
import HLSPlayer from "../atoms/HLSPlayer";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
  isMobile: boolean;
  video: VideoProps;
  optionList?: string[];
  onSubmitQuestionaire?: (answer: string) => void;
}

function TRPGModal({
  isShow,
  onClose,
  viewingScreen,
  isMobile,
  video,
  optionList,
  onSubmitQuestionaire,
}: Props) {
  const [ankertAnswer, changeAnkertAnswer] = useState("");
  console.log("run trpg modal", optionList);

  return (
    <Modal
      isShow={isShow}
      onClose={onClose}
      viewing={viewingScreen}
      isMobile={isMobile}
    >
      <Wrapper>
        <VideoWrapper>
          <HLSPlayer
          videoSrc={video.url}
          />
          {optionList ? (
            <AnkertWrapper>
              <H2 color={blackColor}>アンケート</H2>
              <RadioSelect
                name="TRPG ankert"
                value={ankertAnswer}
                onChange={(answer) => {
                  changeAnkertAnswer(answer);
                }}
                optionList={optionList.map((value) => ({label: value, value}))}
              />
              <Button
                text="送信"
                mode="blue"
                onClick={() => {onSubmitQuestionaire&&onSubmitQuestionaire(ankertAnswer)}}
                useShadow={false}
              />
            </AnkertWrapper>
          ) : null}
        </VideoWrapper>
      </Wrapper>
    </Modal>
  );
}

const AnkertWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  justify-items: center;
  gap: 4px;
  width: 100%;
  margin: 12px;
`;

const VideoWrapper = styled.div`
  padding: 32px 0;
  box-sizing: border-box;
  width: 100%;

  ${breakPoints.downSm} {
    padding: 16px 0;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: calc(100% - 16px);
  max-height: 90vh;
  min-height: 300px;
  max-width: 98%;
  padding: 0 32px;
  overflow: hidden;

  ${breakPoints.downSm} {
    padding: 0 16px;
  }
`;

export default TRPGModal;
