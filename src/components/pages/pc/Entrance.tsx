import React, { useState } from "react";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import entranceImg from "../../../statics/totyo.png";
import { EntranceProps } from "../../../typings/RoomPropType/RoomPropType";
import { useHistory } from "react-router-dom";
import { pcLinks, RoomUrlType } from "../../../constants/links";
import FuncButtons from "../../molecules/pc/FuncButtons";
import { useDispatch } from "react-redux";
import { DispatchType, useTypedSelector } from "../../../redux/store";
import useDidMount from "../../../hooks/useDidMount/useDidMount";
import { toVisited } from "../../../redux/modules/isFirstVisit";
import RoomMark from "../../atoms/RoomMark";
import iniadfesLogo from "../../../statics/svgs/iniadfes-logo.svg";
import styled from "styled-components";
import ObjectMark from "../../atoms/ObjectMark";
import PDFModal from "../../molecules/PDFModal";
import { escapeGameDescriptionUrl, pamphletProps } from "../../../constants/filePath";
import ImgModal from "../../molecules/ImgModal";

interface Props {
  entranceProps: EntranceProps[];
}

const controllIds = {
  gotoAlumniAssociationRoom: "entrance-door-alumniAssociation",
  goto3floor: "entrance-door-button-controll",
  pamphlet: "entrance-pamphlet",
  escapeGameObj: "entrance-escapegame",
};

function Entrance({ entranceProps }: Props) {
  const history = useHistory();
  const dispatch: DispatchType = useDispatch();
  // const { grade, userAnswer } = useTypedSelector(
  //   (state) => state.escapeGameUserInfo
  // );
  const [isShowPamphlet, changeIsShowPamphlet] = useState(false);
  const [isShowEscapeGameModal, changeIsShowEscapeGameModal] = useState(false);

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
          imgPath={
            entranceProps[0]
              ? entranceProps[0].environment_attributes.door.imgPath
              : iniadfesLogo
          }
          roomTitle={
            entranceProps[0]
              ? entranceProps[0].environment_attributes.door.title
              : "空き部屋"
          }
          dataControllId={controllIds.goto3floor}
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
        <ObjectMark
        title="脱出ゲームについて"
        color="white"
        dataControllId={controllIds.escapeGameObj}
        onClick={() => {
          changeIsShowEscapeGameModal(true);
        }}
        />
        <PDFModal
          isMobile={false}
          isShow={isShowPamphlet}
          onClose={() => {
            changeIsShowPamphlet(false);
          }}
          pdfProps={pamphletProps}
        />
        <ImgModal
          isMobile={false}
          isShow={isShowEscapeGameModal}
          onClose={() => {
            changeIsShowEscapeGameModal(false);
          }}
          alt="脱出ゲームがあります！楽しんでね!"
          src={escapeGameDescriptionUrl}
        />
        {/* {grade === 4 && userAnswer.q4 !== null ? (
          <RoomMark
            imgPath={iniadfesLogo}
            roomTitle="同窓会部屋"
            dataControllId={controllIds.gotoAlumniAssociationRoom}
            onClick={() => {
              window.open("https://example.com", "_blank")
            }}
          />
        ) : null} */}
        <FuncButtons roomId={entranceProps[0]?entranceProps[0].environment_attributes.room_id: ""} />
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
    &[data-controll-id=${controllIds.goto3floor}] {
      position: absolute;
      top: 24%;
      right: 35%;
    }

    &[data-controll-id=${controllIds.pamphlet}] {
      position: absolute;
      top: 45%;
      right: 6%;
    }

    &[data-controll-id=${controllIds.gotoAlumniAssociationRoom}] {
      position: absolute;
      bottom: 35%;
      left: 1%;
    }

    &[data-controll-id=${controllIds.escapeGameObj}] {
      position: absolute;
      top: 39%;
      left: 29%;
    }

  }
`;

export default Entrance;
