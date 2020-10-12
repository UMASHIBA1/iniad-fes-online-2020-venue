import React, { useEffect, useState } from "react";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import roadImg from "../../../statics/road.png";
import { RoadProps } from "../../../typings/RoomPropType/RoomPropType";
import { useHistory } from "react-router-dom";
import { pcLinks, RoomUrlType } from "../../../constants/links";
import useTypedParams from "../../../hooks/useTypedParams";
import Button from "../../atoms/Button/Button";
import FuncButtons from "../../molecules/FuncButtons";

interface Props {
  roadProps: RoadProps[];
}

function Road({roadProps}: Props) {
  const history = useHistory();
  const [thisRoadProp] = useThisRoadProp(roadProps);

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };


  return(
    <RoomWrapper bgImg={roadImg}>
      Road
      <Button
        text="1024教室へ"
        onClick={() => {
          gotoTargetUrl(
            thisRoadProp ? thisRoadProp.environment_attributes.door1.url : pcLinks.entrance
          );
        }}
      />
      <Button
        text="ホールへ"
        onClick={() => {
          gotoTargetUrl(
            thisRoadProp ? thisRoadProp.environment_attributes.door2.url : pcLinks.entrance
          );
        }}
      />
      <FuncButtons />
    </RoomWrapper>
  );
}


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
