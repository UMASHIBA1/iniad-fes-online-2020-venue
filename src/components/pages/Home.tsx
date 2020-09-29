import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import IFrameWrap from "../atoms/IFrameWrap";
import Modal from "../atoms/Modal/Modal";
import PDFViewer from "../atoms/PDFViewer";

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
            <PDFViewer pdfPath="/sample.pdf" pageNum={2} />
          </Modal>
          <button onClick={() => changeIsOpenModal(true)}>開く</button>
          <IFrameWrap
            iframeCode={`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/483496776&color=%238494ac&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/zekk_wa_zetku" title="Zekk" target="_blank" style="color: #cccccc; text-decoration: none;">Zekk</a> · <a href="https://soundcloud.com/zekk_wa_zetku/falling-down-feat-renko-tringle" title="Falling Down feat. Renko × TRI△NGLE" target="_blank" style="color: #cccccc; text-decoration: none;">Falling Down feat. Renko × TRI△NGLE</a></div>`}
          />
        </div>
      </div>
      <div className="h-56 w-full"></div>
    </>
  );
}

export default Home;
