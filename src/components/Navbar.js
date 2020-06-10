import React from "react";
import { Link } from "react-router-dom";
import {
  StyledNavbar,
  StyledNavbarBrand,
  StyledNavItems,
  StyleLink
} from "../styled/StyledNavbar";

import { Accent } from "../styled/Random";
export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavbarBrand>
        <Link to="/">
          Learn.Build.<Accent>Type.</Accent>
        </Link>
      </StyledNavbarBrand>

      <StyledNavItems>
        <li>
          <StyleLink to="/">Home</StyleLink>
        </li>
        <li>
          <StyleLink to="/highscores">Highscores</StyleLink>
        </li>
        <li>
          <StyleLink to="/login">Login</StyleLink>
        </li>
      </StyledNavItems>
    </StyledNavbar>
  );
}
