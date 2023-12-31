import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Skills from './components/Skills'
import Contact from './components/Contact'
import ExperienceTimeline from "./components/ExperienceTimeline";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
      <ExperienceTimeline />
      <Portfolio />
      <Skills />
      <Contact />
      
    </div>
  );
}

export default App;
