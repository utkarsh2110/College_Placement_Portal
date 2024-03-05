import { useState } from "react";
import '../../styles/user/docs.css'
import { useEffect } from "react";


export default function Docs() {
    const [file, setFile] = useState(null)
    const [sap, setSAP] = useState(null);

    const [viewBtn1, setviewBtn1] = useState("none")
    const [upload1, setUploadbtn1] = useState("block");
    const [disableUpload1, setDU1] = useState(false)

    const [viewBtn2, setviewBtn2] = useState("none")
    const [upload2, setUploadbtn2] = useState("block");
    const [disableUpload2, setDU2] = useState(false)

    const [viewBtn3, setviewBtn3] = useState("none")
    const [upload3, setUploadbtn3] = useState("block");
    const [disableUpload3, setDU3] = useState(false)

    const [viewBtn4, setviewBtn4] = useState("none")
    const [upload4, setUploadbtn4] = useState("block");
    const [disableUpload4, setDU4] = useState(false)



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

        if (event.target[0].name == "cv") {
            setviewBtn1("block")
            setUploadbtn1("none")
            setDU1(true)
        }
        else if (event.target[0].name == "lsm") {
            setviewBtn2("block")
            setUploadbtn2("none")
            setDU2(true)
        }
        else if (event.target[0].name == "hsc") {
            setviewBtn3("block")
            setUploadbtn3("none")
            setDU3(true)
        }
        else if (event.target[0].name == "ssc") {
            setviewBtn4("block")
            setUploadbtn4("none")
            setDU4(true)
        }
    }


    const handleX1 = (e) => {
        setviewBtn1("none")
        setUploadbtn1("block")
        setDU1(false)
    }
    const handleX2 = (e) => {
        setviewBtn2("none")
        setUploadbtn2("block")
        setDU2(false)
    }
    const handleX3 = (e) => {
        setviewBtn3("none")
        setUploadbtn3("block")
        setDU3(false)
    }
    const handleX4 = (e) => {
        setviewBtn4("none")
        setUploadbtn4("block")
        setDU4(false)
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
            console.log(e.target.name)
            const response = await fetch(`http://localhost:3000/files/${sap + "_" + e.target.name}.pdf`, {
                headers: {
                    "Authorization": "bearer " + localStorage.getItem("token")
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
                            required disabled={disableUpload1} />

                        <button type="submit" name="cv" style={{ display: upload1 }} className="upload-btn">UPLOAD</button>
                        <button type="button" name="cv" style={{ display: viewBtn1 }} className="upload-btn" onClick={handleClick} >VIEW</button>
                        <button type="button" name="cv" style={{ display: viewBtn1, fontSize: "20px" }} className="upload-btn" onClick={handleX1}>x</button>
                    </form>
                </div>

            </div>
            <div className="Last-Semester-Marksheet">
                <h2 className="headings">Last Semester Marksheet</h2>
                <div className="btn">
                    <form onSubmit={submit} className="btn">
                        <input type="file" id="Upload" name="lsm" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])}
                            required disabled={disableUpload2} />
                        <button type="submit" name="lsm" style={{ display: upload2 }} className="upload-btn">UPLOAD</button>
                        <button type="button" name="lsm" className="upload-btn" style={{ display: viewBtn2 }} onClick={handleClick}>VIEW</button>
                        <button type="button" name="lsm" style={{ display: viewBtn2, fontSize: "20px" }} className="upload-btn" onClick={handleX2}>x</button>
                    </form>
                </div>

            </div>

            <div className="hsc">
                <h2 className="headings">12th Marksheet</h2>
                <div className="btn">
                    <form onSubmit={submit} className="btn">
                        <input type="file" id="Upload" name="hsc" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])}
                            required disabled={disableUpload3} />
                        <button type="submit" name="hsc" style={{ display: upload3 }} className="upload-btn">UPLOAD</button>
                        <button type="button" name="hsc" className="upload-btn" style={{ display: viewBtn3 }} onClick={handleClick}>VIEW</button>
                        <button type="button" name="hsc" style={{ display: viewBtn3, fontSize: "20px" }} className="upload-btn" onClick={handleX3}>x</button>
                    </form>
                </div>

            </div>

            <div className="ssc">
                <h2 className="headings">10th Marksheet</h2>
                <div className="btn">
                    <form onSubmit={submit} className="btn">
                        <input type="file" id="Upload" name="ssc" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])}
                            required disabled={disableUpload4} />
                        <button type="submit" name="ssc" style={{ display: upload4 }} className="upload-btn">UPLOAD</button>
                        <button type="button" name="ssc" className="upload-btn" style={{ display: viewBtn4 }} onClick={handleClick}> VIEW</button>
                        <button type="button" name="ssc" style={{ display: viewBtn4, fontSize: "20px" }} className="upload-btn" onClick={handleX4}>x</button>
                    </form>
                </div>
            </div>

        </div>
    )
}