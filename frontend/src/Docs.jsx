import "./docs.css"

export default function Docs(){
    return (
            <div className="docs-content--right">

                <div className="headings">
                    <h2> Upload Scanned Documents </h2> 
                    <p className="info">Only pdf/jpeg/jpg/png formats are allowed</p>
                </div>

                <div className="cv">
                    <h2 className="headings">CV / Resume</h2>

                    <div className="btn">
                        <input type="file" id="Upload"/>
                        <input type="button" value="UPLOAD"/>
                    </div>
                   
                </div>
                <div className="Last-Semester-Marksheet">
                    <h2 className="headings">Last Semester Marksheet</h2>
                    <div className="btn">
                        <input type="file" id="Upload"/>
                        <input type="button" value="UPLOAD"/>
                    </div>
                   
                </div>

                <div className="ssc">
                    <h2 className="headings">12th Marksheet</h2>
                    <div className="btn">
                        <input type="file" id="Upload"/>
                        <input type="button" value="UPLOAD"/>
                    </div>
                    
                </div>

                <div className="hsc">
                    <h2 className="headings">10th Marksheet</h2>
                    <div className="btn">
                        <input type="file" id="Upload"/>
                        <input type="button" value="UPLOAD"/>
                    </div>  
                </div>
            </div>
)}