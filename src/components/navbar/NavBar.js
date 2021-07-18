import React, { useState } from "react";
import AccordionMenu from "../accordionMenu/AccordionMenu";

import {
  Menu,
  MainMenuLink,
  SubMenuLink,
  MenuWrapper,
  MenuIcon,
} from "./style";

import {
  faBars,
  faTimes,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo/Logo";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuWrapper open={open} onClick={() => setOpen(!open)}>
        <MenuIcon
          open={open}
          onClick={() => setOpen(!open)}
          icon={open ? faTimes : faBars}
        />
      </MenuWrapper>
      <Logo />
      <Menu>
        <MainMenuLink href="">DAGELIJKS</MainMenuLink>
        <MainMenuLink href="">SPORT</MainMenuLink>
        <MainMenuLink href="">REIZEN</MainMenuLink>
        <MainMenuLink href="">MEDISCH</MainMenuLink>
        <SubMenuLink href="">WINKELS</SubMenuLink>
        <SubMenuLink href="">TECHNOLOGIE</SubMenuLink>
        <SubMenuLink href="">BEOORDELINGEN</SubMenuLink>
        <SubMenuLink href="">HELP</SubMenuLink>
        <SubMenuLink href="">ACCOUNT</SubMenuLink>
      </Menu>
      <MenuIcon icon={faSearch} />
      <MenuIcon icon={faShoppingCart} />
      <AccordionMenu open={open} />
    </>
  );
}

export default NavBar;
