import EscapeGameQuestion from "../EscapeGame/EscapeGameQuestion";
import PDFProps from "../PDFProps";
import { RoomEnvLinkProps } from "./RoomPropType";
import VideoProps from "./VideoProps";

// NOTE: ClassRoomPropsは記述量がとても多くなってしまったので別ファイルとして定義します。

// FIXME: とりあえずどんな部屋を作ればいいのかわからないからExampleMode1,2を作ります。サークルがどんな部屋を必要としているかがわかったらもっと具体的なmodeを作る
interface ExampleMode1EnvAttr {
  mode: "twoObj";
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
  leftOrRight: LeftOrRight;
  door: RoomEnvLinkProps;
  obj1: {
    url: string;
    name: string;
  };
}

export interface PDFRoomEnvAttr {
  mode: "pdfRoom";
  door: RoomEnvLinkProps;
  title: string;
  description: string;
  pdfProps: PDFProps;
  leftOrRight: LeftOrRight;
}

export interface MusicEnvAttr {
  mode: "musics";
  door: RoomEnvLinkProps;
  title: string;
  pickUpIframes: string[];
  musicIframes: string[];
  escapeGameQuestion?: EscapeGameQuestion;
  leftOrRight: LeftOrRight;
}

export interface VideoListEnvAttr {
  mode: "videoList";
  door: RoomEnvLinkProps;
  escapeGameQuestion?: EscapeGameQuestion;
  title: string;
  description?: string;
  VideoProps: VideoProps[];
  leftOrRight: LeftOrRight;
}

interface TwitterProps {
  sns: "twitter";
  tweetId: string;
}

interface InstagramProps {
  sns: "instagram";
  instagramLink: string;
}

export interface PhotoListEnvAttr {
  mode: "photoList";
  door: RoomEnvLinkProps;
  title: string;
  description: string;
  photos: (TwitterProps | InstagramProps)[];
  escapeGameQuestion?: EscapeGameQuestion;
  leftOrRight: LeftOrRight;
}

export interface IGC2EnvAttr {
  mode: "igc2";
  title: string;
  door: RoomEnvLinkProps;
  gameLink: string;
  video: VideoProps;
  imgPath: string;
  escapeGameQuestion?: EscapeGameQuestion;
  leftOrRight: LeftOrRight;
}

export interface TATFOEnvAttr {
  mode: "tatfo";
  title: string;
  door: RoomEnvLinkProps;
  description: string;
  videoProps: VideoProps;
  pdfPropList: PDFProps[];
  leftOrRight: LeftOrRight;
}

export interface OneVideoEnvAttr {
  mode: "oneVideo";
  title: string;
  door: RoomEnvLinkProps;
  description: string;
  videoProps: VideoProps;
  leftOrRight: LeftOrRight;
}

export interface ArtListEnvAttr {
  mode: "artList";
  title: string;
  door: RoomEnvLinkProps;
  description: string;
  artList: {
    url: string;
    title: string;
  }[];
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
  | ArtListEnvAttr;

export default interface ClassRoomProps {
  type: "classroom";
  name: string;
  environment_attributes: EnvAttr;
}
