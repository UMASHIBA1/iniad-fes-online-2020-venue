import React, { useState } from "react";
import useDidMount from "./hooks/useDidMount/useDidMount";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import VideoPage from "./components/pages/VideoPage";
import MobileHome from "./components/pages/Home";
import PcEntrance from "./components/pages/pc/Entrance";
import PcRoad from "./components/pages/pc/Road";
import PcHall from "./components/pages/pc/Hall";
import PcClassRoom from "./components/pages/pc/ClassRoom/ClassRoom";
import { mobileLinks, pcLinks } from "./constants/links";
import { useDividedRoomDatas } from "./hooks/useRoomDatas";
import PcStair from "./components/pages/pc/Stair";
import PcElevatorFront from "./components/pages/pc/ElevatorFront";
import MobileElevatorFront from "./components/pages/mobile/ElevatorFront";
import MobileEntrance from "./components/pages/mobile/Entrance";
import MobileHall from "./components/pages/mobile/Hall";
import MobileRoad from "./components/pages/mobile/Road";
import MobileClassRoom from "./components/pages/mobile/ClassRoom/ClassRoom";
import MobileStair from "./components/pages/mobile/Stair";
import PCSchoolGate from "./components/pages/pc/SchoolGate";
import MobileSchoolGate from "./components/pages/mobile/SchoolGate";

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
    }
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
              {/* FIXME: デバッグ用ページ、後で消す */}
              <VideoPage />
            </Route>
            <Route path="/debug">
              <MobileHome /> {/* FIXME: デバッグ用ページ、後で消す */}
            </Route>
            <Route path={mobileLinks.road(":name")}>
              <MobileRoad roadProps={dividedRoomDatas.road} />
            </Route>
            <Route path={mobileLinks.hall}>
              <MobileHall hallProps={dividedRoomDatas.hall} />
            </Route>
            <Route path={mobileLinks.classroom(":name")}>
              <MobileClassRoom classRoomProps={dividedRoomDatas.classroom} />
            </Route>
            <Route path={mobileLinks.stair(":name")}>
              <MobileStair stairProps={dividedRoomDatas.stair} />
            </Route>
            <Route path={mobileLinks.elevatorFront(":name")}>
              <MobileElevatorFront
                elevatorFrontProps={dividedRoomDatas.elevatorFront}
              />
            </Route>
            <Route path={mobileLinks.entrance}>
              <MobileEntrance entranceProps={dividedRoomDatas.entrance} />
            </Route>
            <Route>
              <MobileSchoolGate schoolGateProps={dividedRoomDatas.schoolGate} />
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
            <Route path={pcLinks.road(":name")}>
              <PcRoad roadProps={dividedRoomDatas.road} />
            </Route>
            <Route path={pcLinks.hall}>
              <PcHall hallProps={dividedRoomDatas.hall} />
            </Route>
            <Route path={pcLinks.classroom(":name")}>
              <PcClassRoom classRoomProps={dividedRoomDatas.classroom} />
            </Route>
            <Route path={pcLinks.stair(":name")}>
              <PcStair stairProps={dividedRoomDatas.stair} />
            </Route>
            <Route path={pcLinks.elevatorFront(":name")}>
              <PcElevatorFront
                elevatorFrontProps={dividedRoomDatas.elevatorFront}
              />
            </Route>
            <Route path={pcLinks.entrance}>
              <PcEntrance entranceProps={dividedRoomDatas.entrance} />
            </Route>
            <Route path={pcLinks.schoolGate}>
              <PCSchoolGate schoolGateProps={dividedRoomDatas.schoolGate} />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
