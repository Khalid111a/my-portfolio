import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Designs from "./components/Designs";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans"> 
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Designs />
      <Contact />
    </div>
  );
}

 export default App;
