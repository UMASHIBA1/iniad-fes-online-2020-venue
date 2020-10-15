import { links } from "../constants/links";
import ClassRoomProps from "../typings/RoomPropType/ClassRoomProps";
import { RoomAPIType } from "../typings/RoomPropType/RoomPropType";

const sampleObj: ClassRoomProps["environment_attributes"]["obj1"] = {
  url: "example.com",
  name: "example"
};

const sampleVideo: ClassRoomProps["video"] = {
  start_at: {
    iso8601:"2020-10-31T10:00:00+09:00",
    timestamp: 1604106001
  },
  url: "example.com"
}

const roomDatas: RoomAPIType = [
  // entrance
  {
    type: "entrance",
    name: "entrance-1",
    video: {
      start_at: {
        iso8601: "2020-10-31T10:00:00+09:00",
        timestamp: 1604106001,
      },
      url: "example.com",
    },
    environment_attributes: {
      door: {
        url: links.elevatorFront("3f"),
        title: "3Fエレベーター前",
      },
    },
  },
  // elevatorFront
  {
    type: "elevatorFront",
    name: "3f",
    environment_attributes: {
      roadx1xx: {
        url: links.road("3101"),
        title: "3階廊下1",
      },
      roadx2xx: {
        url: links.hall,
        title: "ホール",
      },
      back: {
        url: links.stair("3f"),
        title: "3階階段"
      }
    },
  },
  {
    type: "elevatorFront",
    name: "4f",
    environment_attributes: {
      roadx1xx: {
        url: links.road("4101"),
        title: "4階廊下1"
      },
      roadx2xx: {
        url: links.hall,
        title: "ホール"
      },
      back: {
        url: links.stair("4f"),
        title: "4階階段"
      }
    }
  },
  // stair
  {
    type: "stair",
    name: "3f",
    environment_attributes: {
      up: {
        url: links.elevatorFront("4f"),
        title: "4階エレベーター前"
      },
      down: {
        url: links.entrance,
        title: "エントランス",
      },
      room: {
        url: links.elevatorFront("3f"),
        title: "3階エレベーター前"
    }
    }
  },
  {
    type: "stair",
    name: "4f",
    environment_attributes: {
      down: {
        url: links.elevatorFront("3f"),
        title: "3階エレベーター前"
      },
      room: {
        url: links.elevatorFront("4f"),
        title: "4階エレベーター前"
      }
    }
  },
  // road
  {
    type: "road",
    name: "3101",
    environment_attributes: {
      back: {
        url: links.elevatorFront("3f"),
        title: "3階エレベーター前",
      },
      next: {
        url: links.road("3102"),
        title: "3階廊下2",
      },
      doorLeft1: {
        url: links.classroom("3110"),
        title: "INIActors",
      },
      doorRight1: {
        url: links.classroom("3109"),
        title: "実行委員",
      },
    },
  },
  {
    type: "road",
    name: "3102",
    environment_attributes: {
      back: {
        url: links.road("3101"),
        title: "3階廊下1",
      },
      next: {
        url: links.road("3103"),
        title: "3階廊下3",
      },
      doorLeft1: {
        url: links.classroom("3106"),
        title: "Web研究会",
      },
      doorRight1: {
        url: links.classroom("3105"),
        title: "DigiHealth",
      },
    },
  },
  {
    type: "road",
    name: "3103",
    environment_attributes: {
      back: {
        url: links.road("3102"),
        title: "3階廊下2",
      },
      next: {
        url: links.hall,
        title: "ホール",
      },
      doorLeft1: {
        url: links.classroom("3102"),
        title: "INIAD Minecraft",
      },
      doorRight1: {
        url: links.classroom("3101"),
        title: "INIAD Developers",
      },
    },
  },
  {
    type: "road",
    name: "4101",
    environment_attributes: {
      back: {
        url: links.elevatorFront("4f"),
        title: "4階エレベーター前",
      },
      next: {
        url: links.road("4102"),
        title: "4階廊下2",
      },
      doorLeft1: {
        url: links.classroom("4110"),
        title: "IGC2",
      },
      doorRight1: {
        url: links.classroom("4109"),
        title: "ID/graph",
      },
    },
  },
  {
    type: "road",
    name: "4102",
    environment_attributes: {
      back: {
        url: links.road("4101"),
        title: "4階廊下1"
      },
      next: {
        url: links.road("4103"),
        title: "4階廊下3"
      },
      doorLeft1: {
        url: links.classroom("4106"),
        title: "RAISON DETRE"
      },
      doorRight1: {
        url: links.classroom("4105"),
        title: "TATFO"
      }
    }
  },
  {
    type: "road",
    name: "4103",
    environment_attributes: {
      back: {
        url: links.road("4102"),
        title: "4階廊下2"
      },
      next: {
        url: links.classroom("4100"),
        title: "Art Works"
      },
      doorLeft1: {
        url: links.classroom("4102"),
        title: "Hello Vietnam"
      },
      doorRight1: {
        url: links.classroom("4101"),
        title: "Noah's Ark"
      }
    }
  },
  // classroom
  {
    type: "classroom",
    name: "3110",
    environment_attributes: {
      door: {
        title: "3階廊下1",
        url: links.road("3101")
      },
      mode: "oneObj",
      obj1:sampleObj,
    },
    video: sampleVideo
  },
  {
    type: "classroom",
    name: "3109",
    environment_attributes: {
      door: {
        title: "3階廊下1",
        url: links.road("3101")
      },
      mode: "oneObj",
      obj1:sampleObj,
    },
    video: sampleVideo
  },
  {
    type: "classroom",
    name: "3106",
    environment_attributes: {
      door: {
        title: "3階廊下2",
        url: links.road("3102")
      },
      mode: "oneObj",
      obj1:sampleObj,
    },
    video: sampleVideo
  },
  {
    type: "classroom",
    name: "3105",
    environment_attributes: {
      door: {
        title: "3階廊下2",
        url: links.road("3102")
      },
      mode: "oneObj",
      obj1:sampleObj,
    },
    video: sampleVideo
  },
  {
    type: "classroom",
    name: "3102",
    environment_attributes: {
      door: {
        title: "3階廊下3",
        url: links.road("3103")
      },
      mode: "oneObj",
      obj1:sampleObj,
    },
    video: sampleVideo
  },
  {
    type: "classroom",
    name: "3101",
    environment_attributes: {
      door: {
        title: "3階廊下3",
        url: links.road("3103")
      },
      mode: "oneObj",
      obj1:sampleObj,
    },
    video: sampleVideo
  },
  {
    type: "classroom",
    name: "4110",
    environment_attributes: {
      door: {
        title: "4階廊下1",
        url: links.road("4101")
      },
      mode: "oneObj",
      obj1:sampleObj,
    },
    video: sampleVideo
  },
  {
    type: "classroom",
    name: "4109",
    environment_attributes: {
      door: {
        title: "4階廊下1",
        url: links.road("4101")
      },
      mode: "oneObj",
      obj1:sampleObj,
    },
    video: sampleVideo
  },
  {
    type: "classroom",
    name: "4106",
    environment_attributes: {
      door: {
        title: "4階廊下2",
        url: links.road("4102")
      },
      mode: "oneObj",
      obj1:sampleObj,
    },
    video: sampleVideo
  },
  {
    type: "classroom",
    name: "4105",
    environment_attributes: {
      door: {
        title: "4階廊下2",
        url: links.road("4102")
      },
      mode: "oneObj",
      obj1:sampleObj,
    },
    video: sampleVideo
  },
  {
    type: "classroom",
    name: "4102",
    environment_attributes: {
      door: {
        title: "4階廊下3",
        url: links.road("4103")
      },
      mode: "oneObj",
      obj1:sampleObj,
    },
    video: sampleVideo
  },
  {
    type: "classroom",
    name: "4101",
    environment_attributes: {
      door: {
        title: "4階廊下3",
        url: links.road("4103")
      },
      mode: "oneObj",
      obj1:sampleObj,
    },
    video: sampleVideo
  },
  {
    type: "classroom",
    name: "4100",
    environment_attributes: {
      door: {
        title: "4階廊下3",
        url: links.road("4103")
      },
      mode: "oneObj",
      obj1:sampleObj,
    },
    video: sampleVideo
  },
];
export default roomDatas;
