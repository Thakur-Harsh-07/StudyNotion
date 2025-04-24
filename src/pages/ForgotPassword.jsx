import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPasswordResetToken } from '../services/operations/authAPI';
import { FcLeft } from 'react-icons/fc';

const ForgotPassword = () => {
  
   const[emailSent, setEmailSent] = useState(false);
   const[email, setEmail] = useState("");
   const dispatch = useDispatch();

   const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
   }

   const{loading} = useSelector((state)=>state.auth);
  return (
    <div className='flex min-h-[calc(100vh-3.5rem)] w-full items-center justify-center bg-richblack-900'>
        {
            loading? (
                <div className='text-richblack-5'> Loading...</div>
            ):(
                <div className='flex flex-col gap-4 w-full max-w-[500px] p-4 sm:p-8'>
                    <h1 className='text-center text-2xl sm:text-3xl font-bold text-richblack-5'>
                        {
                            !emailSent ? "Reset Password" : "Check Your Email"
                        }
                    </h1>
                    <p className='text-center text-base sm:text-lg text-richblack-200'>
                        {
                            !emailSent ? "Enter the email address you registered with, and we will send you a link to reset your password" : `We have sent the reset email to ${email}`
                        }
                    </p>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        {
                            !emailSent && (
                                <label className='w-full'>
                                    <p className='text-sm sm:text-base text-richblack-200 mb-1'>Email Address <sup className='text-pink-200'>*</sup></p>
                                    <input 
                                        required 
                                        type="email" 
                                        placeholder='Enter your email' 
                                        value={email} 
                                        onChange={(e)=>setEmail(e.target.value)}
                                        className='w-full rounded-md bg-richblack-800 p-3 text-richblack-5 border-b border-richblack-200 focus:outline-none focus:ring-1 focus:ring-yellow-25'
                                    />
                                </label>
                            )
                        }
                        <button 
                            type='submit' 
                            className='mt-4 bg-yellow-25 text-richblack-900 px-4 py-2 rounded-md font-medium hover:bg-yellow-50 transition-all duration-200 w-full sm:w-fit mx-auto'
                        >
                            {
                                !emailSent ? "Reset Password" : "Resend Email"
                            }
                        </button>
                    </form>
                    <div className='mt-2 text-center'>
                        <Link to="/login" className='text-richblack-200 hover:text-yellow-25 transition-all duration-200 text-sm sm:text-base'>
                            <FcLeft className='inline-block mr-2'/>
                            Back to Login
                        </Link>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ForgotPassword;