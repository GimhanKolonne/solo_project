import React from "react";
import TopBar from "../layouts/TopBar";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header>
      <TopBar />
      <NavBar />
    </header>
  );
};
export default Header;
