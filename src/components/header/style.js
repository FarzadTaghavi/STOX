import styled from "styled-components";
import { device } from "../../styles/devices";
import { fonts } from "../../styles/typography";

export const HeaderWrapper = styled.header`
  position: relative;
  height: 10vw;
  width: 100%;
  padding: 0;
  margin: 0;
  top: 10px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-family: ${fonts.fontPrimary};

  @media ${device.laptop} {
    height: 7vw;
  }
`;
