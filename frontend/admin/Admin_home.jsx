import '../src/home.css'
import { useState, useEffect } from 'react';
import { scaleBand, scaleLinear } from 'd3';

export default function Admin_home() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3000/admin/studentData").then((resp) => {
            resp.json().then((data) => {
                console.log(data)
                setData(data.students)

            });
        });
    }, []);

    // const yScale = scaleBand()
    //     .domain(data.map(d => d.placed))
    //     .range([0], height)


    // const xScale = scaleLinear()
    //     .domain([0, max(data, d => d.length)])
    //     .range([0, width])

    return (

        <div className="main">
            <div className="content">


                <div className="admin-content--right">

                    <div className="trainings">
                        <h2 className="training-heading">Upcoming Companies</h2>
                        <div className="training-template">
                            <h3 className="title">Infosys</h3>
                            <div className="venue">
                                <span className="venue" style={{ color: "black" }}>Students applied: X</span> <br />
                                <span className="time" style={{ color: "black" }}>Deadline: </span>
                            </div>
                            <button className="admin-details-btn">View Details</button>
                        </div>

                        <div className="training-template">
                            <h3 className="title">TCS</h3>
                            <div className="venue">
                                <span className="venue" style={{ color: "black" }}>Students applied: X </span> <br />

                                <span className="time" style={{ color: "black" }}>Deadline: </span>
                            </div>
                            <button className="admin-details-btn">View Details</button>
                        </div>

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