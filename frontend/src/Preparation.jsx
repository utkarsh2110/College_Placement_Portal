


import { useEffect } from "react";
export default function Preparation(){
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

            })
            };
            
        })

    },[]);
    return (
        <></>
    )
}