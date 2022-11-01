import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper deep-orange darken-4 px3">
      <a href="/" className="brand-logo">
            GRANDPA TEST
      </a>

      <ul id="nav-mobile" className="right hide-on-med-and-down">
{/*         
        <li>
          <NavLink to="/">
            <i className="material-icons small left">volume_up</i>Read the page to me
          </NavLink>
        </li> */}

        <li>
          <NavLink to="/contact">
            <i className="material-icons large left">email</i>CONTACT FORM
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
