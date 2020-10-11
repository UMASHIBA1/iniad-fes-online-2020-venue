import React, { useState } from "react";
import styled from "styled-components";
import centerPutChild from "../../cssProps/centerPutChild";
import IconButton from "../atoms/IconButton";
import Modal from "../atoms/Modal/Modal";
import PDFViewer from "../atoms/PDFViewer";
import rightArrow from "../../statics/svgs/right-arrow.svg";
import leftArrow from "../../statics/svgs/left-arrow.svg";
import PDFProps from "../../typings/PDFProps";

interface Props {
  isShow: boolean;
  onClose: () => void;
  pdfProps: PDFProps;
}

function PDFModal({ isShow, onClose, pdfProps }: Props) {
  const [nowPageNum, changeNowPageNum] = useState(1);


  // FIXME: ページの数を引数にとって現在のページが最後のページだったら次のページにいけないようにする
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
    <Modal isShow={isShow} onClose={onClose}>
      <PDFWrapper>
        {nowPageNum > 1?(
        <IconButton iconDescription="back" svgPath={leftArrow} onClick={gotoAbovePage} />
        ):(
          // FIXME: noneはさすがにわかりにくそう
        <IconButton iconDescription="none" svgPath={leftArrow}/>
        )}
        <PDFViewer pdfPath={pdfProps.url} nowPageNum={nowPageNum} />
        {nowPageNum < pdfProps.pageNum?(
        <IconButton iconDescription="next" svgPath={rightArrow} onClick={gotoNextPage} />
        ): (
        <IconButton iconDescription="none" svgPath={rightArrow} />
        )}
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
  }
`;

export default PDFModal;
