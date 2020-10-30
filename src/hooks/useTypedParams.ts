import { useParams } from "react-router-dom";
import ClassRoomProps from "../typings/RoomPropType/ClassRoomProps";
import { RoadProps, StairProps} from "../typings/RoomPropType/RoomPropType";

interface Params {
  name: ClassRoomProps["name"] | RoadProps["name"] | StairProps["name"];
}

const useTypedParams = () => useParams<Params>();

export default useTypedParams;
