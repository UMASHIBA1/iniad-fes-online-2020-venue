import axios from "axios";
import { roomApiUrl } from "../constants/urls";
import { RoomAPIType } from "../typings/RoomPropType/RoomPropType";

const getRoomDatas = () => {
  return axios.get<RoomAPIType>(roomApiUrl).then((roomData) => {
    return Promise.resolve(roomData.data.payload.objects);
  }).catch((reason) => {
    return Promise.reject(reason);
  });
}

export default getRoomDatas;
