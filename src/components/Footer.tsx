import React from "react";
import { NavLink } from "react-router-dom";

export const Footer: React.FunctionComponent = () => (
  <footer className="page-footer deep-orange darken-4">
    <div className="container m1">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">About this website</h5>
          <p className="grey-text text-lighten-4 content">
            This website was made by{" "}
            <a
              className="brown-text text-lighten-3"
              href="https://twitter.com/Stacha_cl"
            >
              Stacha Clemens
            </a>
            . She is a front-end developer and an accessibility advocate. Read
            her blog posts on Medium or connect with her via Twitter.
          </p>
         
            <ul className="social-icons">
              <li className=""> 
                <a href="https://uxdesign.cc/how-to-get-the-most-out-of-the-alt-attribute-4c9b553ca9d9"> <i className="fa fa-medium small"></i> </a>
              </li>
              <li className=""> 
                <a href="https://twitter.com/Stacha_cl"> <i className="fa fa-twitter small"></i> </a>
              </li>
              <li className=""> 
                <a href="https://github.com/Stachacl"> <i className="fa fa-github small"></i> </a>
              </li>
            </ul>
          
        </div>
      </div>
    </div>



    <div className="footer-copyright">
      <div className="container ml3">© 2022 Stacha Clemens </div>
    </div>
  </footer>
);
