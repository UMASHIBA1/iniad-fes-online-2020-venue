import React from "react";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import { IGC2EnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import styled from "styled-components";
import { whiteText } from "../../../../cssProps/colors";
import { radiusLg, radiusMd } from "../../../../cssProps/radius";
import breakPoints from "../../../../constants/breakPoints";
import Img from "../../../atoms/Img";
import Link from "../../../atoms/Link";
import ClassRoomVideo from "../../../organisms/ClassRoomVideo";
import { normalShadow } from "../../../../cssProps/shadow";

interface Props {
  igc2EnvProps: IGC2EnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "igc2RoomContent-obj-button",
  door: "igc2RoomContent-left-door",
};

function IGC2RoomContent({ igc2EnvProps: env, history }: Props) {
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  return (
    <Wrapper>
      IGC2
      <RoomMark
        imgPath={env.door.imgPath}
        dataControllId={dataControllId.door}
        roomTitle={env.door.title}
        onClick={() => {
          gotoTargetUrl(env.door.url);
        }}
      />
      <ClassRoomVideo videoProps={env.video} />
      <LinkWrapper>
        <Link link={env.gameLink}>
          <ImgWrapper>
            <Img src={env.imgPath} alt={env.title + "サムネイル"} />
            <GoGame>ゲームへGo!</GoGame>
          </ImgWrapper>
        </Link>
      </LinkWrapper>
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
      top: 50%;
      left: 45%;
    }
  }
`;

const GoGame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  ${whiteText}
  ${radiusMd}
  font-weight: bold;

  ${breakPoints.downSm} {
    font-size: 16px;
  }
`;

const LinkWrapper = styled.div`
  width: 160px;
  ${radiusMd}
  position: absolute;
  top: 31%;
  right: 31%;
`;

const ImgWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 200ms ease-in;
  ${radiusLg}
  margin-bottom: 16px;
  ${normalShadow(6)}
  filter: blur(0px);
  :hover {
    filter: blur(2px);
  }

  > ${Img} {
    ${radiusMd}
  }
`;

export default IGC2RoomContent;
