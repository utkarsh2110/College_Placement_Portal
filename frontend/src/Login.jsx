import { useState } from "react"
import campusImg from "./assets/campus.jpg"
import uniLogo from "./assets/nmims-university-logo.png"
import eyeOff from "./assets/eye off.png"
import eyeOn from "./assets/eye on.png"
import "./Login.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'



export default function Login() {
    const [eyeImg, seteyeImg] = useState(eyeOff);
    const [passType, setPassType] = useState("password");

    const [sapid, setEmail] = useState(null);
    const [pass, setPass] = useState(null);


    const viewPass = () => {
        seteyeImg(eyeImg == eyeOff ? eyeOn : eyeOff);
        setPassType(eyeImg == eyeOff ? "text" : "password")
    }

    return (
        <div className="login-main" >
            <div className="login-left">
                <div className="login-left-img">
                    <img src={campusImg} className="login-campus_img" height="100%" />
                </div>

                <div className="login-left-content">
                    <h2 className="login-left-h1"> Welcome to NMIMS <br /> Placement Committee</h2> <br /><br /><br />
                    <p className="login-left-p">Sign in by entering your college id</p>
                </div>

            </div>

            <div className="login-right" >
                <div className="login-nmims-logo">
                    <img src={uniLogo} width="50px" />
                    <h1>LOGIN</h1>
                </div>
                <div className="login-sapid">
                    <TextField fullWidth label="SAPID" id="fullWidth" onChange={(e) => { setEmail(e.target.value) }} />
                </div>


                <div className="login-password">

                    <div className="login-input">
                        <TextField fullWidth
                            id="outlined-password-input"
                            label="Password"
                            type={passType}
                            autoComplete="current-password"
                            onChange={(e) => { setPass(e.target.value) }}
                        />
                        <img className="login-eye" src={eyeImg} width="25px" onClick={viewPass} id="eye-btn" style={{ cursor: " pointer" }} />
                    </div>
                    <p className="login-text-forgot">Forgot password?</p>
                </div>

                <div className="login-button">
                    <Button variant="contained" id="btn" size="medium"
                        onClick={() => {

                            fetch("http://localhost:3000/login", {
                                method: "POST",
                                body: JSON.stringify({
                                    sapid,
                                    pass
                                }),
                                headers: {
                                    "Content-type": "application/json"
                                }
                            }).then((resp) => {
                                resp.json().then((data) => {
                                    localStorage.setItem("token", data);
                                    if (data) {
                                        window.location = '/home'
                                    }
                                    else{
                                        window.location = '/admin/login'
                                    }
                                });

                            })

                        }
                        }




                    >LOGIN</Button>
                </div>
            </div>

        </div>

    )
}