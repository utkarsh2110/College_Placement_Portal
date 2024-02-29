import "./cv.css"
import { useEffect } from "react";
import { useState } from "react";


export default function CVBulider() {

    const [CVdetails, setDetails] = useState({
        name: "",
        email: "",
        github: "",
        linkedin: "",
        contact: "",
        specialisation: "",
        gradYear: "",
        sem: "",
        gpa: "",
        HSCinstitute: "",
        HSCboard: "",
        HSCgradYear: "",
        HSCpercentage: "",
        SSCinstitute: "",
        SSCboard: "",
        SSCgradYear: "",
        SSCpercentage: "",
        lang: "",
        tools: ""
    })

    const [intern, setIntern] = useState([{
        role: "",
        duration: "",
        desc: "",
        company: ""
    }])
    const [project, setProj] = useState([{
        title: "",
        duration: "",
        desc: "",
    }])

    const [certi, setCerti] = useState([{
        title: "",
        year: ""
    }])

    const [extraCurr, setExtraCurr] = useState([{
        title: "",
        year: ""
    }])

    const [acad, setAcad] = useState([{
        title: "",
        year: ""
    }])


    const [por, setPOR] = useState([{
        role: "",
        club: "",
        duration: "",
        desc: ""
    }])



    const handleInternChange = (index, e) => {
        const Updated = [...intern];
        const { name, value } = e;
        Updated[index][name] = value
        setIntern(Updated);
    }
    const addInternship = () => {
        setIntern(prev => {
            return [...prev, { role: "", duration: "", desc: "", company: "" }]
        }
        )
    }
    const handleIntDelete = (index) => {
        if (intern.length > 1) {
            const updatedInternships = [...intern];
            updatedInternships.splice(index, 1);
            setIntern(updatedInternships)
        }
    }


    const addProject = () => {
        setProj(prev => {
            return [...prev, { title: "", duration: "", desc: "" }]
        })
    }
    const handleProjChange = (index, e) => {
        const Updated = [...project];
        const { name, value } = e;
        Updated[index][name] = value
        setProj(Updated);
    }
    const handleProjDelete = (index) => {
        if (project.length > 1) {
            const updated = [...project];
            updated.splice(index, 1);
            setProj(updated)
        }
    }



    const addCurr = () => {
        setExtraCurr(prev => {
            return [...prev, { title: "", year: "" }]
        })
    }
    const handleCurrChange = (index, e) => {
        const Updated = [...extraCurr];
        const { name, value } = e;
        Updated[index][name] = value
        setExtraCurr(Updated);
    }
    const handleCurrDelete = (index) => {
        const updated = [...extraCurr];
        updated.splice(index, 1);
        setExtraCurr(updated)
    }


    const addAcad = () => {
        setAcad(prev => {
            return [...prev, { title: "", year: "" }]
        })
    }
    const handleAcadChange = (index, e) => {
        const Updated = [...acad];
        const { name, value } = e;
        Updated[index][name] = value
        setAcad(Updated);
    }
    const handleAcadDelete = (index) => {
        const updated = [...acad];
        updated.splice(index, 1);
        setAcad(updated)
    }


    const addCerti = () => {
        setCerti(prev => {
            return [...prev, { title: "", year: "" }]
        })
    }
    const handleCertiChange = (index, e) => {
        const Updated = [...certi];
        const { name, value } = e;
        Updated[index][name] = value
        setCerti(Updated);
    }
    const handleCertiDelete = (index) => {
        if (certi.length > 1) {
            const updated = [...certi];
            updated.splice(index, 1);
            setCerti(updated)
        }
    }


    const addPOR = () => {
        setPOR(prev => {
            return [...prev, {
                role: "",
                club: "",
                duration: "",
                desc: ""
            }]
        })
    }
    const handlePORchange = (index, e) => {
        const Updated = [...por];
        const { name, value } = e;
        Updated[index][name] = value
        setPOR(Updated);
    }
    const handlePORdelete = (index) => {
        const updated = [...por];
        updated.splice(index, 1);
        setPOR(updated)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const submit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        fetch("http://localhost:3000/cvbuilder", {
            method: "GET",
            headers: {
                "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then((resp) => {
            if (!resp.ok) window.location = '/login'
            else {
                resp.json().then((data) => {
                    if (data) {
                        setDetails({
                            name: data.sapid.firstName + " " + data.sapid.lastName,
                            sapid: data.sapid.sapid,
                            email: data.sapid.email
                        })

                    }
                })
            };
        })

    }, []);


    const HandleSubmit = async (e) => {

        if (CVdetails && intern && project && certi) {
            try {
                const response = await fetch('http://localhost:3000/cvbuilder', {
                    method: "POST",
                    body: JSON.stringify({

                        CVdetails,
                        intern,
                        project,
                        certi,
                        por,
                        extraCurr,
                        acad

                    }),
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": "bearer " + localStorage.getItem("token")
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // const blob = await response.blob();
                // const url = URL.createObjectURL(blob);
                // window.open(url, '_blank');
            } catch (error) {
                console.error('Error fetching file:', error);
            }
        }
    };





return (
    <div className="cv-form">

        <form onSubmit={submit}>

            <h2>Basic details</h2>
            <div className="basics">

                <div className="name">
                    <p>Full Name</p>
                    <input type="text" name="name" id="name" value={CVdetails.name || undefined} autoComplete="off" />
                </div>

                <div className="email">
                    <p>NMIMS Email</p>
                    <input type="email" name="email" id="email" value={CVdetails.email || undefined} />
                </div>


                <div className="l-url">
                    <p>Linkedin Handle</p>
                    <input type="text" name="linkedin" id="linkedin" placeholder="https://linkedin.com/in/xxxx" autoComplete="off" onChange={handleChange} />
                </div>

                <div className="g-url">
                    <p>GitHub Handle</p>
                    <input type="text" name="github" id="GitHub" placeholder="https://github.com/xxxx" autoComplete="off" onChange={handleChange} />
                </div>

                <div className="course">
                    <p>Contact Number</p>
                    <input type="tel" maxLength={10} name="contact" autoComplete="off" onChange={handleChange} />
                </div>


                <div className="specialisation">
                    <p>Programme & Specialisation</p>
                    <select name="specialisation" id="specialisation" autoComplete="off" onChange={handleChange}>
                        <option defaultValue={true} disabled>Select your specialisation</option>
                        <option id="ce">B.Tech in Computer Engineering </option>
                        <option className="specs">B.Tech in Computer Science and Business Systems</option>
                        <option className="specs">B.Tech in Aritificial Intelligence and Data Science</option>
                        <option id="ce">MBA Tech in Computer Engineering</option>
                    </select>
                </div>


                <br />
            </div>

            <h2 className="acad">Academic Background</h2>
            <div className="Academic">

                <h3>UNDERGRADUATE</h3>

                <div className="undergrad">
                    <div className="Institute">
                        <p>University</p>
                        <input type="text" id="name" autoComplete="off" value="NMIMS University" />
                    </div>

                    <div className="College">
                        <p>Graduation Year</p>
                        <input type="number" min="2024" max="2026" name="gradYear" autoComplete="off" id="college" onChange={handleChange} />
                    </div>


                    <div className="Year">
                        <p>Semester</p>
                        <input type="number" id="year" min="7" name="sem" autoComplete="off" max="10" onChange={handleChange} />
                    </div>

                    <div className="Score">

                        <p>CGPA</p>
                        <input type="number" name="gpa" id="Score" min="0.0" autoComplete="off" max="4.0" step=".01" onChange={handleChange} />
                    </div>
                </div>

                <h3>12th</h3>
                <div className="class12">


                    <div className="Institute">
                        <p>Institute</p>
                        <input type="text" name="HSCinstitute" id="name" autoComplete="off" onChange={handleChange} />
                    </div>

                    <div className="Board">
                        <p>Board</p>
                        <input type="text" name="HSCboard" id="college" autoComplete="off" onChange={handleChange} />
                    </div>


                    <div className="Year">
                        <p>Year</p>
                        <input type="number" min="2018" max="2023" name="HSCgradYear" autoComplete="off" id="hsc-year" onChange={handleChange} />
                    </div>

                    <div className="Score">

                        <p>Percentage</p>
                        <input type="number" name="HSCpercentage" id="Score" min="50.0" autoComplete="off" max="100.0" step=".01" onChange={handleChange} />
                    </div>
                </div>

                <h3>10th</h3>
                <div className="class10">


                    <div className="Institute">
                        <p>Institute</p>
                        <input type="text" name="SSCinstitute" id="name" autoComplete="off" onChange={handleChange} />
                    </div>

                    <div className="Board">
                        <p>Board</p>
                        <input type="text" name="SSCboard" id="college" autoComplete="off" onChange={handleChange} />
                    </div>


                    <div className="Year">
                        <p>Year</p>
                        <input type="number" min="2016" max="2021" autoComplete="off" name="SSCgradYear" id="year" onChange={handleChange} />
                    </div>

                    <div className="Score">

                        <p>Percentage</p>
                        <input type="number" name="SSCpercentage" id="Score" autoComplete="off" min="50.0" max="100.0" step=".01" onChange={handleChange} />
                    </div>
                </div>


                <br />
            </div>


            <div className="internships">

                <h2>Internships</h2>
                <div className="addIntern">
                    <button className="addInternship" type="button" onClick={intern.length < 2 && addInternship}> Add Internship</button>
                </div>

                {
                    intern.map((element, index) => {
                        return (
                            <>
                                <h3>Internship {index + 1}</h3>
                                <div className="InternshipForm" key={index}>
                                    <div className="role">
                                        <p>Role</p>
                                        <input type="text" name="role" id="" autoComplete="off" onChange={(e) => handleInternChange(index, e.target)} />
                                    </div>

                                    <div className="company">
                                        <p>Company name</p>
                                        <input type="text" name="company" autoComplete="off" onChange={(e) => handleInternChange(index, e.target)} />
                                    </div>

                                    <div className="duration">
                                        <p>Duration (in months)</p>
                                        <input type="number" name="duration" min="2" autoComplete="off" max="12" onChange={(e) => handleInternChange(index, e.target)} />
                                    </div>

                                    <div className="intern-desc">
                                        <p>Description</p>
                                        <textarea name="desc" id="" cols="30" rows="5" onChange={(e) => handleInternChange(index, e.target)}></textarea>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button className="del" onClick={() => handleIntDelete(index)}>Delete</button>
                                    <button className="add" >ADD</button>
                                </div>
                                <br /> <br />
                            </>

                        )
                    })}

                <br />
            </div>

            <div className="Projects">

                <h2>Projects</h2>
                <div className="addProj">
                    <button className="addProject" onClick={project.length < 4 && addProject}> Add Project</button>
                </div>

                {
                    project.map((element, index) => {
                        return <>
                            <h3>Project {index + 1}</h3>
                            <div className="ProjectForm">
                                <div className="title">
                                    <p>Title</p>
                                    <input type="text" name="title" id="" autoComplete="off" onChange={(e) => handleProjChange(index, e.target)} />
                                </div>
                                <div className="duration">
                                    <p>Duration</p>
                                    <input type="number" name="duration" autoComplete="off" min="1" max="12" onChange={(e) => handleProjChange(index, e.target)} />
                                </div>

                                <div className="proj-desc">
                                    <p>Description</p>
                                    <textarea name="desc" id="" cols="30" rows="5" autoComplete="off" onChange={(e) => handleProjChange(index, e.target)} ></textarea>
                                </div>
                            </div>
                            <div className="buttons">
                                <button type="button" className="del" onClick={() => handleProjDelete(index)}>Delete</button>
                                <button type="button" className="add">ADD</button>
                            </div>

                            <br />
                        </>
                    })





                }
            </div>

            <div className="Certificates">

                <h2>Certificates</h2>
                <div className="addCertis">
                    <button className="addCerts" onClick={certi.length < 4 && addCerti}> Add Certificates</button>
                </div>

                {certi.map((element, index) => {

                    return <>
                        <h3>Certificate {index + 1}</h3>

                        <div className="ActForm">
                            <div className="title">
                                <p>Title</p>
                                <input type="text" name="title" id="" autoComplete="off" onChange={(e) => handleCertiChange(index, e.target)} />
                            </div>

                            <div className="Year">
                                <p>Year</p>
                                <input type="number" min="2020" name="year" max="2024" autoComplete="off" onChange={(e) => handleCertiChange(index, e.target)} />
                            </div>
                        </div>
                        <div className="buttons">
                            <button className="del" onClick={() => { handleCertiDelete(index) }}>Delete</button>
                            <button className="add">ADD</button>
                        </div>
                        <br />
                    </>




                })}

                <br />

            </div>

            <div className="Skills">

                <h2>Skills</h2>

                <div className="SkillsForm">
                    <div className="Languages">
                        <p>Programming Languages</p>
                        <input type="text" name="lang" id="" autoComplete="off" onChange={handleChange} />
                    </div>
                    <div className="Softwares">
                        <p>Tools/Frameworks/Softwares</p>
                        <input type="text" name="tools" autoComplete="off" onChange={handleChange} />
                    </div>

                </div>

                <br />

            </div>

            <div className="PORs">

                <h2>Position Of Responsibility</h2>
                <div className="addPOR">
                    <button className="addPORs" onClick={por.length < 2 && addPOR}> Add Position</button>
                </div>

                {por.map((element, index) => {
                    return (
                        <>
                            <h3> Certificate {index + 1}</h3>
                            <div className="PORForm">
                                <div className="role">
                                    <p>Role</p>
                                    <input type="text" name="role" id="" autoComplete="off" onChange={(e) => handlePORchange(index, e.target)} />
                                </div>

                                <div className="Club">
                                    <p>Committee/Club</p>
                                    <input type="text" name="club" autoComplete="off" onChange={(e) => handlePORchange(index, e.target)} />
                                </div>

                                <div className="duration">
                                    <p>Duration (in months)</p>
                                    <input type="number" name="duration" min="1" max="60" autoComplete="off" onChange={(e) => handlePORchange(index, e.target)} />
                                </div>

                                <div className="por-desc">
                                    <p>Description</p>
                                    <textarea name="desc" autoComplete="off" cols="30" rows="5" onChange={(e) => handlePORchange(index, e.target)} ></textarea>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="del" onClick={() => handlePORdelete(index)}>Delete</button>
                                <button className="add">ADD</button>
                            </div>
                            <br /> <br />
                        </>
                    )
                })}


                <br />
            </div>

            <div className="extraCurr">

                <h2>Co-Curricular And Extra-Curricular Activities</h2>
                <div className="addActs">
                    <button className="addActivity" onClick={extraCurr.length < 2 && addCurr}> Add Activity</button>
                </div>

                {
                    extraCurr.map((element, index) => {
                        return (
                            <>
                                <h3>Activity {index + 1}</h3>
                                <div className="ActForm">
                                    <div className="Description">
                                        <p>Description</p>
                                        <input type="text" name="role" id="" autoComplete="off" onChange={(e) => handleCurrChange(index, e.target)} />
                                    </div>

                                    <div className="Year">
                                        <p>Year</p>
                                        <input type="number" min="2020" max="2024" autoComplete="off" onChange={(e) => handleCurrChange(index, e.target)} />
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button className="del" onClick={() => handleCurrDelete(index)}>Delete</button>
                                    <button className="add">ADD</button>
                                </div>
                                <br />
                            </>
                        )
                    })}

                <br />

            </div>

            <div className="acads">

                <h2>Academic Achievements</h2>
                <div className="addAcads">
                    <button className="addAcad" onClick={acad.length < 2 && addAcad}> Add Achievement</button>
                </div>

                {acad.map((element, index) => {
                    return (
                        <>
                            <h3>Activity {index + 1}</h3>
                            <div className="AcadForm">
                                <div className="Description">
                                    <p>Description</p>
                                    <input type="text" name="title" id="" autoComplete="off" onChange={(e) => handleAcadChange(index, e.target)} />
                                </div>

                                <div className="Year">
                                    <p>Year</p>
                                    <input type="number" min="2020" name="year" max="2024" autoComplete="off" onChange={(e) => handleAcadChange(index, e.target)} />
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="del" onClick={() => handleAcadDelete(index)}>Delete</button>
                                <button className="add">ADD</button>
                            </div>

                            <br />
                        </>
                    )
                })}

            </div>

            <div className="buttons1">
                <button className="saveDetails">Save Details</button>
                <button type="submit" className="submit" onClick={HandleSubmit}>Submit</button>
            </div>

        </form>

    </div>


)}