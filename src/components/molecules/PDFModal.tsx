import React, { useState } from "react";
import styled from "styled-components";
import centerPutChild from "../../cssProps/centerPutChild";
import Modal from "../atoms/Modal/Modal";
import PDFViewer from "../atoms/PDFViewer";

interface Props {
  isShow: boolean;
  onClose: () => void;
  pdfPath: string;
}

function PDFModal({isShow, onClose, pdfPath}: Props) {
  const [nowPageNum, changeNowPageNum] = useState(1);

  return(
    <Modal isShow={isShow} onClose={onClose}>
      <PDFWrapper>
        <PDFViewer pdfPath={pdfPath} nowPageNum={nowPageNum} />
      </PDFWrapper>
    </Modal>
  );
}

const PDFWrapper = styled.div`
  ${centerPutChild}
  width: calc(100% - 48px);
`

export default PDFModal;
