import React from "react";
import RoomWrapper from "../../templates/mobile/RoomWrapper";
import entranceImg from "../../../statics/totyo.png";
import styled from "styled-components";
import Footer from "../../molecules/mobile/Footer";
import RoomMark from "../../atoms/RoomMark";
import iniadfeslogo from "../../../statics/svgs/iniadfes-logo.svg";
import { EntranceProps } from "../../../typings/RoomPropType/RoomPropType";
import { pcLinks, RoomUrlType } from "../../../constants/links";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../../redux/store";
import { useHistory } from "react-router-dom";
import useDidMount from "../../../hooks/useDidMount/useDidMount";
import { toVisited } from "../../../redux/modules/isFirstVisit";

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
        Entrance
        <RoomMark
          imgPath={iniadfeslogo}
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
        <Footer />
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
      top: 25%;
      left: 58%;
    }
  }
`;

export default Entrance;
