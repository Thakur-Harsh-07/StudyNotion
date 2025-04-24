import React from 'react'
import ContactUsForm from '../components/ContactPage/ContactUsForm'
import { IoChatbubbleEllipsesSharp } from "react-icons/io5"
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import Footer from '../components/common/Footer';
import ReviewSlider from '../components/common/ReviewSlider';

const Contact = () => {
  return (
    <div className='flex flex-col min-h-screen bg-richblack-900'>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 p-4 sm:p-6 md:p-8 lg:p-12 max-w-7xl mx-auto flex-1'>
          {/* Left Section */}
          <div className='flex flex-col gap-8 lg:gap-12 w-full lg:w-1/2'>
              <div className='bg-richblack-800 p-6 sm:p-8 rounded-xl border border-richblack-700'>
                  <div className='flex items-center gap-3 mb-4'>
                      <IoChatbubbleEllipsesSharp className='text-2xl sm:text-3xl text-blue-50'/>
                      <h1 className='text-xl sm:text-2xl font-bold text-richblack-5'>Chat on us</h1>
                  </div>
                  <p className='text-richblack-200 text-sm sm:text-base mb-2'>
                      Our friendly team is here to help
                  </p>
                  <strong className='text-blue-50 text-base sm:text-lg'>info@Studynotion</strong>
              </div>

              <div className='bg-richblack-800 p-6 sm:p-8 rounded-xl border border-richblack-700'>
                  <div className='flex items-center gap-3 mb-4'>
                      <FaMapMarkerAlt className='text-2xl sm:text-3xl text-blue-50'/>
                      <h1 className='text-xl sm:text-2xl font-bold text-richblack-5'>
                          Visit Us
                      </h1>
                  </div>
                  <p className='text-richblack-200 text-sm sm:text-base mb-2'>Come and say hello at our office HQ.</p>
                  <strong className='text-blue-50 text-base sm:text-lg'>Lucknow NEAR BBD</strong>
              </div>

              <div className='bg-richblack-800 p-6 sm:p-8 rounded-xl border border-richblack-700'>
                  <div className='flex items-center gap-3 mb-4'>
                      <MdOutlineWifiCalling3 className='text-2xl sm:text-3xl text-blue-50'/>
                      <h1 className='text-xl sm:text-2xl font-bold text-richblack-5'>Call us</h1>
                  </div>
                  <p className='text-richblack-200 text-sm sm:text-base mb-2'>Mon-fri from 8am to 8pm</p>
                  <strong className='text-blue-50 text-base sm:text-lg'>+91 9876700000</strong>
              </div>
          </div>

          {/* Right Section */}
          <div className='w-full lg:w-1/2'>
              <div className='mb-6 sm:mb-8'>
                  <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-richblack-5 mb-3 sm:mb-4'>
                      Got a idea? We've got the skills.
                      <span className='text-richblue-200'> Let's team up</span>
                  </h1>
                  <p className='text-richblack-200 text-sm sm:text-base'>
                      Tell us more about yourself and what you're got in mind
                  </p>
              </div>
              <ContactUsForm/>
          </div>
      </div>
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
                {/* Reviews from Other Learner */}
                <h1 className="text-center text-4xl font-semibold mt-8">
                    Reviews from other learners
                </h1>
                <div className='w-11/12 border-t border-richblack-700 pt-8 pb-10 sm:pb-20  '>
                    <ReviewSlider/>
                </div>
            </div>
      {/* Footer Section */}
      <div className='mt-auto'>
          <Footer/>
      </div>
    </div>
  )
}

export default Contact