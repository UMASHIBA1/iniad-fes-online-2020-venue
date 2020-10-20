import React from "react";
import styled from "styled-components";
import breakPoints from "../../constants/breakPoints";
import VideoProps from "../../typings/RoomPropType/VideoProps";
import ViewingProp from "../../typings/ViewingProp";
import Modal from "../atoms/Modal/Modal";
import Title from "../atoms/Title";
import VideoPlayer from "../atoms/VideoPlayer";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
  title: string;
  videoPropList: VideoProps[];
  isMobile: boolean;
}

function VideoModal({
  isShow,
  onClose,
  viewingScreen,
  title,
  videoPropList,
  isMobile,
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
        <VideoListWrapper>
        {isShow
          ? videoPropList.map((oneVideoProp) => (
              <VideoWrapper>
                <VideoPlayer
                  key={oneVideoProp.url}
                  controls={true}
                  sources={[
                    {
                      src: oneVideoProp.url,
                      type:
                        oneVideoProp.mode === "streaming"
                          ? "application/x-mpegURL"
                          : "video/mp4",
                    },
                  ]}
                />
              </VideoWrapper>
            ))
          : null}
        </VideoListWrapper>
      </Wrapper>
    </Modal>
  );
}
const VideoWrapper = styled.div`
  padding: 0 0 32px;
  box-sizing: border-box;
  width: 100%;

  ${breakPoints.downSm} {
    padding: 0 0 16px;
  }
`;

const VideoListWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
`

const TitleWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 128px 1fr;
  width: calc(100% - 16px);
  max-height: 80vh;
  min-height: 300px;
  max-width: 98%;
  padding: 0 32px;
  overflow: hidden;

  ${breakPoints.downSm} {
  grid-template-rows: 64px 1fr;
    padding: 0 16px;
  }
`;

export default VideoModal;
