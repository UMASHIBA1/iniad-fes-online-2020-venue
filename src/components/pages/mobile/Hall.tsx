import React, { useState } from "react";
import RoomWrapper from "../../templates/mobile/RoomWrapper";
import hallImg from "../../../statics/hall.png";
import { useHistory } from "react-router-dom";
import { mobileLinks, RoomUrlType } from "../../../constants/links";
import { HallProps } from "../../../typings/RoomPropType/RoomPropType";
import RoomMark from "../../atoms/RoomMark";
import iniadfesLogo from "../../../statics/svgs/iniadfes-logo.svg";
import styled from "styled-components";
import Footer from "../../molecules/mobile/Footer";
import ObjectMark from "../../atoms/ObjectMark";
import VideoModal from "../../molecules/VideoModal";
import { useTypedSelector } from "../../../redux/store";

interface Props {
  hallProps: HallProps[];
}

const dataControllIds = {
  objButton: "hall-obj-button-controll",
  door1: "hall-door1-controll",
  door2: "hall-door2-controll",
};

function Hall({ hallProps }: Props) {
  const history = useHistory();
  const [isShowModal, changeIsShowModal] = useState(false);
  const viewingScreen = useTypedSelector(({viewingScreen}) => viewingScreen);


  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  return (
    <RoomWrapper isOneScreen={false} bgImg={hallImg}>
      <Wrapper>
        {hallProps[0]&& hallProps[0].environment_attributes ? (
          <React.Fragment>
                    <RoomMark
          imgPath={hallProps[0]?hallProps[0].environment_attributes.doorLeft.imgPath: iniadfesLogo}
          roomTitle={
            hallProps[0]
              ? hallProps[0].environment_attributes.doorLeft.title
              : "空き部屋"
          }
          onClick={() => {
            gotoTargetUrl(
              hallProps[0]
                ? hallProps[0].environment_attributes.doorLeft.url
                : mobileLinks.entrance
            );
          }}
          dataControllId={dataControllIds.door1}
        />
        <ObjectMark title="動画" onClick={() => {changeIsShowModal(true)}} dataControllId={dataControllIds.objButton} />
        <VideoModal isMobile={true} isShow={isShowModal} onClose={() => {changeIsShowModal(false)}} title="" description="" videoPropList={[hallProps[0].environment_attributes.video]} viewingScreen={viewingScreen} />
        <RoomMark
          imgPath={hallProps[0]?hallProps[0].environment_attributes.doorRight.imgPath: iniadfesLogo}
          roomTitle={
            hallProps[0]
              ? hallProps[0].environment_attributes.doorRight.title
              : "空き部屋"
          }
          onClick={() => {
            gotoTargetUrl(
              hallProps[0]
                ? hallProps[0].environment_attributes.doorRight.url
                : mobileLinks.entrance
            );
          }}
          dataControllId={dataControllIds.door2}
        />
        <Footer />
          </React.Fragment>
        ): "教室情報のデータがありませんでした。"}
      </Wrapper>
    </RoomWrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  > button {
    &[data-controll-id=${dataControllIds.objButton}] {
      position: absolute;
      top: 22%;
      left: 48%;
    }

    &[data-controll-id=${dataControllIds.door1}] {
      position: absolute;
      bottom: 15%;
      left: 1%;
    }
    &[data-controll-id=${dataControllIds.door2}] {
      position: absolute;
      bottom: 45%;
      left: 10%;
    }
  }
`;

export default Hall;
