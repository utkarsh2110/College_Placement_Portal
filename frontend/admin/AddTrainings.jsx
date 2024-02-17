import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './addTrainings.css'

export default function AddTrainings() {
    return (

        <div className='card-parent'>
            <h2 id='training-header'>Add Training details</h2>
            <div className="card">
                <TextField id="outlined-basic" label="Title" variant="outlined" /> <br />
                <TextField id="outlined-basic" label="Date" variant="outlined" /> <br />
                <TextField id="outlined-basic" label="Venue" variant="outlined" /> <br />
                <TextField id="outlined-basic" label="Time" variant="outlined" /><br />
                <TextField id="outlined-basic" label="Description" variant="outlined" /> <br />
                <Button variant="contained">Add</Button>
            </div>
        </div>



    )
}