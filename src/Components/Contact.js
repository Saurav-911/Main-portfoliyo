import React from 'react'
import github from './pic/github.png'
import linkedin from './pic/linkdin.png'
import instagram from './pic/icons8-insta-48.png'
import email from './pic/email.gif'
export default function Contact() {
  return (
    <div style={{background:"#0A0F1E",marginTop:100,color:"white",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",paddingTop:50,paddingBottom:50}}>
      <div className="container" style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",width:"auto",border:" 4px solid #00C6FF",borderRadius:"10px",padding:"20px",outline:"none",transition:" box-shadow 0.3s ease-in-out",boxShadow: "0 0 10px #00C6FF, 0 0 20px #7D3CFF"}}>
        <h1 style={{}}>Let's Connect</h1>
        <p>Have a project or juust want to say hi?</p>
        <p>I'd love to here frome you!</p>
        <div className='container' style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",justifyContent:"center",alignItems:"center",gap:"10px"}}>
        <div className="container" style={{ }}>
          <button className='btn'><img src={github} alt="" width={50} height={50}/> <p>github</p></button>
        </div>
        <div className="container" style={{ }}>
          <button className='btn'><img src={linkedin} alt="" width={50} height={50}/> <p>linkedin</p></button>
        </div>
        <div className="container" style={{ }}>
          <button className='btn'><img src={instagram} alt="" width={50} height={50}/> <p>InstaGram</p></button>
        </div>
        <div className="container" style={{ }}>
          <button className='btn'><img src={email} alt="" width={50} height={50}/> <p>Email</p></button>
        </div>
        </div>
      </div>
      <h5>© 2025 Saurav</h5>
    </div>
  )
}
