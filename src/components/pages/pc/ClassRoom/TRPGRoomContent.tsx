import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RoomUrlType } from "../../../../constants/links";
import { TRPGEnvAttr } from "../../../../typings/RoomPropType/ClassRoomProps";
import RoomMark from "../../../atoms/RoomMark";
import ClassRoomVideo from "../../../organisms/ClassRoomVideo";

interface Props {
  trpgEnvProps: TRPGEnvAttr;
  history: ReturnType<typeof useHistory>;
}

const dataControllId = {
  objButton: "photolistRoomContent-obj-button",
  door: "photolistRoomContent-left-door",
};

function TRPGRoomContent({ trpgEnvProps: env, history }: Props) {
  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  return (
    <Wrapper>
      <RoomMark
        imgPath={env.door.imgPath}
        dataControllId={dataControllId.door}
        roomTitle={env.door.title}
        onClick={() => {
          gotoTargetUrl(env.door.url);
        }}
      />
      <ClassRoomVideo videoProps={env.video} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > button {

        &[data-controll-id=${dataControllId.door}] {
          position: absolute;
          top: 40%;
          left: 3%;
        }
  }
`;


export default TRPGRoomContent;
