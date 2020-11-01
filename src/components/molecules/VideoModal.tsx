import React from "react";
import styled from "styled-components";
import breakPoints from "../../constants/breakPoints";
import { lightBlueText } from "../../cssProps/colors";
import VideoProps from "../../typings/RoomPropType/VideoProps";
import ViewingProp from "../../typings/ViewingProp";
import Description from "../atoms/Description";
import HLSPlayer from "../atoms/HLSPlayer";
import Link from "../atoms/Link";
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
  link?: {
    url: string;
    text: string;
  };
}

function VideoModal({
  isShow,
  onClose,
  viewingScreen,
  title,
  description,
  videoPropList,
  isMobile,
  link,
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
        {link ? (
          <Link link={link.url}>
            <LinkText>{link.text}</LinkText>
          </Link>
        ) : null}
        <VideoListWrapper>
          {isShow
            ? videoPropList.map((oneVideoProp, i) => {
                if (i === 0) {
                  return (
                    <VideoWrapper key={oneVideoProp.url}>
                      <HLSPlayer videoSrc={oneVideoProp.url} />
                    </VideoWrapper>
                  );
                } else {
                  return (
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
                  );
                }
              })
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

const LinkText = styled.div`
  ${lightBlueText}
  font-size: 14px;
  padding: 8px 0 24px;
`;

const VideoListWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
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
  ${breakPoints.downSm} {
    padding: 0 0 16px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  width: calc(100% - 16px);
  max-height: 70vh;
  min-height: 300px;
  max-width: 98%;
  padding: 0 32px;
  overflow: auto;

  ${breakPoints.downSm} {
    padding: 0 16px;
  }
`;

export default VideoModal;
