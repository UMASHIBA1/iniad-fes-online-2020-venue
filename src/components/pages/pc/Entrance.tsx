import React from "react";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import entranceImg from "../../../statics/totyo.png";
import { EntranceProps } from "../../../typings/RoomPropType/RoomPropType";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../constants/links";
import Button from "../../atoms/Button/Button";
import ObjectMark from "../../atoms/ObjectMark";
import IconButton from "../../atoms/IconButton";
import mapIcon from "../../../statics/svgs/map-icon.svg";

interface Props {
  entranceProps: EntranceProps[];
}

function Entrance({entranceProps}: Props) {
  const history = useHistory();

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  return(
    <RoomWrapper bgImg={entranceImg}>
      Entrance
      <Button
        text="door1"
        mode="blue"
        onClick={() => {
          gotoTargetUrl(
            entranceProps[0] ? entranceProps[0].environment_attributes.door1.url : ""
          );
        }}
      />
      <div style={{margin: "300px"}}>
        <ObjectMark onClick={()=>console.log("Object Mark 実験")} />
      </div>
      <IconButton svgPath={mapIcon} iconDescription="map"></IconButton>
    </RoomWrapper>
  );
}

export default Entrance;
