import { useSelector } from "react-redux"
import RenderTotalAmmount from "./RenderTotalAmmount"
import RendercartCourses from "./RendercartCourses"

export default function Cart(){
    const{total, totalItems} = useSelector((state)=>state.cart)
    return(
        <div className="text-richblack-5">
            <h1 className="text-3xl font-medium mb-8">Your Cart</h1>
            <p className="text-richblack-200 mb-8">{totalItems} Courses in Cart</p>
            {total>0 ? (
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                        <RendercartCourses/>
                    </div>
                    <div className="lg:w-[350px]">
                        <RenderTotalAmmount/>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center h-[50vh]">
                    <p className="text-2xl text-richblack-100">Your Cart is Empty</p>
                </div>
            )}
        </div>
    )
}