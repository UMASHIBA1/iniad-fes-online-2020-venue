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

interface Props {
  roomId?: string;
  isShowChat?: boolean;
}

function FuncButtons({ roomId, isShowChat = true }: Props) {
  const [isShowMap, changeIsShowMap] = useState(false);
  const [isShowPlan, changeIsShowPlan] = useState(false);
  const dispatch: DispatchType = useDispatch();
  const showChatFc = () => {
    dispatch(showChat());
  };

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
        {isShowChat ? (
          <IconButton
            svgPath={chatIcon}
            iconDescription="chat"
            onClick={() => {
              showChatFc();
            }}
          />
        ) : null}
        <IconButton
          svgPath={scheduleIcon}
          iconDescription="book"
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
      {roomId?(
        <Chat roomId={roomId} isMobile={false} />
      ): null}
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >* {
    margin: 4px 0;
  }
`;

export default FuncButtons;
