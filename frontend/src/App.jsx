import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { UserDataContext } from './context/UserContext'

function App() {

  let { userData } = useContext(UserDataContext);

  return (
    <div className='text-3xl'>
        <>
        {
          userData && <Navbar />
        }
          <Routes>
            <Route path="/" element={userData ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={!userData ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!userData ? <Registration /> : <Navigate to="/" />} />
          </Routes>
        </>
    </div>
  )
}

export default App