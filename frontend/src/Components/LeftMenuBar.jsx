import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LeftMenuBar() {
    const navigate = useNavigate();
    const location = window.location.pathname;
    if(location == '/home' || location == '/cvbuilder' || location == '/docs' || location == "/preparation" || location == "/changePass" || location == "/profile"){
    return (
        <div className="menu">
            <div className="index menuItem"   onClick={()=>{navigate('/home');}}>Home</div>
            <div className="CVBulider menuItem"  onClick={()=>{navigate('/cvbuilder')}}>CV Builder</div>
            <div className="Docs menuItem" onClick={()=>{navigate('/docs')}}>Documents</div>
            <div className="prep menuItem" onClick={()=>{navigate('/preparation')}} >Preparation</div>
        </div>
    )
    }
}