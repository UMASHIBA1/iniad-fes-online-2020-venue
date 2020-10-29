import React, { useEffect, useState } from "react";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import roadImg1 from "../../../statics/road-1.png";
import roadImg2 from "../../../statics/road-2.png";
import roadImg3 from "../../../statics/road-3.png";
import { RoadProps } from "../../../typings/RoomPropType/RoomPropType";
import { useHistory } from "react-router-dom";
import { pcLinks, RoomUrlType } from "../../../constants/links";
import useTypedParams from "../../../hooks/useTypedParams";
import styled, { css } from "styled-components";
import RoomMark from "../../atoms/RoomMark";
import logoPath from "../../../statics/svgs/iniadfes-logo.svg";

interface Props {
  roadProps: RoadProps[];
}

const controllIds = {
  right1: "road-right1-button-controll",
  left1: "road-left1-button-controll",
  next: "road-next-button-controll",
  back: "road-back-button-controll",
};

const judgeBGImg = (mode: RoadProps["environment_attributes"]["mode"]) => {
  if (mode === "front") {
    return roadImg1;
  } else if (mode === "center") {
    return roadImg2;
  } else {
    return roadImg3;
  }
};

function Road({ roadProps }: Props) {
  const history = useHistory();
  const [thisRoadProp] = useThisRoadProp(roadProps);

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  return (
    <RoomWrapper
      bgImg={judgeBGImg(
        thisRoadProp ? thisRoadProp.environment_attributes.mode : "front"
      )}
    >
      <Wrapper mode={thisRoadProp?thisRoadProp.environment_attributes.mode: "front"}>
        <RoomMark
          imgPath={
            thisRoadProp
              ? thisRoadProp.environment_attributes.doorRight1.imgPath
              : logoPath
          }
          roomTitle={
            thisRoadProp
              ? thisRoadProp.environment_attributes.doorRight1.title
              : "空き部屋"
          }
          dataControllId={controllIds.right1}
          onClick={() => {
            gotoTargetUrl(
              thisRoadProp
                ? thisRoadProp.environment_attributes.doorRight1.url
                : pcLinks.entrance
            );
          }}
        />
        <RoomMark
          imgPath={
            thisRoadProp
              ? thisRoadProp.environment_attributes.doorLeft1.imgPath
              : logoPath
          }
          roomTitle={
            thisRoadProp
              ? thisRoadProp.environment_attributes.doorLeft1.title
              : "空き部屋"
          }
          dataControllId={controllIds.left1}
          onClick={() => {
            gotoTargetUrl(
              thisRoadProp
                ? thisRoadProp.environment_attributes.doorLeft1.url
                : pcLinks.entrance
            );
          }}
        />
        <RoomMark
          imgPath={
            thisRoadProp
              ? thisRoadProp.environment_attributes.next.imgPath
              : logoPath
          }
          roomTitle={
            thisRoadProp
              ? thisRoadProp.environment_attributes.next.title
              : "空き部屋"
          }
          dataControllId={controllIds.next}
          onClick={() => {
            gotoTargetUrl(
              thisRoadProp
                ? thisRoadProp.environment_attributes.next.url
                : pcLinks.entrance
            );
          }}
        />
        <RoomMark
          imgPath={
            thisRoadProp
              ? thisRoadProp.environment_attributes.back.imgPath
              : logoPath
          }
          roomTitle={
            thisRoadProp
              ? thisRoadProp.environment_attributes.back.title
              : "空き部屋"
          }
          dataControllId={controllIds.back}
          onClick={() => {
            gotoTargetUrl(
              thisRoadProp
                ? thisRoadProp.environment_attributes.back.url
                : pcLinks.entrance
            );
          }}
        />
      </Wrapper>
    </RoomWrapper>
  );
}

const Wrapper = styled.div<{mode: RoadProps["environment_attributes"]["mode"]}>`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > button {

    &[data-controll-id=${controllIds.next}] {
      position: absolute;
      top: 4%;
      left: 48%;
    }
    &[data-controll-id=${controllIds.back}] {
      position: absolute;
      bottom: 5%;
      left: 50%;
    }

    ${({mode}) => mode==="front" && css`
    &[data-controll-id=${controllIds.right1}] {
      position: absolute;
      bottom: 50%;
      right: 12%;
    }
    &[data-controll-id=${controllIds.left1}] {
      position: absolute;
      bottom: 60%;
      left: 16%;
    }
    `}

    ${({mode}) => mode==="center" && css`
    &[data-controll-id=${controllIds.right1}] {
      position: absolute;
      bottom: 62%;
      right: 12%;
    }
    &[data-controll-id=${controllIds.left1}] {
      position: absolute;
      bottom: 60%;
      left:13%;
    }
    `}

    ${({mode}) => mode==="end" && css`
    &[data-controll-id=${controllIds.right1}] {
      position: absolute;
      bottom: 70%;
      right: 10%;
    }
    &[data-controll-id=${controllIds.left1}] {
      position: absolute;
      bottom: 60%;
      left: 10%;
    }
    `}


  }
`;

const useThisRoadProp = (roadProps: RoadProps[]) => {
  const findThisRoadProp = (thisRoadName: RoadProps["name"]) =>
    roadProps.find((nowProps) => {
      if (nowProps.name === thisRoadName) {
        return true;
      } else {
        return false;
      }
    });

  const { name } = useTypedParams();
  const [thisThisRoadProp, changeThisRoadProp] = useState(
    findThisRoadProp(name)
  );

  useEffect(() => {
    changeThisRoadProp(findThisRoadProp(name));
  }, [roadProps, name]);

  return [thisThisRoadProp];
};

export default Road;
