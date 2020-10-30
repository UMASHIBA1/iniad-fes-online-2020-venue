import axios from "axios"
import { chatHistory } from "../constants/urls"
import { ChatHistoryType } from "../typings/ChatType";

const getChatHistory = (roomId: string) => {
  return (axios.get<ChatHistoryType>(chatHistory(roomId)));
}

export default getChatHistory;
