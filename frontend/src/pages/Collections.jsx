import React, { useState } from 'react'

function Collections() {

    let [showFilter, setShowFilter] = useState(false)

    return (
        <div className='w-[99vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start justify-start flex-col md:flex-row overflow-x-hidden z-[2] pt-[70px]'>
            <div className='md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h-[100vh] p-[20px] border-r-[1px] border-gray-400 text-[#aaf5fa] lg:fixed'>
                <p  className='text-[25px] font-semibold flex gap-[5px] items-center justify-start cursor-pointer' onClick={() => setShowFilter(prev => !prev)}>
                    FILTERS
                </p>

                <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"} md:block`}> 
                    <p className='text-[18px] text-[#f8fafa]' >
                        CATEGORIES
                    </p>

                    <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
                        <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
                            <input type="checkbox" value={'Men'} className='w-3' />
                            Men
                        </p>

                        <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
                            <input type="checkbox" value={'Women'} className='w-3' />
                            Women
                        </p>

                        <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
                            <input type="checkbox" value={'Kids'} className='w-3' />
                            Kids
                        </p>
                    </div>
                </div>

                <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"} md:block`}> 
                    <p className='text-[18px] text-[#f8fafa]'>
                        SUB-CATEGORIES
                    </p>

                    <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
                        <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
                            <input type="checkbox" value={'TopWear'} className='w-3' />
                            TopWear
                        </p>

                        <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
                            <input type="checkbox" value={'BottomWear'} className='w-3' />
                            BottomWear
                        </p>

                        <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'>
                            <input type="checkbox" value={'WinterWear'} className='w-3' />
                            WinterWear
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collections