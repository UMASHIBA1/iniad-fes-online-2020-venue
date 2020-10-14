import React from "react";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import hallImg from "../../../statics/classroom2.png"; // FIXME: room2を暫定的にhallとして扱っているので画像の生成が完了したら直す
import { useHistory } from "react-router-dom";
import { pcLinks, RoomUrlType } from "../../../constants/links";
import Button from "../../atoms/Button/Button";
import { HallProps } from "../../../typings/RoomPropType/RoomPropType";
import FuncButtons from "../../molecules/FuncButtons";
import RoomMark from "../../atoms/RoomMark";
import iniadfesLogo from "../../../statics/svgs/iniadfes-logo.svg";
import styled from "styled-components";

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
        Hall
        <Button
          text="door1"
          onClick={() => {
            gotoTargetUrl(
              hallProps[0]
                ? hallProps[0].environment_attributes.door1.url
                : pcLinks.entrance
            );
          }}
        />
        <Button
          text="door2"
          onClick={() => {
            gotoTargetUrl(
              hallProps[0]
                ? hallProps[0].environment_attributes.door2.url
                : pcLinks.entrance
            );
          }}
        />
        <RoomMark
          imgPath={iniadfesLogo}
          roomTitle={
            hallProps[0]
              ? hallProps[0].environment_attributes.door1.title
              : "空き部屋"
          }
          onClick={() => {
            gotoTargetUrl(
              hallProps[0]
                ? hallProps[0].environment_attributes.door1.url
                : pcLinks.entrance
            );
          }}
          dataControllId={dataControllIds.door1}
        />
        <RoomMark
          imgPath={iniadfesLogo}
          roomTitle={
            hallProps[0]
              ? hallProps[0].environment_attributes.door2.title
              : "空き部屋"
          }
          onClick={() => {
            gotoTargetUrl(
              hallProps[0]
                ? hallProps[0].environment_attributes.door2.url
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
      top: 13%;
      right: 33%;
    }
    &[data-controll-id=${dataControllIds.door2}] {
      position: absolute;
      bottom: 13%;
      right: 33%;
    }
  }
`;

export default Hall;
