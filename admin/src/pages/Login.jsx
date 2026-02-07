import React, { useContext, useState } from 'react'
import Logo from "../assets/Logo.png"
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';
import { adminDataContext } from '../context/AdminContext';
import { toast } from 'react-toastify';

function Login() {

    const navigate = useNavigate();

    let { serverUrl } = useContext(authDataContext);

    const [show, setShow] = useState(false);

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    let { adminData, getAdmin } = useContext(adminDataContext)

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        try {
            let result = await axios.post(serverUrl + "/api/auth/adminlogin", { email, password }, {
                withCredentials: true
            })
            console.log(result.data);
            toast.success("AdminLogin Successfully")
            setEmail("")
            setPassword("")
            getAdmin()
            navigate("/")
        } catch (error) {
            if (error.response) {
                console.log("Backend error:", error.response.data);
                console.log("Status:", error.response.status);
                toast.error("AdminLogin Failed")
            } else {
                console.log(error.message);
                toast.error("AdminLogin Failed")
            }
        }
    }

    return (
        <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
            
            <div
                className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
                onClick={() => navigate("/")}
            >
                <img className="w-[40px]" src={Logo} alt="" />
                <h1 className="text-[20px] font-sans">Vnyta</h1>
            </div>
                <div className='w-[100vw] h-[100vh] flex items-center flex-col justify-center'>
            <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
                <span className="text-[24px] font-semibold">Login Page</span>
                <span className="text-[16px]">Welcome to Vnyta, Place your order</span>
                <span></span>
            </div>

            <div className="max-w-[550px] w-[90%] md:h-[400px] h-[300px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center mb-[20px] py-[20px]">
                <form className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]" onSubmit={handleAdminLogin}>

                <div className="w-[90%] h-[500px] flex flex-col items-center justify-center gap-[15px] relative text-[19px]">

                    <input
                    className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px]"
                    type="email"
                    placeholder="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    required
                    />

                    <input
                    className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px]"
                    type={show ? "text" : "password"}
                    placeholder="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    required
                    />

                    {show && (
                    <FiEye
                        className="absolute w-[20px] h-[20px] cursor-pointer md:top-[142px] top-[98px] right-[20px]"
                        onClick={() => setShow((prev) => !prev)}
                    />
                    )}
                    {!show && (
                    <FiEyeOff
                        className="absolute w-[20px] h-[20px] cursor-pointer md:top-[142px] top-[98px] right-[20px]"
                        onClick={() => setShow((prev) => !prev)}
                    />
                    )}

                    <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold">
                    Login
                    </button>

                </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Login