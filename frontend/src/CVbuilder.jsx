import "./cv.css"
import "./script.js"
export default function CVBulider()
{
    return (
            <div className="form">

                <form action="sdfsf">

                    <h2>Basic details</h2>
                    <div className="basics">

                        <div className="name">
                            <p>Full Name</p>
                            <input type="text" name="name" id="name"/>
                        </div>

                        <div className="email">
                            <p>NMIMS Email</p>
                            <input type="email" name="email" id="email"/>
                        </div>


                        <div className="l-url">
                            <p>Linkedin URL</p>
                            <input type="url" name="linkedin" id="linkedin"/>
                        </div>

                        <div className="g-url">

                            <p>GitHub URL</p>
                            <input type="url" name="GitHonclickub" id="GitHub"/>
                        </div>

                        <div className="lang">
                            <p>Languages Known</p>
                            <input type="text" name="lang" id="lang"/>
                        </div>

                        <div className="age">

                            <p>Age</p>
                            <input type="number" name="age" id="age" max="25" min="18"/>
                        </div>

                        <div className="course">
                            <p>Course</p>
                            <select name="course" id="course" autoComplete="off">
                                <option defaultValue={true} disabled>Select your Course</option>
                                <option value="btech" id="btech"  >B.Tech</option>
                                <option value="mbatech" id="mba" >MBA Tech</option>
                            </select>
                        </div>


                        <div className="specialisation">
                            <p>Specialisation</p>
                            <select name="specialisation" id="specialisation" autoComplete="off">
                                <option  defaultValue={true} disabled>Select your specialisation</option>
                                <option value="CE" id="ce">Computer Engineering (CE)</option>
                                <option value="CSBS" className="specs">Computer Science & Business Systems (CSBS)</option>
                                <option value="AIDS" className="specs">Aritificial Intelligence & Data Science (AI & DS)</option>
                            </select>
                        </div>

                        <div className="gender">
                            <p>Gender</p>
                            <select name="gender" id="gender" autoComplete="off">
                                <option  defaultValue={true} disabled>Select your Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <br/>
                    </div>



                    <h2 className="acad">Academic Background</h2>
                    <div className="Academic">

                        <h3>UNDERGRADUATE</h3>
                        <div className="sem-wise-gpa" id="sem-gpa">
                          
                        </div>
                        <div className="undergrad">
                            <div className="Institute">
                                <p>Institute</p>
                                <input type="text" name="uni-name" id="name"/>
                            </div>

                            <div className="College">
                                <p>College</p>
                                <input type="text" name="college" id="college"/>
                            </div>


                            <div className="Year">
                                <p>Year</p>
                                <input type="tel" name="year" id="year"/>
                            </div>

                            <div className="Score">

                                <p>CGPA</p>
                                <input type="number" name="score" id="Score" min="0.0" max="4.0"/>
                            </div>
                        </div>

                        <h3>12th/Diploma</h3>
                        <div className="class12">


                            <div className="Institute">
                                <p>Institute</p>
                                <input type="text" name="name" id="name"/>
                            </div>

                            <div className="Board">
                                <p>Board</p>
                                <input type="text" name="board" id="college"/>
                            </div>


                            <div className="Year">
                                <p>Year</p>
                                <input type="tel" name="year" id="year"/>
                            </div>

                            <div className="Score">

                                <p>CGPA / %</p>
                                <input type="number" name="score" id="Score" min="0.0" max="4.0"/>
                            </div>
                        </div>

                        <h3>10th</h3>
                        <div className="class10">


                            <div className="Institute">
                                <p>Institute</p>
                                <input type="text" name="name" id="name"/>
                            </div>

                            <div className="Board">
                                <p>Board</p>
                                <input type="text" name="board" id="college"/>
                            </div>


                            <div className="Year">
                                <p>Year</p>
                                <input type="tel" name="year" id="year"/>
                            </div>

                            <div className="Score">

                                <p>CGPA / %</p>
                                <input type="number" name="score" id="Score" min="0.0" max="4.0"/>
                            </div>
                        </div>


                        <br/>
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
                                    <input type="text" name="role" id=""/>
                                </div>

                                <div className="company">
                                    <p>Company name</p>
                                    <input type="text" name="company"/>
                                </div>

                                <div className="duration">
                                    <p>Duration</p>
                                    <input type="number" name="duration" min="1" max="12"/>
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
                        

                        <br/>
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
                                    <input type="text" name="role" id=""/>
                                </div>
                                <div className="duration">
                                    <p>Duration</p>
                                    <input type="number" name="duration" min="1" max="12"/>
                                </div>

                                <div className="proj-desc">
                                    <p>Description</p>
                                    <textarea name="" id="" cols="30" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="del">Delete</button>
                                <button className="add">ADD</button>
                            </div>
                        
                        <br/>

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
                                    <input type="text" name="role" id=""/>
                                </div>
                                <div className="Institute">
                                    <p>Institute</p>
                                    <input type="text" name="Institute"/>
                                </div>

                                <div className="Year">
                                    <p>Year</p>
                                    <input type="date"/>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="del">Delete</button>
                                <button className="add">ADD</button>
                            </div>
                        
                        <br/>

                    </div>

                    <div className="Skills">

                        <h2>Skills</h2>

                        

                            <div className="SkillsForm">
                                <div className="Languages">
                                    <p>Languages</p>
                                    <input type="text" name="Languages" id=""/>
                                </div>
                                <div className="Softwares">
                                    <p>Softwares</p>
                                    <input type="text" name="soft"/>
                                </div>

                            </div>
                        
                        <br/>

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
                                    <input type="text" name="role" id=""/>
                                </div>

                                <div className="Club">
                                    <p>Committee/Club</p>
                                    <input type="text" name="club"/>
                                </div>

                                <div className="duration">
                                    <p>Duration</p>
                                    <input type="number" name="duration" min="1" max="12"/>
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
                        

                        <br/>
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
                                    <input type="text" name="role" id=""/>
                                </div>

                                <div className="Year">
                                    <p>Year</p>
                                    <input type="date"/>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="del">Delete</button>
                                <button className="add">ADD</button>
                            </div>
                        
                        <br/>

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
                                    <input type="text" name="role" id=""/>
                                </div>

                                <div className="Year">
                                    <p>Year</p>
                                    <input type="date"/>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="del">Delete</button>
                                <button className="add">ADD</button>
                            </div>
                        
                        <br/>

                    </div>

                    <div className="buttons1">
                        <button className="saveDetails">Save Details</button>
                        <button className="submit">Submit</button>
                    </div>

                    </form>

                
            </div>

  
    )
}