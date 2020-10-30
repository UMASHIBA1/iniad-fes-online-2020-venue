import { chatRoomChannel } from "../constants/urls";
import ChannelController from "../utils/ChannelController";
import { useEffect, useState } from "react";
import useDidMount from "./useDidMount/useDidMount";
import QuestionaireProps, {
  QuestionaireAPIType,
  QuestionairePostProps,
} from "../typings/QuestionaireProps";
import sendQuestionnaire from "../utils/sendQuestionnaire";

const useQuestionaireDatas = (roomId: string) => {
  const [
    questionaire,
    changeQuesionaireDatas,
  ] = useState<QuestionaireProps | null>(null);
  const [cable, changeCable] = useState<ChannelController<
    QuestionaireAPIType,
    QuestionairePostProps
  > | null>(null);

  const chatRoomParams = {
    channel: chatRoomChannel,
    room_id: roomId,
  };

  const changeDataByReceiveNewQuestinaire = (data: QuestionaireAPIType) => {
    console.log("in use quesionaire data", data);
    console.log("chat or questionaire", data);
    if(data.type==="questionnaire") {
      console.log("is questionaire");
      changeQuesionaireDatas(data.payload);
    }
  };

  useDidMount(() => {
    const cable = new ChannelController<
      QuestionaireAPIType,
      QuestionairePostProps
    >();
    changeCable(cable);
    cable.connect(chatRoomParams, {
      onReceive: changeDataByReceiveNewQuestinaire,
      onConnected: () => {
        // cable.send({ payload: { text: "どうだろうか4", room_id:roomId }, type: "chat" });
      },
    });
  });

  useEffect(() => {
    cable &&
      cable.connect(chatRoomParams, {
        onReceive: changeDataByReceiveNewQuestinaire,
        onConnected: () => {
          // cable.send({ payload: { text: "どうだろうか4", room_id:roomId }, type: "chat" });
        },
      });
  }, [questionaire]);

  return {
    questionaire,
    sendFC: sendQuestionnaire,
  };
};

export default useQuestionaireDatas;
