import { useState } from "react";
import Chatbot from "./chatbot"
import "./docs.css"
import { useEffect } from "react";
import PDFDocs from "./PdfDocs";

export default function Docs() {
    const [file, setFile] = useState(null)
    const [sap, setSAP] = useState(null);
    const [viewBtn, setviewBtn] = useState("none")
    const [upload, setUploadbtn] = useState("block");
    const[fileName, setFileName] = useState(null);

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
                            required />
                        <p>{fileName}</p>
                        <input type="button" name="cv" className="upload-btn"  style ={{display: viewBtn}} onClick={()=>{

                            fetch(`http://localhost:3000/files/${sap}_cv.pdf`,{
                                 method: "GET",
                                 headers:  {
                                    "Authorization": "bearer " + localStorage.getItem("token")
                                 }
                            }).then(resp=>{
                                resp.json().then((data)=>{
                                    if(!resp.ok) window.location = './login'
                                    else{
                                        if(data.url)window.location = data.url
                                    }
                                })
                            })
                        }} value="VIEW"/>
                        <button type="submit" name="cv" style={{display: upload}} className="upload-btn">UPLOAD</button>
                        
                    </form>
                </div>

            </div>
            <div className="Last-Semester-Marksheet">
                <h2 className="headings">Last Semester Marksheet</h2>
                <div className="btn">
                    <form onSubmit={submit} className="btn">
                        <input type="file" id="Upload" name="lsm" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])}
                            required />
                        <button  name="lsm" className="upload-btn"  style ={{display: viewBtn}}>VIEW</button>
                        <button type="submit" name="lsm" style={{display: upload}} className="upload-btn">UPLOAD</button>
                    </form>
                </div>

            </div>

            <div className="ssc">
                <h2 className="headings">12th Marksheet</h2>
                <div className="btn">
                    <form onSubmit={submit} className="btn">
                        <input type="file" id="Upload" name="HSC" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])}
                            required />
                        <button  name="HSC" className="upload-btn"  style ={{display: viewBtn}}>VIEW</button>
                        <button type="submit" name="HSC" style={{display: upload}} className="upload-btn">UPLOAD</button>
                    </form>
                </div>

            </div>

            <div className="hsc">
                <h2 className="headings">10th Marksheet</h2>
                <div className="btn">
                    <form onSubmit={submit} className="btn">
                        <input type="file" id="Upload" name="SSC" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])}
                            required />
                        <button  name="SSC" className="upload-btn"  style ={{display: viewBtn}}>VIEW</button>
                        <button type="submit" name="SSC" style={{display: upload}} className="upload-btn">UPLOAD</button>
                    </form>
                </div>
            </div>
           
        </div>
    )
}