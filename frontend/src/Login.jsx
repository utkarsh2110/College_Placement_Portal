import { useState } from "react"
import campusImg from "./assets/campus.jpg"
import uniLogo from "./assets/nmims-university-logo.png"
import eyeOff from "./assets/eye off.png"
import eyeOn from "./assets/eye on.png"
import "./Login.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import { colors } from "@mui/material"
import Navbar from "./Components/Navbar"


export default function Login() {
    const [eyeImg, seteyeImg] = useState(eyeOff);
    const [passType, setPassType] = useState("password");

    const [sapid, setEmail] = useState(null);
    const [pass, setPass] = useState(null);

    const [Btnvariant, setBtnVariant] = useState("contained");
    const [recoverPass, setPassRecovery] = useState(null);

    const viewPass = () => {
        seteyeImg(eyeImg == eyeOff ? eyeOn : eyeOff);
        setPassType(eyeImg == eyeOff ? "text" : "password")
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',

        p: 4,
    };

    const [textCNF, setTextCNF] = useState("none")
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setTextCNF("none");
        setBtnVariant("contained")
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
                    <p className="login-text-forgot" onClick={handleOpen} style={{cursor: "pointer"}}>Forgot password?</p>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <div className="modal-title" style={{ display: "flex", gap: '2em', alignItems: "center", marginBottom: '2em' }}>
                                <img src={uniLogo} alt="" width="40px" />
                                <h1 style={{ fontSize: 28 }}>Password Reset</h1>
                            </div>

                            <TextField fullWidth
                                id="outlined-password-input"
                                label="SAPID"

                                onChange={(e) => {setPassRecovery(e.target.value) }}
                            /> <br /><br />
                            <Button  variant={Btnvariant} id="modal-btn" size="large" onClick={() => {

                                fetch("http://localhost:3000/recoverPass", {
                                    method: "POST",
                                    body: JSON.stringify({
                                        sapid: recoverPass,
                                    }),
                                    headers: {
                                        "Content-type": "application/json"
                                    }
                                }).then((resp) => {
                                    resp.json().then((data, err) => {
                                        if (data) {
                                            console.log(data)
                                            setBtnVariant("contained-disabled");
                                            setTextCNF("block");
                                            setTimeout(()=>{
                                                handleClose();
                                            },4000)

                                        }
                                        else
                                            console.log(err);
                                    });

                                })

                            }
                            }>Send Password</Button><br /><br />
                            <p style={{color: "green", fontWeight: "bold", display: textCNF}}>If you're registered, the password will be sent to your registered email</p>
                        </Box>
                    </Modal>
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
                                    
                                    localStorage.setItem("token", data.data);
                                    localStorage.setItem("init", data.init);
                                    if (data) {
                                        window.location='/home';
                                    }
                                    else {
                                        window.location = '/login'
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