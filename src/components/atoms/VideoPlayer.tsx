import React, { useRef, useEffect } from "react";
import videojs, { VideoJsPlayerOptions } from "video.js";
import "video.js/dist/video-js.css";
import "@videojs/themes/dist/fantasy/index.css";

const videoTheme = "fantasy";

function VideoPlayer(props: VideoJsPlayerOptions) {
  const [videoRef] = useVideo<HTMLVideoElement>(props);
  return (
    <div className="w-full flex items-center justify-center">
      <video
        ref={videoRef}
        className={`video-js vjs-theme-${videoTheme}`}
      ></video>
    </div>
  );
}

const useVideo = <T extends HTMLElement>(props: VideoJsPlayerOptions) => {
  const videoRef = useRef<T>(null);

  useEffect(() => {
    const player = videojs(
      videoRef.current,
      {
        ...props,
        fluid: true,
      },
      () => {
        console.log("videoPlayer ready");
      }
    );
  }, [props, videoRef]);

  return [videoRef];
};

export default VideoPlayer;
