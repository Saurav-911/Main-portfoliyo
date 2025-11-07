import React from 'react'
import {Link} from 'react-scroll'
export default function Navigation(props) {
  
  return (
  
   <nav className="navbar navbar-expand-lg" style={{display:"flex",padding:"20px",justifyContent:"space-between",alignItems:"center",borderBottom:"2px solid",borderColor:`${props.mode==="light"?"black":"white"}`,backdropFilter:"blur(10px)",background: `${props.mode==="light"?"#F5F5F5":"#0F172A"}`}}>
    
      <div  style={{justifySelf:"start",cursor:"pointer" }} >
      <Link  className={`navbar-brand text-${props.mode==="light"?"black":"white"}`} to="/" >Saurav</Link>
      </div >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <div  className="navbar-nav ms-auto mb-2 mb-lg-0 " style={{display:"flex",gap:"20px",cursor:"pointer"}}>
      <Link className={`nav-link active text-${props.mode==="light"?"black":"white"}`} aria-current="page" to="Home" smooth={true} duration={100}>Home</Link>
      <Link className={`nav-link text-${props.mode==="dark"?"white":"black"}`} to="About" smooth={true} duration={100}>About</Link>
      <Link className={`nav-link text-${props.mode==="dark"?"white":"black"}`} to="Skills" smooth={true} duration={100}>Skills</Link>
      <Link className={`nav-link text-${props.mode==="dark"?"white":"black"}`} to="Project" smooth={true} duration={100}>Project</Link>
      <Link className={`nav-link text-${props.mode==="dark"?"white":"black"}`} to="Education" smooth={true} duration={100}>Education</Link>
      <Link className={`nav-link text-${props.mode==="dark"?"white":"black"}`} to="Contact" smooth={true} duration={100}>Contact</Link>
      <div className="form-check form-switch ms-4 mt-2" >
          
          <input className="form-check-input" type="checkbox" role="switch"  onClick={props.toggle} id="switchCheckDefault"/>
          <label className={`form-check-label text-${props.mode==="dark"?"white":"black"}`} htmlFor="switchCheckDefault">Light Mode</label>
        </div>
    </div>
    </div>
   </nav>
  
  )
}
