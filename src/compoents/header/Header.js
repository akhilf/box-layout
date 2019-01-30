import React, { Component } from "react";
import "./Header.css";
import headerModel from "./header-model";
import { NavItems } from "../molecules/NavItems";

// Stateless functional Component

const Header = props => {
  const { navLinks } = headerModel;
  return (
    <nav className="header">
      <a href="#default" className="logo">
        Standard chartered
      </a>
      <div className="header-right">
        <NavItems links={navLinks} />
      </div>
    </nav>
  );
};
export default Header;
