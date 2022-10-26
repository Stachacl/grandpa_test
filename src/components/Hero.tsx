import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import FontSizeChanger from "react-font-size-changer";

export const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1> My Grandpa will test your website</h1>
        <FontSizeChanger
          targets={["#target .content"]}
          options={{
            stepSize: 2,
            range: 4,
          }}
          // customButtons={{
          //   up: <i className="small material-icons ">font_download</i>,
          //   down: <i className="tiny material-icons ">font_download</i>,
          // }}
        />
        <div id="target">
          <h3 className="content">
            If your business is in a jargon-heavy industry—and you feel it helps
            your team iterate around common ideas successfully—experiment to be
            more precise about the jargon that you do use. One way to do this is
            to develop a set of consistent terminology within your company that
            everyone understands.
          </h3>
        </div>

        <div>
          <Link to="/pricing" className="btn">
            Pricing
          </Link>
          <Link to="/contact" className="btn btn-light bg-opacity-10">
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
};
