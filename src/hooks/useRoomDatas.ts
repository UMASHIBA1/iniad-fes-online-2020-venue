import roomDatas from "../mockDatas/roomDatas"
import { RoomAPIType } from "../typings/RoomPropType";

// FIXME: このhooksを書き換えてmockからちゃんとしたAPIへの移行を行う
const useRoomDatas = (): RoomAPIType => {
  return roomDatas;
}

export default useRoomDatas;
