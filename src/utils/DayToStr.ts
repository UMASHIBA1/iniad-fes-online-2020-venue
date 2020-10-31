import dayjs from "dayjs";
import ChatType from "../typings/ChatType";

const dayToStr = (data: ChatType["time"]["iso8601"]) => {
  return  dayjs(data).format('HH:mm');
}

export default dayToStr
