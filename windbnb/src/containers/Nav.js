import React from "react";
import logo from "../assets/windbnb-master/logo.png"
import Search from "../containers/Search";

const Nav = () => {
  return(
    <nav>
      <img src={logo} alt="logo"></img>
      <Search />
    </nav>
  )
}

export default Nav;