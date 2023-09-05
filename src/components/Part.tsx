import React, { useState, useEffect } from 'react'

interface data {
    data: string | number
}

const Part = ( { data } : data ) => {

    let animate = 'clock'
    let anim = ['h-20 w-40 rounded-xl bg-gray-600 absolute origin-bottom z-10', animate]


    return (
        <div className='h-40 w-40 justify-center items-center flex-col text-3xl relative ease-in duration-150  z-20' >
            <span className={`${anim.join(' ')}`}></span>
            <span className='h-6 w-6 rounded-full bg-gray-800 absolute z-30 top-1/2 -translate-x-3 -translate-y-3' ></span>
            <div className='h-full w-full flex bg-gray-700 justify-center z-20 items-center rounded-xl relative'>
                <p className='text-red-400 z-10 text-8xl font-bold Imain'>{ data }</p>
                <span className='absolute h-1/2 w-full bg-black opacity-20 -translate-y-10 rounded-t-xl '></span>
            </div>
            <span className='h-6 w-6 rounded-full bg-gray-800 absolute z-30 top-1/2 right-0 translate-x-3 -translate-y-3'></span>
        </div>
    )
}

export default Part