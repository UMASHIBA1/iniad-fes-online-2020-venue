import React, { useEffect, useState } from "react";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import roadImg from "../../../statics/road.png";
import { RoadProps } from "../../../typings/RoomPropType/RoomPropType";
import { useHistory } from "react-router-dom";
import { pcLinks, RoomUrlType } from "../../../constants/links";
import useTypedParams from "../../../hooks/useTypedParams";
import FuncButtons from "../../molecules/FuncButtons";
import styled from "styled-components";
import RoomMark from "../../atoms/RoomMark";
import logoPath from "../../../statics/svgs/iniadfes-logo.svg";

interface Props {
  roadProps: RoadProps[];
}

const controllIds = {
  right1: "road-right1-button-controll",
  left1: "road-left1-button-controll",
  right2: "road-right2-button-controll",
  left2: "road-left2-button-controll",
}

function Road({roadProps}: Props) {
  const history = useHistory();
  const [thisRoadProp] = useThisRoadProp(roadProps);

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };


  return(
    <RoomWrapper bgImg={roadImg}>
      <Wrapper>
      Road
      <RoomMark imgPath={logoPath} roomTitle={thisRoadProp? thisRoadProp.environment_attributes.doorRight1.title: "空き部屋"} dataControllId={controllIds.right1} onClick={() => {
                  gotoTargetUrl(
                    thisRoadProp ? thisRoadProp.environment_attributes.doorRight1.url : pcLinks.entrance
                  );
      }} />
      <RoomMark imgPath={logoPath} roomTitle={thisRoadProp? thisRoadProp.environment_attributes.doorLeft1.title: "空き部屋"} dataControllId={controllIds.left1} onClick={() => {
                  gotoTargetUrl(
                    thisRoadProp ? thisRoadProp.environment_attributes.doorLeft1.url : pcLinks.entrance
                  );
      }} />
      <RoomMark imgPath={logoPath} roomTitle={thisRoadProp? thisRoadProp.environment_attributes.doorRight2.title: "空き部屋"} dataControllId={controllIds.right2} onClick={() => {
                  gotoTargetUrl(
                    thisRoadProp ? thisRoadProp.environment_attributes.doorRight2.url : pcLinks.entrance
                  );
      }} />
      <RoomMark imgPath={logoPath} roomTitle={thisRoadProp? thisRoadProp.environment_attributes.doorLeft2.title: "空き部屋"} dataControllId={controllIds.left2} onClick={() => {
                  gotoTargetUrl(
                    thisRoadProp ? thisRoadProp.environment_attributes.doorLeft2.url : pcLinks.entrance
                  );
      }} />
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

  >button {
    &[data-controll-id=${controllIds.right1}] {
      position: absolute;
      bottom: 20%;
      right: 20%;
    }
    &[data-controll-id=${controllIds.left1}] {
      position: absolute;
      bottom: 20%;
      left: 20%;
    }
    &[data-controll-id=${controllIds.right2}] {
      position: absolute;
      top: 20%;
      right: 20%;
    }
    &[data-controll-id=${controllIds.left2}] {
      position: absolute;
      top: 20%;
      left: 20%;
    }
  }

`

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
  const [thisThisRoadProp, changeThisRoadProp] = useState(findThisRoadProp(name));

  useEffect(() => {
    changeThisRoadProp(findThisRoadProp(name));
  }, [roadProps, name]);

  return [thisThisRoadProp];
};

export default Road;
