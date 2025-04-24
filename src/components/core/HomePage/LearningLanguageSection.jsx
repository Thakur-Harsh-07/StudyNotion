import React from 'react';
import HighlightText from './HighlightText';
import know_your_progress from '../../../Asset/Image/Know_your_progress.png';
import compare_with_others from '../../../Asset/Image/Compare_with_others.png';
import plan_your_lesson from '../../../Asset/Image/Plan_your_lessons.png';
import CTAButton from './Button';
import { FaArrowRight } from 'react-icons/fa';

const LearningLanguageSection = () => {
  return (
    <div className='mt-20 md:mt-32 mb-20 md:mb-32 px-4 md:px-10 lg:px-20'>
      <div className='flex flex-col gap-5 items-center text-center'>
        <div className='text-3xl md:text-4xl font-semibold'>
          Your Swiss knife for <HighlightText text={'Learning any Language'} />
        </div>
        <div className='text-richblack-600 mx-auto text-sm md:text-base mt-3  w-full md:w-[80%] lg:w-[70%] font-semibold'>
          Using Spin makes learning multiple languages easy. With 20+ languages, realistic voice-over, 
          progress tracking, a custom schedule, and more.
        </div>
        
        {/* Responsive Image Layout */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0 mt-5'>
          <img
            src={know_your_progress}
            alt='Know your progress'
            className='object-contain  lg:-mr-32'
          />
          <img
            src={compare_with_others}
            alt='Compare with others'
            className='object-contain  lg:-mb-10 lg:-mt-0 -mt-12'
          />
          <img
            src={plan_your_lesson}
            alt='Plan Your Lesson'
            className='object-contain  lg:-ml-36 lg:-mt-5 -mt-16'
          />
        </div>

        <div className='mt-6'>
          <CTAButton active={true} linkto={'/signup'}>
            <div className='flex flex-row items-center gap-2 md:gap-3 text-sm md:text-base'>
              Learn more
              <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
