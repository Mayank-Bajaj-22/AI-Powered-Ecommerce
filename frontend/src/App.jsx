import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <div className='text-3xl'>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Registration />} />
          </Routes>
        </>
    </div>
  )
}

export default App