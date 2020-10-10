import React, { useEffect, useState } from "react";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import roomImg from "../../../statics/classroom1.png";
import { ClassRoomProps } from "../../../typings/RoomPropType";
import { useHistory } from "react-router-dom";
import useTypedParams from "../../../hooks/useTypedParams";
import { RoomUrlType } from "../../../constants/links";
import Button from "../../atoms/Button/Button";

interface Props {
  classRoomProps: ClassRoomProps[];
}

function ClassRoom({classRoomProps}: Props) {
  const history = useHistory();
  const [thisClassRoomProp] = useThisClassRoomProp(classRoomProps);

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  return(
    <RoomWrapper bgImg={roomImg}>
      ClassRoom
      <Button
        text="door1"
        onClick={() => {
          gotoTargetUrl(
            thisClassRoomProp ? thisClassRoomProp.environment_attributes.door1.url : ""
          );
        }}
      />
    </RoomWrapper>
  );
}

const useThisClassRoomProp = (classRoomProps: ClassRoomProps[]) => {
  const findThisClassRoomProp = (thisClassRoomName: ClassRoomProps["name"]) =>
    classRoomProps.find((nowProps) => {
      if (nowProps.name === thisClassRoomName) {
        return true;
      } else {
        return false;
      }
    });

  const { name } = useTypedParams();
  const [thisThisClasRoomProp, changeThisClassRoomProp] = useState(findThisClassRoomProp(name));

  useEffect(() => {
    changeThisClassRoomProp(findThisClassRoomProp(name));
  }, [classRoomProps, name]);

  return [thisThisClasRoomProp];
};

export default ClassRoom;
