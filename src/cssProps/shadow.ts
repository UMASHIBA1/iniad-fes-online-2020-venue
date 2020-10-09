import { css } from "styled-components";

export const normalShadow = (offset = 4) => css`
  box-shadow: ${offset}px ${offset}px ${offset * 4}px rgba(0, 0, 0, 0.1);
`;
