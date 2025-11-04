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
        <p>Video provides a powerful way to help you prove your point. When you click Online Video,
          you can paste in the embed code for the video you want to add. You can also type a
          keyword to search online for the video that best fits your document. To make your 
          document look professionally produced, 
          Word provides header, footer, cover page, and text box designs that complement each other.</p>
      </div>
    </div>
  )
} 
