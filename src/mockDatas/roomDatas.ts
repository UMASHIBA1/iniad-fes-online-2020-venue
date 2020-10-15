import { links } from "../constants/links";
import { RoomAPIType } from "../typings/RoomPropType/RoomPropType";

const roomDatas: RoomAPIType = [
  {
    type: "hall",
    name: links.hall,
    video: {
      start_at: {
        iso8601: "2020-10-31T10:00:00+09:00",
        timestamp: 1604106000
      },
      url: "example.com",
    },
    environment_attributes: {
      door1: {
        url: links.road("1024"),
        title: "廊下1024"
      },
      door2: {
        url: links.classroom("1024"),
        title: "教室1024"
      }
    }
  },
  {
    type: "classroom",
    name: "1025",
    video: {
      start_at: {
        iso8601: "2020-10-31T10:00:00+09:00",
        timestamp: 1604106001
      },
      url: "example.com",
    },
    environment_attributes: {
      mode: "oneObj",
      door: {
        url: links.road("1024"),
        title: "1024廊下"
      },
      obj1: {
        name: "exampleObj",
        url: "example.com"
      }
    }
  },
  {
    type: "classroom",
    name: "1024",
    video: {
      start_at: {
        iso8601: "2020-10-31T10:00:00+09:00",
        timestamp: 1604106001
      },
      url: "example.com",
    },
    environment_attributes: {
      mode: "twoObj",
      door: {
        url: links.road("1024"),
        title: "1024廊下"
      },
      obj1: {
        name: "exampleObj1",
        url: "example.com"
      },
      obj2: {
        name: "exampleObj2",
        url: "example.com"
      }
    }
  },
  {
    type: "road",
    name: "1024",
    video: {
      start_at: {
        iso8601: "2020-10-31T10:00:00+09:00",
        timestamp: 1604106001
      },
      url: "example.com",
    },
    environment_attributes: {
      doorRight1: {
        url: links.classroom("1024"),
        title: "classroom 1024"
      },
      doorLeft1: {
        url: links.stair("3f"),
        title: "3f 階段"
      },
      next: {
        url: links.hall,
        title: "next road"
      },
      back: {
        url: links.hall,
        title: "back road"
      }
    }
  },

  {
    type: "stair",
    name: "3f",
    environment_attributes: {
      up: {
        url: links.stair("4f"),
        title: "4階"
      },
      down: {
        url: links.entrance,
        title: "エントランス"
      },
      room: {
        url: links.entrance,
        title: "3Fエレベーター前"
      }
    }
  },

];

export default roomDatas;
