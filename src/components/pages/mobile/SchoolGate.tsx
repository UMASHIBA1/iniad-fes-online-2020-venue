import React from "react";
import RoomWrapper from "../../templates/mobile/RoomWrapper";
import schoolGateImg from "../../../statics/school-gate.png";
import styled from "styled-components";
import { SchoolGateProps } from "../../../typings/RoomPropType/RoomPropType";
import RoomMark from "../../atoms/RoomMark";
import iniadfesLogo from "../../../statics/svgs/iniadfes-logo.svg";
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../constants/links";
import WelcomeModal from "../../organisms/WelcomeModal";
import { useTypedSelector } from "../../../redux/store";

interface Props {
  schoolGateProps: SchoolGateProps[];
}

const dataControllIds = {
  gate: "school-gate-gate",
};

function SchoolGate({ schoolGateProps }: Props) {
  const history = useHistory();
    const viewingScreen = useTypedSelector(({viewingScreen}) => viewingScreen);

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  return (
    <RoomWrapper isOneScreen={false} bgImg={schoolGateImg}>
      <Wrapper>
        <RoomMark
          imgPath={
            schoolGateProps[0]
              ? schoolGateProps[0].environment_attributes.gate.imgPath
              : iniadfesLogo
          }
          roomTitle={
            schoolGateProps[0]
              ? schoolGateProps[0].environment_attributes.gate.title
              : "糖朝"
          }
          dataControllId={dataControllIds.gate}
          onClick={() => {
            gotoTargetUrl(schoolGateProps[0].environment_attributes.gate.url);
          }}
        />
      </Wrapper>
      <WelcomeModal isMobile={true} viewingProps={viewingScreen} />
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
    &[data-controll-id=${dataControllIds.gate}] {
      position: absolute;
      bottom: 26%;
      right: 39%;
    }
  }
`;

export default SchoolGate;
