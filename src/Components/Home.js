import React from 'react'
import hi from './pic/hii.png'
import t2 from './pic/profile1.png'
import react from'./pic/react.png'
import js from'./pic/js.png'
import '../App.css';
export default function Home() {

  const handlecv=()=>{
    window.open("https://drive.google.com/file/d/1qqArwZb1Ioj8O-zF5OLd_xye7qZHOMVi/view?usp=sharing", "_blank", "noopener,noreferrer");
  }
  return (
  //Main  container
    <div className="container" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(350px,1fr))",color:"white",height:"auto",paddingBottom:100,paddingTop:100}}>
    {/*secondary 1st container*/ }
      <div className="container"style={{display:"flex",flexDirection:"column",height:"300px",gap:"20px",flexShrink:"0"}}>
       
       <h1>HII, I'M Saurav</h1>
       <div style={{flexGrow:".5"}}>
       <img src={hi}alt="img" width={30} height={30}/>
       <h4>Frontend developer</h4>
       <p>Developed an responsive web page</p>  
       </div>
       <button className='btn btn-primary' style={{width:"130px"}} onClick={handlecv}>Look at My CV </button>
       </div>
       {/*secondary 2nd container*/ }
     <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",flexwrap:"wrap"}}>
      <img src={react} alt="" className="img" style={{alignSelf:"flex-start",filter:"drop-shadow(0px 0px 30px rgba(56,189,248,0.5))",animation:"spin 4s linear infinite"}}/>
      
      <div style={{display:"grid"}}>
      <div style={{backgroundColor:"#141e34ff",height:"200px",width:"auto",border:"3px solid #464a53ff",borderRadius:"100px",gridArea:"1/2"}}></div>
      <img className="img " src={t2} alt="background" style={{gridArea:"1/2",filter: "drop-shadow(0px 0px 20px rgba(56,189,248,0.5))"}} />
      </div>
      <img src={js} alt="" className="img" />
      </div>
    </div>
    
  )
  
}
