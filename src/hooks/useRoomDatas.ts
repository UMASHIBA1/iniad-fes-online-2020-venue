import { useEffect, useState } from "react";
import { links } from "../constants/links";
import ClassRoomProps from "../typings/RoomPropType/ClassRoomProps";
import crossIcon from "../statics/svgs/cross.svg";
import {
  HallProps,
  EntranceProps,
  RoadProps,
  RoomAPIDataType,
  StairProps,
  ElevatorFrontProps,
  SchoolGateProps,
} from "../typings/RoomPropType/RoomPropType";
import getRoomDatas from "../utils/getRoomDatas";
import entranceIcon from "../statics/svgs/restaurant.svg";
import useDidMount from "./useDidMount/useDidMount";

// FIXME: このhooksを書き換えてmockからちゃんとしたAPIへの移行を行う
const useRoomDatas = (): RoomAPIDataType => {
  const [roomDatas, changeRoomDatas] = useState<RoomAPIDataType>([
    {
      type: "school-gate",
      name: "school-gate1",
      environment_attributes: {
        gate: {
          title: "糖朝",
          url: links.entrance,
          imgPath: entranceIcon,
        },
      },
    },
    {
      type: "entrance",
      name: "entrance-1",
      environment_attributes: {
        door: {
          url: links.stair("3f"),
          title: "3階階段",
          imgPath: crossIcon,
        },
      },
    },
  ]);

  useDidMount(() => {
    getRoomDatas()
      .then((roomDatas) => {
        console.log("部屋情報取得", roomDatas);
        changeRoomDatas(roomDatas);
      })
      .catch(() => {
        console.log("部屋情報の取得に失敗");
        alert("部屋情報の取得に失敗しました。");
      });
  });

  return roomDatas;
};

export default useRoomDatas;

export const useDividedRoomDatas = () => {
  const divideDatasByRoomType = (roomDatas: RoomAPIDataType) => {
    const dividedRoomDatas = {
      entrance: [] as EntranceProps[],
      road: [] as RoadProps[],
      classroom: [] as ClassRoomProps[],
      hall: [] as HallProps[],
      stair: [] as StairProps[],
      elevatorFront: [] as ElevatorFrontProps[],
      schoolGate: [] as SchoolGateProps[],
    };

    roomDatas.forEach((data) => {
      switch (data.type) {
        case "entrance":
          dividedRoomDatas.entrance.push(data);
          break;
        case "road":
          dividedRoomDatas.road.push(data);
          break;
        case "classroom":
          dividedRoomDatas.classroom.push(data);
          break;
        case "hall":
          dividedRoomDatas.hall.push(data);
          break;
        case "stair":
          dividedRoomDatas.stair.push(data);
          break;
        case "elevatorFront":
          dividedRoomDatas.elevatorFront.push(data);
          break;
        case "school-gate":
          dividedRoomDatas.schoolGate.push(data);
          break;
      }
    });

    return dividedRoomDatas;
  };

  const roomDatas = useRoomDatas();
  const [dividedRoomDatas, changeDividedRoomDatas] = useState(
    divideDatasByRoomType(roomDatas)
  );

  useEffect(() => {
    changeDividedRoomDatas(divideDatasByRoomType(roomDatas));
  }, [roomDatas]);

  return [dividedRoomDatas];
};
