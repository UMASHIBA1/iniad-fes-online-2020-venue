import React from "react";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const gotoVideoPage = () => {
    history.push("/videopage");
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-11/12 h-full shadow-md rounded-md flex justify-center items-center flex-col">
        ホームだよ
        <Link to="/videopage">ビデオページへGO(やり方1) lll</Link>
        <button onClick={gotoVideoPage}>ビデオページへGO(やり方2)</button>
      </div>
    </div>
  );
}

export default Home;
