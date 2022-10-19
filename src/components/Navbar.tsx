import React from "react";

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">
        Grandpa test
      </a>

      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="/"> <i className="material-icons left">font_download</i>Increase font
            size </a> 
        </li>

        <li>
          <a href="/">
            <i className="material-icons left">volume_up</i>Read the page to me
          </a>
        </li>
 
        <li>
          <a href="/">
            <i className="material-icons left">email</i>Contact
          </a>
        </li>

      </ul>
    </div>
  </nav>
);
