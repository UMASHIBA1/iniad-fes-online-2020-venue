import React from "react";
// import React, { useEffect, useState } from "react";
import RoomWrapper from "../../templates/pc/PageWrapper";
import hallImg from "../../../statics/room2.png"; // FIXME: room2を暫定的にhallとして扱っているので画像の生成が完了したら直す
import { useHistory } from "react-router-dom";
import { RoomUrlType } from "../../../constants/links";
import Button from "../../atoms/Button/Button";
import { HallProps } from "../../../typings/RoomPropType";
// import useTypedParams from "../../../hooks/useTypedParams";

interface Props {
  hallProps: HallProps[];
}

function Hall({ hallProps }: Props) {
  const history = useHistory();
  // const [thisHallProp] = useThisHallProp(hallProps);

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
    </RoomWrapper>
  );
}

// const useThisHallProp = (hallProps: HallProps[]) => {
//   const findThisHallProp = (thisHallName: HallProps["name"]) =>
//     hallProps.find((nowProps) => {
//       if (nowProps.name === thisHallName) {
//         return true;
//       } else {
//         return false;
//       }
//     });

//   const { name } = useTypedParams();
//   const [thisHallProps, changeThisHallProps] = useState(findThisHallProp(name));

//   useEffect(() => {
//     changeThisHallProps(findThisHallProp(name));
//   }, [hallProps, name]);

//   return [thisHallProps];
// };

export default Hall;
