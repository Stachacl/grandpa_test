import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import FontSizeChanger from "react-font-size-changer";
import { TextToVoice } from "./TextToVoice";
import dataHero from "../dataHero.json"


export const Hero: React.FC = () => {

  const title: string = dataHero.title; 
  const paragraph: string = dataHero.paragraph1; 
  const paragraph2: string = dataHero.paragraph2; 
  const paragraph3: string = dataHero.paragraph3; 

  return (
    <div className="hero">
      <div className="row">
        <div className="col m12 s12 l7 opacity ">
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
            <p> CHANGE FONT SIZE OR... </p>

            <TextToVoice /> 
            <div id="target">
              <h5 className="content">
              {paragraph} <br/> <br/>  
              {paragraph2} <br/> <br/> 
              {paragraph3} 
              </h5>
            </div>
          </div>
       
          <div className="p1 ">
            <a
              href="https://twitter.com/Stacha_cl"
              className=" btn-large waves-effect waves-orange m1"
            >
              CONTACT
            </a>

            <a
              href="https://twitter.com/Stacha_cl"
              className="btn-large waves-effect waves-orange bg-opacity-10 m1"
            >
              ASK QUESTION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
