import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../images/logo.svg";
export default class Navbar extends Component {
  render() {
    return (
      <div className={classes.navbar}>
        <Link>
          <img src={logo} alt="Beach Resort" className={classes.logo} />
        </Link>
        <Link className={classes.elem} to="/">
          Home
        </Link>
        <Link className={classes.elem} to="/rooms/">
          Rooms
        </Link>
      </div>
    );
  }
}
