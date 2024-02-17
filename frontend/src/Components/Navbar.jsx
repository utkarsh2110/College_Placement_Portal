import nmimsLogo from "../assets/nmims-logo.png"
import gearIcon from "../assets/gear.png"
import logoutIcon from "../assets/logout.png"

import "./navbar.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar"

export default function Navbar() {
    const navigate = useNavigate();
    
    
    const [hoverMenu , setHoverMenu]  = useState("none");
    const menuHover = ()=>{
        setHoverMenu(hoverMenu=="none"? "block": "none");
    }

    const location = window.location.pathname;
    if(location == '/home' || location == '/cvbuilder' || location == '/docs' || location == "/preparation" || location == "/profile" || location == '/changePass' || location.includes('/admin') && location != ('/admin/login'))
    {
        if(location.includes('/admin') && location != ('/admin/login'))
        {
            return (
            <div className="titlebar">

            <div className="tbar-left">
                <div className="burger-btn" >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>

                </div>

                <div className="nmims-logo">
                    <img src= {nmimsLogo} height="40px" onClick={()=>{navigate('/')}} style={{cursor: "pointer"}}/>
                </div>
            </div>

            <div className="tbar-right">

                <div className="logout" onClick={()=>{localStorage.setItem("token", ""); window.location='/'}}>
                     <img src={logoutIcon} height="25px" alt="logouticon" />
                    <p>LOGOUT</p>
                </div>

            </div>

        </div>
    )

}




    else{
    return (
        <div className="titlebar">
            <div className="tbar-left">
                <div className="burger-btn" >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>

                </div>

                <div className="nmims-logo">
                    <img src= {nmimsLogo} height="40px" onClick={()=>{navigate('/')}} style={{cursor: "pointer"}}/>
                </div>
            </div>

            <div className="tbar-right">

                <div className="profile" onClick={menuHover}>
                    {/* <img src= {gearIcon} height="25px"/>
                    <p> SETTINGS</p> */}
                    <Avatar sx={{bgcolor: "#8f2e2d"}} children={localStorage.getItem("init")}/>

                    <div className="hoverMenu" style={{display: hoverMenu, zIndex: 100}} >
                        <ul className="nav-ul">
                            <li className="nav-li" onClick={()=>{navigate('/profile')}}>View Profile</li>
                            <li className="nav-li" onClick={()=>{navigate('/changePass')}}>Change Password</li>
                            <li onClick={()=>{
                                localStorage.setItem("token", "");
                                window.location='/'
                                localStorage.setItem("init", "")
                                }
                            }><div className="logout">
                                    <img src={logoutIcon} height="25px" alt="logouticon" />
                                    <p>Logout</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>

        </div>
    )

}
    }
}