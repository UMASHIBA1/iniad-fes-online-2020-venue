import React from "react";
import styled from "styled-components";
import breakPoints from "../../constants/breakPoints";
import VideoProps from "../../typings/RoomPropType/VideoProps";
import ViewingProp from "../../typings/ViewingProp";
import Description from "../atoms/Description";
import Modal from "../atoms/Modal/Modal";
import Title from "../atoms/Title";
import VideoPlayer from "../atoms/VideoPlayer";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
  title: string;
  description?: string;
  videoPropList: VideoProps[];
  isMobile: boolean;
}

function VideoModal({
  isShow,
  onClose,
  viewingScreen,
  title,
  description,
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
        <DescriptionWrapper>
        <Description description={description ? description : ""} />
        </DescriptionWrapper>
        <VideoListWrapper>
          {isShow
            ? videoPropList.map((oneVideoProp) => (
                <VideoWrapper key={oneVideoProp.url}>
                  <VideoPlayer
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
`;

const TitleWrapper = styled.div`
  display: grid;
  justify-content: start;
  margin: 32px 0 16px;
  ${breakPoints.downSm} {
    margin: 16px 0 8px;
  }
`;

const DescriptionWrapper = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  padding: 0 0 24px;
    ${breakPoints.downSm} {
  padding: 0 0 16px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  width: calc(100% - 16px);
  max-height: 90vh;
  min-height: 300px;
  max-width: 98%;
  padding: 0 32px;
  overflow: hidden;

  ${breakPoints.downSm} {
    padding: 0 16px;
  }
`;

export default VideoModal;
