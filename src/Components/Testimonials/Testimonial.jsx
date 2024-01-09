import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/shradha-didi.jpeg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      instructor:"Love Babbar",
      review:
        "Chandan's Way  of creating and developing web app is Just Awesome.Feels like a senior developer, Every component is highly Optimized. I have collabrated once while running web Development Course and experience throughout course was commendable. ",
    },
    {
      img: profilePic2,
      instructor:"Akshay Saini",
      review:
        "I commend him for his courteous demeanor and dedicated approach to learning. I am particularly impressed by the evident progression of his skills and his profound understanding of data structures. ",
    },
    {
      img: profilePic3,
      instructor:"Shraddha Khapra",
      review:
        "Best working Experience with Chandan. Best Mentor in my official discord channel Apna colage",
    },
    {
      img: profilePic4,
      instructor:"Striver",
      review:
        "I am amazed by his problem solving Skills. Analyzing and observation of the solution and attitute towards problem is just out of the box.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <div>
                <img src={client.img} alt="" />
                <div>
                  <h1 className="text"> {client.instructor}</h1>
                </div>
                </div>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;