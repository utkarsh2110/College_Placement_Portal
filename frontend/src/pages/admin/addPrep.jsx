import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import '../../styles/admin/addTrainings.css'
import { useState } from 'react';

export default function AddPrep() {

    const [company, setCompany] = useState(null);
    const [role, setRole] = useState(null);
    const [desc, setDesc] = useState(null);
    const [type, setType] = useState(null);
    const [url, setURL] = useState(null);

    return (

        <div className='card-parent'>
            <h2 id='training-header'>Add Preparation Material</h2>
            <div className="card">
                <TextField id="outlined-basic" label="Company" variant="outlined" onChange={(e) => setCompany(e.target.value)} /> <br />
                <TextField id="outlined-basic" label="Role" variant="outlined" onChange={(e) => setRole(e.target.value)} /> <br />
                <TextField id="outlined-basic" label="Description" variant="outlined" onChange={(e) => setDesc(e.target.value)} /> <br />
                <TextField id="outlined-basic" label="Material Type: {Ex: mock tests, interview tips}" variant="outlined" onChange={(e) => setType(e.target.value)} /><br />
                <TextField id="outlined-basic" label="Material URL" variant="outlined" onChange={(e) => setURL(e.target.value)} /> <br />
                <Button variant="contained" onClick={() => {

                    fetch('http://localhost:3000/admin/addPrep', {
                        method: "POST",
                        body: JSON.stringify({
                            company,
                            role,
                            desc,
                            type,
                            url
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((resp) => {
                        if(resp.ok) window.location = '/admin/preparation'
                        resp.json().then((data) => {
                            console.log(data)
                        });
                    })
                }} >Add</Button>
            </div>
        </div>
)}