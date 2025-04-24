import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {getUserEnrolledCourses}from '../../../services/operations/profileAPI'
import ProgressBar from '@ramonak/react-progress-bar'
import { useNavigate } from 'react-router-dom'

const EnrolledCourses = () => {
    const{token} = useSelector((state)=>state.auth);
    const[enrolledCourses, setEnrolledCourses] = useState(null);
    const navigate = useNavigate();

    const getEnrolledCourse = async () => {
        try{
            const response = await getUserEnrolledCourses(token);
            setEnrolledCourses(response);
        }
        catch(err){
            console.log("unable to fetch Enrolled courses")
        }
    }

    useEffect(()=>{
      getEnrolledCourse();
    },[])

  return (
    <div className="text-richblack-5">
        <h1 className="text-3xl font-medium text-richblack-5 mb-8">Enrolled Courses</h1>
        {
            !enrolledCourses ? (
                <div className="flex items-center justify-center h-[50vh]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-50"></div>
                </div>
            ) :
            !enrolledCourses.length ? (
                <div className="flex items-center justify-center h-[50vh]">
                    <p className="text-2xl text-richblack-100">You have not enrolled in any course</p>
                </div>
            ) : (
                <div className="space-y-6">
                   <div className="grid grid-cols-3 gap-4 p-4 bg-richblack-800 rounded-lg">
                    <p className="text-richblack-200 font-medium">Course Name</p>
                    <p className="text-richblack-200 font-medium">Duration</p>
                    <p className="text-richblack-200 font-medium">Progress</p>
                   </div>
                   <div className="space-y-4">
                    {enrolledCourses.map((course, index) => (
                        <div 
                            key={index} 
                            className="grid grid-cols-3 gap-4 p-4 bg-richblack-800 rounded-lg hover:bg-richblack-700 transition-all duration-200 cursor-pointer"
                            onClick={() => navigate(`/view-course/${course._id}/section/${course.courseContent[0]?._id}/sub-section/${course.courseContent[0]?.subSection[0]?._id}`)}
                        >
                            <div className="flex items-center gap-4">
                                <img 
                                    src={course.thumbnail} 
                                    alt={course.courseName}
                                    className="h-14 w-24 rounded-lg object-cover"
                                />
                                <div className="flex flex-col gap-1">
                                    <p className="text-richblack-5 font-medium">{course.courseName}</p>
                                    <p className="text-xs text-richblack-300 line-clamp-2">{course.courseDescription}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className="text-richblack-200">{course?.totalDuration}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <p className="text-richblack-200">Progress</p>
                                    <p className="text-yellow-50">{course.progressPercentage || 0}%</p>
                                </div>
                                <ProgressBar
                                    completed={course.progressPercentage || 0}
                                    height="8px"
                                    isLabelVisible={false}
                                    bgColor="#E2C044"
                                    baseBgColor="#2C333F"
                                    borderRadius="4px"
                                />
                            </div>
                        </div>
                    ))}
                   </div>
                </div>
            )
        }
    </div>
  )
}

export default EnrolledCourses