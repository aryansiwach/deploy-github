// Top-level route table for the app.
//
//   /                       Home            vendor catalog browser + cover sheet builder
//   /signup, /login         Signup, Login   account creation / JWT session login
//   /forgotPassword         ForgotPassword  request a password-reset email
//   /resetPassword/:token   ResetPassword   set a new password from the emailed link
//   /Profile                Profile         account page
//   /ReferenceSheet         ReferenceSheet  opens the static reference spreadsheet
//   /ExportPdf              ExportPdf       stub -- not yet implemented
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import ExportPdf from './components/ExportPdf'
import Profile from './components/Profile'
import ReferenceSheet from './components/ReferenceSheet'


function App() {
  

  return (
    
  
    <BrowserRouter>
      <Routes>
        
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<Home/>}></Route> 
        <Route path='/login' element={<Login />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
        <Route path = "/resetPassword/:token" element={<ResetPassword />}></Route>
        <Route path="/ReferenceSheet" element={<ReferenceSheet />}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/ExportPdf' element={<ExportPdf/>}></Route>
      </Routes>

    </BrowserRouter>
    
    
  )
}

export default App

