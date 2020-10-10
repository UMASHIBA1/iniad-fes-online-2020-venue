import { useParams } from "react-router-dom";
import { RoadProps, RoomProps } from "../typings/RoomPropType";

interface Params {
  name: RoomProps["name"] | RoadProps["name"];
}

const useTypedParams = () => useParams<Params>();

export default useTypedParams;
