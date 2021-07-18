import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledMenu = styled.aside`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 18.1vw;
  z-index: 99;
  overflow: hidden auto;
  padding: 0vw;
  display: ${({ open }) => (open ? "block" : "none")};
  background: ${colors.COLOR_WHITE};
`;
