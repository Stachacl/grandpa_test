import React from "react";
import { NavLink } from "react-router-dom";

export const Footer: React.FunctionComponent = () => (
  <footer className="page-footer deep-orange darken-4 px1">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Company Bio</h5>
          <p className="grey-text text-lighten-4">
            We are a team of people working on this project . Any amount would
            help support and continue development on this project and is greatly
            appreciated.
          </p>
        </div>
        <div className="col l3 s12"></div>
        <h5 className="white-text">Connect</h5>
        <div className="col l3 s12">
          <ul>
            <li>
              <a className="white-text" href="#!">
                Link 2
              </a>
            </li>
            <li>
              <a className="white-text" href="#!">
                Link 1
              </a>
            </li>
            <li>
              <a className="white-text" href="#!">
                Link 3
              </a>
            </li>
            <li>
              <a className="white-text" href="#!">
                Link 4
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        Made by{" "}
        <a
          className="brown-text text-lighten-3"
          href="http://materializecss.com"
        >
          Stacha Clemens
        </a>
      </div>
    </div>
  </footer>
);