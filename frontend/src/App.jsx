import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Home'
import LeftMenuBar from './Components/LeftMenuBar'
import CVBulider from './CVbuilder'
import Docs from './Docs'
import Profile from './Profile'
import Landing from './Landing'
import Login from './Login'
import ChangePass from './ChangePass'
import AdminHome from '../admin/admin_home'
import AdminLogin from '../admin/Admin_login'
import AddTrainings from '../admin/AddTrainings'
import AdminLeftBar from './Components/AdminLeftbar'
import Register from './register'
import About from './About'
import NotFound404 from './Components/NotFound404'
import Preparation from './Preparation'
import Contact from './Contact'
import Chatbot from './chatbot'
import { useState } from 'react'
import AddPrep from '../admin/addPrep'
import Students from '../admin/Students'
import AskAdmin from './AskAdmin'
import ResolveQueries from '../admin/ResolveQueries'
import AddCompanies from '../admin/addCompanies'
import FAQ from './faq'
import YourQueries from './YourQueries'

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <div className='content'>
          <LeftMenuBar />
          <AdminLeftBar />
          <div className="div">
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/admin/login' element={<AdminLogin />} />
              <Route path='/admin/home' element={<AdminHome />} />
              <Route path='/admin/trainings' element={<AddTrainings />} />
              <Route path='/admin/preparation' element={<AddPrep />} />
              <Route path='/admin/queries' element={<ResolveQueries />} />
              <Route path='/admin/companies' element={<AddCompanies/>} />
              <Route path='/admin/students' element={<Students />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/home' element={<Home />} />
              <Route path='/changePass' element={<ChangePass />} />
              <Route path='/cvbuilder' element={<CVBulider />} />
              <Route path='/Docs' element={<Docs />} />
              <Route path='/preparation' element={<Preparation />} />
              <Route path='/askAdmin' element={<AskAdmin />} />
              <Route path='/queries' element={<YourQueries />} />
              <Route path='/register' element={<Register />} />
              <Route path='/Profile' element={<Profile />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='*' element={<NotFound404 />} />

            </Routes>
          </div>
        </div>
      </Router>
      <div className='app-footer'>
        <Chatbot />
      </div>
    </div>
  )
}

export default App
