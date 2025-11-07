import React from 'react'
import react from './pic/react.png'
import js from './pic/js2.png'
import python from './pic/pythine.png'
import dotnet from './pic/.net.png'
import tableau from './pic/tableau.png'
import cisco from './pic/cisco.png'
export default function Skills(props) {
  return (
    //primary container
    <div className="container " style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(350px,1fr))",paddingTop:100,gap:"10px",color:`${props.mode==="dark"?"white":"#0F172A"}`}}>
      {/*secondary 1st container*/ }
      <div className='container'><h1>My Skills</h1></div>
      {/*secondary 2nd container*/ }
      <div className='container' style={{ height:"auto" ,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:"10px",}}> 
        <div className="container " style={{background:`${props.mode==="dark"?"#1E293B":"white"}`,display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px",height:"150px",boxShadow:"0 0px 5px #1E293B, 0 0px 10px #1E293B"}}>
          <img src={react} alt="" className="img" height={70} width={70} style={{filter:"drop-shadow(0px 0px 30px rgba(56,189,248,0.5))"}}/>
          <p>React</p>
        </div>
        <div className="container " style={{background:`${props.mode==="dark"?"#1E293B":"white"}`,display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px",height:"150px",boxShadow:"0 0px 5px #1E293B, 0 0px 10px #1E293B"}}>
          <img src={js} alt="" className="img" height={70} width={70}/>
          <p>JS</p>
        </div>
        <div className="container " style={{background:`${props.mode==="dark"?"#1E293B":"white"}`,display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px",height:"150px",boxShadow:"0 0px 5px #1E293B, 0 0px 10px #1E293B"}}>
          <img src={python} alt="" className="img" height={70} width={70}/>
          <p>Python</p>
        </div>
        <div className="container " style={{background:`${props.mode==="dark"?"#1E293B":"white"}`,display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px",height:"150px",boxShadow:"0 0px 5px #1E293B, 0 0px 10px #1E293B"}}>
          <img src={dotnet} alt="" className="img" height={70} width={70}/>
          <p>.Net</p>
        </div>
        <div className="container " style={{background:`${props.mode==="dark"?"#1E293B":"white"}`,display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px",height:"150px",boxShadow:"0 0px 5px #1E293B, 0 0px 10px #1E293B" }}>
          <img src={tableau} alt="" className="img" height={70} width={70}  />
          <p>Tableau</p>
        </div>
        <div className="container " style={{background:`${props.mode==="dark"?"#1E293B":"white"}`,display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px",height:"150px",boxShadow:"0 0px 5px #1E293B, 0 0px 10px #1E293B"}}>
          <img src={cisco} alt="" className="img" height={70} width={70} style={{}}/>
          <p>Networking</p>
        </div>
      </div>
    </div>
  )
}
