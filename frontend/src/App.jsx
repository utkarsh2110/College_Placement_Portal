import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Home'
import LeftMenuBar from './Components/LeftMenuBar'
import CVBulider from './CVbuilder'
import Docs from './Docs'
import Profile from './profile'
import Landing from './Landing'
import Login from './Login'
import ChangePass from './changePass'
import AdminHome from  '../admin/admin_home'
import AdminLogin from '../admin/Admin_login'
import AddTrainings from '../admin/addTrainings'
import AdminLeftBar from './Components/AdminLeftbar'
import Register from './register'
import About from './About'


function App() {
  
  return (
    <>
    <Router>
          
          <Navbar />
          <div className='content'>
            <LeftMenuBar /> 
            <AdminLeftBar/>
            <div className="div">
            <Routes>
              <Route path='/' element ={<Landing/>}/> 
              <Route path='/admin/login' element ={<AdminLogin/>}/> 
              <Route path='/admin/home' element ={<AdminHome/>}/> 
              <Route path='/admin/trainings'element={<AddTrainings/>}/>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/about' element={<About />} />
              <Route path='/home' element={<Home />} />
              <Route path='/changePass' element={<ChangePass/>} />
              <Route path='/cvbuilder' element={<CVBulider/>} />
              <Route path='/Docs' element={<Docs/>} />
              <Route path='/Profile' element={<Profile/>} />
              <Route path='*' element={<h1>404</h1>} />
          
            </Routes>
          </div> 
          </div>
    </Router>

    </>
  )
}

export default App