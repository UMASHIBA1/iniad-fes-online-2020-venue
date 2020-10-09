import { css } from "styled-components";
import { shadowProps } from "../constants/colors";

export const normalShadow = (offset = 4) => css`
  box-shadow: ${offset}px ${offset}px ${offset * 4}px ${shadowProps};
`;
