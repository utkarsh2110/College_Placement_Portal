
import { useEffect } from 'react'
import './home.css'
import Trainings from './Components/trainings';
import Chatbot from './chatbot';


export default function Home() {
    
    useEffect(()=>{
        fetch("http://localhost:3000/home",{
            method: "GET",
            headers: {
               "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then((resp)=>{
            resp.json().then((data)=>{
            });
            
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
                    <div className="training-template">
                        <h3 className="title">Data Structures and Algorithms</h3>
                        <div className="venue">
                            <span className="date">Date: 20/10/2024</span><br/>
                            <span className="venue">Venue: Lab 210</span>
                            <span> | </span>
                            <span className="time">2:10 PM to 4:10 PM</span>
                        </div>
                        <p className="training-info">Workshop on data structures and Algorithms from basic to advanced</p>
                    </div>

                    <Trainings/>
                </div>
                <hr style={{color: "grey", opacity:"0.3"}}/>
                <div className="home-chatbot"><Chatbot/></div>
            </div>
    )
}
 
                 
  