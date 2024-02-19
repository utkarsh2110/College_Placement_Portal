import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import './addTrainings.css'
import { useState } from 'react';

export default function AddTrainings() {
   
        const [title, setTitle]= useState(null);
        const [date, setDate]= useState(null);
        const [venue, setVenue]= useState(null);
        const [time, setTime]= useState(null);
        const [desc, setDesc]= useState(null);

        return (

        <div className='card-parent'>
            <h2 id='training-header'>Add Training details</h2>
            <div className="card">
                <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e)=>setTitle(e.target.value)}/> <br />
                <TextField id="outlined-basic" label="Date" variant="outlined" onChange={(e)=>setDate(e.target.value)} /> <br />
                <TextField id="outlined-basic" label="Venue" variant="outlined" onChange={(e)=>setVenue(e.target.value)}/> <br />
                <TextField id="outlined-basic" label="Time" variant="outlined" onChange={(e)=>setTime(e.target.value)}/><br />
                <TextField id="outlined-basic" label="Description" variant="outlined" onChange={(e)=>setDesc(e.target.value)}/> <br />
                <Button variant="contained" onClick={()=>{
                    
                    fetch('http://localhost:3000/admin/trainings', {
                        method: "POST",
                        body: JSON.stringify({
                            title,
                            date,
                            venue,
                            time,
                            desc
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((resp)=>{
                        if(resp.ok) window.location = '/admin/trainings'
                        resp.json().then((data) => {
                        });
                })
            }} >Add</Button>
            </div>
        </div>

    )
}