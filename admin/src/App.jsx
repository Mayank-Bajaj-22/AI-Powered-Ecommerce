import React, { useContext } from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Add from './pages/Add';
import Lists from './pages/Lists';
import Orders from './pages/Orders';
import Login from './pages/Login';
import { adminDataContext } from './context/AdminContext';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  let { adminData, loading } = useContext(adminDataContext);
  if (loading) return null;

  return (
    <>
    <ToastContainer />
    <Routes>
      <Route
        path="/"
        element={adminData ? <Home /> : <Navigate to="/login" />}
      />

      <Route
        path="/add"
        element={adminData ? <Add /> : <Navigate to="/login" />}
      />

      <Route
        path="/lists"
        element={adminData ? <Lists /> : <Navigate to="/login" />}
      />

      <Route
        path="/orders"
        element={adminData ? <Orders /> : <Navigate to="/login" />}
      />

      <Route
        path="/login"
        element={!adminData ? <Login /> : <Navigate to="/" />}
      />
    </Routes>
    </>
  )
}

export default App;