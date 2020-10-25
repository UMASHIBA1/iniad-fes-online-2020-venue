import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import stairImg from "../../../statics/stair.png";
import RoomMark from "../../atoms/RoomMark";
import {
  RoomEnvLinkProps,
  StairProps,
} from "../../../typings/RoomPropType/RoomPropType";
import iniadfesLogo from "../../../statics/svgs/iniadfes-logo.svg";
import useTypedParams from "../../../hooks/useTypedParams";
import { useHistory } from "react-router-dom";
import { pcLinks, RoomUrlType } from "../../../constants/links";

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
    <RoomWrapper bgImg={stairImg}>
      <Wrapper>
        {thisStairProp &&
        thisStairProp.environment_attributes.up !== undefined ? (
          <RoomMark
          dataControllId={dataControllIds.up}
            imgPath={thisStairProp?thisStairProp.environment_attributes.up.imgPath: iniadfesLogo}
            roomTitle={
              thisStairProp ? thisStairProp.environment_attributes.up.title : ""
            }
            onClick={() => {
              gotoTargetUrl(
                thisStairProp
                  ? (thisStairProp.environment_attributes
                      .up as RoomEnvLinkProps).url
                  : pcLinks.entrance
              );
            }}
          />
        ) : null}
        {thisStairProp && thisStairProp.environment_attributes.down ? (
          <RoomMark
          dataControllId={dataControllIds.down}
            imgPath={thisStairProp?thisStairProp.environment_attributes.down.imgPath:iniadfesLogo}
            roomTitle={
              thisStairProp
                ? thisStairProp.environment_attributes.down.title
                : ""
            }
            onClick={() => {
              gotoTargetUrl(
                thisStairProp
                  ? thisStairProp.environment_attributes.down.url
                  : pcLinks.entrance
              );
            }}
          />
        ) : null}
        {thisStairProp && thisStairProp.environment_attributes.room ? (
          <RoomMark
          dataControllId={dataControllIds.room}
            imgPath={thisStairProp?thisStairProp.environment_attributes.room.imgPath:iniadfesLogo}
            roomTitle={
              thisStairProp
                ? thisStairProp.environment_attributes.room.title
                : ""
            }
            onClick={() => {
              gotoTargetUrl(
                thisStairProp
                  ? thisStairProp.environment_attributes.room.url
                  : pcLinks.entrance
              );
            }}
          />
        ) : null}
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
      top: 8%;
      left: 39%;
    }

    &[data-controll-id=${dataControllIds.down}] {
      position: absolute;
      bottom: 36%;
      right:38%;
    }

    &[data-controll-id=${dataControllIds.room}] {
      position: absolute;
      bottom: 7%;
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
