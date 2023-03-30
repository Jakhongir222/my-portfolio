import './App.css';
import { About } from './components/About';
import { AboutInfo } from './components/AboutInfo';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import GoToTheTop from './components/GoToTheTop';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <AboutInfo/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <GoToTheTop/>
    </div>
  );
}

export default App;
