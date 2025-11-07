import React from 'react'
import github from './pic/github.png'
import linkedin from './pic/linkdin.png'
import instagram from './pic/icons8-insta-48.png'

export default function Contact(props) {
  const githublink=()=>{
    window.open("https://github.com/Saurav-911");
  }
  const linkedinlink=()=>{
    window.open("https://www.linkedin.com/in/saurav-basnet-a7a342301/");
  }

  const instragramlink=()=>{
    window.open("https://www.instagram.com/sauravbasnet10/");
  }

 



  return (
    <div  style={{background:`${props.mode==="dark"?"#0A0F1E":"#F9FAFB"}`,marginTop:100,color:`${props.mode==="dark"?"white":"black"}`,display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",paddingTop:50,paddingBottom:50}}>
      <div className="container" style={{display:"flex",flexDirection:"column",alignItems:"center",
        gap:"10px",width:"auto",border:" 4px solid transprent",borderRadius:"10px",padding:"20px",
        outline:"none",transition:" box-shadow 0.3s ease-in-out",boxShadow: "0 0 10px #00C6FF, 0 0 20px #7D3CFF",flexWrap:"wrap"}}>
        <h1 style={{background:"linear-gradient(to right,#00C6FF,#7D3CFF)",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent"}}>Let's Connect</h1>
        <p>Have a project or just want to say hi?</p>
        <p>I'd love to here frome you!</p>
        <div className='container' style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(60px,1fr))",justifyContent:"center",alignItems:"center",gap:"10px"}}>
        <div className="container" style={{ }}>
          <button className='btn' onClick={githublink}><img src={github} alt="" width={50} height={50}/> <p>github</p></button>
        </div>
        <div className="container" style={{ }}>
          <button className='btn' onClick={linkedinlink}><img src={linkedin} alt="" width={50} height={50}/> <p>linkedin</p></button>
        </div>
        <div className="container" style={{ }}>
          <button className='btn' onClick={instragramlink}><img src={instagram} alt="" width={50} height={50}/> <p>InstaGram</p></button>
        </div>
        
        </div>
      </div>
      <h5>© 2025 Saurav</h5>
    </div>
  )
}
