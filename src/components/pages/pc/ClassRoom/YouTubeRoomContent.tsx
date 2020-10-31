import React from "react";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import { OneVideoEnvAttr, YoutubeEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import styled, { css } from "styled-components";
import YoutubeEmbed from "../../../organisms/YoutubeEmbed";
import CircleDescriptionModal from "../../../organisms/CircleDescriptionModal";

interface Props {
  youtubeRoomProps: YoutubeEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  door: "oneVideoRoomContent-left-door",
};

function YouTubeRoomContent({ youtubeRoomProps: env, history }: Props) {
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
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
      <YoutubeEmbed
      youtubeIframeLink={env.youtubelink}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ leftOrRight: OneVideoEnvAttr["leftOrRight"] }>`
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
          top: 40%;
          right: 3%;
        }
      `}

    ${({ leftOrRight }) =>
      leftOrRight === "right" &&
      css`
        &[data-controll-id=${dataControllId.door}] {
          position: absolute;
          top: 40%;
          left: 3%;
        }
      `}
  }
`;

export default YouTubeRoomContent;
