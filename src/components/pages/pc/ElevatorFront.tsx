import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import elevatorFrontImg from "../../../statics/classroom2.png"; // FIXME: room2を暫定的にhallとして扱っているので画像の生成が完了したら直す
import { ElevatorFrontProps } from "../../../typings/RoomPropType/RoomPropType";
import { useHistory } from "react-router-dom";
import useTypedParams from "../../../hooks/useTypedParams";
import { pcLinks, RoomUrlType } from "../../../constants/links";
import iniadfesLogo from "../../../statics/svgs/iniadfes-logo.svg";
import RoomMark from "../../atoms/RoomMark";

interface Props {
  elevatorFrontProps: ElevatorFrontProps[];
}

function ElevatorFront({ elevatorFrontProps }: Props) {
  const history = useHistory();
  const [thisElevatorFrontProps] = useThisElevatorFrontProp(elevatorFrontProps);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  return (
    <RoomWrapper bgImg={elevatorFrontImg}>
      ElevatorFront
      <Wrapper>
        {thisElevatorFrontProps &&
        thisElevatorFrontProps.environment_attributes.roadx1xx ? (
          <RoomMark
            imgPath={iniadfesLogo}
            roomTitle={
              thisElevatorFrontProps
                ? thisElevatorFrontProps.environment_attributes.roadx1xx.title
                : ""
            }
            onClick={() => {
              gotoTargetUrl(
                thisElevatorFrontProps
                  ? thisElevatorFrontProps.environment_attributes.roadx1xx.url
                  : pcLinks.entrance
              );
            }}
          />
        ) : null}
        {thisElevatorFrontProps &&
        thisElevatorFrontProps.environment_attributes.roadx2xx ? (
          <RoomMark
            imgPath={iniadfesLogo}
            roomTitle={
              thisElevatorFrontProps
                ? thisElevatorFrontProps.environment_attributes.roadx2xx.title
                : ""
            }
            onClick={() => {
              gotoTargetUrl(
                thisElevatorFrontProps
                  ? thisElevatorFrontProps.environment_attributes.roadx2xx.url
                  : pcLinks.entrance
              );
            }}
          />
        ) : null}
                {thisElevatorFrontProps &&
        thisElevatorFrontProps.environment_attributes.back ? (
          <RoomMark
            imgPath={iniadfesLogo}
            roomTitle={
              thisElevatorFrontProps
                ? thisElevatorFrontProps.environment_attributes.back.title
                : ""
            }
            onClick={() => {
              gotoTargetUrl(
                thisElevatorFrontProps
                  ? thisElevatorFrontProps.environment_attributes.back.url
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
`;

const useThisElevatorFrontProp = (elevatorFrontProps: ElevatorFrontProps[]) => {
  const findThisElevatorFrontProp = (
    thisElevatorFrontName: ElevatorFrontProps["name"]
  ) =>
    elevatorFrontProps.find((nowProps) => {
      if (nowProps.name === thisElevatorFrontName) {
        return true;
      } else {
        return false;
      }
    });

  const { name } = useTypedParams();
  const [thisElevatorFrontProp, changeThisElevatorFrontProp] = useState(
    findThisElevatorFrontProp(name)
  );

  useEffect(() => {
    console.log(name);
    changeThisElevatorFrontProp(findThisElevatorFrontProp(name));
  }, [elevatorFrontProps, name]);

  return [thisElevatorFrontProp];
};

export default ElevatorFront;
