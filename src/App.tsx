import React, { useState } from "react";
import useDidMount from "./hooks/useDidMount/useDidMount";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPage from "./components/pages/VideoPage";
import MobileHome from "./components/pages/Home";
import PcHome from "./components/pages/pc/Home";
import PcRoad from "./components/pages/pc/Road";
import PcHall from "./components/pages/pc/Hall";
import PcRoom from "./components/pages/pc/Room";
import { pcLinks } from "./constants/links";

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
            <Route path={pcLinks.road}>
              <PcRoad />
            </Route>
            <Route path={pcLinks.hall}>
              <PcHall />
            </Route>
            <Route path={pcLinks.room}>
              <PcRoom />
            </Route>
            <Route path={pcLinks.home}>
              <PcHome />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
