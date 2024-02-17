import campusPic from "../src/assets/campus.jpg"
import uniPic from "../src/assets/nmims-university-logo.png"
import './adminlogin.css'
import eyeOff from "../src/assets/eye off.png"
import eyeOn from "../src/assets/eye on.png"
import { useState } from "react"

export default function Admin_Login() {
    const [eyeImg, seteyeImg] = useState(eyeOff);
    const [passType, setPassType] = useState("password");
    const [id, setId] = useState(null);
    const [pass, setPass] = useState(null);


    const viewPass = () => {
        seteyeImg(eyeImg == eyeOff ? eyeOn : eyeOff);
        setPassType(eyeImg == eyeOff ? "text" : "password")
    }
    return (
        <div className="admin-main">
            <div className="admin-left">

                <div className="admin-left-img">
                    <img src={campusPic} className="admin-campus_img" height="100%" />
                </div>

                <div className="admin-left-content">
                    <h2 className="admin-left-h1"> Welcome to NMIMS Placement Committee </h2>
                    <p className="admin-left-p">Sign in by entering your ADMIN ID</p>
                </div>

            </div>

            <div className="admin-right">

                <div className="admin-r-content">
                    <div className="admin-nmims-logo">
                        <div className="admin-img">
                            <img src={uniPic} width="50px" />
                        </div>
                        <div className="admin-right-h1">
                            <h1>ADMIN LOGIN</h1>
                        </div>
                    </div>



                    <div className="admin-form">
                        <div className="admin-sapid">
                            <p className="admin-form-head">ADMIN ID</p>
                            <input type="text" className="admin-inputs" name="username" id="username" placeholder="xxxxxx" maxLength="11" onChange ={(e)=>{setId(e.target.value)}} />
                        </div>


                        <div className="admin-password">
                            <p className="admin-form-head">PASSWORD</p>
                            <div className="admin-input">
                                <input type={passType} className="admin-inputs" name="password" placeholder="**********" id="password" 
                                onChange ={(e)=>{setPass(e.target.value)}} />
                                <img className="admin-eye" src={eyeImg} width="25px" id="eye-off" onClick={viewPass} />
                            </div>
                            <p className="admin-text-forgot">Forgot password?</p>
                        </div>

                        <div className="admin-button">
                            <button type="submit" name="login-button" style={{ cursor: "pointer" }} onClick = {() => {

                                fetch("http://localhost:3000/admin/login", {
                                    method: "POST",
                                    body: JSON.stringify({
                                        username: id,
                                        password: pass
                                    }),
                                    headers: {
                                        "Content-type": "application/json"
                                    }
                                }).then((resp) => {
                                    resp.json().then((data) => {
                                        localStorage.setItem("token", data);
                                        if (data) {
                                            console.log(data.status)
                                            window.location = '/admin/home'
                                        }
                                    });

                                })

                            }}> LOGIN </button>
                    </div>
                </div>

            </div>
        </div>
        </div >
    )
}
