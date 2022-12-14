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
            <h2>{title}</h2>

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
              <h6 className="content">
              {paragraph} <br/> <br/>  
              {paragraph2} <br/> <br/> 
              {paragraph3} 
              </h6>
            </div>
          </div>
       
          <div className="p1 ">
            <a
              href="https://share.hsforms.com/1XANtsTuPS0m7FxNeNTqpIQd1ojh"
              className=" btn-large waves-effect waves-orange m1"
            >
              CONTACT
            </a>

            <a
              href="https://medium.com/@stacha.l"
              className="btn-large waves-effect waves-orange bg-opacity-10 m1"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
