import { chatRoomChannel } from "../constants/urls";
import ChannelController from "../utils/ChannelController";
import { useEffect, useState } from "react";
import useDidMount from "./useDidMount/useDidMount";
import QuestionaireProps, {
  QuestionaireAPIType,
  QuestionairePostProps,
} from "../typings/QuestionaireProps";

const useQuestionaireDatas = (roomId: string) => {
  const [questionaireDatas, changeQuesionaireDatas] = useState<QuestionaireProps | null>(null);
  const [cable, changeCable] = useState<ChannelController<
    QuestionaireAPIType,
    QuestionairePostProps
  > | null>(null);

  const changeDataByReceiveNewQuestinaire = (data: QuestionaireAPIType) => {
    changeQuesionaireDatas(data.payload);
  };

  useDidMount(() => {
    const cable = new ChannelController<
      QuestionaireAPIType,
      QuestionairePostProps
    >();
    changeCable(cable);
  });

  useEffect(() => {
    const chatRoomParams = {
      channel: chatRoomChannel,
      room_id: roomId,
    };

    cable &&
      cable.connect(chatRoomParams, {
        onReceive: changeDataByReceiveNewQuestinaire,
        onConnected: () => {
          // cable.send({ payload: { text: "どうだろうか4", room_id:roomId }, type: "chat" });
        },
      });
  }, [questionaireDatas]);

  return {
    chatDatas: questionaireDatas,
    sendFC: cable ? cable.send : () => {},
  };
};

export default useQuestionaireDatas;
