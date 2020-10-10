import React, { useState } from "react";
import useDidMount from "./hooks/useDidMount/useDidMount";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPage from "./components/pages/VideoPage";
import MobileHome from "./components/pages/Home";
import PcEntrance from "./components/pages/pc/Entrance";
import PcRoad from "./components/pages/pc/Road";
import PcHall from "./components/pages/pc/Hall";
import PcClassRoom from "./components/pages/pc/ClassRoom";
import { pcLinks } from "./constants/links";
import { useDividedRoomDatas } from "./hooks/useRoomDatas";

const useDeviceType = () => {
  const [deviceType, changeDeviceType] = useState<"mobile" | "pc">("mobile");

  const judgeWindowSize = () => {
    if (
      navigator.userAgent.indexOf("iPhone") > 0 ||
      (navigator.userAgent.indexOf("Android") > 0 &&
        navigator.userAgent.indexOf("Mobile") > 0) ||
      navigator.userAgent.indexOf("iPad") > 0 ||
      navigator.userAgent.indexOf("Android") > 0
    ) {
      // スマートフォン・タブレット向けの記述
      changeDeviceType("mobile");
    } else {
      // PC向けの記述
      changeDeviceType("pc");
    };
  };

  useDidMount(judgeWindowSize);

  return [deviceType];
};





function App() {
  const [deviceType] = useDeviceType();
  const [dividedRoomDatas] = useDividedRoomDatas();

  if (deviceType === "mobile") {
    return (
      // Mobile版
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/videopage">
              <VideoPage />
            </Route>
            <Route path="/">
              <MobileHome />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  } else {
    // PC版
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path={"/road/:name"}>
              <PcRoad roadProps={dividedRoomDatas.road} />
            </Route>
            <Route path={"/hall"}>
              <PcHall hallProps={dividedRoomDatas.hall} />
            </Route>
            <Route path={"/classroom/:name"}>
              <PcClassRoom classRoomProps={dividedRoomDatas.classroom} />
            </Route>
            <Route path={"/"}>
              <PcEntrance entranceProps={dividedRoomDatas.entrance} />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
