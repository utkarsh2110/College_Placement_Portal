import { useEffect } from "react";
import { useState } from "react";
import './Students.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Avatar from "@mui/material/Avatar"

export default function Students() {

    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/admin/students", {
            method: "GET",
        }).then((resp) => {
            if (!resp.ok) window.location = '/admin/login'
            resp.json().then((data) => {
                setStudents(data.students)
            });

        });

    }, []);

    const [open, setOpen] = useState(false);
    const handleOpen = (element) => setOpen(element);
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        bgcolor: 'background.paper',
        p: 4,
    };


    const mapping = () => {
        return students.map((element, index) => (
            <>
                <tr key={index}>
                    <td>{element.firstName + " " + element.lastName}</td>
                    <td>{element.sapid}</td>
                    <td>{element.school || "STME"}</td>
                    <td>{element.course || "B.TECH CSBS"}</td>
                    <td>{element.year || "4th"}</td>
                    <td>{element.placed || "Unplaced"}</td>
                    <button className="view" onClick={() => handleOpen(element)}>View</button>
                    <Modal
                        open={open === element}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <div style={{ display: "flex", alignItems: "center", gap: "2em" }}>
                                <div ><Avatar sx={{ width: 50, height: 50, bgcolor: "#ee7a6d", color: "black", fontSize: 25 }} children={element.firstName[0] + element.lastName[0]} /></div>
                                <div>
                                    <p style={{ fontWeight: "bold", textTransform: "uppercase" }}>{element.firstName + " " + element.lastName}</p>
                                    <p>{element.sapid}</p>
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: "1em", marginTop: "2em", background: "#f8f8f8", padding: "10px 20px", columnGap: "12em", borderRadius: "10px" }}>
                                <div className="spans">
                                    <span style={{ fontSize: 16, color: "black" }}>School :    </span>
                                    <span style={{ color: "black", fontSize: 15, marginLeft: 10, fontWeight: "100" }}>{element.school || "STME"}</span>
                                </div>
                                <div className="spans">
                                    <span style={{ fontSize: 16, color: "black" }}>Year : </span>
                                    <span style={{ color: "black", fontSize: 15, marginLeft: 10, fontWeight: "100" }}>{element.year || "Final"}</span>
                                </div>
                                <div className="spans">
                                    <span style={{ fontSize: 16, color: "black" }}>Course : </span>
                                    <span style={{ color: "black", fontSize: 15, marginLeft: 10, fontWeight: "100" }}>{element.course || "BTECH"}</span>
                                </div>
                                <div>
                                    <select style={{ width: "fit-content", height: 30, fontSize: 10, background: "#8f2e23", color: "white", border: "1px solid #8f2e23" }}>
                                        <option value="UNPLACED" selected>UNPLACED</option>
                                        <option value="PLACED">PLACED</option>
                                    </select>
                                </div>
                            </div>

                            <div className="doc-div" style={{ background: "#f8f8f8", padding: "10px 0px 10px 20px", columnGap: "12em", borderRadius: "10px", marginTop: "2em" }}>

                                <h2 style={{ color: "black", fontWeight: "bold" }}>Verify Documents</h2>
                                <div className="cv">
                                    <h3 style={{ fontSize: 15, marginBottom: 8, marginTop:20 }}>CV / Resume</h3>
                                    <div className="grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: '3em' }}>
                                        <a href="#" style={{ fontSize: 14 }}>Resume.pdf</a>
                                        <p>Add Comments</p>
                                        <select style={{ width: "fit-content", height: 30, fontSize: 10, background: "#8f2e23", color: "white", border: "1px solid #8f2e23" }}>
                                            <option value="VERIFY" selected>VERIFY</option>
                                            <option value="REJECT">REJECT</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="cv">
                                    <h3 style={{ fontSize: 15, marginBottom: 8, marginTop:20 }}>Last Sem Marksheet</h3>
                                    <div className="grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: '3em', marginBottom: "10px" }}>
                                        <a href="#" style={{ fontSize: 13 }}>marksheet.pdf</a>
                                        <p>Add Comments</p>
                                        <select style={{ width: "fit-content", height: 30, fontSize: 10, background: "#8f2e23", color: "white", border: "1px solid #8f2e23" }}>
                                            <option value="VERIFY" selected>VERIFY</option>
                                            <option value="REJECT">REJECT</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="cv">
                                    <h3 style={{ fontSize: 15, marginBottom: 8, marginTop:20 }}>HSC Marksheet</h3>
                                    <div className="grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: '3em' }}>
                                        <a href="#" style={{ fontSize: 14 }}>hsc.pdf</a>
                                        <p>Add Comments</p>
                                        <select style={{ width: "fit-content", height: 30, fontSize: 10, background: "#8f2e23", color: "white", border: "1px solid #8f2e23" }}>
                                            <option value="VERIFY" selected>VERIFY</option>
                                            <option value="REJECT">REJECT</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="cv">
                                    <h3 style={{ fontSize: 15, marginBottom: 8, marginTop:20 }}>SSC Markshee5</h3>
                                    <div className="grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: '3em' }}>
                                        <a href="#" style={{ fontSize: 14 }}>ssc.pdf</a>
                                        <p>Add Comments</p>
                                        <select style={{ width: "fit-content", height: 30, fontSize: 10, background: "#8f2e23", color: "white", border: "1px solid #8f2e23" }}>
                                            <option value="VERIFY" selected>VERIFY</option>
                                            <option value="REJECT">REJECT</option>
                                        </select>
                                    </div>
                                </div>






                            </div>

                        </Box>
                    </Modal>

                </tr>

            </>
        ));
    };




    return (
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {mapping()}
                </tbody>
            </table>




        </div>
    )
}