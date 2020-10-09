import React from "react";
import RoomWrapper from "../../templates/pc/PageWrapper";
import hallImg from "../../../statics/room2.png"; // FIXME: room2を暫定的にhallとして扱っているので画像の生成が完了したら直す

function Hall() {
  return(
    <RoomWrapper bgImg={hallImg}>
      Hall
    </RoomWrapper>
  );
}

export default Hall;
