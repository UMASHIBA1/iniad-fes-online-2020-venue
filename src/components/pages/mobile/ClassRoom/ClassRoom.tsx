import React, { useEffect, useState } from "react";
import RoomWrapper from "../../../templates/mobile/RoomWrapper";
import rightRoomImg from "../../../../statics/right-classroom.jpg";
import leftRoomImg from "../../../../statics/left-classroom.jpg";
import ClassRoomProps from "../../../../typings/RoomPropType/ClassRoomProps";
import { useHistory } from "react-router-dom";
import useTypedParams from "../../../../hooks/useTypedParams";
import { RoomUrlType } from "../../../../constants/links";
import styled from "styled-components";
import RoomMark from "../../../atoms/RoomMark";
import Footer from "../../../molecules/mobile/Footer";
import MusicRoomContent from "./MusicRoomContent";
import { useTypedSelector } from "../../../../redux/store";
import ViewingProp from "../../../../typings/ViewingProp";
import VideoListRoomContent from "./VideoListRoomContent";
import PhotoListContent from "./PhotoListContent";
import IGC2RoomContent from "./IGC2RoomContent";
import PDFRoomContent from "./PDFRoomContent";
import TATFORoomContent from "./TATFORoomContent";
import OneVideoContent from "./OneVideoContent";
import ArtListRoomContent from "./ArtListRoomContent";
import YouTubeRoomContent from "./YouTubeRoomContent";

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
  const viewingScreen = useTypedSelector(({viewingScreen}) => viewingScreen);

  return (
    <RoomWrapper bgImg={judgeRoomImg(thisClassRoomProp?thisClassRoomProp.environment_attributes.leftOrRight:"left")} isOneScreen={false}>
      <Wrapper>
        {createthisModeRoom(history, viewingScreen,thisClassRoomProp)}
        <Footer />
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
      left: 15%;
    }
  }
`;

const createthisModeRoom = (
  history: ReturnType<typeof useHistory>,
  viewingScreen: ViewingProp,
  thisClassRoomProp?: ClassRoomProps,
) => {
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  if (thisClassRoomProp) {
    const env = thisClassRoomProp.environment_attributes;
    switch (env.mode) {
      case "oneObj":
        return (
          <RoomMark imgPath={env.door.imgPath} dataControllId={dataControllId.door} roomTitle={thisClassRoomProp?thisClassRoomProp.environment_attributes.door.title: ""} onClick={() => {
              gotoTargetUrl(env.door.url);
        }} />
        );
      case "twoObj":
        return (
            <RoomMark imgPath={env.door.imgPath} dataControllId={dataControllId.door} roomTitle={thisClassRoomProp?thisClassRoomProp.environment_attributes.door.title: ""} onClick={() => {
                gotoTargetUrl(env.door.url);
        }} />
        );
      case "musics":
        return(
          <MusicRoomContent history={history} musicEnvProps={env} viewingScreen={viewingScreen} />
        )
      case "videoList":
        return(
          <VideoListRoomContent history={history} videoEnvProps={env} />
        )
      case "photoList":
        return(
          <PhotoListContent history={history} photoListEnvProps={env} viewingScreen={viewingScreen} />
        )
      case "igc2":
        return(
          <IGC2RoomContent history={history} igc2EnvProps={env} viewingScreen={viewingScreen} />
        );
      case "pdfRoom":
        return(
          <PDFRoomContent history={history} pdfEnvProps={env} viewingScreen={viewingScreen} />
        )
      case "tatfo":
        return(
          <TATFORoomContent history={history} tatfoEnvProps={env} viewingScreen={viewingScreen} />
        );
      case "oneVideo":
        return(
          <OneVideoContent history={history} oneVideoProps={env} viewingScreen={viewingScreen} />
        )
      case "artList":
        return(
          <ArtListRoomContent history={history} artListEnvProps={env} viewingScreen={viewingScreen} />
        )
      case "youtube":
        return(
          <YouTubeRoomContent history={history} youtubeRoomProps={env} viewingScreen={viewingScreen}/>
        )
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
