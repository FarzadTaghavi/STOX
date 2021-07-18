import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { device } from "../../styles/devices";

export const MenuWrapper = styled.div`
  height: 4.8vw;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  margin: 4vw;
  margin-bottom: 7vw;

  @media ${device.tablet} {
    display: none;
  }
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  @media (max-width: 768px) {
    font-size: 6vw;
    margin: 5px;
    margin-right: 10px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: 0px;
    width: 100%;
  }
`;

export const MainMenuLink = styled.a`
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  color: #000;
  font-size: 0.6rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const SubMenuLink = styled.a`
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease-in;
  font-size: 0.6rem;

  &:hover {
    text-decoration: underline;
  }
`;
