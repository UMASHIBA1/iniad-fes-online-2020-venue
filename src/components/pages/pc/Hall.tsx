import React from "react";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import hallImg from "../../../statics/classroom2.png"; // FIXME: room2を暫定的にhallとして扱っているので画像の生成が完了したら直す
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../constants/links";
import Button from "../../atoms/Button/Button";
import { HallProps } from "../../../typings/RoomPropType/RoomPropType";
import FuncButtons from "../../molecules/FuncButtons";

interface Props {
  hallProps: HallProps[];
}

function Hall({ hallProps }: Props) {
  const history = useHistory();

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  return (
    <RoomWrapper bgImg={hallImg}>
      Hall
      <Button
        text="door1"
        onClick={() => {
          gotoTargetUrl(
            hallProps[0] ? hallProps[0].environment_attributes.door1.url : ""
          );
        }}
      />
      <Button
        text="door2"
        onClick={() => {
          gotoTargetUrl(
            hallProps[0] ? hallProps[0].environment_attributes.door2.url : ""
          );
        }}
      />
      <FuncButtons />
    </RoomWrapper>
  );
}

export default Hall;
