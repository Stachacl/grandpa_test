import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper deep-orange darken-4 px1">
      <a href="/" className="brand-logo">
        Grandpa test
      </a>

      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">
            {" "}
            <i className="material-icons left">font_download</i>  <i className="tiny material-icons left">font_download</i> Increase/ Decrease font
            size{" "}
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <i className="material-icons left">volume_up</i>Read the page to me
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            <i className="material-icons left">email</i>Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
