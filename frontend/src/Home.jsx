
import { useEffect, useState } from 'react'
import './home.css'
import Trainings from './Components/trainings';


export default function Home() {
    const [training, setTraining] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/home",{
            method: "GET",
            headers: {
               "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then((resp)=>{
            if(!resp.ok) window.location = './login'
            else{
            resp.json().then((data)=>{
                    setTraining(data.trainings)
                })
            ;}    
        })

    },[]);
    
    

    return(

            <div className="content--right">

                <div className="update">
                    <h2>UPDATE</h2>
                    <p className="doc-verification">Your documents have been verified</p>
                </div>

                <hr style={{color: "grey", opacity:"0.3"}}/>


                <div className="trainings">

                    <h2 className="training-heading">Upcoming Trainings</h2>
               
        
                    {  training.map(element => {
                            return  <Trainings key={element._id} props={element} />
                        })
                    }
                
                    
                </div>
    
            </div>
    )
}
 
                 
  