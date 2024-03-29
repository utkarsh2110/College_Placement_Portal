import { useEffect } from "react";
import '../../styles/user/prep.css'
import { useState } from "react";
import linkImg from '../../assets/externallink.png'
export default function Preparation(){
    const [material, setMaterial] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/preparation",{
            method: "GET",
            headers: {
               "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then((resp)=>{
            if(!resp.ok) window.location = '/login'
            else{
            resp.json().then((data)=>{
                setMaterial(data.materials)
            })
            };
            
        })

    },[]);
    const handleClick = (url)=>{
        window.location = url;
    }
    return (
        <>
        
        <div className="prep-box">
            {
                    <div className="prep-template">
                        {
                            material.map(e=>{
                                return(
                                    <div className="prep-title" >
                                    <h1 style={{marginBottom: "10px"}}>Prep Material for {e.company}</h1>
                                    <p style={{marginBottom: "10px"}}>{e.desc} </p> 
                                    <span style={{fontWeight: "bold", color: "black", marginBottom: "10px"}}>Role: <p style={{ display: "inline",fontWeight: "100"}}>{e.role}</p></span>
                                    <span style={{fontWeight: "bold", color: "black",display: "block", marginTop: "10px",marginBottom: "10px"}}>Type: <p style={{ display: "inline", fontWeight: "100"}}>{e.type}</p></span>

                                    <button style={{width: "100%", height: "35px", fontSize: '18px', background: "#8F2e23", color: "white", border: "#8F2e23", borderRadius: "7px"}} onClick={()=>handleClick(e.url)}>Link
                                    <img src={linkImg} alt="" style={{marginLeft: "10px", width: "18px"}}/></button>
                                </div>
                                )
                            })
                        }
                      

                    </div>
            }   

        </div>
    
        </>
    )
}