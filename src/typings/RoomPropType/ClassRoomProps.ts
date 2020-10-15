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

type EnvAttr = ExampleMode1EnvAttr | ExampleMode2EnvAttr;

export default interface ClassRoomProps {
  type: "classroom";
  name: string;
  environment_attributes: EnvAttr;
  video: VideoProps;
}
