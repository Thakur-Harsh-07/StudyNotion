import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI';
import { getInstructorData } from '../../../../services/operations/profileAPI';
import { Link } from 'react-router-dom';
import InstructorChart from './InstructorChart ';
import { FaSpinner } from "react-icons/fa";

const Instructor = () => {
    const{token} = useSelector((state)=>state.auth);
    const{user} = useSelector((state)=>state.profile);

    const[loading, setLoading] = useState(false);
    const[instructorData, setInstructorData] = useState(null);
    const[courses, setCourses] = useState([]);

    useEffect(()=>{
        const getCourseDataWithStats = async () => {
            setLoading(true);
            try {
                const instructorApiData = await getInstructorData(token);
                const result = await fetchInstructorCourses(token);
                
                if(instructorApiData) {
                    setInstructorData(instructorApiData);
                }
                if(result) {
                    setCourses(result);
                }
            } catch(error) {
                console.error("Error fetching instructor data:", error);
            } finally {
                setLoading(false);
            }
        }
        getCourseDataWithStats();
    }, [token])

    const totalAmount = instructorData?.reduce((acc, curr) => acc + (curr?.totalAmountGenerated || 0), 0) || 0;
    const totalStudents = instructorData?.reduce((acc, curr) => acc + (curr?.totalStudentsEnrolled || 0), 0) || 0;

    if(loading) {
        return (
            <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
                <div className="flex flex-col items-center gap-3">
                    <FaSpinner className="animate-spin text-3xl text-yellow-50" />
                    <p className="text-richblack-5">Loading...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="text-richblack-5">
            <div className="mb-8">
                <h1 className="text-3xl font-medium">Hi {user?.firstName}!</h1>
                <p className="text-richblack-200">Let's start something new</p>
            </div>

            {courses && courses.length > 0 ? (
                <div className="space-y-8">
                    <InstructorChart courses={instructorData}/>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-richblack-800 rounded-lg">
                        <div className="flex flex-col gap-2">
                            <p className="text-richblack-200">Total Courses</p>
                            <p className="text-2xl font-semibold text-yellow-50">{courses.length}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-richblack-200">Total Students</p>
                            <p className="text-2xl font-semibold text-yellow-50">{totalStudents}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-richblack-200">Total Income</p>
                            <p className="text-2xl font-semibold text-yellow-50">₹ {totalAmount}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-medium">Your Courses</p>
                            <Link to="/dashboard/my-courses" className="text-yellow-50 hover:text-yellow-25 transition-all duration-200">
                                View All
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {courses.slice(0,3).map((course, index) => (
                                <div key={index} className="flex flex-col gap-2 p-4 bg-richblack-800 rounded-lg hover:bg-richblack-700 transition-all duration-200">
                                    <img 
                                        src={course?.thumbnail} 
                                        alt={course?.courseName}
                                        className="w-full h-48 rounded-lg object-cover"
                                    />
                                    <div className="flex flex-col gap-2">
                                        <p className="font-medium">{course?.courseName}</p>
                                        <div className="flex items-center gap-2 text-richblack-200">
                                            <p>{course?.totalStudentsEnrolled?.length || 0} students</p>
                                            <p>|</p>
                                            <p>₹ {course?.price || 0}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-4 p-8 bg-richblack-800 rounded-lg">
                    <p className="text-xl text-richblack-200">You Have Not Created Any Courses yet</p>
                    <Link 
                        to="/dashboard/add-course"
                        className="bg-yellow-50 text-richblack-900 px-4 py-2 rounded-lg hover:bg-yellow-25 transition-all duration-200"
                    >
                        Create a Course
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Instructor