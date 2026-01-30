import React from 'react';
import back1 from "../assets/back1.jpg"
import back2 from "../assets/back2.jpg"
import back3 from "../assets/back3.jpg"
import back4 from "../assets/back4.jpg"

function Background({ heroCount }) {
    if (heroCount === 0) {
        return <img src={back1} className='w-[100%] h-[100%] float-left overflow-auto object-cover' alt="" />
    } else if (heroCount === 1) {
        return <img src={back2} className='w-[100%] h-[100%] float-left overflow-auto object-cover' alt="" />
    } else if (heroCount === 2) {
        return <img src={back3} className='w-[100%] h-[100%] float-left overflow-auto object-cover' alt="" />
    } else {
        return <img src={back4} className='w-[100%] h-[100%] float-left overflow-auto object-cover' alt="" />
    }
}

export default Background