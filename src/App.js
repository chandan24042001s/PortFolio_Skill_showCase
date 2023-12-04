import { Navabar } from "./Components/Navbar/Navabar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Work/Work";
function App() {
  return (
  <div className="App">
  <Navabar/>
  <Intro/>
  <Services/>
  <Experience/>
  <Works/>
  </div>
  );
}

export default App;
