import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] bg-richblack-900 text-richblack-5 p-4 sm:p-8'>
        <div className='flex flex-col items-center gap-4 sm:gap-6 max-w-2xl text-center'>
            <h1 className='text-6xl sm:text-8xl font-bold text-blue-50'>404</h1>
            <h2 className='text-2xl sm:text-3xl font-semibold'>Page Not Found</h2>
          
            <button
                onClick={() => navigate("/")}
                className='flex items-center gap-2 px-4 py-2 mt-4 text-sm sm:text-base font-medium text-richblack-900 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-all duration-200'
            >
                <FaHome className='text-lg'/>
                <span>Back to Home</span>
            </button>
        </div>
    </div>
  )
}

export default Error