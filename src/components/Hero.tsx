import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import FontSizeChanger from "react-font-size-changer";
import { TextToVoice } from "./TextToVoice";
import dataHero from "../dataHero.json";

export const Hero: React.FC = () => {
  const title: string = dataHero.title;
  const paragraph: string = dataHero.pagagraph;

  return (
    <div className="hero">
      <div className="row">
        <div className="col s12 m6 opacity ">
          <div className="text-block">
            <h1>{title}</h1>

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

            <TextToVoice />
            <div id="target">
              <h5 className="content">{paragraph}</h5>
            </div>
          </div>

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
