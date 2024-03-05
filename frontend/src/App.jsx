import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import - Components
import Navbar from './pages/Components/Navbar'
import LeftMenuBar from './pages/Components/LeftMenuBar'
import NotFound404 from './pages/Components/NotFound404'
import AdminLeftBar from './pages/Components/AdminLeftbar'

// import - user
import Home from './pages/user/Home'
import CVBulider from './pages/user/CVbuilder'
import Docs from './pages/user/Docs'
import Profile from './pages/user/Profile'
import ChangePass from './pages/user/ChangePass'
import Chatbot from './pages/user/chatbot'
import AskAdmin from './pages/user/AskAdmin'
import FAQ from './pages/user/faq'
import YourQueries from './pages/user/YourQueries'
import Preparation from './pages/user/Preparation'

// import - admin
import AdminHome from './pages/admin/admin_home'
import AdminLogin from './pages/admin/Admin_login'
import AddTrainings from './pages/admin/AddTrainings'
import AddPrep from './pages/admin/addPrep'
import Students from './pages/admin/Students'
import ResolveQueries from './pages/admin/ResolveQueries'
import AddCompanies from './pages/admin/addCompanies'

// import - general pages
import Landing from './pages/Landing'
import Login from './pages//Login'
import Register from './pages/register'
import About from './pages/About'
import Contact from './pages/Contact'




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
              <Route path='/admin/companies' element={<AddCompanies />} />
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
