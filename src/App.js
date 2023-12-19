import {Navabar}  from './Components/Navbar/Navabar';
import './App.css';
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Work/Work";
import Project from "./Components/Projects/Project";
import Testimonial from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
  <div className="App">
  <Navabar/>
  <Intro/>
  <Services/>
  <Project/>
  <Experience/>
  <Works/>

  <Testimonial/>
  <Contact/>
  <Footer/>
  </div>
  );
}

export default App;
