import React from 'react'

export default function Navigation() {
  return (
  
  <div className="nav nav-expand-lg" style={{display:"flex",padding:"20px",justifyContent:"space-between",color:"white",alignItems:"center",borderBottom:"2px solid white",backdropFilter:"blur(10px)",background: "rgba(15, 23, 42, 0.7)"}}>
    
      <div  style={{justifySelf:"start" }} >
      <a  className="nav-link" href="/" >Saurav</a>
      </div>
      <div  style={{display:"flex",gap:"20px"}}>
      <a className="nav-link active" aria-current="page" href="/">Home</a>
      <a className="nav-link" href="/">About</a>
      <a className="nav-link" href="/">Skills</a>
      <a className="nav-link" href="/">Contact</a>
    </div>
  </div>
  
  )
}
