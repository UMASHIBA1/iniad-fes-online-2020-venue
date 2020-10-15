import axios from "axios"
import { chatHistory } from "../constants/urls"
import { ChatHistoryType } from "../typings/ChatType";

const getChatHistory = () => {
  return (axios.get<ChatHistoryType>(chatHistory));
}

export default getChatHistory;
