import { useEffect, useState } from "react";
import { useTypedSelector } from "../redux/store";
import getChatHistory from "../utils/getChatHistory";

const useFusenDatas = () => {
  const [fusenTexts, changeFusenTexts] = useState<string[]>([]);
  const fusenRoomId = useTypedSelector((state) => state.fusenRoomId);

  useEffect(() => {
    getChatHistory(fusenRoomId).then((fusenData) => {
      const texts = [];
      for (const data of fusenData.data.payload.history) {
        texts.push(data.text);
      }
      changeFusenTexts(texts);
    });
  }, [fusenRoomId]);

  const addFusenText = (newText: string) => {
    changeFusenTexts([...fusenTexts, newText]);
  }

  return {fusenRoomId,fusenTexts, addFusenText};
}

export default useFusenDatas;
