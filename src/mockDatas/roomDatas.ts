import { links } from "../constants/links";
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
        url: links.road("1024")
      },
      door2: {
        url: links.room("1024")
      }
    }
  },
  {
    type: "room",
    name: "room-1024",
    video: {
      start_at: {
        iso8601: "2020-10-31T10:00:00+09:00",
        timestamp: 1604106001
      },
      url: "example.com",
    },
    environment_attributes: {
      door1: {
        url: links.road("1024")
      }
    }
  },
  {
    type: "road",
    name: "road-1024",
    video: {
      start_at: {
        iso8601: "2020-10-31T10:00:00+09:00",
        timestamp: 1604106001
      },
      url: "example.com",
    },
    environment_attributes: {
      door1: {
        url: links.room("1024")
      }
    }
  }
];

export default roomDatas;
