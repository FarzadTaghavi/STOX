import styled from "styled-components";

import { device } from "./../../styles/devices";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 40px;

  @media ${device.tablet} {
    padding: 0px 2.76vw;
  }
`;

export const StyledLogo = styled.img`
  height: 30vw;
  margin-bottom: 8px;

  @media ${device.tablet} {
    height: 10vw;
    padding-left: 0px;
  }
`;
