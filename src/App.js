import './App.css';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Education from './Components/Education';
import React,{useState} from 'react';
function App() {
  
  const[mode,setMode]=useState("dark"); 
    
  const toggle=()=>
  {
  if(mode==="light"){
    
    document.body.style.backgroundColor = '#0F172A';
    setMode("dark")
  }
  else{
    document.body.style.backgroundColor = '#F5F5F5';
    setMode("light")
  }
  }
  return (
  <>
  <Navigation toggle={toggle} mode={mode}/>
  <section className="Home"><Home mode={mode}/></section>
  <section className="About"><About mode={mode}/></section>
  <section className="Skills"><Skills mode={mode}/></section>
  <section className="Project"><Project mode={mode}/></section>
  <section className="Education"><Education mode={mode}/></section>
  <section className="Contact"><Contact mode={mode}/></section>

  </>
  );
}

export default App;
