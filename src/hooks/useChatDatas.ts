import { chatRoomParams } from "../constants/websocketParams";
import ChatType, { ChatAPIType } from "../typings/ChatType";
import ChannelController from "../utils/ChannelController";
import { useState } from "react";
import useDidMount from "./useDidMount/useDidMount";
import getChatHistory from "../utils/getChatHistory";

const useChatDatas = (): ChatType[] => {
  const [chatDatas, changeChatDatas] = useState<ChatType[]>([]);

  useDidMount(() => {
    getChatHistory()
      .then((history) => {
        console.log(history);
        changeChatDatas([...chatDatas, ...history.data.payload.history]);
      })
      .catch(() => {
        changeChatDatas([
          {
            text: "チャットの取得に失敗しました。",
            is_admin: false,
            is_circle_staff: false,
            time: {
              iso8601: "tekito",
              timestamp: 0,
            }
          },
        ]);
      });
  });

  const cable = new ChannelController<ChatAPIType, unknown>();
  cable.connect(chatRoomParams, {
    onReceive: (data) => {
      changeChatDatas([...chatDatas, data.payload]);
    },
    onConnected: () => {
      // cable.send({ payload: { text: "どうだろうか4" }, type: "chat" });
    },
  });

  return chatDatas;
};

export default useChatDatas;
