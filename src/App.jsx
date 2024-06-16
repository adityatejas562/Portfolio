import { HashRouter } from "react-router-dom";
import { About, Contact, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <HashRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="tech">
          <Tech />
        </div>
        <div id="works">
          <Works />
        </div>
        <div id="feedbacks">
          <Feedbacks />
        </div>
        <div id="contact" className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
