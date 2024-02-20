import { useEffect } from "react";
import { useState } from "react";
import './Students.css'

export default function Students(){

    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/admin/students", {
            method: "GET",
        }).then((resp) => {
            if(!resp.ok) window.location = '/admin/login'
            resp.json().then((data) => {
                setStudents(data.students)
               
            });

        });

    }, []);

    const mapping = () => {
        return students.map((element) => (
            <tr key={element._id}>
                <td>{element.firstName + " " + element.lastName}</td>
                <td>{element.sapid}</td>
                <td>{element.school || "STME"}</td>
                <td>{element.course || "B.TECH CS"}</td>
                <td>{element.year || "4th"}</td>
                <td>{element.placed || "Unplaced"}</td>
            </tr>
        ));
    };
    

    return(
        <div className="std-main">
        <div className="nav">
             <h1 className="std-h1">Students List</h1>
        </div>
        
        <table>
            <thead>
            <tr>
                <th>NAME</th>
                <th>SAPID</th>
                <th>SCHOOL</th>
                <th>COURSE</th>
                <th>YEAR</th>
                <th>STATUS</th>
            </tr>
            </thead>
            <tbody>
                {mapping()}
            </tbody>
        </table>
            



        </div>
    )
}