import './changePass.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import eyeOff from "./assets/eye off.png"
import eyeOn from "./assets/eye on.png"
import { useState } from "react"
import LockResetIcon from '@mui/icons-material/LockReset';
import { useEffect } from 'react';

export default function ChangePass() {

    const [eyeImg, seteyeImg] = useState(eyeOff);
    const [passType1, setPassType1] = useState("password");
    const [passType2, setPassType2] = useState("password");
    const [passType3, setPassType3] = useState("password");


    const [currPass, setCurrent] = useState(null);
    const [newPass, setNewPass] = useState(null);
    const [CnfnewPass, setCnfPass] = useState(null);
    const [sapid, setEmail] = useState(null);



    useEffect(() => {
        fetch("http://localhost:3000/changePass", {
            method: "GET",
            headers: {
                "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then((resp) => {
            resp.json().then((data) => {
                setEmail(data.sapid);
            });

        })

    }, []);

    return (
        <>
            <div className="changep-main" >
                <div className="heading">
                    <img src={LockResetIcon} alt="" width="20px" />
                    <h2 className='changePass-h2'> Password Reset</h2>
                </div>
                <div className="changePass-sapid">
                    <TextField fullWidth label={sapid} id="fullWidth" disabled />
                </div>
                <div className="cp-input">
                    <TextField fullWidth
                        id="outlined-password-input"
                        label="Current Password"
                        type={passType1}
                        autoComplete="current-password"
                        onChange={(e) => { setCurrent(e.target.value) }}
                    />
                    <img className="eye" src={eyeImg} width="25px" id="cp-eye-btn" style={{ cursor: " pointer" }} />
                </div>
                <div className="cp-input">
                    <TextField fullWidth
                        id="outlined-newpassword-input"
                        label="New Password"
                        type={passType2}
                        autoComplete="current-password"
                        onChange={(e) => { setNewPass(e.target.value) }}
                    />
                    <img className="eye" src={eyeImg} width="25px" id="cp-eye-btn" style={{ cursor: " pointer" }} />
                </div>
                <div className="cp-input">
                    <TextField fullWidth
                        id="outlined-cnfpassword-input"
                        label="Confirm New Password"
                        type={passType2}
                        autoComplete="current-password"
                        onChange={(e) => { setCnfPass(e.target.value) }}
                    />
                    <img className="eye" src={eyeImg} width="25px" id="cp-eye-btn" style={{ cursor: " pointer" }} />
                </div>
                <div className="button">
                    <Button variant="contained" id="changePass-btn" size="medium"
                        onClick={() => {

                            if (newPass == CnfnewPass) {

                                fetch("http://localhost:3000/changePass", {
                                    method: "PUT",
                                    body: JSON.stringify({
                                        sapid,
                                        currPass,
                                        newPass
                                    }),
                                    headers: {
                                        "Content-type": "application/json",
                                        "Authorization": "Bearer " + localStorage.getItem("token")
                                    }
                                }).then((resp) => {
                                    resp.json().then((data) => {
                                        if (data) {
                                            window.location = '/home'
                                        }
                                    });

                                })
                            }

                        }
                        }
                    >Change Password</Button>
                </div>
            </div>
        </>
    )
}