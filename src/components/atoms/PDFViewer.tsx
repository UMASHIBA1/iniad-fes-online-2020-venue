import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  pdfPath: string;
  pageNum: number;
}

const usePDFWidth = () => {
  const [element, changeElement] = useState<null | HTMLDivElement>(null);
  const [width, changeWidth] = useState(0);
  const [isChangedWidth, changeIsChangedWidth] = useState(false);

  const updateWidth = () => {
    if (element) {
      changeWidth(element.clientWidth);
    }
  };

  useEffect(() => {
    if (isChangedWidth === false && element !== null) {
      updateWidth();
      changeIsChangedWidth(true);
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return { width, changeElement };
};

function PDFViewer(props: Props) {
  const { width, changeElement } = usePDFWidth();
  return (
    <Wrapper>
      <Document
        file={props.pdfPath}
        inputRef={(ref) => changeElement(ref)}
        options={{
          cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        }}
        onLoadSuccess={() => console.log("success")}
        onLoadError={() => console.log("error")}
      >
        <Page pageNumber={props.pageNum} width={width} />
      </Document>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default PDFViewer;
