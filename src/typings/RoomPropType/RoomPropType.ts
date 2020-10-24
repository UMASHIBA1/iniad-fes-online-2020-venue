import { RoomUrlType } from "../../constants/links";
import ClassRoomProps from "./ClassRoomProps";
import VideoProps from "./VideoProps";

export interface HallProps {
  type: "hall",
  name: string;
  environment_attributes: {
    doorLeft: RoomEnvLinkProps;
    doorRight: RoomEnvLinkProps;
    video: VideoProps;
  },
}

export interface RoomEnvLinkProps {
  url: RoomUrlType;
  title: string;
  imgPath:string;
}

export interface RoadProps {
  type: "road";
  name: string;
  environment_attributes: {
    mode: "front" | "center" | "end";
    doorRight1: RoomEnvLinkProps;
    doorLeft1: RoomEnvLinkProps;
    next: RoomEnvLinkProps;
    back: RoomEnvLinkProps;
  },
}

export interface ElevatorFrontProps {
  type: "elevatorFront";
  name: string;
  environment_attributes: {
    roadx2xx: RoomEnvLinkProps;
    roadx1xx: RoomEnvLinkProps;
    back: RoomEnvLinkProps;
  },
}

export interface EntranceProps {
  type: "entrance";
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
    up?: RoomEnvLinkProps;
    down: RoomEnvLinkProps;
    room: RoomEnvLinkProps;
  }
}

type RoomPropType = HallProps | ClassRoomProps | RoadProps | EntranceProps | StairProps | ElevatorFrontProps;

export type RoomAPIType = RoomPropType[];

export default RoomPropType
