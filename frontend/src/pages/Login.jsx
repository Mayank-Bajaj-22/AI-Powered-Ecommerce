import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { authDataContext } from "../context/authContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/Firebase";
import { UserDataContext } from "../context/UserContext";
import Loading from "../components/Loading";

function Login() {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    let { getCurrentUser } = useContext(UserDataContext);
    let [loading,setLoading] = useState(false)

    let { serverUrl } = useContext(authDataContext);

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let result = await axios.post(serverUrl + "/api/auth/login" , {
                email, password
            }, { withCredentials: true })
            console.log(result.data);
            setEmail("")
            setPassword("")
            await getCurrentUser()
            navigate("/")
        } catch (error) {
            if (error.response) {
                console.log("Backend error:", error.response.data);
                console.log("Status:", error.response.status);
            } else {
                console.log(error.message);
            }
        }
    }

    const googleLogin = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            let user = response.user;
            let name = user.displayName;
            let email = user.email;
                
            const result = await axios.post(serverUrl + "/api/auth/googlelogin", {
                name, email
            }, { withCredentials: true })
    
            console.log(result.data)
            getCurrentUser()
            navigate("/")
        } catch (error) {
            if (error.response) {
                console.log("Backend error:", error.response.data);
                console.log("Status:", error.response.status);
            } else {
                console.log(error.message);
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

        <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
            <span className="text-[24px] font-semibold">Login Page</span>
            <span className="text-[16px]">Welcome to Vnyta, Place your order</span>
            <span></span>
        </div>

        <div className="max-w-[550px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center mb-[20px] py-[20px]">
            <form className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]" onSubmit={handleLogin}>
            <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer" onClick={googleLogin}>
                <img src={google} className="w-[25px]" alt="" />{" "}
                <span className="text-[18px]">Login with Google</span>
            </div>

            <div className="w-[100%] text-[20px] h-[20px] flex items-center justify-center gap-[20px] mt-[20px]">
                <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
                OR
                <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
            </div>

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
                    className="absolute w-[20px] h-[20px] cursor-pointer top-[95px] md:top-[105px] right-[20px]"
                    onClick={() => setShow((prev) => !prev)}
                />
                )}
                {!show && (
                <FiEyeOff
                    className="absolute w-[20px] h-[20px] cursor-pointer md:top-[105px] top-[95px] right-[20px]"
                    onClick={() => setShow((prev) => !prev)}
                />
                )}

                <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold">
                {loading? <Loading /> : "Login"}
                </button>

                <p className="flex gap-[10px] text-[17px]">
                You haven't any account?
                <span className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer hover:underline" onClick={() => navigate("/signup")}>
                    Create new account
                </span>
                </p>
            </div>
            </form>
        </div>
        </div>
    );
}

export default Login;