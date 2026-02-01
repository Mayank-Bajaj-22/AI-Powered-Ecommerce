import React, { useContext } from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom';
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';
import { adminDataContext } from '../context/AdminContext';

function Navbar() {

    let navigate = useNavigate();
    let { serverUrl } = useContext(authDataContext);
    let { getAdmin } = useContext(adminDataContext)

    const handleLogOut = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true })
            console.log(result.data);
            await getAdmin();
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black'>

            <div className='w-[30%] flex items-center justify-start gap-[10px] cursor-pointer' onClick={() => navigate("/")}>
                <img src={logo} className='w-[35px]' alt="" />
                <h1 className='text-[25px] text-black font-sans'>Vnyta</h1>
            </div>

            <button className='text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white' onClick={handleLogOut}>
                LogOut
            </button>

        </div>
    )
}

export default Navbar;