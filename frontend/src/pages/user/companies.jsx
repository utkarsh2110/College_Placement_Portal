import { useEffect } from "react";
import '../../styles/user/prep.css'
import { useState } from "react";
export default function Companies(){
    const [companies, setCompanies] = useState([])
    const [sapid, setSapid] = useState(null);
    const [btnText, setBtnText] = useState("Apply")

    useEffect(()=>{
        fetch("http://localhost:3000/companies",{
            method: "GET",
            headers: {
               "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then((resp)=>{
            if(!resp.ok) window.location = '/login'
            else{
            resp.json().then((data)=>{
                setCompanies(data.companies)
                setSapid(data.sapid)

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
                            companies.map(e=>{
                                return(
                                    <div className="prep-title" >
                                    <h1 style={{marginBottom: "10px"}}>{e.name} | {e.title}</h1>
                                    <p style={{marginBottom: "10px"}}>{e.desc} </p> 
                                    <span style={{fontWeight: "bold", color: "black", marginBottom: "10px"}}>CTC: <p style={{ display: "inline",fontWeight: "100"}}>{e.ctc} LPA</p></span>
                                    <span style={{fontWeight: "bold", color: "black",display: "block", marginTop: "10px",marginBottom: "10px"}}>Skills: <p style={{ display: "inline", fontWeight: "100"}}>{e.skills}</p></span>
                                    <span style={{fontWeight: "bold", color: "black",display: "block", marginTop: "10px",marginBottom: "10px"}}>Deadline: <p style={{ display: "inline", fontWeight: "100"}}>{e.deadline}</p></span>
                                    <span style={{fontWeight: "bold", color: "black",display: "block", marginTop: "10px",marginBottom: "10px"}}>Additional Info: <p style={{ display: "inline", fontWeight: "100"}}>{e.addlInfo}</p></span>
                                    
                                    <button style={{width: "100%", height: "35px", fontSize: '18px', background: "#8F2e23", color: "white", border: "#8F2e23", borderRadius: "7px"}} onClick={()=>{

                                    fetch('http:localhost:3000/companies', {
                                        method: "PATCH",
                                        headers: {
                                            "Content-Type": "application/json",
                                            "Authorization": "bearer " + localStorage.getItem("token"),
                                        },
                                        body: {
                                            sapid,
                                        }
                                    }).then((resp)=>{
                                        resp.json().then((data)=>{
                                            setBtnText("Applied")
                                            
                                        })
                                        });
                                        
                                    }}      
                                  >{btnText}
                                    </button>
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