import React, { useState } from "react";
import RoomWrapper from "../../templates/mobile/RoomWrapper";
import entranceImg from "../../../statics/totyo.png";
import styled from "styled-components";
import Footer from "../../molecules/mobile/Footer";
import RoomMark from "../../atoms/RoomMark";
import iniadfeslogo from "../../../statics/svgs/iniadfes-logo.svg";
import { EntranceProps } from "../../../typings/RoomPropType/RoomPropType";
import { pcLinks, RoomUrlType } from "../../../constants/links";
import { useDispatch } from "react-redux";
import { DispatchType, useTypedSelector } from "../../../redux/store";
import { useHistory } from "react-router-dom";
import useDidMount from "../../../hooks/useDidMount/useDidMount";
import { toVisited } from "../../../redux/modules/isFirstVisit";
import ObjectMark from "../../atoms/ObjectMark";
import PDFModal from "../../molecules/PDFModal";

interface Props {
  entranceProps: EntranceProps[];
}

const controllIds = {
  door: "entrance-door-button-controll",
  pamphlet: "entrance-pamphlet",
};

function Entrance({ entranceProps }: Props) {
  const history = useHistory();
  const dispatch: DispatchType = useDispatch();
  const viewingScreen = useTypedSelector(({viewingScreen}) => viewingScreen);

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  const [isShowPamphlet, changeIsShowPamphlet] = useState(false);

  useDidMount(() => {
    dispatch(toVisited());
  });

  return (
    <RoomWrapper isOneScreen={false} bgImg={entranceImg} roomId={entranceProps[0]?entranceProps[0].environment_attributes.room_id: ""}>
      <Wrapper>
        Entrance
        <RoomMark
          imgPath={
            entranceProps[0]
              ? entranceProps[0].environment_attributes.door.imgPath
              : iniadfeslogo
          }
          roomTitle={
            entranceProps[0]
              ? entranceProps[0].environment_attributes.door.title
              : "空き部屋"
          }
          dataControllId={controllIds.door}
          onClick={() => {
            gotoTargetUrl(
              entranceProps[0]
                ? entranceProps[0].environment_attributes.door.url
                : pcLinks.entrance
            );
          }}
        />
        <ObjectMark
          title="パンフレット"
          color="white"
          dataControllId={controllIds.pamphlet}
          onClick={() => {
            changeIsShowPamphlet(true);
          }}
        />
        <PDFModal
        viewing={viewingScreen}
          isMobile={false}
          isShow={isShowPamphlet}
          onClose={() => {
            changeIsShowPamphlet(false);
          }}
          pdfProps={{
            pageNum: 14,
            url: "https://storage.googleapis.com/iniadfes/public/pamphlet.pdf",
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
    &[data-controll-id=${controllIds.door}] {
      position: absolute;
      top: 25%;
      left: 58%;
    }

    &[data-controll-id=${controllIds.pamphlet}] {
      position: absolute;
      top: 38%;
      right: 5%;
    }

  }
`;

export default Entrance;
