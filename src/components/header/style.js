import styled from "./styled-components";
import { device } from "../../styles/devices";
import { fonts } from "../../styles/typograhpy";

export const HeaderWrapper = styled.header`
  position: relative;
  height: 13vw;
  width: 100%;
  padding: 0;
  margin: 0;
  top: 10;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-family: ${fonts.fontPrimary};

  @media ${device.laptop} {
    height: 7vw;
  }
`;
