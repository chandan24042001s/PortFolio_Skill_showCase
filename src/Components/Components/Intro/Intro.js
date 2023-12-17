import "./Intro.css";
import React, { useEffect } from "react";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import LeetCode from "../../img/leetcode.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/Profile.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassemoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Typed from "typed.js";
import { useRef } from "react";

const Intro = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Chandan Kumal</span>
          <div className="txt-container">
            {" "}
            <p className="txt">
              I am a <span className="running-txt" ref={el} /> <span />
            </p>
          </div>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producing the Auality work
          </span>
        </div>
        <a href="mailto:chandankumal977@gmail.com">
          <button className="button i-button">Hire me</button>
        </a>
        <div className="i-icons">
          <a href="https://github.com/chandan24042001s">
            {" "}
            <img src={Github} alt="github" />{" "}
          </a>
          <a href="https://www.linkedin.com/in/chandan-kumal777/">
            {" "}
            <img src={LinkedIn} alt="linkedin" />{" "}
          </a>
          <a href="/">
            {" "}
            <img src={LeetCode} className="leet-code" alt="twitter" />{" "}
          </a>
        </div>
      </div>
      <div className="i-right">
        <img className="profile_logo1" src={Vector1} alt="" />
        <img className="profile_logo2" src={Vector2} alt="" />
        <img className="profile_logo" src={boy} alt="" />
        <img className="emoji" src={glassemoji} alt="" />
        <div className="blur" style={{ background: "rgb(238,210,255" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
        <div style={{ top: "4%", left: "68%" }} className="Crown">
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }} className="thumbup">
          <FloatingDiv image={thumbup} text1="Best Design" text2="Award" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
