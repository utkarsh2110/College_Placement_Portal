import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LeftMenuBar() {

    const [queryDisplay, setQueryDisplay] = useState("none");
    useEffect(() => {
        fetch("http://localhost:3000/userQueries", {
            method: "GET",
            headers: {
                "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then((resp) => {
            resp.json().then((data) => {
                if (data && data.query.length > 0) {
                    setQueryDisplay("block");
                    localStorage.setItem("query",  JSON.stringify(data.query))
                }
            });
        });
    }, []); 

    const navigate = useNavigate();
    const location = window.location.pathname;
    if(location == '/home' || location == '/cvbuilder' || location == '/docs' || location == "/preparation" || location == "/changePass" || location == "/profile" || location == '/askAdmin' || location == '/faq' || location == '/queries'){
    return (
        <div className="menu" style={{fontWeight: "bold"}}>
            <div className="index menuItem"   onClick={()=>{navigate('/home');}}>Home</div>
            <div className="CVBulider menuItem"  onClick={()=>{navigate('/cvbuilder')}}>CV Builder</div>
            <div className="Docs menuItem" onClick={()=>{navigate('/docs')}}>Documents</div>
            <div className="prep menuItem" onClick={()=>{navigate('/preparation')}} >Preparation</div>
            <div className="prep menuItem" onClick={()=>{navigate('/askAdmin')}} >Ask Co-ordinator</div>
            <div className="prep menuItem" onClick={()=>{navigate('/faq')}} >FAQs</div>
            <div className="prep menuItem" onClick={()=>{navigate('/queries')}} style={{display: queryDisplay}} >Your Queries</div>
        </div>
    )
    }
}