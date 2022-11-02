import React from "react";
import { NavLink } from "react-router-dom";

export const Footer: React.FunctionComponent = () => (
  <footer className="page-footer deep-orange darken-4">
    <div className="container m1">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Want to learn more?</h5>
          <p className="grey-text text-lighten-4 content">
            This website was made by{" "}
            <a
              className="brown-text text-lighten-3"
              href="http://materializecss.com"
            >
              Stacha Clemens
            </a>
            . She is a front-end developer and an acessibility advocate. Read
            her blogposts on Medium or connect with her via Twitter.
          </p>
         
            <ul className="social-icons collection">
              <li className="collection-item"> 
                <a href="mobile.html"> <i className="fa fa-medium"></i> </a>
              </li>
              <li className="collection-item"> 
                <a href="mobile.html"> <i className="fa fa-twitter"></i> </a>
              </li>
              <li className="collection-item"> 
                <a href="mobile.html"> <i className="fa fa-github"></i> </a>
              </li>
            </ul>
          
        </div>
      </div>
    </div>



    <div className="footer-copyright">
      <div className="container ml3">© Stacha Clemens 2022</div>
    </div>
  </footer>
);
