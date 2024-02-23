import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import '../admin/addTrainings.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize'
export default function AskAdmin() {

    const [query, setQuery] = useState(null);
    const [sapid, setSapid] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/askAdmin", {
            method: "GET",
            headers: {
                "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then((resp) => {
            if (!resp.ok) window.location = '/login'
            resp.json().then((data) => {
                setSapid(data.sapid.sapid);
              
            });

        })

    }, []);

    return (

        <div className='card-parent' style={{ marginTop: "8em" }}>
            <h2 id='training-header'>Have a Doubt? <br /> Ask your query here</h2>
            <div className="card">
                <TextField fullWidth label={sapid} id="fullWidth" disabled /> <br />
                <TextareaAutosize
                    maxRows={4}
                    minRows={4}
                    className='txtarea'
                    aria-label="maximum height"
                    placeholder="Ask your query..."
                    onChange={(e)=>{setQuery(e.target.value)}}
                /> <br />
                <Button variant="contained" onClick={() => {

                    fetch('http://localhost:3000/askAdmin', {
                        method: "POST",
                        body: JSON.stringify({
                            sapid,
                            query
                        }),
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "bearer " + localStorage.getItem("token"),
                        }
                    }).then((resp) => {
                        if (resp.ok) window.location = '/askAdmin'
                        resp.json().then((data) => {
                        });
                    })
                }} >SEND QUERY</Button>
            </div>
        </div>

    )
}