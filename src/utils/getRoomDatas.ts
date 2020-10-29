import axios from "axios";
import { RoomAPIType } from "../typings/RoomPropType/RoomPropType";

const getRoomDatas = () => {
  return axios.get<RoomAPIType>("http://venue.iniadfes.com/api/rooms/").then((roomData) => {
    return Promise.resolve(roomData.data.payload.objects);
  }).catch((reason) => {
    return Promise.reject(reason);
  });
}

export default getRoomDatas;
