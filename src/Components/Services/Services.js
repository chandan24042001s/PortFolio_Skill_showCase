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
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
       
          <button className="button s-button">Download CV</button>
     
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div >
      <div className="cards">
      <div style={{left:'14rem'}} >
        <Card emoji={HeartEmoji} heading={"Design"} detail={"Figma,Sketch,PhotoShop,AdobeXD"} />
      </div>
      <div style={{top:'12rem',left:'-4rem'}} >
        <Card emoji={Glasses} heading={"Design"} detail={"Figma,Sketch,PhotoShop,AdobeXD"} />
      </div>
      <div style={{top:'19rem',left:'12rem'}} >
        <Card emoji={Humble} heading={"Design"} detail={"Figma,Sketch,PhotoShop,AdobeXD"} />
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