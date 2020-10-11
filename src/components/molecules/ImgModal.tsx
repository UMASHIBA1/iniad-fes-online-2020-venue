import React from "react";
import styled from "styled-components";
import Modal from "../atoms/Modal/Modal";

interface Props {
  isShow: boolean;
  onClose: () => void;
  src: string;
  alt: string
}

function ImgModal({isShow, onClose, src, alt}: Props) {
  return(
    <Modal isShow={isShow} onClose={onClose}>
      <Img src={src} alt={alt} />
    </Modal>
  );
}

const Img = styled.img.attrs<{src: string; alt: string}>(({src, alt}) => ({
  src: src,
  alt: alt
}))<{src: string; alt: string}>`
  width: calc(100% - 16px);
`

export default ImgModal;
