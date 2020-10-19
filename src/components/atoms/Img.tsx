import styled from "styled-components";

const Img = styled.img.attrs<{src: string; alt: string}>(({src, alt}) => ({
  src: src,
  alt: alt
}))<{src: string; alt: string}>`
  width: 100%;
`;

export default Img;
