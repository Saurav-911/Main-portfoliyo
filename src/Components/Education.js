import React from 'react'
import orchidLogo from './pic/orchid1.png' 
import lbef from './pic/lbef.png'
export default function Education(props) {
  const orc=()=>{
    window.open("https://www.facebook.com/OrchidPupilBoardingSchool/","_blank")
  }
  const kmc=()=>{
    window.open("https://kmcen.edu.np/","_blank")
  }
  const lbef1=()=>{
    window.open("https://www.lbef.edu.np/","_blank")
  }
  return (
    <div className='container' style={{
  
      marginTop:100,
      backgroundColor: `${props.mode==="dark"?"#1E293B":"white"}`,
      display:"flex",
      flexDirection:"column",
      borderRadius: "10px",
      justifyContent:"center",
      gap:"40px",
      
      color:`${props.mode==="dark"?"#ffffffff":"#1E293B"}`,
      
    }}>
       <h2 style={{alignSelf:"center"}}>My Education</h2>
      
       <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(350px,1fr))",gap:"20px",justifyContent:"center",alignContent:"center"}}>
       <div className='container' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       <img onClick={orc} src={orchidLogo} alt="logo" style={{height:"150px",cursor:"pointer"}}/>
       </div>
       <div className="container" style={{height:"auto",background:"#1E293B",backgroundImage:`linear-gradient(to right,${`${props.mode==="dark"?"#0F172A,#1E293B,#0F172A":"#f5f5f5,white,#f5f5f5"}`})`,borderRadius: "10px",display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column"}}>
        <div  style={{display:"grid",gridTemplateColumns:"5fr 1fr"}}>
        <h3 onClick={orc} style={{cursor:"pointer"}}>ORCHID PUPIL SECONDARY SCHOOL (Gothatar)</h3> 
        <p >FINISHED at 2020 </p></div>
        <p  >GPA: 3.70 </p></div>
       </div>
      
       <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(350px,1fr))",gap:"20px",justifyContent:"center",alignContent:"center"}}>
       <div className='container' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       <img onClick={kmc} src="https://kmcen.edu.np/wp-content/uploads/2023/09/kmc-college-300x192.png" alt="logo" style={{height:"150px",cursor:"pointer"}}/>
       </div>
       <div className="container" style={{height:"auto",background:"#1E293B",backgroundImage:`linear-gradient(to right,${`${props.mode==="dark"?"#0F172A,#1E293B,#0F172A":"#f5f5f5,white,#f5f5f5"}`})`,borderRadius: "10px",display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column"}}>
        <div  style={{display:"grid",gridTemplateColumns:"5fr 1fr"}}>
        <h3 onClick={kmc} style={{cursor:"pointer"}}>KATHMANDU MODEL SECONDARY SCHOOL (Bagbazar)</h3> 
        <p >2021–2023  </p></div>
        <p  >GPA: 3.62 </p></div>
       </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(350px,1fr))",gap:"20px",justifyContent:"center",alignContent:"center"}}>
       <div className='container' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       <img onClick={lbef1} src={lbef} alt="logo" style={{width:200 , height:"150px",cursor:"pointer"}}/>
       </div>
       <div className="container" style={{height:"auto",background:"#1E293B",backgroundImage:`linear-gradient(to right,${`${props.mode==="dark"?"#0F172A,#1E293B,#0F172A":"#f5f5f5,white,#f5f5f5"}`})`,borderRadius: "10px",display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column"}}>
        <div  style={{display:"grid",gridTemplateColumns:"5fr 1fr"}}>
        <h3 onClick={lbef1} style={{cursor:"pointer"}}>Lord Buddha Education Foundation, Maitidevi, Kathmandu </h3> 
        <p >2023–Present  </p></div>
        <p  >B.Sc. in Information Technology (Cloud Engineering)</p></div>
       </div>
       
       
    </div>
  )
}
