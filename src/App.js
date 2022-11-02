import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import About from "./Components/About/About";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Other from "./Components/Other/Other";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context';
import { useContext } from "react";
import WebShop from "./img/webshop.PNG";
import CountdownTimer from "./img/CountdownTimer.PNG";
import JavaScriptCalculator from "./img/JavaScriptCalculator.PNG";
import DrumMachine from "./img/DrumMachine.PNG";
import RandomQuoteMachine from "./img/RandomQuoteMachine.PNG";


var projectList = [
  {
      title: "E-Commerce",
      picture:  WebShop ,
      url: "https://vic-webstore.netlify.app/"
  },
  {
      title: "Random Quote Machine",
      picture: RandomQuoteMachine,
      url: "https://codepen.io/vicano/full/dydmyeq"
  },
  {
      title: "Countdown Timer",
      picture: CountdownTimer,
      url: "https://vic-countdown-timer.netlify.app/"
  },
  {
      title: "Drum Machine",
      picture: DrumMachine,
      url: "https://vic-drum-machine.netlify.app/"
  },
  {
      title: "JavaScript Calculator",
      picture: JavaScriptCalculator,
      url: "https://codepen.io/vicano/full/ZExreGd"
  },

]
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return (
    <div className="App" 
    style={{
      background: darkMode? 'black':'', 
      color: darkMode? 'white':''
      }}
    >
      <Navbar/>
      <Intro/> 
      <About />
      <Services />
      <Portfolio projectList={projectList} />
      <Other />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
