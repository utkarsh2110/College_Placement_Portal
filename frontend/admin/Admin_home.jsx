import '../src/home.css'
import { useNavigate } from 'react-router-dom';

export default function Admin_home(){
    const navigate = useNavigate();
    return(

    <div className="main">
        <div className="content">
           

            <div className="admin-content--right">

                <div className="trainings">
                    <h2 className="training-heading">Upcoming Companies</h2>
                    <div className="training-template">
                        <h3 className="title">Infosys</h3>
                        <div className="venue">
                            <span className="venue" style={{color: "black"}}>Students applied: X</span> <br/>
                            <span className="time" style={{color: "black"}}>Deadline: </span>
                        </div> 
                        <button className = "admin-details-btn">View Details</button>
                    </div>

                    <div className="training-template">
                        <h3 className="title">TCS</h3>
                        <div className="venue">
                            <span className="venue" style={{color: "black"}}>Students applied: X </span> <br/>

                            <span className="time" style={{color: "black"}}>Deadline: </span>
                        </div>
                        <button  className = "admin-details-btn">View Details</button>
                    </div>

                </div>



            </div>
        </div>

        
    </div>
)}