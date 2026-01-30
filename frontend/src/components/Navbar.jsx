import React, { useContext, useState } from 'react';
import logo from "../assets/logo.png"
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { UserDataContext } from '../context/UserContext';

function Navbar() {

    let { userData } = useContext(UserDataContext);
    let [showSearch, setShowSearch] = useState(false);

    return (
        <div className='w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black'>
            
            <div className='w-[30%] flex items-center justify-start gap-[10px]'>
                <img src={logo} className='w-[35px]' alt="" />
                <h1 className='text-[25px] text-black font-sans'>Vnyta</h1>
            </div>

            <div className='w-[40%]'>
                <ul className='flex items-center justify-center gap-[19px] text-white'>
                    <li className='text-[15px] hover:bg-slate-600 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>HOME</li>
                    <li className='text-[15px] hover:bg-slate-600 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>COLLECTIONS</li>
                    <li className='text-[15px] hover:bg-slate-600 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>ABOUT</li>
                    <li className='text-[15px] hover:bg-slate-600 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>CONTACT</li>
                </ul>
            </div>

            <div className='w-[30%] flex items-center justify-end gap-[20px]'>
                {
                    !showSearch && <IoSearchCircleOutline className='w-[38px] h-[38px] text-[#000000] cursor-pointer' onClick={() => setShowSearch(prev => !prev)} />
                }

                {
                    showSearch && <IoSearchCircleSharp className='w-[38px] h-[38px] text-[#000000] cursor-pointer' onClick={() => setShowSearch(prev => !prev)} />
                }

                {
                    !userData && <FaCircleUser className='w-[29px] h-[29px] text-[#000000] cursor-pointer' />
                }

                {
                    userData && <div className='w-[30px] h-[30px] bg-[#080808] text-white rounded-full flex items-center jiustify-center p-[5px] text-[22px] cursor-pointer'>{ userData?.name.slice(0,1)}</div>
                }
                
                <MdOutlineShoppingCart className='w-[30px] h-[30px] text-[#000000] cursor-pointer' />
                <p className='absolute w-[19px] h-[19px] items-center justify-center bg-black px-[5px] py-[3px] text-white rounded-full text-[10px] top-[12px] right-[23px]'>10</p>
            </div>

            {
                showSearch && <div className='w-[100%] h-[80px] absolute top-[100%] left-0 right-0 flex items-center justify-center'>
                    <input type="text" className='w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[18px]' />
                </div> 
            }
        </div>
    )
}

export default Navbar;

// bg-[#d8f6f9dd]