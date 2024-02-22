import { useState } from "react";
import "./docs.css"
import { useEffect } from "react";


export default function Docs() {
    const [file, setFile] = useState(null)
    const [sap, setSAP] = useState(null);
    const [viewBtn, setviewBtn] = useState("none")
    const [upload, setUploadbtn] = useState("block");
    const[fileName, setFileName] = useState(null);

    const [disableUpload, setDisable] = useState(false)

    const submit = async (event) => {

        event.preventDefault();
        
        const formData = new FormData();
        let title = sap + "_" + event.target[0].name;
        formData.append('title', title)
        formData.append('file', file);

        const res = await fetch('http://localhost:3000/docs', {
            method: "POST",
            body: formData,
            headers: {
                "Authorization": "bearer " + localStorage.getItem("token")
            }
        });
        setFileName(title)
        setviewBtn("block")
        setUploadbtn("none")
    };

    const handleX = (e)=>{
        setviewBtn("none")
        setUploadbtn("block")
        setDU(false)
    }

    useEffect(() => {
        fetch("http://localhost:3000/docs", {
            method: "GET",
            headers: {
                "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then((resp) => {
            if (!resp.ok) { window.location = '/login' }
            else {
                resp.json().then((data) => {
                    if (data) {
                        setSAP(data.sapid)
                    }
                })
            };
        })
    }, []);

    const handleClick = async (e) => {
        try {
            const response = await fetch(`http://localhost:3000/files/${sap + "_" + e.target.name}.pdf`, {
                headers:{
                    "Authorization" : "bearer " + localStorage.getItem("token")
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
        } catch (error) {
            console.error('Error fetching file:', error);
        }
    };
    
    return (
        <div className="docs-content--right">

            <div className="headings">
                <h2> Upload Scanned Documents </h2>
                <p className="info">Only pdf/jpeg/jpg/png formats are allowed</p>
            </div>

            <div className="cv">
                <h2 className="headings">CV / Resume</h2>
                <div className="btn">
                    <form onSubmit={submit} className="btn">
                        <input type="file" id="Upload" name="cv" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])}
                            required disabled={disableUpload} />
                        
                        <button type="submit" name="cv" style={{display: upload}} className="upload-btn">UPLOAD</button>
                        <button type="button"  name="cv" style={{display: viewBtn}} className="upload-btn" onClick={handleClick} >VIEW</button>
                        <button type="button" name="cv" style={{display: viewBtn, fontSize: "20px"}} className="upload-btn" onClick={handleX}>x</button>
                    </form>
                </div>

            </div>
            <div className="Last-Semester-Marksheet">
                <h2 className="headings">Last Semester Marksheet</h2>
                <div className="btn">
                    <form onSubmit={submit} className="btn">
                        <input type="file" id="Upload" name="lsm" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])}
                            required disabled={disableUpload} />
                        <button type="submit" name="lsm" style={{display: upload}} className="upload-btn">UPLOAD</button>
                        <button  name="lsm" className="upload-btn"  style ={{display: viewBtn}}>VIEW</button>
                        <button type="button" name="lsm" style={{display: viewBtn, fontSize: "20px"}} className="upload-btn" onClick={handleX}>x</button>
                    </form>
                </div>

            </div>

            <div className="ssc">
                <h2 className="headings">12th Marksheet</h2>
                <div className="btn">
                    <form onSubmit={submit} className="btn">
                        <input type="file" id="Upload" name="HSC" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])}
                            required  disabled={disableUpload} />
                        <button type="submit" name="HSC" style={{display: upload}} className="upload-btn">UPLOAD</button>
                        <button  name="HSC" className="upload-btn"  style ={{display: viewBtn}}>VIEW</button>
                        <button type="button" name="HSC" style={{display: viewBtn, fontSize: "20px"}} className="upload-btn" onClick={handleX}>x</button>
                    </form>
                </div>

            </div>

            <div className="hsc">
                <h2 className="headings">10th Marksheet</h2>
                <div className="btn">
                    <form onSubmit={submit} className="btn">
                        <input type="file" id="Upload" name="SSC" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])}
                            required disabled={disableUpload} />
                        <button type="submit" name="SSC" style={{display: upload}} className="upload-btn">UPLOAD</button>
                        <button  name="SSC" className="upload-btn"  style ={{display: viewBtn}}>VIEW</button>
                        <button type="button" name="SSC" style={{display: viewBtn, fontSize: "20px"}} className="upload-btn" onClick={handleX}>x</button>
                    </form>
                </div>
            </div>
           
        </div>
    )
}