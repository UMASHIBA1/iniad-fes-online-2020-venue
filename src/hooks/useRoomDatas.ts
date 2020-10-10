import { useEffect, useState } from "react";
import roomDatas from "../mockDatas/roomDatas"
import ClassRoomProps from "../typings/RoomPropType/ClassRoomProps";
import { HallProps, EntranceProps, RoadProps, RoomAPIType } from "../typings/RoomPropType/RoomPropType";

// FIXME: このhooksを書き換えてmockからちゃんとしたAPIへの移行を行う
const useRoomDatas = (): RoomAPIType => {
  return roomDatas;
}

export default useRoomDatas;


export const useDividedRoomDatas = () => {

  const divideDatasByRoomType = (roomDatas: RoomAPIType) => {
    const dividedRoomDatas = {
      entrance: [] as EntranceProps[],
      road: [] as RoadProps[],
      classroom: [] as ClassRoomProps[],
      hall: [] as HallProps[],
    }

    roomDatas.forEach((data) => {
      switch(data.type) {
        case "entrance":
          dividedRoomDatas.entrance.push(data);
          break;
        case "road":
          dividedRoomDatas.road.push(data);
          break;
        case "classroom":
          dividedRoomDatas.classroom.push(data);
          break;
        case "hall":
          dividedRoomDatas.hall.push(data);
          break;
      }
    });

    return dividedRoomDatas;
  }

  const roomDatas = useRoomDatas();
  const [dividedRoomDatas, changeDividedRoomDatas] = useState(divideDatasByRoomType(roomDatas));

  useEffect(() => {
    changeDividedRoomDatas(divideDatasByRoomType(roomDatas));
  }, [roomDatas]);

  return [dividedRoomDatas];

}
