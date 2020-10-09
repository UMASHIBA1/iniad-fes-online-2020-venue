import { RoomUrlType } from "../constants/links";


export interface VideoProps {
  start_at: {
    iso8601: string;
    timestamp: number;
  },
  url: string; // NOTE: e.g. /room1.m3u8
}


export interface HallProps {
  type: "hall",
  name: string;
  environment_attributes: {
    // NOTE: 中庭側 + 食堂に近い方のドアをdoor1としてそこから時計回りでdoor2,door3となる
    door1: {
      url: RoomUrlType;
    },
    door2: {
      url: RoomUrlType;
    },
    [key: string]: any; // FIXME: 画像が完成次第ちゃんと型つける
  },
  video: VideoProps;
}

export interface RoomProps {
  type: "room";
  name: string;
  environment_attributes: {
    [k: string]: any; // FIXME: 現状でどんな部屋になるのかわからないのでanyにしました。画像ができたらちゃんと型つけたい
  },
  video: VideoProps;
}

export interface RoadProps {
  type: "road";
  name: string;
  environment_attributes: {
    [k: string]: any; // FIXME: 画像が完成次第ちゃんと型つける
  },
  video: VideoProps;
}

export interface HomeProps {
  type: "home",
  name: string;
  environment_attributes: {
    [k: string]: any; // FIXME: 画像が完成次第ちゃんと型つける
  },
  video: VideoProps;
}

type RoomPropType = HallProps | RoomProps | RoadProps | HomeProps;

export type RoomAPIType = RoomPropType[];

export default RoomPropType
