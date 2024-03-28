import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import '../../styles/admin/addCompanies.css'
import { useState } from 'react';

export default function addCompanies() {

    const [title, setTitle] = useState(null);
    const [name, setName] = useState(null);
    const [jd, setJD] = useState(null);
    const [skills, setSkills] = useState(null);
    const [salary, setSalary] = useState(null);
    const [deadline, setDeadline] = useState(null);
    const [addtl, setAddl] = useState(null);
    

    return (

        <div className='card-parent'>
            <h2 id='training-header'>Add Company details</h2>
            <div className="card">
                <div className="card-div-1">
                    <TextField id="outlined-basic" label="Job Title" variant="outlined" 
                    onChange={(e) => setTitle(e.target.value)} /> <br />
                    <TextField id="outlined-basic" label="Company Name" variant="outlined" 
                    onChange={(e) => setName(e.target.value)} /> <br />
                </div>
                <TextField id="outlined-basic" label="Job Description" variant="outlined" 
                onChange={(e) => setJD(e.target.value)} /> <br />
                <TextField id="outlined-basic" label="Skills Required" variant="outlined" 
                onChange={(e) => setSkills(e.target.value)} /><br />
                <TextField id="outlined-basic" label="Salary/Compensation" variant="outlined" 
                onChange={(e) => setSalary(e.target.value)} /> <br />
                <TextField id="outlined-basic" label="Application Deadline" variant="outlined" 
                onChange={(e) => setDeadline(e.target.value)} /> <br />
                <TextField id="outlined-basic" label="Additional Info." variant="outlined" 
                onChange={(e) => setAddl(e.target.value)} /> <br />

                <Button variant="contained" onClick={() => {

                    fetch('http://localhost:3000/admin/companies', {
                        method: "POST",
                        body: JSON.stringify({
                            title,
                            name,
                            jd,
                            skills,
                            salary,
                            deadline,
                            addtl
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((resp) => {
                        if (resp.ok) window.location = '/admin/companies'
                        resp.json().then((data) => {
                        });
                    })
                }} >Add</Button>
            </div>
        </div>

    )
}