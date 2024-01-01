


import "./App.css";





import { useContext } from "react";
import { themeContext } from "./Context";

import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Experience from "./components/experience/Experience";
import Works from "./components/works/Works";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/contact/Contact"

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
        {/* <!-- Scroll Button start --> */}
      <div class="scroll-up-btn">
         <i class="fas fa-angle-double-up"></i>
      </div>
      {/* <!-- Scroll Button end --> */}
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Portfolio />
      <Works />
   
      <Testimonial />
      <Contact />
   
    </div>
  );
}

export default App;
