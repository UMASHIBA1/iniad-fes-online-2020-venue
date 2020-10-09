import React, { useState } from "react";
import useDidMount from "./hooks/useDidMount/useDidMount";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPage from "./components/pages/VideoPage";
import MobileHome from "./components/pages/Home";
import PcHome from "./components/pages/pc/Home";

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
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/videopage">
              <VideoPage />
            </Route>
            <Route path="/">
              <PcHome />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
