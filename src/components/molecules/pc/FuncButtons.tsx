import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "../../atoms/IconButton";
import mapIcon from "../../../statics/svgs/map-icon.svg";
import chatIcon from "../../../statics/svgs/chat-icon.svg";
import scheduleIcon from "../../../statics/svgs/schedule-icon.svg";
import PDFModal from "../PDFModal";
import dummyImg from "../../../statics/dummy.png";
import ImgModal from "../ImgModal";
import Chat from "../../organisms/Chat/Chat";
import { DispatchType } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { showChat } from "../../../redux/modules/isShowChat";

function FuncButtons() {
  const [isShowMap, changeIsShowMap] = useState(false);
  const [isShowPlan, changeIsShowPlan] = useState(false);
  // const [isShowChat, changeIsShowChat] = useState(false);
  const dispatch: DispatchType = useDispatch();
  const showChatFc = () => {
    dispatch(showChat());
  }

  return (
    <>
      <Wrapper>
        <IconButton
          svgPath={mapIcon}
          iconDescription="map"
          onClick={() => {
            changeIsShowMap(true);
          }}
        />
        <IconButton
          svgPath={chatIcon}
          iconDescription="chat"
          onClick={() => {
            showChatFc()
          }}
        />
        <IconButton
          svgPath={scheduleIcon}
          iconDescription="plan"
          onClick={() => {
            changeIsShowPlan(true);
          }}
        />
      </Wrapper>
      <PDFModal
        isShow={isShowMap}
        onClose={() => {
          changeIsShowMap(false);
        }}
        pdfProps={{
          url: "/sample.pdf",
          pageNum: 2,
        }}
        isMobile={false}
      />
      <ImgModal
        isShow={isShowPlan}
        onClose={() => {
          changeIsShowPlan(false);
        }}
        src={dummyImg}
        // FIXME: もし画像でプランを表示させるなら視覚障がい者ようにaltでちゃんとしたプランの一覧を書かないといけない
        alt="plan"
        isMobile={false}
      />
      <Chat
      roomId="gEa6bNLW"
      />
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  display: grid;
  right: 8px;
  bottom: 8px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 8px;
`;

export default FuncButtons;
