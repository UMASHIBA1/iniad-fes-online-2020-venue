import { chatRoomParams } from "../constants/websocketParams";
import ChatType from "../typings/ChatType";
import ChannelController from "../utils/ChannelController";

const useChatDatas = (): ChatType[] => {
  const cable = new ChannelController();
  cable.connect(chatRoomParams, {
    onReceive: (obj) => {
      console.log(obj);
    },
    onConnected: () => {
      cable.send({ payload: { text: "どうだろうか4" }, type: "chat" });
    },
  });

  return [
    {
      time: {
        iso8601: "2020-10-31T10:00:00+09:00",
        timestamp: 1604106000,
      },
      text:
        "わーいdjsafio;dsahfnioda sfkhnadoisfkgjnadsdfadfafadsfaf asdg oilkjweansdf oialdskjnfgoaiedk;sfjnmo",
      is_admin: true,
      is_circle_staff: true,
    },
    {
      time: {
        iso8601: "2020-10-31T10:00:01+09:00",
        timestamp: 1604106001,
      },
      text:
        "わーい2dfadsfadfjhansdiokfjhnas  dfdfadsads dasfdasfa asddikolfjn ",
      is_admin: false,
      is_circle_staff: true,
    },
    {
      time: {
        iso8601: "2020-10-31T10:00:01+09:00",
        timestamp: 1604106001,
      },
      text: "わーい2",
      is_admin: false,
      is_circle_staff: true,
    },
    {
      time: {
        iso8601: "2020-10-31T10:00:01+09:00",
        timestamp: 1604106001,
      },
      text: "わーい2",
      is_admin: false,
      is_circle_staff: true,
    },
  ];
};

export default useChatDatas;
