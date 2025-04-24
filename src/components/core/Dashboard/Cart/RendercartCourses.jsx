import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from "react-rating-stars-component";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from '../../../../slices/cartSlice';

const RendercartCourses = () => {
    const{cart} = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    return (
        <div className="space-y-4">
            {cart.map((course,index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 bg-richblack-800 rounded-lg hover:bg-richblack-700 transition-all duration-200">
                    <img 
                        src={course?.thumbnail} 
                        alt={course?.courseName}
                        className="w-full sm:w-[200px] h-[120px] rounded-lg object-cover"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                        <p className="text-richblack-5 font-medium">{course?.courseName}</p>
                        <p className="text-richblack-300 text-sm">{course?.category?.name}</p>
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-50">{course?.ratingAndReviews?.length} </span>
                            <ReactStars
                                count={5}
                                value={course?.ratingAndReviews?.length}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStarHalfAlt />}
                                fullIcon={<FaStar/>}
                            />
                            <span className="text-richblack-300 text-sm">
                                {course?.ratingAndReviews?.length} Ratings
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <button 
                            onClick={()=>dispatch(removeFromCart(course._id))}
                            className="flex items-center gap-2 text-pink-200 hover:text-pink-50 transition-all duration-200"
                        >
                            <MdDelete className="text-xl" />
                            <span>Remove</span>
                        </button>
                        <p className="text-yellow-50 font-medium">₹ {course?.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RendercartCourses