import '../../styles/user/home.css'
import { useNavigate } from 'react-router-dom';
export default function AdminLeftBar() {
    const navigate = useNavigate();
    let location = window.location.pathname;
    if(location.includes('/admin/') && location != '/admin/login')
    return (

        <div className="menu" style={{fontWeight: "bold"}}>
            <div className="index menuItem" onClick={() => { navigate('/admin/home') }} >Dashboard</div>
            <div className="CVBulider menuItem" onClick={() => { navigate('/admin/companies') }} > Add Companies</div>
            <div className="Docs menuItem" onClick={() => { navigate('/admin/students') }} >Students</div>
            <div className="prep menuItem" onClick={() => { navigate('/admin/preparation') }} >Preparation</div>
            <div className="train menuItem" onClick={() => { navigate('/admin/trainings') }} >Trainings</div>
            <div className="queries menuItem" onClick={() => { navigate('/admin/queries') }} >Queries</div>
        </div>

    )
}



