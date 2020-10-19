import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import { IGC2EnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import logoPath from "../../../../statics/svgs/iniadfes-logo.svg";
import ObjectMark from "../../../atoms/ObjectMark";
import styled from "styled-components";
import IGC2Modal from "../../../organisms/IGC2Modal";
import {  whiteText } from "../../../../cssProps/colors";
import { radiusLg, radiusMd } from "../../../../cssProps/radius";
import breakPoints from "../../../../constants/breakPoints";
import Img from "../../../atoms/Img";
import Link from "../../../atoms/Link";

interface Props {
  igc2EnvProps: IGC2EnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "igc2RoomContent-obj-button",
  door: "igc2RoomContent-left-door",
};

function IGC2RoomContent({ igc2EnvProps: env, history }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  return (
    <Wrapper>
      IGC2
      <RoomMark
        imgPath={logoPath}
        dataControllId={dataControllId.door}
        roomTitle={env.door.title}
        onClick={() => {
          gotoTargetUrl(env.door.url);
        }}
      />
      <ObjectMark
        onClick={() => changeIsShowModal(true)}
        dataControllId={dataControllId.objButton}
      />
      <IGC2Modal
        gameLink={env.gameLink}
        isMobile={false}
        isShow={isShowModal}
        onClose={() => {
          changeIsShowModal(false);
        }}
        sumbnialImg={env.imgPath}
        title={env.title}
        videoProps={env.video}
      />
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
      top: 60%;
      left: 20%;
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
  top: 35%;
  right: 20%;
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
  filter: blur(0px);
  :hover {
    filter: blur(2px);
  }

  > ${Img} {
    ${radiusMd}
  }
`;

export default IGC2RoomContent;
