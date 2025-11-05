import React from 'react'
import about from './pic/about.png'
export default function About() {
  return (
    //main container
    <div className="container" style={{height:"auto",width:"auto", background:"#1E293B"
      ,backgroundImage:"linear-gradient(to right,#0F172A,#1E293B,#0F172A)",display:"grid"
    ,backgroundClip: "padding-box, border-box  "
    ,gridTemplateColumns:"repeat(auto-fit,minmax(350px,1fr))",gap:"10px",paddingBottom:40
    ,paddingTop:40,boxShadow:"0 0px 5px #1E293B, 0 0px 10px #1E293B",alignItems:"center"}}>
      {/*secondary 1st container*/ }
      <div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={about} alt="" className='img' width={200} height={200}/>
      </div>
      {/*secondary 2nd container*/ }
      <div className="container" style={{textAlign:"left  ",color:"white",display:"flex",justifyContent:"start",alignItems:"start",gap:"10px",flexDirection:"column"}}>
        
        <h1>About Me</h1>
        <p>Hi! I’m Saurav, a passionate Frontend Developer who loves turning ideas into interactive, 
          visually engaging web experiences. I enjoy crafting clean, responsive, and user-friendly 
          interfaces using modern tools like React, JavaScript, HTML, and CSS.<br/>
 
          I’m constantly exploring new technologies to stay up to date with the latest web trends and 
          improve my development workflow. My focus is not just on writing code but on building digital
           experiences that look great and feel intuitive across all devices.<br/>

          Beyond coding, I enjoy solving design challenges, experimenting with creative UI animations, 
          and collaborating with others to bring ideas to life. My goal is to keep learning, building, 
          and pushing boundaries in the front-end world.</p>
      </div>
    </div>
  )
} 
