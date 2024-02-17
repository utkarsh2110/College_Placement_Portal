import { useState } from "react";
import Chatbot from "./chatbot"
import "./docs.css"
import { useEffect } from "react";

export default function Docs(){
    const [file, setFile] = useState(null)
    const formData = new FormData();
    formData.append('file', file);
    
       
    useEffect(()=>{
        fetch("http://localhost:3000/docs",{
            method: "GET",
            headers: {
               "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then((resp)=>{
            if(!resp.ok) window.location = '/login'
            else{
            resp.json().then((data)=>{
                if(data.forbidden){
                    window.location('/login')
                }
            })
            };
            
        })

    },[]);
    return (
            <div className="docs-content--right">

                <div className="headings">
                    <h2> Upload Scanned Documents </h2> 
                    <p className="info">Only pdf/jpeg/jpg/png formats are allowed</p>
                </div>

                <div className="cv">
                    <h2 className="headings">CV / Resume</h2>

                    <div className="btn">
                        <form encType="multipart/form-data" className="btn">
                        <input type="file" id="Upload" name="cv" accept=".pdf" onChange={(e)=>setFile(e.target.value)}/>
                        <input type="submit" value="UPLOAD" className="upload-btn" onClick={()=>{

                            fetch('http://localhost:3000/docs', {
                                method: "POST",
                                body: formData,
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                    "Authorization": "bearer " + localStorage.getItem("token")
                                }
                            }).then((resp)=>{
                                resp.json().then((data)=>{
                                    console.log(data)
                                });

                            });
                        }}/>
                        </form>
                    </div>
                   
                </div>
                <div className="Last-Semester-Marksheet">
                    <h2 className="headings">Last Semester Marksheet</h2>
                    <div className="btn">
                        <input type="file" id="Upload" accept=".pdf"/>
                        <input type="button" className="upload-btn" value="UPLOAD"/>
                    </div>
                   
                </div>

                <div className="ssc">
                    <h2 className="headings">12th Marksheet</h2>
                    <div className="btn">
                        <input type="file" id="Upload" accept=".pdf"/>
                        <input type="button" className="upload-btn" value="UPLOAD"/>
                    </div>
                    
                </div>

                <div className="hsc">
                    <h2 className="headings">10th Marksheet</h2>
                    <div className="btn">
                        <input type="file" id="Upload" accept=".pdf"/>
                        <input type="button" className="upload-btn" value="UPLOAD"/>
                    </div>  
                </div>
                <div className="home-chatbot"><Chatbot/></div>
            </div>
)}