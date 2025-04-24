import React from 'react';
import Instructor from '../../../Asset/Image/Instructor.png';
import HighlightText from './HighlightText';
import CTAButton from './Button';
import { FaArrowRight } from 'react-icons/fa';

const InstructorSection = () => {
  return (
    <div className='mt-16 px-4 md:px-10 lg:px-20'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center'>
        {/* Instructor Image */}
        <div className='w-full md:w-1/2'>
          <img src={Instructor} alt='Instructor' className='shadow-lg rounded-lg w-full' />
        </div>

        {/* Text Content */}
        <div className='w-full md:w-1/2 flex flex-col gap-6 md:gap-10 text-center md:text-left'>
          <div className='text-3xl md:text-4xl font-semibold'>
            Become an <HighlightText text={'Instructor'} />
          </div>
          <p className='font-semibold text-md md:text-base text-richblack-300 md:w-[80%] mx-auto md:mx-0'>
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className='w-fit mx-auto md:mx-0'>
            <CTAButton active={true} linkto={'/signup'}>
              <div className='flex flex-row gap-2 items-center text-sm md:text-base'>
                Start Learning today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;