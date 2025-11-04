import './App.css';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Education from './Components/Education';

function App() {
  <style/>
    
  return (
  <>
  <Navigation/>
  <section className="Home"><Home/></section>
  <section className="About"><About/></section>
  <section className="Skills"><Skills/></section>
  <section className="Project"><Project/></section>
  <section className="Education"><Education/></section>
  <section className="Contact"><Contact/></section>

  </>
  );
}

export default App;
