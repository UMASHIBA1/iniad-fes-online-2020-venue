import React from "react";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import entranceImg from "../../../statics/totyo.png";
import { EntranceProps } from "../../../typings/RoomPropType/RoomPropType";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../constants/links";
import Button from "../../atoms/Button/Button";

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
        onClick={() => {
          gotoTargetUrl(
            entranceProps[0] ? entranceProps[0].environment_attributes.door1.url : ""
          );
        }}
      />
    </RoomWrapper>
  );
}

export default Entrance;
