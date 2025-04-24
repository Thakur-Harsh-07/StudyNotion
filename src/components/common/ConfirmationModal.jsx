import React from 'react'
import IconButton from './IconButton'

const ConfirmationModal = ({modalData}) => {
  return (
    <div className='fixed inset-0 z-[1000] flex items-center justify-center bg-richblack-900 bg-opacity-75 backdrop-blur-sm'>
        <div className='flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 bg-richblack-800 rounded-xl border border-richblack-700 w-[90%] max-w-[500px]'>
            <div className='flex flex-col gap-3 sm:gap-4'>
                <p className='text-lg sm:text-xl md:text-2xl font-semibold text-richblack-5 text-center'>
                    {modalData.text1}
                </p>
                <p className='text-sm sm:text-base md:text-lg text-richblack-200 text-center'>
                    {modalData.text2}
                </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center'>
                <IconButton
                    onClick={modalData?.btn1Handler}
                    text={modalData?.btn1Text}
                    customClasses="w-full sm:w-auto text-sm sm:text-base"
                />
                <button 
                    onClick={modalData?.btn2Handler}
                    className='w-full sm:w-auto px-3 sm:px-4 py-2 text-sm sm:text-base font-medium text-richblack-900 bg-richblack-200 rounded-lg hover:bg-richblack-100 transition-all duration-200'
                >
                    {modalData?.btn2Text}
                </button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationModal