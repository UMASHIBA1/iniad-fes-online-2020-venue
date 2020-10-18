import React from "react";
import styled from "styled-components";
import ViewingProp from "../../typings/ViewingProp";
import Modal from "../atoms/Modal/Modal";

interface Props {
  isShow: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  viewing?: ViewingProp;
  isMobile: boolean;
}

function ImgModal({isShow, onClose, src, alt, viewing = "left", isMobile}: Props) {
  return(
    <Modal isShow={isShow} onClose={onClose} viewing={viewing} isMobile={isMobile}>
      <Img src={src} alt={alt} />
    </Modal>
  );
}

const Img = styled.img.attrs<{src: string; alt: string}>(({src, alt}) => ({
  src: src,
  alt: alt
}))<{src: string; alt: string}>`
  width: calc(100% - 32px);
  margin: 16px 0;
`

export default ImgModal;
