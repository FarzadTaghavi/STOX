import React from "react";
import { LogoWrapper, StyledLogo } from "./style";
import { Link } from "./../link/Link";
import logo from "../../images/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <LogoWrapper>
        <StyledLogo src={logo} />
      </LogoWrapper>
    </Link>
  );
};

export default Logo;
