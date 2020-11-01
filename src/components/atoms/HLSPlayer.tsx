import React, { useRef } from "react";
import useDidMount from "../../hooks/useDidMount/useDidMount";
import Hls from "hls.js";

interface Props {
  videoSrc: string;
}

function HLSPlayer({ videoSrc }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useDidMount(() => {
    if (videoRef && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      if (videoRef.current !== null) {
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (videoRef.current !== null) {
            videoRef.current.controls = true;
            videoRef.current.play();
          }
        });
      }
    }
  });

  return (
    <div className="w-full flex items-center justify-center">
      <video ref={videoRef}></video>
    </div>
  );
}



export default HLSPlayer;
