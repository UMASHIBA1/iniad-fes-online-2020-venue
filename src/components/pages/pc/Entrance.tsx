import React from "react";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import entranceImg from "../../../statics/totyo.png";
import { EntranceProps } from "../../../typings/RoomPropType/RoomPropType";
import { useHistory } from "react-router-dom";
import { pcLinks, RoomUrlType } from "../../../constants/links";
import FuncButtons from "../../molecules/pc/FuncButtons";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../../redux/store";
import useDidMount from "../../../hooks/useDidMount/useDidMount";
import { toVisited } from "../../../redux/modules/isFirstVisit";
import Chat from "../../organisms/Chat/Chat";
import RoomMark from "../../atoms/RoomMark";
import iniadfesLogo from "../../../statics/svgs/iniadfes-logo.svg";
import styled from "styled-components";

interface Props {
  entranceProps: EntranceProps[];
}

const controllId = "entrance-door-button-controll";

function Entrance({ entranceProps }: Props) {
  const history = useHistory();
  const dispatch: DispatchType = useDispatch();

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  useDidMount(() => {
    dispatch(toVisited());
  });

  return (
    <RoomWrapper bgImg={entranceImg}>
      <Wrapper>
        <RoomMark
          imgPath={entranceProps[0]?entranceProps[0].environment_attributes.door.imgPath:iniadfesLogo}
          roomTitle={
            entranceProps[0]
              ? entranceProps[0].environment_attributes.door.title
              : "空き部屋"
          }
          dataControllId={controllId}
          onClick={() => {
            gotoTargetUrl(
              entranceProps[0]
                ? entranceProps[0].environment_attributes.door.url
                : pcLinks.entrance
            );
          }}
        />
        <Chat />
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
  > button {
    &[data-controll-id=${controllId}] {
      position: absolute;
      top: 24%;
      right: 35%;
    }
  }
`;

export default Entrance;
