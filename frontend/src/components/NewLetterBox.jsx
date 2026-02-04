import React from 'react'

function NewLetterBox() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='w-[99vw] h-[40vh] flex items-center justify-start flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[10px] md:pt-[20px] pt-[40px]'>
            <p className='md:text-[30px] text-[20px] text-[#a5faf7] font-semibold px-[20px]'>
                Subscribe now & get 20% off
            </p>
            <p className='md:text-[18px] text-[14px] text-center text-blue-100 font-semibold px-[20px]'>
                Subscribe now and enjoy exclusive savings, special deals, and early access to new collections.
            </p>
            <form action="" className='w-[100%] h-[30%] md:h-[50%] flex items-center justify-center mt-[20px] gap-[20px] px-[20px]' onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Your Email' className='placehonder:text-black bg-slate-300 md:w-[600px] max-w-[60%] h-[40px] px-[20px] rounded-lg shadow-sm shadow-black text-[18px]' required />
                <button className='text-[15px] md:text-[16px] px-[10px] md:px-[30px] py-[12px] md:py-[10px] hover:bg-slate-500 cursor-pointer bg-[#2e3030] text-white flex items-center justify-center gap-[20px] border-[1px] border-[#80808049] rounded-lg shadow-sm shadow-black'>
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default NewLetterBox