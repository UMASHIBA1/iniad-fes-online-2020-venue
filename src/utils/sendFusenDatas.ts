import axios from "axios";
import { postFusenUrl } from "../constants/urls";

const sendFusenDatas = (room_id: string, text: string) => {
  return axios.post(postFusenUrl, {
    type: "chat",
    payload: {
      room_id,
      text,
    },
  });
};

export default sendFusenDatas;
