import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import FontSizeChanger from "react-font-size-changer";

export const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="row">
        <div className="col s12 m6 opacity ">
          <div className="text-block">
            <h1> My Grandpa will test your website</h1>

            <FontSizeChanger
              targets={["#target .content"]}
              options={{
                stepSize: 2,
                range: 4,
              }}
              customButtons={{
                up: <i className="small material-icons a">A</i>,
                down: <i className="tiny material-icons a">A</i>,
              }}
            />

            <div id="target">
              <h5 className="content">
                If your business is in a jargon-heavy industry—and you feel it
                helps your team iterate around common ideas
                successfully—experiment to be more precise about the jargon that
                you do use. One way to do this is to develop a set of consistent
                terminology within your company that everyone understands.{" "}
                <br />
                If your business is in a jargon-heavy industry—and you feel it
                helps your team iterate around common ideas
                successfully—experiment to be more precise about the jargon that
                you do use. One way to do this is to develop a set of consistent
                terminology within your company that everyone understands.
              </h5>
            </div>
          </div>

          {/* <button
           onClick ="responsiveVoice.speak('The Internet is a series of tubes!');"
            type="button"
            value="Play"
          >
            Play
          </button> */}

          <div className="p1 ">
            <Link
              to="/pricing"
              className=" btn-large waves-effect waves-orange m1"
            >
              About us
            </Link>

            <Link
              to="/contact"
              className="btn-large waves-effect waves-orange bg-opacity-10 m1"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
