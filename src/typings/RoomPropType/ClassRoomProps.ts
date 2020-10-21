import PDFProps from "../PDFProps";
import { RoomEnvLinkProps } from "./RoomPropType";
import VideoProps from "./VideoProps";

// NOTE: ClassRoomPropsは記述量がとても多くなってしまったので別ファイルとして定義します。

// FIXME: とりあえずどんな部屋を作ればいいのかわからないからExampleMode1,2を作ります。サークルがどんな部屋を必要としているかがわかったらもっと具体的なmodeを作る
interface ExampleMode1EnvAttr {
  mode: "twoObj";
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

interface ExampleMode2EnvAttr {
  mode: "oneObj";
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
}

export interface MusicEnvAttr {
  mode: "musics";
  door: RoomEnvLinkProps;
  title: string;
  pickUpIframes: string[];
  musicIframes: string[];
}

export interface VideoEnvAttr {
  mode: "video";
  door: RoomEnvLinkProps;
  title: string;
  description?: string;
  VideoProps: VideoProps[];
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
}

export interface IGC2EnvAttr {
  mode: "igc2";
  title: string;
  door: RoomEnvLinkProps;
  gameLink: string;
  video: VideoProps;
  imgPath: string;
}

type EnvAttr =
  | ExampleMode1EnvAttr
  | ExampleMode2EnvAttr
  | MusicEnvAttr
  | VideoEnvAttr
  | PhotoListEnvAttr
  | IGC2EnvAttr
  | PDFRoomEnvAttr;

export default interface ClassRoomProps {
  type: "classroom";
  name: string;
  environment_attributes: EnvAttr;
}
