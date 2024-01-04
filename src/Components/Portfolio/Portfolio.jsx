import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import '../../img/Netflix.png'
// import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const projects= [

      {
        "date": "1/10/2023",
        "title": "HIGHLY SCALABLE MOVIE STREAMING APP",
        "description": "Revolutionize the entertainment industry by delivering a GPT integrated seamless and high-performance streaming experience  made using react,redux store and firebase .",
        "url": "https://gpt-powered-net-flix.vercel.app/", 
        "github": "https://github.com/redoxrj/real_time_chat_app",
        "imgSrc": "https://res.cloudinary.com/dnomqanhp/image/upload/v1704314655/project-thumbnails/ictxwpq767b2iiboy6d5.png"
      },
      {
        "date": "5/10/2023",
        "title": "FOODVILLA- Food Ordering App",
        "description": "leveraging Live Swiggy API integration and implemented with a robust technology stack featuring React and Redux store ",
        "url": "https://food-villa-empire.netlify.app/",
        "github": "https://github.com/chandan24042001s/Building-Food-Delivery-App-FOOD-VILLa",
        "imgSrc": "https://res.cloudinary.com/dnomqanhp/image/upload/v1704314655/project-thumbnails/rta7gmsistmxdpcw8yem.png"
      },
      {
      "date": "5/10/2023",
      "title": "VIDEO STREAMING APP- Youtube",
      "description": "leveraging Live Youtube API integration and implemented with a robust technology stack featuring React and Redux store ",
      "url": "https://video-stream-platform.netlify.app/",
      "github": "https://github.com/chandan24042001s/Building-Video-Streaming-platform-YouTube-from-Scratch",

      "imgSrc": "https://res.cloudinary.com/dnomqanhp/image/upload/v1704314667/project-thumbnails/knvft6hh72chpurspeqv.png"
    },
      {
        "date": "24/09/2023",
        "title": "ECOMMERCE MERN APP",
        "description": "Developed a cutting-edge MERN E-commerce App-SiyaRamStore, leveraging MongoDB, Express.js, React, and Node.js, to create a seamless and scalable platform for a robust online shopping experience and it is fully functional.",
        "url": "https://siya-ram-store.vercel.app/",
        "github": "https://github.com/chandan24042001s/Dynamic-Ecommerce-App",
        "imgSrc": "https://res.cloudinary.com/dnomqanhp/image/upload/v1704314667/project-thumbnails/atg0o0yb6791i4i1kyud.png"
      },
  
      {
        "date": "10/10/2023",
        "title": "BOOKHUB- Open Library ",
        "description": "Showcases my ability to seamlessly integrate real-time data from the Open Library API into the BookStore App and employed Redux Store and Context API for efficient state management, ensuring a smooth and predictable flow of data within the application",
        "url": "https://bookstore-chandan.netlify.app/",
        "github": "https://github.com/chandan24042001s/BookStore",
        "imgSrc": "https://res.cloudinary.com/dnomqanhp/image/upload/v1704314667/project-thumbnails/lsontwk2llrx6kcmfwl6.png"
      },
      {
        "date": "16/10/2023",
        "title": "PORTFOLIO",
        "description": "My Portfolio made fully responsive and animated made using ReactJs, SCSS and firebase .In this portfolio, I've showcased some of my latest projects, highlighting my skills in web development and design.",
        "url": "/",
        "github": "https://chandan-kumal-portfolio.netlify.app/",

        "imgSrc": "https://res.cloudinary.com/dnomqanhp/image/upload/v1704314666/project-thumbnails/nqrjshvde05xxhbemyqv.png"
      }
      
    ]
  console.log(projects)
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Cool</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {projects.map((item)=>(
           <SwiperSlide>
           <img src={item.imgSrc}     alt="" />
           <h1>{item.title}</h1>
           {/* <h3>{item.date}</h3> */}
           <p className="description">{item.description}</p>
           {/* <button className="button s-button">Visit</button> */}
           <a href={item.url}  className="button s-button">Visit</a>
         </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
