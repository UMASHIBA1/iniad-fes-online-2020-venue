import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Modal from "../atoms/Modal";

function Home() {
  const history = useHistory();

  const [isOpenModal, changeIsOpenModal] = useState(false);

  const gotoVideoPage = () => {
    history.push("/videopage");
  };
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-11/12 h-full shadow-md rounded-md flex justify-center items-center flex-col">
          ホームだよ
          <Link to="/videopage">ビデオページへGO(やり方1) lll</Link>
          <button onClick={gotoVideoPage}>ビデオページへGO(やり方2)</button>
          <Modal isShow={isOpenModal} onClose={() => changeIsOpenModal(false)}>
            aaa
          </Modal>
          <button onClick={() => changeIsOpenModal(true)}>開く</button>
        </div>
      </div>
      <div className="h-56 w-full"></div>
    </>
  );
}

export default Home;
