import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Apps from "./Components/Apps/Apps";
import Articles from "./Components/Articles/Articles";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Apps />
      <Articles />
      <Contact />
    </div>
  );
};

export default App;
