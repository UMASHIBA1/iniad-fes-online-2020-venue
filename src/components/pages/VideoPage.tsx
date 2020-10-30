import React from "react";
import VideoPlayer from "../atoms/VideoPlayer";
import testStreamKey from "../../constants/testStreamKey";

function VideoPage() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-11/12 h-full shadow-md rounded-md flex justify-center items-center">
        <VideoPlayer
          controls={true}
          sources={[
            {
              src: `http://live.beah.jp/live/${testStreamKey}.m3u8`,
              type: "application/x-mpegURL",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default VideoPage;
