import { chatRoomChannel } from "../constants/urls";
import ChatType, { ChatAPIType, ChatPostType } from "../typings/ChatType";
import ChannelController from "../utils/ChannelController";
import { useEffect, useState } from "react";
import useDidMount from "./useDidMount/useDidMount";
import getChatHistory from "../utils/getChatHistory";

const useChatDatas = (roomId: string) => {
  const [chatDatas, changeChatDatas] = useState<ChatType[]>([]);
  const [cable, changeCable] = useState<ChannelController<
    ChatAPIType,
    ChatPostType
  > | null>(null);

  const changeDataByReceiveNewChat = (data: ChatAPIType) => {
    changeChatDatas([...chatDatas, data.payload]);
  };

  useDidMount(() => {
    getChatHistory(roomId)
      .then((history) => {
        console.log(history);
        changeChatDatas([...chatDatas, ...history.data.payload.history]);
      })
      .catch((reason) => {
        console.error("チャット履歴の取得に失敗しました", reason);
        changeChatDatas([
          {
            text: "チャットの取得に失敗しました。",
            is_admin: false,
            is_circle_staff: false,
            time: {
              iso8601: "tekito",
              timestamp: 0,
            },
          },
        ]);
      });

    const cable = new ChannelController<ChatAPIType, ChatPostType>();
    changeCable(cable);
  });

  useEffect(() => {
    const chatRoomParams = {
      channel: chatRoomChannel,
      room_id: roomId,
    };

    cable &&
      cable.connect(chatRoomParams, {
        onReceive: changeDataByReceiveNewChat,
        onConnected: () => {
          // cable.send({ payload: { text: "どうだろうか4", room_id:roomId }, type: "chat" });
        },
      });
  }, [chatDatas]);

  return {
    chatDatas,
    sendFC: cable ? cable.send : () => {},
  };
};

export default useChatDatas;
