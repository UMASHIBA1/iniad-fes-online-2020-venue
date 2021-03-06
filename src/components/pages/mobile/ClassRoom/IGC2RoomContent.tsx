import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../../constants/links";
import { IGC2EnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import ObjectMark from "../../../atoms/ObjectMark";
import Img from "../../../atoms/Img";
import Link from "../../../atoms/Link";
import styled from "styled-components";
import { whiteText } from "../../../../cssProps/colors";
import { radiusMd } from "../../../../cssProps/radius";
import breakPoints from "../../../../constants/breakPoints";
import ViewingProp from "../../../../typings/ViewingProp";
import VideoModal from "../../../molecules/VideoModal";
import { normalShadow } from "../../../../cssProps/shadow";
import CircleDescriptionModal from "../../../organisms/CircleDescriptionModal";


interface Props {
  igc2EnvProps: IGC2EnvAttr;
  history: ReturnType<typeof useHistory>;
  viewingScreen: ViewingProp;
}

const dataControllId = {
  objButton: "igc2RoomContent-obj-button",
  door: "igc2RoomContent-left-door",
};

function IGC2RoomContent({ igc2EnvProps: env, history, viewingScreen }: Props) {
  const [isShowModal, changeIsShowModal] = useState(false);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  return (
    <Wrapper>
      <CircleDescriptionModal isMobile={true} description={env.circleDescription} title={env.circleTitle} viewingScreen={viewingScreen} />
      <RoomMark
        imgPath={env.door.imgPath}
        dataControllId={dataControllId.door}
        roomTitle={env.door.title}
        onClick={() => {
          gotoTargetUrl(env.door.url);
        }}
      />
      <ObjectMark
        onClick={() => changeIsShowModal(true)}
        dataControllId={dataControllId.objButton}
        title="動画"
      />
      <VideoModal
      isMobile={true}
      isShow={isShowModal}
      viewingScreen={viewingScreen}
      onClose={() => {
          changeIsShowModal(false);
        }}
        title={env.title}
        videoPropList={[env.video]}
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

// NOTE: ArtWorksは左側しか存在しないのでleftOrRightの判定をしない
const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > button {
    &[data-controll-id=${dataControllId.door}] {
      position: absolute;
      top: 50%;
      right: 5%;
    }

    &[data-controll-id=${dataControllId.objButton}] {
      position: absolute;
      top: 24%;
      left: 28%;
    }
  }
`;

const GoGame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  ${whiteText}
  ${radiusMd}
  font-weight: bold;

  ${breakPoints.downSm} {
    font-size: 12px;
  }
`;

const LinkWrapper = styled.div`
  width: 140px;
  ${radiusMd}
  position: absolute;
  top: 25%;
  left: 34%;

  ${breakPoints.downSm} {
    width: 120px;
  }

`;

const ImgWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  > ${Img} {
    ${radiusMd}
  ${normalShadow(5)}
  }
`;

export default IGC2RoomContent;
