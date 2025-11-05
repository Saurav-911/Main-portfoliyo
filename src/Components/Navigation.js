import React from 'react'
import {Link} from 'react-scroll'
export default function Navigation() {
  
  return (
  
   <nav className="navbar navbar-dark" style={{display:"flex",padding:"20px",justifyContent:"space-between",alignItems:"center",borderBottom:"2px solid white",backdropFilter:"blur(10px)",background: "rgba(15, 23, 42, 0.7) "}}>
    
      <div  style={{justifySelf:"start",cursor:"pointer" }} >
      <Link  className="navbar-brand" to="/" >Saurav</Link>
      </div >
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="navbar-collapse collapse" id="navbarNavAltMarkup">
      <div  className="navbar-nav " style={{display:"flex",gap:"20px",cursor:"pointer"}}>
      <Link className="nav-link active" aria-current="page" to="Home" smooth={true} duration={100}>Home</Link>
      <Link className="nav-link" to="About" smooth={true} duration={100}>About</Link>
      <Link className="nav-link" to="Skills" smooth={true} duration={100}>Skills</Link>
      <Link className="nav-link" to="Project" smooth={true} duration={100}>Project</Link>
      <Link className="nav-link" to="Education" smooth={true} duration={100}>Education</Link>
      <Link className="nav-link" to="Contact" smooth={true} duration={100}>Contact</Link>
    </div>
    </div>
   </nav>
  
  )
}
