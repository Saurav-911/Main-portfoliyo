import React from 'react'
import project from './pic/project.png'
import projects from './pic/project2.png'
export default function Project(props) {
  const project1=()=>{
    window.open("https://saurav-911.github.io/first-project/", "_blank", "noopener,noreferrer");
  }
  const project2=()=>{
    window.open("https://github.com/Saurav-911/python-drug-management-system", "_blank", "noopener,noreferrer");
  }
  return (
//main container
  <div className="container" style={{display:"flex",flexDirection:"column",paddingTop:100,alignItems:"center",color:`${props.mode==="dark"?"white":"#0F172A"}`,gap:"20px",height:"auto"}}>
    <h1>Featured Projects</h1>
    {/*secondary container*/}
    <div className="container" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(330px,1fr))",gap:"10px"}} >
      {/*tertiary 1st container*/ }
      <div className="container" style={{background:`${props.mode==="dark"?"#1E293B":"white"}`,display:"grid", gridTemplateColumns:"1fr 2fr",padding:"20px",borderRadius:"10px",alignContent:"center",justifyContent:"center"}}>
        <div className="container" style={{background:`${props.mode==="dark"?"#1E293B":"#f5f5f5"}`,height:"125px",width:"120px",borderRadius:"10px"}}>
          <img src={project} alt="project" height={110} width={110} justifyContent={"center"}/>
        </div>
        <div className="container" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start",gap:"1px"}}>
          <h2>Text utils</h2>
          <p>React</p>
          <button className='btn' style={{background:"transprent",color:`${props.mode==="dark"?"#ffffffff":"#1E293B"}`  ,border:" 1px solid #38BDF8"}} onClick={project1}>open project</button>
        </div>
        
      </div>

      {/*tertiary 2nd container*/ }
      <div className="container" style={{background:`${props.mode==="dark"?"#1E293B":"white"}`, display:"grid", gridTemplateColumns:"1fr 2fr",padding:"20px",borderRadius:"10px"}}>
       <div className="container" style={{background:`${props.mode==="dark"?"#1E293B":"#f5f5f5"}`,height:"125px",width:"120px",borderRadius:"10px"}}>
          <img src={projects} alt="project" height={100} width={100} justifyContent={"center"}/>
        </div>
        <div className="container" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start",gap:"1  px"}}>
          <h2>Drug Management System</h2>
          <p>python</p>
          <button className='btn' style={{background:"transprent",color:`${props.mode==="dark"?"#ffffffff":"#1E293B"}`,border:" 1px solid #38BDF8"}} onClick={project2}>open project</button>
        </div>
        </div>
    </div>
  </div>
  )
}
