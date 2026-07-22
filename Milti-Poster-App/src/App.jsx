import { Routes, Route, Navigate } from 'react-router-dom'

import { Register } from '../Components/Login/Register'
import { AdminPage } from '../Components/AdminPage/AdminPage'
import { General } from '../Components/Main/General'


import './App.css'



function App() {
  return (
    <>      
        <Routes>
          <Route path='/' element = {<General />}/>
          <Route path='/login' element = {<Register />}/>
          <Route path='/adminPage' element = {<AdminPage />}/>
        </Routes>
    </>
  )
}

export default App
