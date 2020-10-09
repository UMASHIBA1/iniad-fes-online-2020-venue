import { RoomAPIType } from "../typings/RoomPropType";

const roomDatas: RoomAPIType = [
  {
    type: "hall",
    name: "hall-1",
    video: {
      start_at: {
        iso8601: "2020-10-31T10:00:00+09:00",
        timestamp: 1604106000
      },
      url: "example.com",
    },
    environment_attributes: {
      door1: {
        url: "/road"
      },
      door2: {
        url: "/room"
      }
    }
  },
  {
    type: "room",
    name: "room-1",
    video: {
      start_at: {
        iso8601: "2020-10-31T10:00:00+09:00",
        timestamp: 1604106001
      },
      url: "example.com",
    },
    environment_attributes: {
      door1: {
        url: "/road"
      }
    }
  }
];

export default roomDatas;
