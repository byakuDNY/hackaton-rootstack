import React from 'react'

const Integrante = ({Integrante}) => {
    return (
        <div className='flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md gap-y-4'>
            <img src={Integrante.image} className='w-64 h-auto rounded-full' />
            <p className='text-xl font-semibold text-gray-800 mb-2'>{Integrante.name}</p>
            <div className='flex gap-x-4'>
                <a href={Integrante.github}>
                    <img src="/github.svg" alt="" className='w-8 h-8 hover:scale-110 transition-transform duration-200 cursor-pointer' />
                </a>
                <a href={Integrante.linkedin}>
                    <img src="/linkedin.svg" alt="" className='w-8 h-8 hover:scale-110 transition-transform duration-200 cursor-pointer' />
                </a>
            </div>
        </div>
    )
}

export default Integrante