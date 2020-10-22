import React, { useEffect, useState } from "react";
import RoomWrapper from "../../../templates/pc/RoomWrapper";
import rightRoomImg from "../../../../statics/right-classroom.jpg";
import leftRoomImg from "../../../../statics/left-classroom.jpg";
import ClassRoomProps from "../../../../typings/RoomPropType/ClassRoomProps";
import { useHistory } from "react-router-dom";
import useTypedParams from "../../../../hooks/useTypedParams";
import { RoomUrlType } from "../../../../constants/links";
import FuncButtons from "../../../molecules/pc/FuncButtons";
import styled from "styled-components";
import RoomMark from "../../../atoms/RoomMark";
import logoPath from "../../../../statics/svgs/iniadfes-logo.svg";
import MusicRoomContent from "./MusicRoomContent";
import VideoRoomContent from "./VideoRoomContent";
import PhotoListContent from "./PhotoListContent";
import IGC2RoomContent from "./IGC2RoomContent";
import PDFRoomContent from "./PDFRoomContent";
import TATFORoomContent from "./TATFORoomContent";

interface Props {
  classRoomProps: ClassRoomProps[];
}

const judgeRoomImg = (leftOrRight: ClassRoomProps["environment_attributes"]["leftOrRight"]) => {
    if(leftOrRight === "right") {
      return rightRoomImg;
    }else {
      return leftRoomImg;
    }
}

function ClassRoom({ classRoomProps }: Props) {
  const history = useHistory();
  const [thisClassRoomProp] = useThisClassRoomProp(classRoomProps);

  return (
    <RoomWrapper bgImg={judgeRoomImg(thisClassRoomProp?thisClassRoomProp.environment_attributes.leftOrRight: "left")}>
      <Wrapper>
        {createthisModeRoom(history, thisClassRoomProp)}
        <FuncButtons />
      </Wrapper>
    </RoomWrapper>
  );
}

const dataControllId = {
  door: "classroom-left-door"
}

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  >button {
    &[data-controll-id=${dataControllId.door}] {
      position: absolute;
      top: 47%;
      left: 5%;
    }
  }
`;

const createthisModeRoom = (
  history: ReturnType<typeof useHistory>,
  thisClassRoomProp?: ClassRoomProps
) => {
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };
  if (thisClassRoomProp) {
    const env = thisClassRoomProp.environment_attributes;
    switch (env.mode) {
      case "oneObj":
        return (
          <RoomMark imgPath={thisClassRoomProp?thisClassRoomProp.environment_attributes.door.imgPath: logoPath} dataControllId={dataControllId.door} roomTitle={thisClassRoomProp?thisClassRoomProp.environment_attributes.door.title: ""} onClick={() => {
              gotoTargetUrl(env.door.url);
        }} />
        );
      case "twoObj":
        return (
            <RoomMark imgPath={thisClassRoomProp?thisClassRoomProp.environment_attributes.door.imgPath:logoPath} dataControllId={dataControllId.door} roomTitle={thisClassRoomProp?thisClassRoomProp.environment_attributes.door.title: ""} onClick={() => {
                gotoTargetUrl(env.door.url);
        }} />
        );
      case "musics":
        return(
          <MusicRoomContent history={history} musicEnvProps={env} />
        );
      case "videoList":
        return(
          <VideoRoomContent history={history} videoEnvProps={env} />
        )
      case "photoList":
        return(
          <PhotoListContent history={history} photoListEnvProps={env} />
        );
      case "igc2":
        return(
          <IGC2RoomContent history={history} igc2EnvProps={env} />
          )
      case "pdfRoom":
        return(
          <PDFRoomContent history={history} pdfEnvProps={env} />
        )
      case "tatfo":
        return(
          <TATFORoomContent history={history} tatfoEnvProps={env} />
        );
      default:
        return "この形式の部屋は存在しないみたい。。。🙏";
    }
  } else {
    return "この部屋は存在しないみたい。。。🙇‍♂️";
  }
};

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
  const [thisThisClasRoomProp, changeThisClassRoomProp] = useState(
    findThisClassRoomProp(name)
  );

  useEffect(() => {
    changeThisClassRoomProp(findThisClassRoomProp(name));
  }, [classRoomProps, name]);

  return [thisThisClasRoomProp];
};

export default ClassRoom;
