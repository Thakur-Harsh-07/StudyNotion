import React from 'react'
import CTAButton from '../HomePage/Button';
import HighlightText from './HighlightText';
import { FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codecolor
}) => {
  return (
    <div className={`flex flex-col ${position} my-10 sm:my-20 justify-between gap-6 sm:gap-10 px-4 sm:px-0`}>
        {/* Section 1 */}
        <div className='w-full lg:w-[50%] flex flex-col gap-4 sm:gap-8'>
            <div className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
                {heading}
            </div>
            <div className='text-sm sm:text-base text-richblack-300 font-bold'>
                {subheading}
            </div>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-7 mt-4 sm:mt-7'>
                <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto} className="w-full sm:w-auto">
                    <div className='flex gap-2 items-center justify-center sm:justify-start'>
                        {ctabtn1.btnText}
                        <FaArrowRight className="text-sm sm:text-base"/>
                    </div>
                </CTAButton>
                <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto} className="w-full sm:w-auto">
                    <div className="text-sm sm:text-base">
                        {ctabtn2.btnText}
                    </div>
                </CTAButton>
            </div>
        </div>

        {/* Section 2 */}
        <div className='h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-full lg:w-[470px] bg-gradient-to-br from-yellow-5 via-yellow-25 to-yellow-25'>
            {/* Line numbers */}
            <div className='text-center flex flex-col w-[10%] select-none text-richblack-400 font-inter font-bold'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>
            <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codecolor} pr-1 overflow-x-auto`}>
                <TypeAnimation
                    sequence={[codeblock,2000,""]}
                    cursor={true}
                    repeat={Infinity}
                    style={{
                        whiteSpace:"pre-line",
                        display:"block",
                    }}
                    omitDeletionAnimation={true}
                />
            </div>
        </div>
    </div>
  )
}

export default CodeBlocks