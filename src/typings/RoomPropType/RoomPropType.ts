import { RoomUrlType } from "../../constants/links";
import ClassRoomProps from "./ClassRoomProps";
import VideoProps from "./VideoProps";

export interface HallProps {
  type: "hall",
  name: string;
  environment_attributes: {
    room_id: string;
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
    room_id: string;
  },
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

export interface SchoolGateProps {
  type: "school-gate",
  name: string;
  environment_attributes: {
    gate: RoomEnvLinkProps;
  }
}

export interface TATFOFusenProps {
  type: "fusen",
  name: string;
  environment_attributes: {
    room_id: string;
  }
}

type RoomPropType = HallProps | ClassRoomProps | RoadProps | EntranceProps | StairProps | ElevatorFrontProps | SchoolGateProps | TATFOFusenProps;

export type RoomAPIDataType = RoomPropType[];

export interface RoomAPIType {
  type: "room";
  payload: {
    objects: RoomAPIDataType
  };
}

export default RoomPropType
