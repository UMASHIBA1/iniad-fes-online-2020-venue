import React from "react";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import hallImg from "../../../statics/hall.png";
import { useHistory } from "react-router-dom";
import { pcLinks, RoomUrlType } from "../../../constants/links";
import Button from "../../atoms/Button/Button";
import { HallProps } from "../../../typings/RoomPropType/RoomPropType";
import FuncButtons from "../../molecules/pc/FuncButtons";
import RoomMark from "../../atoms/RoomMark";
import iniadfesLogo from "../../../statics/svgs/iniadfes-logo.svg";
import styled from "styled-components";
import ClassRoomVideo from "../../organisms/ClassRoomVideo";

interface Props {
  hallProps: HallProps[];
}

const dataControllIds = {
  door1: "hall-door1-controll",
  door2: "hall-door2-controll",
};

function Hall({ hallProps }: Props) {
  const history = useHistory();

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  return (
    <RoomWrapper bgImg={hallImg}>
      <Wrapper>
        <ClassRoomVideo videoProps={hallProps[0].environment_attributes.video} positionLeft="41%" positionTop="5%" />
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
                : pcLinks.entrance
            );
          }}
          dataControllId={dataControllIds.door1}
        />
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
                : pcLinks.entrance
            );
          }}
          dataControllId={dataControllIds.door2}
        />
        <FuncButtons />
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
    &[data-controll-id=${dataControllIds.door1}] {
      position: absolute;
      bottom: 14%;
      left: 0.5%;
    }
    &[data-controll-id=${dataControllIds.door2}] {
      position: absolute;
      bottom: 40%;
      left: 8%;
    }
  }
`;

export default Hall;
