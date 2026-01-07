import React from 'react'
import hi from './pic/hii.png'
// import t2 from './pic/profile1.png'
import react from'./pic/react.png'
import js from'./pic/js.png'
import me from'./pic/me1.png'
import '../App.css';
export default function Home(props) {

  const handlecv=()=>{
    window.open("https://drive.google.com/file/d/1qqArwZb1Ioj8O-zF5OLd_xye7qZHOMVi/view?usp=sharing", "_blank", "noopener,noreferrer");

  }

  
  return (
  //Main  container
    <div className="container" id="home_main" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(350px,1fr))",color:`${props.mode==="dark"?"white":"#0F172A"}`,height:"auto",paddingBottom:100,paddingTop:100 }}>
    {/*secondary 1st container*/ }
      <div className="container" id="center" style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"300px",gap:"20px",flexShrink:"0"}}>
       
       <h1>HII, I'M <span style={{color:"#38BDF8"}}>Saurav</span></h1>
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
      <div style={{backgroundColor:`${props.mode==="dark"?"#141e34ff":"#FFFFFF"}`,height:"200px",width:"auto",border:"3px solid ",borderColor: `${props.mode==="dark"?"#464a53ff":"#E5E7EB"}`,borderRadius:"100px",gridArea:"1/2"}}></div>
      <img className="img " src={me } alt="background" style={{gridArea:"1/2",height:"233px",width:"177px",filter: `drop-shadow( ${props.mode==="dark"?"0px 0px 20px rgba(56,189,248,0.5)":"0px 0px 20px rgba(0, 0, 0, 0.15)"})`}} />
      </div>
      <img src={js} alt="" className="img" />
      </div>
    </div>
    
  )
  
}
