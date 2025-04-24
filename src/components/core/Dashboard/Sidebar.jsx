import React, { useState } from 'react'
import { sidebarLinks } from "../../../data/Dashboard-Link";
import { logout } from '../../../services/operations/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import SidebarLinks from './SidebarLinks';
import { useNavigate } from 'react-router-dom';
import { VscSignOut } from 'react-icons/vsc';
import ConfirmationModal from '../../common/ConfirmationModal';
import { VscSettingsGear } from "react-icons/vsc";
import { FaSpinner } from "react-icons/fa";

const Sidebar = () => {
    const { user, loading: profileLoading } = useSelector((state) => state.profile);
    const { loading: authLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [confirmationModal, setConfirmationModal] = useState(null);

    if (profileLoading || authLoading) {
        return (
            <div className='flex items-center justify-center min-h-[calc(100vh-3.5rem)] bg-richblack-800'>
                <div className='flex flex-col items-center gap-3 sm:gap-4'>
                    <FaSpinner className='animate-spin text-3xl sm:text-4xl text-yellow-50' />
                    <p className='text-base sm:text-lg md:text-xl text-richblack-5'>Loading...</p>
                </div>
            </div>
        )
    }

    return (
        <div className='flex min-w-[200px] sm:min-w-[222px] flex-col border-r-[1px] border-r-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-800 py-6 sm:py-8 md:py-10'>
            <div className='flex flex-col gap-2 sm:gap-3'>
                {sidebarLinks.map((link, index) => {
                    if (link.type && user?.accountType !== link.type) return null;
                    return (
                        <SidebarLinks key={link.id} link={link} iconName={link.icon} />
                    )
                })}
            </div>

            <div className='mx-auto mt-4 sm:mt-6 mb-4 sm:mb-6 h-[1px] w-10/12 bg-richblack-600'></div>

            <div className='flex flex-col gap-2 sm:gap-3'>
                <SidebarLinks
                    link={{ name: "Settings", path: "dashboard/settings" }}
                    iconName="VscSettingsGear"
                />

                <button
                    onClick={() => setConfirmationModal({
                        text1: "Are You Sure ?",
                        text2: "You will be logged out of your Account",
                        btn1Text: "Logout",
                        btn2Text: "Cancel",
                        btn1Handler: () => dispatch(logout(navigate)),
                        btn2Handler: () => setConfirmationModal(null),
                    })}
                    className='flex items-center gap-x-2 px-3 sm:px-4 py-2 text-sm sm:text-base font-medium text-richblack-300 hover:bg-richblack-700 hover:text-richblack-50 transition-all duration-200 rounded-md'
                >
                    <VscSignOut className='text-base sm:text-lg' />
                    <span>Logout</span>
                </button>
            </div>

            {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
        </div>
    )
}

export default Sidebar