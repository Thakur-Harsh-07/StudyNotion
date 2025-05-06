import React from 'react';
import {FaArrowRight} from "react-icons/fa";
import {Link} from "react-router-dom";
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import Banner from '../Asset/Image/banner.mp4';
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import Footer from '../components/common/Footer';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import ReviewSlider from '../components/common/ReviewSlider';


const Home = () => {
  return (
    <div className="overflow-hidden">
        {/* section 1 */}
        <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent'>

            <Link to={"/signup"} className="w-full sm:w-fit">
                 <div className='group mt-8 sm:mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-full sm:w-fit'>
                    <div className='flex flex-row items-center justify-center gap-2 rounded-full px-4 sm:px-10 py-[5px]
                     transition-all duration-200 group-hover:bg-richblack-900'>
                        <p className="text-sm sm:text-base">Become An Instructor</p>
                        <FaArrowRight className="text-sm sm:text-base"/>
                    </div>
                </div>
            </Link>

            <div className='text-center text-2xl sm:text-3xl md:text-4xl font-semibold mt-7 px-4'>
                Empower Your Future with 
                <HighlightText text={"Coding Skills"}/>
            </div>
            <div className='mt-4 w-[90%] text-center text-sm sm:text-base md:text-lg font-bold text-richblack-300 px-4'>
               With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>

            <div className='flex flex-col sm:flex-row gap-4 sm:gap-7 mt-8 w-full sm:w-auto px-4'>
              
                <CTAButton active={true} linkto={"/signup"} className="w-full sm:w-auto flex">
                  
                  <div className='flex  items-center justify-center gap-3'>
                  Learn More
                  <FaArrowRight className="text-sm sm:text-base"/>
                  </div>
                </CTAButton>

                <CTAButton active={false} linkto={"/login"} className="w-full sm:w-auto">
                    Book a Demo
                </CTAButton>
            </div>

            <div className= 'mx-3 my-8 sm:my-12 shadow-richblue-200 w-full max-w-4xl border border-gray-700 hover:border-blue-600 hover:shadow-blue-700 transition-colors hover:shadow-xl '>
                <video
                muted
                loop
                autoPlay
                className="w-full h-auto"
                >
                    <source src={Banner} type='video/mp4'/>
                </video>
            </div>

            {/* Code section 1 */}
            <div className='flex flex-col lg:flex-row w-full px-4'>
                <CodeBlocks
                  position={"lg:flex-row"}
                  heading={
                    <div className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
                        Unlock Your 
                        <HighlightText text={" coding potential "}/>
                         with our online courses
                    </div>
                  }
                  subheading={
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                  }
                  ctabtn1={
                    {
                        btnText:"try it yourself",
                        linkto:"/signup",
                        active:true,
                    }
                  }
                  ctabtn2={
                    {
                        btnText:"Learn more",
                        linkto:"/login",
                        active:false,
                    }
                  }
                  codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                  codecolor={"text-yellow-25"}
                />
            </div>
             {/* Code section 2 */}
             <div className='flex flex-col lg:flex-row w-full px-4'>
                <CodeBlocks
                  position={"lg:flex-row-reverse"}
                  heading={
                    <div className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
                        Start 
                        <HighlightText text={"coding in "}/>
                        seconds
                    </div>
                  }
                  subheading={
                    "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                  }
                  ctabtn1={
                    {
                        btnText:"Continue Lesson",
                        linkto:"/signup",
                        active:true,
                    }
                  }
                  ctabtn2={
                    {
                        btnText:"Learn more",
                        linkto:"/login",
                        active:false,
                    }
                  }
                  codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                  codecolor={"text-yellow-25"}
                />
            </div>

            <ExploreMore/>

        </div>
        {/* section 2 */}
        <div className='bg-pure-greys-5 text-richblack-700'>
          <div className='homepage_bg h-[200px] sm:h-[310px]'>
              <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                 <div className='h-[100px] sm:h-[150px]'></div>
                <div className='flex flex-col sm:flex-row gap-4 sm:gap-7 text-white w-full sm:w-auto px-4'>
                  <CTAButton active={true} linkto={"/signup"} className="w-full sm:w-auto">
                     <div className='flex items-center justify-center gap-3'>
                      Explore Full Catlog
                      <FaArrowRight/>
                     </div>
                  </CTAButton>
                  <CTAButton active={false} linkto={"/signup"} className="w-full sm:w-auto">
                     <div className='flex items-center justify-center gap-3'>
                      Learn More
                      {/* <FaArrowRight/> */}
                     </div>
                  </CTAButton>
                </div>
              </div>
          </div>

          <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                 <div className='flex flex-col lg:flex-row gap-6 md:gap-10 mb-10 mt-12 sm:mt-24 px-4 md:px-10 lg:px-20 items-center'>
                      <div className='text-2xl sm:text-3xl md:text-4xl font-semibold lg:w-[50%] text-center lg:text-left'>
                      Get The Skills You Need for a <HighlightText text={'Job That is in demand'} />
                </div>
  
                <div className='flex flex-col gap-6 lg:w-[50%] text-center lg:text-left items-center lg:items-start'>
                    <p className='font-semibold text-sm sm:text-base text-richblack-600'>
                       The modern StudyNotion dictates its own terms. Today, to be a competitive
                        specialist requires more than professional skills.
                     </p>
                      <CTAButton active={true} linkto={'/signup'} className="w-full sm:w-auto">
                     <div className='text-sm md:text-base flex justify-center items-center gap-3'>
                           Learn more
                           <FaArrowRight/>
                    </div>
                       </CTAButton>
                   </div>
                </div>
                <TimelineSection/>
                <LearningLanguageSection/>
          </div>
        </div>

        {/* section 3 */}
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8
        bg-richblack-900 text-white px-4'>
          <InstructorSection/>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center mt-8 sm:mt-10'>Review from other learner</h2>
          <div className='w-11/12 border-t border-richblack-700 pt-8 pb-10 sm:pb-20  '>
          <ReviewSlider/>
          </div>
          
        </div>

        {/* footer */}
        <Footer/>
    </div>
  )
}

export default Home