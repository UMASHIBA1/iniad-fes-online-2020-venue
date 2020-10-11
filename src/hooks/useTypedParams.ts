import { useParams } from "react-router-dom";
import ClassRoomProps from "../typings/RoomPropType/ClassRoomProps";
import { RoadProps} from "../typings/RoomPropType/RoomPropType";

interface Params {
  name: ClassRoomProps["name"] | RoadProps["name"];
}

const useTypedParams = () => useParams<Params>();

export default useTypedParams;
