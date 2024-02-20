import Chatbot from "./chatbot.jsx"
import "./cv.css"
import "./script.js"
import { useEffect } from "react";
import { useState } from "react";
export default function CVBulider() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age,  setAge] = useState("")

    const [specialisation, setSpec] = useState();

    useEffect(()=>{
        fetch("http://localhost:3000/cvbuilder",{
            method: "GET",
            headers: {
               "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then((resp)=>{
            if(!resp.ok) window.location = '/login'
            else{
            resp.json().then((data)=>{
                if(data){
                    console.log(data.sapid)
                    setName(data.sapid.firstName + " " + data.sapid.lastName)
                    setEmail(data.sapid.email)
                }
            })
            };
            
        })

    },[]);
    return (
        <div className="cv-form">

            <form>

                <h2>Basic details</h2>
                <div className="basics">

                    <div className="name">
                        <p>Full Name</p>
                        <input type="text" name="name" id="name" value={name}/>
                    </div>

                    <div className="email">
                        <p>NMIMS Email</p>
                        <input type="email" name="email" id="email" value={email}/>
                    </div>


                    <div className="l-url">
                        <p>Linkedin URL</p>
                        <input type="url" name="linkedin" id="linkedin" />
                    </div>

                    <div className="g-url">
                        <p>GitHub URL</p>
                        <input type="url" name="GitHonclickub" id="GitHub" />
                    </div>

                    <div className="course">
                        <p>Contact Number</p>
                        <input type="tel" maxLength={10}/>
                    </div>
              

                    <div className="specialisation">
                        <p>Specialisation</p>
                        <select name="specialisation" id="specialisation" autoComplete="off">
                            <option defaultValue={true} disabled>Select your specialisation</option>
                            <option value="CE" id="ce">B.Tech Computer in Engineering </option>
                            <option value="CSBS" className="specs">B.Tech in Computer Science & Business Systems</option>
                            <option value="AIDS" className="specs">B.Tech in  Aritificial Intelligence & Data Science</option>
                            <option value="mbatec" id="ce">MBA Tech in Computer Engineering</option>
                        </select>
                    </div>

        
                    <br />
                </div>

                <h2 className="acad">Academic Background</h2>
                <div className="Academic">

                    <h3>UNDERGRADUATE</h3>
                    <div className="sem-wise-gpa" id="sem-gpa">

                    </div>
                    <div className="undergrad">
                        <div className="Institute">
                            <p>Institute</p>
                            <input type="text" name="uni-name" id="name" />
                        </div>

                        <div className="College">
                            <p>Graduation Year</p>
                            <input type="number"  min="2024" max="2026" name="college" id="college" />
                        </div>


                        <div className="Year">
                            <p>Semester</p>
                            <input type="number" name="year" id="year" min="7" max="10" />
                        </div>

                        <div className="Score">

                            <p>CGPA</p>
                            <input type="number" name="score" id="Score" min="0.0" max="4.0" step=".01" />
                        </div>
                    </div>

                    <h3>12th</h3>
                    <div className="class12">


                        <div className="Institute">
                            <p>Institute</p>
                            <input type="text" name="name" id="name" />
                        </div>

                        <div className="Board">
                            <p>Board</p>
                            <input type="text" name="board" id="college" />
                        </div>


                        <div className="Year">
                            <p>Year</p>
                            <input type="tel" name="year" id="year" />
                        </div>

                        <div className="Score">

                            <p>Percentage</p>
                            <input type="number" name="score" id="Score" min="50.0" max="100.0" step=".01"/>
                        </div>
                    </div>

                    <h3>10th</h3>
                    <div className="class10">


                        <div className="Institute">
                            <p>Institute</p>
                            <input type="text" name="name" id="name" />
                        </div>

                        <div className="Board">
                            <p>Board</p>
                            <input type="text" name="board" id="college" />
                        </div>


                        <div className="Year">
                            <p>Year</p>
                            <input type="tel" name="year" id="year" />
                        </div>

                        <div className="Score">

                            <p>Percentage</p>
                            <input type="number" name="score" id="Score" min="50.0" max="100.0" step=".01" />
                        </div>
                    </div>


                    <br />
                </div>


                <div className="internships">

                    <h2>Internships</h2>
                    <div className="addIntern">
                        <button className="addInternship"> Add Internship</button>
                    </div>

                    <h3>Internship 1</h3>



                    <div className="InternshipForm">
                        <div className="role">
                            <p>Role</p>
                            <input type="text" name="role" id="" />
                        </div>

                        <div className="company">
                            <p>Company name</p>
                            <input type="text" name="company" />
                        </div>

                        <div className="duration">
                            <p>Duration (in months)</p>
                            <input type="number" name="duration" min="2" max="12" />
                        </div>

                        <div className="intern-desc">
                            <p>Description</p>
                            <textarea name="" id="" cols="30" rows="5"></textarea>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="del">Delete</button>
                        <button className="add">ADD</button>
                    </div>


                    <br />
                </div>

                <div className="Projects">

                    <h2>Projects</h2>
                    <div className="addProj">
                        <button className="addProject"> Add Project</button>
                    </div>

                    <h3>Project 1</h3>



                    <div className="ProjectForm">
                        <div className="title">
                            <p>Title</p>
                            <input type="text" name="role" id="" />
                        </div>
                        <div className="duration">
                            <p>Duration</p>
                            <input type="number" name="duration" min="1" max="12" />
                        </div>

                        <div className="proj-desc">
                            <p>Description</p>
                            <textarea name="" id="" cols="30" rows="5" ></textarea>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="del">Delete</button>
                        <button className="add">ADD</button>
                    </div>

                    <br />

                </div>

                <div className="Certificates">

                    <h2>Certificates</h2>
                    <div className="addCertis">
                        <button className="addCerts"> Add Certificates</button>
                    </div>

                    <h3>Certificate 1</h3>



                    <div className="CertiForm">
                        <div className="title">
                            <p>Title</p>
                            <input type="text" name="role" id="" />
                        </div>
                        <div className="Institute">
                            <p>Institute</p>
                            <input type="text" name="Institute" />
                        </div>

                        <div className="Year">
                            <p>Year</p>
                            <input type="date" />
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="del">Delete</button>
                        <button className="add">ADD</button>
                    </div>

                    <br />

                </div>

                <div className="Skills">

                    <h2>Skills</h2>



                    <div className="SkillsForm">
                        <div className="Languages">
                            <p>Programming Languages</p>
                            <input type="text" name="Languages" id="" />
                        </div>
                        <div className="Softwares">
                            <p>Tools/Frameworks/Softwares</p>
                            <input type="text" name="soft" />
                        </div>

                    </div>

                    <br />

                </div>

                <div className="PORs">

                    <h2>Position Of Responsibility</h2>
                    <div className="addPOR">
                        <button className="addPORs"> Add Position</button>
                    </div>

                    <h3> Certificate 1</h3>



                    <div className="PORForm">
                        <div className="role">
                            <p>Role</p>
                            <input type="text" name="role" id="" />
                        </div>

                        <div className="Club">
                            <p>Committee/Club</p>
                            <input type="text" name="club" />
                        </div>

                        <div className="duration">
                            <p>Duration (in Years)</p>
                            <input type="number" name="duration" min="1" max="5" />
                        </div>

                        <div className="por-desc">
                            <p>Description</p>
                            <textarea name="por-desc" id="" cols="30" rows="5"></textarea>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="del">Delete</button>
                        <button className="add">ADD</button>
                    </div>


                    <br />
                </div>

                <div className="extraCurr">

                    <h2>Co-Curricular And Extra-Curricular Activities</h2>
                    <div className="addActs">
                        <button className="addActivity"> Add Activity</button>
                    </div>

                    <h3>Activity 1</h3>



                    <div className="ActForm">
                        <div className="Description">
                            <p>Description</p>
                            <input type="text" name="role" id="" />
                        </div>

                        <div className="Year">
                            <p>Year</p>
                            <input type="number" min="2020" max="2024" />
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="del">Delete</button>
                        <button className="add">ADD</button>
                    </div>

                    <br />

                </div>

                <div className="acads">

                    <h2>Academic Achievements</h2>
                    <div className="addAcads">
                        <button className="addAcad"> Add Achievement</button>
                    </div>

                    <h3>Activity 1</h3>



                    <div className="AcadForm">
                        <div className="Description">
                            <p>Description</p>
                            <input type="text" name="role" id="" />
                        </div>

                        <div className="Year">
                            <p>Year</p>
                            <input type="number" min="2020" max="2024"/>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="del">Delete</button>
                        <button className="add">ADD</button>
                    </div>

                    <br />

                </div>

                <div className="buttons1">
                    <button className="saveDetails">Save Details</button>
                    <button className="submit">Submit</button>
                </div>

            </form>

        </div>


    )
}