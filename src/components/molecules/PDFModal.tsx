import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "../atoms/IconButton";
import Modal from "../atoms/Modal/Modal";
import PDFViewer from "../atoms/PDFViewer";
import rightArrow from "../../statics/svgs/right-arrow.svg";
import leftArrow from "../../statics/svgs/left-arrow.svg";
import download from "../../statics/svgs/download.svg";
import PDFProps from "../../typings/PDFProps";
import ViewingProp from "../../typings/ViewingProp";
import breakPoints from "../../constants/breakPoints";

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
    if (nowPageNum < pdfProps.pageNum) {
      changeNowPageNum(nowPageNum + 1);
    }
  };

  const gotoAbovePage = () => {
    if (nowPageNum > 1) {
      changeNowPageNum(nowPageNum - 1);
    }
  };

  return (
    <Modal
      isShow={isShow}
      onClose={onClose}
      viewing={viewing}
      isMobile={isMobile}
    >
      <PDFWrapper>
        <IconButton
          iconDescription="back"
          svgPath={leftArrow}
          onClick={gotoAbovePage}
          dataControllId={nowPageNum > 1 ? "" : "disable-button"}
        />
        <PDFViewer pdfPath={pdfProps.url} nowPageNum={nowPageNum} />
        <IconButton
          iconDescription="next"
          svgPath={rightArrow}
          onClick={gotoNextPage}
          dataControllId={nowPageNum < pdfProps.pageNum ? "" : "disable-button"}
        />
        <DownloadLink path={pdfProps.url}>
          <IconButton iconDescription="get" svgPath={download} />
        </DownloadLink>
      </PDFWrapper>
    </Modal>
  );
}

const DownloadLink = styled.a.attrs<{ path: string }>(({ path }) => ({
  href: path,
  rel: "nopener noreferrer",
  target: "_blank"
}))<{ path: string }>`
  position: absolute;
  right: 8px;
  bottom: 8px;
`;

const PDFWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  align-items: center;
  grid-template-rows: 1fr;
  width: calc(100% - 12px);
  max-height: 70vh;
  > button {
    margin: 8px;
    &[data-controll-id="disable-button"] {
      visibility: hidden;
    }
  }

  ${breakPoints.downSm} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr auto;

    > div {
      grid-row: 1;
      grid-column: 1 / 3;
    }

    > button {
      :nth-child(1) {
        grid-row: 2;
        grid-column: 1;
      }

      :nth-child(2) {
        grid-row: 2;
        grid-column: 2;
      }
    }
  }
`;

export default PDFModal;
