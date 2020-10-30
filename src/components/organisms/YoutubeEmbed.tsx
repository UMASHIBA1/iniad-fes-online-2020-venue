import React from "react";
import styled from "styled-components";
import { whiteBGColor } from "../../cssProps/colors";
import { radiusMd } from "../../cssProps/radius";
import { normalShadow } from "../../cssProps/shadow";
import IFrameWrap from "../atoms/IFrameWrap";

interface Props {
  youtubeIframeLink: string;
}

function YoutubeEmbed({youtubeIframeLink: youtubeLink}: Props) {
  return(
    <Wrapper>
      <IFrameWrap
      iframeCode={youtubeLink}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 2%;
  right: 40%;
  width: 20vw;
  height: calc(20vw * 0.5625);
  ${whiteBGColor}
  padding: 8px;
  ${radiusMd}
  ${normalShadow(4)}
  >* {
    width: 100%;
    height: 100%;
  }

`

export default YoutubeEmbed;
