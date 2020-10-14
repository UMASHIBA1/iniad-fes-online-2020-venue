import React from "react";
import RoomWrapper from "../../templates/pc/RoomWrapper";
import entranceImg from "../../../statics/totyo.png";
import { EntranceProps } from "../../../typings/RoomPropType/RoomPropType";
import { useHistory } from "react-router-dom";
import { pcLinks, RoomUrlType } from "../../../constants/links";
import Button from "../../atoms/Button/Button";
import ObjectMark from "../../atoms/ObjectMark";
import FuncButtons from "../../molecules/FuncButtons";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../../redux/store";
import useDidMount from "../../../hooks/useDidMount/useDidMount";
import { toVisited } from "../../../redux/modules/isFirstVisit";
import Chat from "../../organisms/Chat/Chat";

interface Props {
  entranceProps: EntranceProps[];
}

function Entrance({entranceProps}: Props) {
  const history = useHistory();
  const dispatch: DispatchType = useDispatch();

  const gotoTargetUrl = (url: RoomUrlType) => {
    history.push(url);
  };

  useDidMount(() => {
    dispatch(toVisited());
  })

  return(
    <RoomWrapper bgImg={entranceImg}>
      Entrance
      <Button
        text="door1"
        mode="blue"
        onClick={() => {
          gotoTargetUrl(
            entranceProps[0] ? entranceProps[0].environment_attributes.door1.url : pcLinks.entrance
          );
        }}
      />
      <div style={{margin: "300px"}}>
        <ObjectMark onClick={()=>console.log("Object Mark 実験")} />
      </div>
      <Chat />
      <FuncButtons />
    </RoomWrapper>
  );
}

export default Entrance;
