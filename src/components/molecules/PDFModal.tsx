import React, { useState } from "react";
import styled from "styled-components";
import centerPutChild from "../../cssProps/centerPutChild";
import IconButton from "../atoms/IconButton";
import Modal from "../atoms/Modal/Modal";
import PDFViewer from "../atoms/PDFViewer";
import rightArrow from "../../statics/svgs/right-arrow.svg";
import leftArrow from "../../statics/svgs/left-arrow.svg";
import PDFProps from "../../typings/PDFProps";
import ViewingProp from "../../typings/ViewingProp";

interface Props {
  isShow: boolean;
  onClose: () => void;
  pdfProps: PDFProps;
  viewing?: ViewingProp;
  isMobile: boolean;
}

function PDFModal({ isShow, onClose, pdfProps, viewing, isMobile }: Props) {
  const [nowPageNum, changeNowPageNum] = useState(1);


  const gotoNextPage = () => {
    if(nowPageNum < pdfProps.pageNum) {
      changeNowPageNum(nowPageNum + 1);
    }
  }

  const gotoAbovePage = () => {
    if(nowPageNum > 1) {
      changeNowPageNum(nowPageNum - 1);
    }
  }

  return (
    <Modal isShow={isShow} onClose={onClose} viewing={viewing} isMobile={isMobile}>
      <PDFWrapper>
        <IconButton iconDescription="back" svgPath={leftArrow} onClick={gotoAbovePage} dataControllId={nowPageNum > 1?"":"disable-button"} />
        <PDFViewer pdfPath={pdfProps.url} nowPageNum={nowPageNum} />
        <IconButton iconDescription="next" svgPath={rightArrow} onClick={gotoNextPage} dataControllId={nowPageNum < pdfProps.pageNum?"": "disable-button"} />
      </PDFWrapper>
    </Modal>
  );
}

const PDFWrapper = styled.div`
  ${centerPutChild}
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: calc(100% - 12px);
  > button {
    margin: 8px;
    &[data-controll-id="disable-button"] {
      visibility: hidden;
    }
  }

`;

export default PDFModal;
