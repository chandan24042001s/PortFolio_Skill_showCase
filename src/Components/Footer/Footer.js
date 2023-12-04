import React from "react";
import "./footer.css";
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
          <LinkedIn color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
          <Twitter color="white" size={"3rem"} />
      
        </div>
      </div>
    </div>
  );
};

export default Footer;