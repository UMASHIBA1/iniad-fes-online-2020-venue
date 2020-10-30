import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

interface Props {
  iframeCode: string;
}

const IFrameWrap: React.FC<Props> = ({ iframeCode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.innerHTML = iframeCode;
    }
  }, [iframeCode]);

  return <Wrapper ref={ref}></Wrapper>;
};

export default IFrameWrap;
