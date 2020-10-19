import React from "react";
import styled from "styled-components";
import ViewingProp from "../../typings/ViewingProp";
import Modal from "../atoms/Modal/Modal";
import { IGC2EnvAttr } from "../../typings/RoomPropType/ClassRoomProps";
import VideoPlayer from "../atoms/VideoPlayer";
import Title from "../atoms/Title";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
  title: IGC2EnvAttr["title"];
  gameLink: IGC2EnvAttr["gameLink"];
  videoProps: IGC2EnvAttr["video"];
  isMobile: boolean;
  sumbnialImg: string;
}

function IGC2Modal({
  isShow,
  onClose,
  viewingScreen,
  gameLink,
  videoProps,
  title,
  isMobile,
  sumbnialImg,
}: Props) {
  return (
    <Modal
      isShow={isShow}
      onClose={onClose}
      viewing={viewingScreen}
      isMobile={isMobile}
    >
      <Wrapper>
        <TitleWrapper>
          <Title title={title} />
        </TitleWrapper>

        {isShow ? (
          <VideoWrapper>
            <VideoPlayer
              controls={true}
              sources={[
                {
                  src: videoProps.url,
                  type:
                    videoProps.mode === "streaming"
                      ? "application/x-mpegURL"
                      : "video/mp4",
                },
              ]}
            />
          </VideoWrapper>
        ) : null}
      </Wrapper>
    </Modal>
  );
}



const TitleWrapper = styled.div`
  margin-bottom: 24px;
`

const VideoWrapper = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  width: 100%;
  max-height: 90vh;
  padding: 32px;
`;

export default IGC2Modal;
