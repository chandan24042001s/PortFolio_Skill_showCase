import React from "react";
import "./Work.css";
import Upwork from '../../img/Upwork.png'
// import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {


  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span >
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
          Explore our client roster to witness the depth and breadth of our expertise,<br/> <br/>
           demonstrating successful partnerships and impactful solutions tailored to the <br/> <br/>
           unique needs of each brand and client I serve
            <br /> 
            My commitment to excellence has led us to partner with industry leaders across <br/> various sectors.
         
            <br />
          
          </spane>
     
            <button className="button s-button">Hire Me</button>
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <div className="w-mainCircle" >

        <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        
    
        </div>
            {/* background Circles */}
            <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;