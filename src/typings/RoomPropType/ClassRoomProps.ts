import EscapeGameQuestion from "../EscapeGame/EscapeGameQuestion";
import PDFProps from "../PDFProps";
import { RoomEnvLinkProps } from "./RoomPropType";
import VideoProps from "./VideoProps";

// NOTE: ClassRoomPropsは記述量がとても多くなってしまったので別ファイルとして定義します。

// FIXME: とりあえずどんな部屋を作ればいいのかわからないからExampleMode1,2を作ります。サークルがどんな部屋を必要としているかがわかったらもっと具体的なmodeを作る
interface ExampleMode1EnvAttr {
  mode: "twoObj";
  room_id: string;
  leftOrRight: LeftOrRight;
  door: RoomEnvLinkProps;
  obj1: {
    url: string;
    name: string;
  };
  obj2: {
    url: string;
    name: string;
  };
}

type LeftOrRight = "left" | "right";

interface ExampleMode2EnvAttr {
  mode: "oneObj";
  room_id: string;
  leftOrRight: LeftOrRight;
  door: RoomEnvLinkProps;
  obj1: {
    url: string;
    name: string;
  };
}

export interface PDFRoomEnvAttr {
  mode: "pdfRoom";
  room_id: string;
  door: RoomEnvLinkProps;
  title: string;
  description: string;
  pdfProps: PDFProps;
  videoProps: VideoProps;
  leftOrRight: LeftOrRight;
  circleTitle: string;
  circleDescription: string;
  engEscapeGameQuestion?: EscapeGameQuestion;
  designEscapeGameQuestion?: EscapeGameQuestion;
  busiEscapeGameQuestion?: EscapeGameQuestion;
  civilEscapeGameQuetion?: EscapeGameQuestion;
}

export interface MusicEnvAttr {
  mode: "musics";
  room_id: string;
  door: RoomEnvLinkProps;
  title: string;
  circleTitle: string;
  circleDescription: string;
  pickUpIframes: string[];
  musicIframes: string[];
  leftOrRight: LeftOrRight;
  engEscapeGameQuestion?: EscapeGameQuestion;
  designEscapeGameQuestion?: EscapeGameQuestion;
  busiEscapeGameQuestion?: EscapeGameQuestion;
  civilEscapeGameQuetion?: EscapeGameQuestion;
}

export interface VideoListEnvAttr {
  mode: "videoList";
  room_id: string;
  door: RoomEnvLinkProps;
  escapeGameQuestion?: EscapeGameQuestion;
  title: string;
  description: string;
  circleTitle: string;
  circleDescription: string;
  VideoProps: VideoProps[];
  leftOrRight: LeftOrRight;
  link?: {
    url: string;
    text: string;
  }
}

export interface PhotoListEnvAttr {
  mode: "photoList";
  room_id: string;
  door: RoomEnvLinkProps;
  circleTitle: string;
  circleDescription: string;
  iframeCode: string;
  escapeGameQuestion?: EscapeGameQuestion;
  leftOrRight: LeftOrRight;
}

export interface IGC2EnvAttr {
  mode: "igc2";
  room_id: string;
  title: string;
  circleTitle: string;
  circleDescription: string;
  door: RoomEnvLinkProps;
  gameLink: string;
  video: VideoProps;
  imgPath: string;
  escapeGameQuestion?: EscapeGameQuestion;
  leftOrRight: LeftOrRight;
}

export interface TATFOEnvAttr {
  mode: "tatfo";
  room_id: string;
  title: string;
  door: RoomEnvLinkProps;
  circleTitle: string;
  description: string;
  circleDescription: string;
  videoProps: VideoProps;
  pdfPropList: PDFProps[];
  leftOrRight: LeftOrRight;
}

export interface OneVideoEnvAttr {
  mode: "oneVideo";
  room_id: string;
  title: string;
  door: RoomEnvLinkProps;
  circleTitle: string;
  description: string;
  circleDescription: string;
  videoProps: VideoProps;
  leftOrRight: LeftOrRight;
}

export interface ArtListEnvAttr {
  mode: "artList";
  room_id: string;
  title: string;
  door: RoomEnvLinkProps;
  circleTitle: string;
  circleDescription: string;
  description: string;
  artList: {
    url: string;
    title: string;
  }[];
  leftOrRight: LeftOrRight;
}

export interface YoutubeEnvAttr {
  mode: "youtube";
  room_id: string;
  title: string;
  door: RoomEnvLinkProps;
  description: string;
  circleTitle: string;
  circleDescription: string;
  youtubelink: string;
  leftOrRight: LeftOrRight;
}

export interface IframeEnvAttr {
  mode:"iframeRoom";
  room_id: string;
  door: RoomEnvLinkProps;
  circleDescription: string;
  circleTitle: string;
  iframeCode: string;
  leftOrRight: LeftOrRight;
}

export interface TRPGEnvAttr {
  mode: "trpgRoom";
  room_id: string;
  door: RoomEnvLinkProps;
  circleTitle: string;
  circleDescription: string;
  description: string;
  video: VideoProps;
  leftOrRight: LeftOrRight;
}

type EnvAttr =
  | ExampleMode1EnvAttr
  | ExampleMode2EnvAttr
  | MusicEnvAttr
  | VideoListEnvAttr
  | PhotoListEnvAttr
  | IGC2EnvAttr
  | PDFRoomEnvAttr
  | TATFOEnvAttr
  | OneVideoEnvAttr
  | ArtListEnvAttr
  | YoutubeEnvAttr
  | IframeEnvAttr
  | TRPGEnvAttr;

export default interface ClassRoomProps {
  type: "classroom";
  name: string;
  environment_attributes: EnvAttr;
}
