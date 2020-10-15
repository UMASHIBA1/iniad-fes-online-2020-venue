import { RoomUrlType } from "../../constants/links";
import ClassRoomProps from "./ClassRoomProps";
import VideoProps from "./VideoProps";

export interface HallProps {
  type: "hall",
  name: string;
  environment_attributes: {
    // NOTE: 中庭側 + 食堂に近い方のドアをdoor1としてそこから時計回りでdoor2,door3となる
    door1: RoomEnvLinkProps;
    door2: RoomEnvLinkProps;
  },
  video: VideoProps;
}

export interface RoomEnvLinkProps {
  url: RoomUrlType;
  title: string;
}

export interface RoadProps {
  type: "road";
  name: string;
  environment_attributes: {
    doorRight1: RoomEnvLinkProps;
    doorLeft1: RoomEnvLinkProps;
    doorRight2: RoomEnvLinkProps;
    doorLeft2: RoomEnvLinkProps;
    next: RoomEnvLinkProps;
    back: RoomEnvLinkProps;
  },
  video: VideoProps;
}

export interface EntranceProps {
  type: "entrance",
  name: string;
  environment_attributes: {
    door: RoomEnvLinkProps;
  },
  video: VideoProps;
}

export interface StairProps {
  type: "stair",
  name: string;
  environment_attributes: {
    up: RoomEnvLinkProps;
    down: RoomEnvLinkProps;
    room: RoomEnvLinkProps;
  }
}

type RoomPropType = HallProps | ClassRoomProps | RoadProps | EntranceProps | StairProps;

export type RoomAPIType = RoomPropType[];

export default RoomPropType
