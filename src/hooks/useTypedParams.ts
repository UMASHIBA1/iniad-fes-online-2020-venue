import { useParams } from "react-router-dom";
import { RoadProps, ClassRoomProps } from "../typings/RoomPropType";

interface Params {
  name: ClassRoomProps["name"] | RoadProps["name"];
}

const useTypedParams = () => useParams<Params>();

export default useTypedParams;
