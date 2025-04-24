import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/core/Dashboard/Sidebar';
import { FaSpinner } from "react-icons/fa";

const Dashboard = () => {
    const{loading:authLoading} = useSelector((state)=> state.auth);
    const{loading:profileLoading} = useSelector((state)=> state.profile);

    if(profileLoading || authLoading){
        return(
            <div className='flex items-center justify-center min-h-[calc(100vh-3.5rem)] bg-richblack-900'>
                <div className='flex flex-col items-center gap-3 sm:gap-4'>
                    <FaSpinner className='animate-spin text-3xl sm:text-4xl text-yellow-50' />
                    <p className='text-base sm:text-lg md:text-xl text-richblack-5'>Loading...</p>
                </div>
            </div>
        )
    }

    return (
        <div className='relative flex min-h-[calc(100vh-3.5rem)] bg-richblack-900'>
            <Sidebar/>
            <div className='h-[calc(100vh-3.5rem)] flex-1 overflow-auto'>
                <div className='mx-auto w-11/12 max-w-[1000px] py-6 sm:py-8 md:py-10'>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard