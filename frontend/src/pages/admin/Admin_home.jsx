import '../../styles/user/home.css'
import { useState, useEffect } from 'react';


export default function Admin_home() {

    const [companies, setCompanies] = useState([])
    const [sapid, setSapid] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:3000/companies",{
            method: "GET",
            headers: {
               "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then((resp)=>{
            if(!resp.ok) window.location = '/login'
            else{
            resp.json().then((data)=>{
                setCompanies(data.companies)
                setSapid(data.sapid)
            })
            };
            
        })

    },[]);


    return (

        <div className="main">
            <div className="content">
            
               
                <div className="admin-content--right">
               
                    <div className="trainings">
                        <h2 className="training-heading">Upcoming Companies</h2>
                        {companies.map((e)=>{
                            return(
                        <div className="training-template">
                            <h1 className="title">{e.name}</h1>
                            <div className="venue">
                                <span className="venue" style={{ color: "black" }}>Students applied: {e.Applied.length}</span> <br />
                                <span className="time" style={{ color: "black" }}>Deadline: {e.deadline} </span>
                            </div>
                            <button className="admin-details-btn">View Details</button>
                        </div>
                        )})}
                    </div>
                   

                    <div className="data">
                        {/* {
                            data && data.map(d => <rect
                                x={0}
                                y={yScale(d.length)}
                                width={xScale(d.placed)}
                                height={yScale.bandwidth()}
                            />)
                        } */}
                    </div>



                </div>
            </div>


        </div>
    )
}