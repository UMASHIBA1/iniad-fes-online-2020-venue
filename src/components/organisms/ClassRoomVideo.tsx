import React from "react";
import styled from "styled-components";
import { whiteBGColor } from "../../cssProps/colors";
import { radiusMd } from "../../cssProps/radius";
import { normalShadow } from "../../cssProps/shadow";
import VideoProps from "../../typings/RoomPropType/VideoProps";
import HLSPlayer from "../atoms/HLSPlayer";
import VideoPlayer from "../atoms/VideoPlayer";

interface Props {
  videoProps: VideoProps;
  positionTop?: string;
  positionLeft?: string;
}

function ClassRoomVideo({videoProps, positionLeft="48%", positionTop="3%"}: Props) {
  return(
    <Wrapper positionLeft={positionLeft} positionTop={positionTop}>
      {/* <VideoPlayer controls={true} sources={[
        {
          src: videoProps.url,
          type:
          videoProps.mode === "streaming"
            ? "application/x-mpegURL"
            : "video/mp4",
        }
      ]} /> */}
      <HLSPlayer
      videoSrc={videoProps.url}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div<Required<Pick<Props, "positionLeft" | "positionTop">>>`
  position: absolute;
  top: ${({positionTop}) => positionTop};
  left: ${({positionLeft}) => positionLeft};
  width: 18%;
  padding: 8px;
  ${whiteBGColor}
  ${radiusMd}
  ${normalShadow(3)}
`

export default ClassRoomVideo;
