import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import IconButton from '../../common/IconButton';
import { FaRegUser } from "react-icons/fa";

const MyProfile = () => {
    const { user } = useSelector((state) => state.profile);
    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-6 sm:gap-8 md:gap-10 text-white max-w-[1000px] w-full'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-medium text-richblack-5 mb-4 sm:mb-6'>
                My Profile
            </h1>

            {/* Section 1 - Profile Info */}
            <div className='bg-richblack-800 rounded-lg border border-richblack-700 p-4 sm:p-6'>
                <div className='flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6'>
                    <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6'>
                        {user?.image ? (
                            <img 
                                src={user?.image}
                                alt={`profile-${user?.firstName}`}
                                className='aspect-square w-[60px] sm:w-[78px] md:w-[100px] rounded-full object-cover border-2 border-richblack-700'
                            />
                        ) : (
                            <div className='flex items-center justify-center aspect-square w-[60px] sm:w-[78px] md:w-[100px] rounded-full bg-richblack-700 border-2 border-richblack-600'>
                                <FaRegUser className='w-1/2 h-1/2 text-richblack-300' />
                            </div>
                        )}
                        <div className='text-center sm:text-left'>
                            <p className='text-base sm:text-lg md:text-xl font-semibold text-richblack-5'>{user?.firstName + " " + user?.lastName}</p>
                            <p className='text-xs sm:text-sm md:text-base text-richblack-300'>{user?.email}</p>
                        </div>
                    </div>
                    <IconButton
                        text="Edit"
                        onClick={() => navigate("/dashboard/settings")}
                        customClasses="text-sm sm:text-base"
                    />
                </div>
            </div>

            {/* Section 2 - About */}
            <div className='bg-richblack-800 rounded-lg border border-richblack-700 p-4 sm:p-6'>
                <div className='flex items-center justify-between mb-4 sm:mb-6'>
                    <p className='text-base sm:text-lg md:text-xl font-semibold text-richblack-5'>About</p>
                    <IconButton
                        text="Edit"
                        onClick={() => navigate("/dashboard/settings")}
                        customClasses="text-sm sm:text-base"
                    />
                </div>
                <p className='text-sm sm:text-base md:text-lg text-richblack-300 font-medium'>
                    {user?.additionalDetails?.about ?? "Write Something About Yourself"}
                </p>
            </div>

            {/* Section 3 - Personal Details */}
            <div className='bg-richblack-800 rounded-lg border border-richblack-700 p-4 sm:p-6'>
                <div className='flex items-center justify-between mb-4 sm:mb-6'>
                    <p className='text-base sm:text-lg md:text-xl font-semibold text-richblack-5'>Personal Details</p>
                    <IconButton
                        text="Edit"
                        onClick={() => navigate("/dashboard/settings")}
                        customClasses="text-sm sm:text-base"
                    />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    <div className='flex flex-col gap-1 sm:gap-2'>
                        <p className='text-xs sm:text-sm text-richblack-300'>First Name</p>
                        <p className='text-sm sm:text-base font-medium text-richblack-5'>{user?.firstName}</p>
                    </div>
                    <div className='flex flex-col gap-1 sm:gap-2'>
                        <p className='text-xs sm:text-sm text-richblack-300'>Last Name</p>
                        <p className='text-sm sm:text-base font-medium text-richblack-5'>{user?.lastName}</p>
                    </div>
                    <div className='flex flex-col gap-1 sm:gap-2'>
                        <p className='text-xs sm:text-sm text-richblack-300'>Email</p>
                        <p className='text-sm sm:text-base font-medium text-richblack-5'>{user?.email}</p>
                    </div>
                    <div className='flex flex-col gap-1 sm:gap-2'>
                        <p className='text-xs sm:text-sm text-richblack-300'>Phone Number</p>
                        <p className='text-sm sm:text-base font-medium text-richblack-5'>{user?.additionalDetails?.contactNumber ?? "Add Contact Number"}</p>
                    </div>
                    <div className='flex flex-col gap-1 sm:gap-2'>
                        <p className='text-xs sm:text-sm text-richblack-300'>Gender</p>
                        <p className='text-sm sm:text-base font-medium text-richblack-5'>{user?.additionalDetails?.gender ?? "Add Gender"}</p>
                    </div>
                    <div className='flex flex-col gap-1 sm:gap-2'>
                        <p className='text-xs sm:text-sm text-richblack-300'>Date Of Birth</p>
                        <p className='text-sm sm:text-base font-medium text-richblack-5'>{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile