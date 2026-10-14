import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About"
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;