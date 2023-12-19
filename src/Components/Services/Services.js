import React from "react";
import './services.css'
import Card from "../Cards/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";


const Services = () => {

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span >My Awesome</span>
        <span>services</span>
        <span>
      My comprehensive suite of offerings is designed to empower you at every stage <br/>of the development lifecycle. <br/> <br/>From front-end design to back-end architecture,<br/> our team of seasoned professionals ensures a seamless and efficient full-stack development experience.
          <br />
         
        </span>
       
          <button className="button s-button">Download CV</button>
     
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div >
      <div className="cards">
      <div style={{left:'14rem'}} >
        <Card emoji={HeartEmoji} heading={"Developer"} detail={"React,JavaScript,NodeJs,ExpressJs,HTML,CSS,Git/GitHub,Jest,MongoDB,TailwindCSS"} />
      </div>
      <div style={{top:'12rem',left:'-4rem'}} >
        <Card emoji={Glasses} heading={"Programming"} detail={"C++,Java,JavaScript,C,C#,.NET,SQL"} />
      </div>
      <div style={{top:'19rem',left:'12rem'}} >
        <Card emoji={Humble} heading={"UI/UX & DEsign"} detail={"Figma,Canva"} />
      </div>
      <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
     
    </div>
  );
};

export default Services;