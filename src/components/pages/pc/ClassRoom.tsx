import React, { useEffect, useState } from "react";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import roomImg from "../../../statics/classroom1.png";
import ClassRoomProps from "../../../typings/RoomPropType/ClassRoomProps";
import { useHistory } from "react-router-dom";
import useTypedParams from "../../../hooks/useTypedParams";
import { RoomUrlType } from "../../../constants/links";
import Button from "../../atoms/Button/Button";
import FuncButtons from "../../molecules/FuncButtons";

interface Props {
  classRoomProps: ClassRoomProps[];
}

function ClassRoom({classRoomProps}: Props) {
  const history = useHistory();
  const [thisClassRoomProp] = useThisClassRoomProp(classRoomProps);

  return(
    <RoomWrapper bgImg={roomImg}>
      {createthisModeRoom(history, thisClassRoomProp)}
      <FuncButtons />
    </RoomWrapper>
  );
}

const createthisModeRoom = (history: ReturnType<typeof useHistory>, thisClassRoomProp?: ClassRoomProps) => {

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  if(thisClassRoomProp) {
    const env = thisClassRoomProp.environment_attributes;
    switch(env.mode) {
      case "oneObj":
        return(
          <React.Fragment>
          ClassRoom mode oneObj
          <Button
            text="door1"
            onClick={() => {
              gotoTargetUrl(env.door1.url);
            }}
          />
          </React.Fragment>
        );
      case "twoObj":
        return(
          <React.Fragment>
          ClassRoom mode TwoObj
          <Button
            text="door1"
            onClick={() => {
              gotoTargetUrl(env.door1.url);
            }}
          />
          <Button
            text="door2"
            onClick={() => {
              gotoTargetUrl(env.door2.url);
            }}
          />
          </React.Fragment>
         );
        default:
          return ("この形式の部屋は存在しないみたい。。。🙏")
    }
  }else {
    return ("この部屋は存在しないみたい。。。🙇‍♂️");
  }
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
