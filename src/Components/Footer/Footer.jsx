import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>chandankumal977@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.linkedin.com/in/chandan-kumal777/">  <LinkedIn color="white" size={"3rem"} /> </a>
          <a href="https://github.com/chandan24042001s"> <Gitub color="white" size={"3rem"} /> </a>
          <a href=""> <Twitter color="white" size={"3rem"} /> </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
