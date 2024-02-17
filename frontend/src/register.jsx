import "./reg1.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import campusImg from "./assets/campus.jpg"
import uniLogo from "./assets/nmims-university-logo.png"
import eyeOff from "./assets/eye off.png"
import eyeOn from "./assets/eye on.png"

export default function Register() {
    const navigate = useNavigate();
    const [eyeImg, seteyeImg] = useState(eyeOff);
    const [passType, setPassType] = useState("password");
    const viewPass = () => {
        seteyeImg(eyeImg == eyeOff ? eyeOn : eyeOff);
        setPassType(eyeImg == eyeOff ? "text" : "password")
    }

    const [sapid, setSap] = useState(null);
    const [pass, setPass] = useState(null);
    const [email, setEmail] = useState(null);
    const [fname, setFname] = useState(null);
    const [lname, setLname] = useState(null);

    return (
        
        <div className="reg-main">
            <div className="reg-left">
                <div className="reg-left-img">
                    <img src={campusImg} className="reg-campus_img" height="100%" />
                </div>
                <div className="reg-left-content">
                    <h2 className="reg-left-h1"> Welcome to NMIMS<br /> Placement Committee</h2> <br />
                    <p className="reg-left-p">Sign up for Placements</p> <br />
                    <p className="reg-left-p">Already Registered?</p>  <br />
                    <button className="reg-login-btn" onClick={() => { navigate('/login') }}>Login</button>
                </div>
            </div>

            <div className="reg-right">
                <div className="reg-right-header">
                    <div className="reg-img">
                        <img src={uniLogo} width="50px" />
                    </div>
                    <div className="reg-right-h1">
                        <h1>SIGNUP</h1>
                    </div>
                </div>


                <div className="reg-name">
                    <div className="reg-fname">
                        <p className="reg-form-head">FIRST NAME</p>
                        <input type="text" className="reg-input" name="fname" id="fname" placeholder="John" 
                        onChange={(e)=>{setFname(e.target.value)}}/>
                    </div>
                    <div className="reg-lname">
                        <p className="reg-form-head">LAST NAME</p>
                        <input type="text" className="reg-input" name="lname" id="lname" placeholder="Doe" 
                        onChange={(e)=>{setLname(e.target.value)}}/>
                    </div>
                </div>
                <div className="reg-reg-sapid">
                    <p className="reg-form-head">SAP ID</p>
                    <input type="tel" className="reg-input" name="sapid" id="sapid" placeholder="70362019470" maxLength="11" onChange={(e)=>{setSap(e.target.value)}} />
                </div>
                <div className="reg-email">
                    <p className="reg-form-head">EMAIL</p>
                    <input type="email" className="reg-input" name="email" id="email" placeholder="xyz@nmims.edu.in" onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="reg-password">
                    <p className="reg-form-head">PASSWORD</p>
                    <div className="reg-input-div">
                        <input type="password" className="reg-input" name="pass" placeholder="**********" id="pass" onChange={(e)=>{setPass(e.target.value)}}/>
                        <img className="reg-eye" src={eyeImg} width="25px" onClick={viewPass}
                            id="eye-off" style={{ cursor: "pointer" }} />
                    </div>
                </div>
                <div className="reg-cpassword">
                    <p className="reg-form-head">CONFIRM PASSWORD</p>
                    <div className="reg-input-div">
                        <input type={passType} name="cpass" className="reg-input" placeholder="**********" id="cpass" />
                        <img className="reg-eye" src={eyeImg} width="25px" onClick={viewPass}
                            id="eye-off" style={{ cursor: "pointer" }} />
                    </div>
                </div>
                <div className="reg-button">
                    <button type="submit" name="submit" style={{ cursor: "pointer" }} onClick={() => {
                        
                        fetch("http://localhost:3000/register", {
                            method: "POST",
                            body: JSON.stringify({
                                sapid,
                                pass,
                                email,
                                fname,
                                lname
                            }),
                            headers: {
                                "Content-type": "application/json"
                            }
                        }).then((resp) => {
                            resp.json().then((data) => {
                                if (data) {
                                    window.location = '/login'
                                }
                            });

                        })

                    }
                    }
                    > SIGN UP </button>
            </div>
        </div>

        </div >

    )
}
