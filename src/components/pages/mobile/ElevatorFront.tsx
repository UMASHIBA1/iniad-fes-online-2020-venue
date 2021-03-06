import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RoomWrapper from "../../templates/mobile/RoomWrapper";
import elevatorFrontImg from "../../../statics/elevator-front.png";
import { ElevatorFrontProps } from "../../../typings/RoomPropType/RoomPropType";
import { useHistory } from "react-router-dom";
import useTypedParams from "../../../hooks/useTypedParams";
import { mobileLinks, RoomUrlType } from "../../../constants/links";
import RoomMark from "../../atoms/RoomMark";
import Footer from "../../molecules/mobile/Footer";

interface Props {
  elevatorFrontProps: ElevatorFrontProps[];
}

const dataControllIds = {
  roadx1xx: "elevatorFront-roadx1xx-controll",
  roadX2xx: "elevatorFront-roadx2xx-controll",
  back: "elevatorFront-back-controll"
}

function ElevatorFront({ elevatorFrontProps }: Props) {
  const history = useHistory();
  const [thisElevatorFrontProps] = useThisElevatorFrontProp(elevatorFrontProps);
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  return (
    <RoomWrapper isOneScreen={false} bgImg={elevatorFrontImg}>
      <Wrapper>
        {thisElevatorFrontProps &&
        thisElevatorFrontProps.environment_attributes.roadx1xx ? (
          <RoomMark
          dataControllId={dataControllIds.roadx1xx}
            imgPath={thisElevatorFrontProps.environment_attributes.roadx1xx.imgPath}
            roomTitle={
              thisElevatorFrontProps
                ? thisElevatorFrontProps.environment_attributes.roadx1xx.title
                : ""
            }
            onClick={() => {
              gotoTargetUrl(
                thisElevatorFrontProps
                  ? thisElevatorFrontProps.environment_attributes.roadx1xx.url
                  : mobileLinks.entrance
              );
            }}
          />
        ) : null}
        {thisElevatorFrontProps &&
        thisElevatorFrontProps.environment_attributes.roadx2xx ? (
          <RoomMark
          dataControllId={dataControllIds.roadX2xx}
            imgPath={thisElevatorFrontProps.environment_attributes.roadx2xx.imgPath}
            roomTitle={
              thisElevatorFrontProps
                ? thisElevatorFrontProps.environment_attributes.roadx2xx.title
                : ""
            }
            onClick={() => {
              gotoTargetUrl(
                thisElevatorFrontProps
                  ? thisElevatorFrontProps.environment_attributes.roadx2xx.url
                  : mobileLinks.entrance
              );
            }}
          />
        ) : null}
                {thisElevatorFrontProps &&
        thisElevatorFrontProps.environment_attributes.back ? (
          <RoomMark
          dataControllId={dataControllIds.back}
            imgPath={thisElevatorFrontProps.environment_attributes.back.imgPath}
            roomTitle={
              thisElevatorFrontProps
                ? thisElevatorFrontProps.environment_attributes.back.title
                : ""
            }
            onClick={() => {
              gotoTargetUrl(
                thisElevatorFrontProps
                  ? thisElevatorFrontProps.environment_attributes.back.url
                  : mobileLinks.entrance
              );
            }}
          />
        ) : null}
        <Footer isShowChat={false} />
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
    &[data-controll-id=${dataControllIds.roadx1xx}] {
      position: absolute;
      top: 20%;
      right: 18%;
    }

    &[data-controll-id=${dataControllIds.roadX2xx}] {
      position: absolute;
      top: 40%;
      left: 18%;
    }

    &[data-controll-id=${dataControllIds.back}] {
      position: absolute;
      bottom: 10%;
      left: 48%;
    }
  }
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
