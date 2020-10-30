import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "../../atoms/IconButton";
import mapIcon from "../../../statics/svgs/map-icon.svg";
import chatIcon from "../../../statics/svgs/chat-icon.svg";
import scheduleIcon from "../../../statics/svgs/schedule-icon.svg";
import PDFModal from "../PDFModal";
import Chat from "../../organisms/Chat/Chat";
import { DispatchType } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { showChat } from "../../../redux/modules/isShowChat";
import { pamphletProps } from "../../../constants/filePath";

interface Props {
  roomId?: string;
  isShowChat?: boolean;
}

function FuncButtons({ roomId, isShowChat = true }: Props) {
  const [isShowMap, changeIsShowMap] = useState(false);
  const [isShowBook, changeIsShowBook] = useState(false);
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
            changeIsShowBook(true);
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
      <PDFModal
      isMobile={false}
      isShow={isShowBook}
      onClose={() => {changeIsShowBook(false)}}
      pdfProps={pamphletProps}
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
