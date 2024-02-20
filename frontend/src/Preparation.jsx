import { useEffect } from "react";
import './prep.css'
import { useState } from "react";
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
    return (
        <>
        
        <div className="prep-box">
            {
                    <div className="prep-template">
                        {
                            material.map(e=>{
                                return(
                                    <div className="prep-title">
                                    <h1>Prep Material for {e.company}</h1>
                                    <p>Role: {e.role}</p>
                                    <p>Description: {e.desc} </p>
                                    <p>Type: {e.type} </p>
                                    <p>URL: <a href={e.url}>Click Here!</a></p>
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