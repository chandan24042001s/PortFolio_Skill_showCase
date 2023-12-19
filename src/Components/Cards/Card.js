import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card"> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <div className="detail" >{detail}</div>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;