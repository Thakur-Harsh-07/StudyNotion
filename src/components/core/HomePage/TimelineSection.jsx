import React from 'react';
import Logo1 from '../../../Asset/TimeLineLogo/Logo1.svg';
import Logo2 from '../../../Asset/TimeLineLogo/Logo2.svg';
import Logo3 from '../../../Asset/TimeLineLogo/Logo3.svg';
import Logo4 from '../../../Asset/TimeLineLogo/Logo4.svg';
import timelineImage from '../../../Asset/Image/TimelineImage.png';

const timeline = [
  {
    logo: Logo1,
    heading: 'Leadership',
    Description: 'Fully committed to the success of the company',
  },
  {
    logo: Logo2,
    heading: 'Responsibility',
    Description: 'Students will always be our top priority',
  },
  {
    logo: Logo3,
    heading: 'Flexibility',
    Description: 'The ability to switch is an important skills',
  },
  {
    logo: Logo4,
    heading: 'Solve the problem',
    Description: 'Code your way to a solution',
  },
];

const TimelineSection = () => {
  return (
    <div className='px-4 md:px-10 lg:px-20 py-10'>
      <div className='flex flex-col lg:flex-row items-center gap-10'>
        {/* Timeline Items */}
        <div className='lg:w-[45%] flex flex-col gap-6'>
          {timeline.map((element, index) => (
            <div className='flex items-start gap-4' key={index}>
              <div className='w-[50px] h-[50px] bg-white flex items-center justify-center shadow-md rounded-full'>
                <img src={element.logo} alt='timeline logo' className='w-10 h-10' />
              </div>
              <div>
                <h2 className='font-semibold text-lg md:text-xl'>{element.heading}</h2>
                <p className='text-sm font-semibold md:text-base'>{element.Description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Image & Stats */}
        <div className='relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]'>
          <img
            src={timelineImage}
            alt='timeline'
            className='shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit'
          />

          <div
            className='absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 
            '
          >
            <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[75px]">10</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                Years experiences
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[75px]">250</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                types of courses
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;