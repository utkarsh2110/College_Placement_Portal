
import { useEffect } from 'react'
import "./profile.css"
import profImg from "./assets/sprofile.png"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Profile(){

    const [sapid, setSapid] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");


    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:3000/profile",{
            method: "GET",
            headers: {
               "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then((resp)=>{
            resp.json().then((data)=>{
                    console.log(data)
                    setSapid(data.sapid.sapid);
                    setFname(data.sapid.firstName);
                    setLname(data.sapid.lastName);
                    setEmail(data.sapid.email);
                
            });
            
        })

    },[]);


return (
        <div className="profile--main">
            <div className="profile--img">
                <img src={profImg} height="150px"/>
            </div>
            <div>
                <h1>{fname + " " + lname}</h1>
            </div>

            <div className="profile--details">
                <div className="profile--sapid profile--detail">
                    <p>SAP ID: </p>&nbsp;&nbsp;
                    <p>{sapid}</p>
                </div>
                
                <div className="profile--programme profile--detail">
                    <p>Programme: </p>&nbsp;&nbsp;
                    <p>B.Tech Computer Science</p>
                </div>


                <div className="profile--email profile--detail">
                    <p>Email: </p>&nbsp;&nbsp;
                    <p>{email}</p>
                </div>
                
                <div className="profile--contact profile--detail">
                    <p>Mobile: </p>&nbsp;&nbsp;
                    <p> 9882382238</p>
                </div>

                <div className="profile--father profile--detail">
                    <p>Father's Name: </p>&nbsp;&nbsp;
                    <p>Mr. {" " + lname}</p>
                </div>

                <div className="profile--mother profile--detail">
                    <p>Mother's Name: </p>&nbsp;&nbsp;
                    <p>Mrs. {" " + lname}</p>
                </div>
            </div>

            <div className="profile--btn">
                <button className="profile--btn1">Update Profile</button>
                <button className="profile--btn2" onClick={()=>{navigate('/home')}}>Back</button>
            </div>



        </div>
)}
