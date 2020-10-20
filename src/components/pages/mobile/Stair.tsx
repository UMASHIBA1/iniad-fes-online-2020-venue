import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RoomWrapper from "../../templates/mobile/RoomWrapper";
import stairImg from "../../../statics/stair.png"; // FIXME: room2を暫定的にhallとして扱っているので画像の生成が完了したら直す
import RoomMark from "../../atoms/RoomMark";
import {
  RoomEnvLinkProps,
  StairProps,
} from "../../../typings/RoomPropType/RoomPropType";
import iniadfesLogo from "../../../statics/svgs/iniadfes-logo.svg";
import useTypedParams from "../../../hooks/useTypedParams";
import { useHistory } from "react-router-dom";
import { mobileLinks, RoomUrlType } from "../../../constants/links";
import Footer from "../../molecules/mobile/Footer";

interface Props {
  stairProps: StairProps[];
}

const dataControllIds = {
  up: 'stair-up',
  down: 'stair-down',
  room: 'stair-room'
}

function Stair({ stairProps }: Props) {
  const history = useHistory();
  const [thisStairProp] = useThisStairProp(stairProps);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  return (
    <RoomWrapper bgImg={stairImg} isOneScreen={true}>
      Stair
      <Wrapper>
        {thisStairProp &&
        thisStairProp.environment_attributes.up !== undefined ? (
          <RoomMark
          dataControllId={dataControllIds.up}
            imgPath={iniadfesLogo}
            roomTitle={
              thisStairProp ? thisStairProp.environment_attributes.up.title : ""
            }
            onClick={() => {
              gotoTargetUrl(
                thisStairProp
                  ? (thisStairProp.environment_attributes
                      .up as RoomEnvLinkProps).url
                  : mobileLinks.entrance
              );
            }}
          />
        ) : null}
        {thisStairProp && thisStairProp.environment_attributes.down ? (
          <RoomMark
          dataControllId={dataControllIds.down}
            imgPath={iniadfesLogo}
            roomTitle={
              thisStairProp
                ? thisStairProp.environment_attributes.down.title
                : ""
            }
            onClick={() => {
              gotoTargetUrl(
                thisStairProp
                  ? thisStairProp.environment_attributes.down.url
                  : mobileLinks.entrance
              );
            }}
          />
        ) : null}
        {thisStairProp && thisStairProp.environment_attributes.room ? (
          <RoomMark
          dataControllId={dataControllIds.room}
            imgPath={iniadfesLogo}
            roomTitle={
              thisStairProp
                ? thisStairProp.environment_attributes.room.title
                : ""
            }
            onClick={() => {
              gotoTargetUrl(
                thisStairProp
                  ? thisStairProp.environment_attributes.room.url
                  : mobileLinks.entrance
              );
            }}
          />
        ) : null}
        <Footer />
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

  >button {
    &[data-controll-id=${dataControllIds.up}] {
      position: absolute;
      top: 6%;
      left: 40%;
    }

    &[data-controll-id=${dataControllIds.down}] {
      position: absolute;
      top: 53%;
      right: 40%;
    }

    &[data-controll-id=${dataControllIds.room}] {
      position: absolute;
      bottom: 10%;
      left: 48%;
    }

  }
`;

const useThisStairProp = (stairProps: StairProps[]) => {
  const findThisStairProp = (thisStairName: StairProps["name"]) =>
    stairProps.find((nowProps) => {
      if (nowProps.name === thisStairName) {
        return true;
      } else {
        return false;
      }
    });

  const { name } = useTypedParams();
  const [thisStairProp, changeThisStairProp] = useState(
    findThisStairProp(name)
  );

  useEffect(() => {
    console.log(name);
    changeThisStairProp(findThisStairProp(name));
  }, [stairProps, name]);

  return [thisStairProp];
};

export default Stair;
