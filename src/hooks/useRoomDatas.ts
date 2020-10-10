import { useEffect, useState } from "react";
import roomDatas from "../mockDatas/roomDatas"
import { HallProps, HomeProps, RoadProps, RoomAPIType, RoomProps } from "../typings/RoomPropType";

// FIXME: このhooksを書き換えてmockからちゃんとしたAPIへの移行を行う
const useRoomDatas = (): RoomAPIType => {
  return roomDatas;
}

export default useRoomDatas;


export const useDividedRoomDatas = () => {

  const divideDatasByRoomType = (roomDatas: RoomAPIType) => {
    const dividedRoomDatas = {
      home: [] as HomeProps[],
      road: [] as RoadProps[],
      room: [] as RoomProps[],
      hall: [] as HallProps[],
    }

    roomDatas.forEach((data) => {
      switch(data.type) {
        case "home":
          dividedRoomDatas.home.push(data);
          break;
        case "road":
          dividedRoomDatas.road.push(data);
          break;
        case "room":
          dividedRoomDatas.room.push(data);
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
