import React from 'react'
import { useSelector } from 'react-redux'
import IconButton from '../../../common/IconButton'
import { Link, useNavigate } from 'react-router-dom';
import { buyCourse } from '../../../../services/operations/studentFeaturesAPI';
import { useDispatch } from 'react-redux';
const RenderTotalAmmount = () => {
    const{total, cart} = useSelector((state)=>state.cart);
    const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  
  const dispatch = useDispatch()

  const handleBuyNow = () => {
    const courses = cart.map((course) => course._id)
    
    buyCourse(token, courses, user, navigate, dispatch)
  }

    

    return (
        <div className="bg-richblack-800 p-6 rounded-lg sticky top-4">
            <div className="flex justify-between items-center mb-4">
                <p className="text-richblack-200">Total:</p>
                <p className="text-2xl font-semibold text-yellow-50">₹ {total}</p>
            </div>
            <IconButton 
                text="Buy Now"
                onClick={handleBuyNow}
                customClasses="w-full justify-center bg-yellow-50 text-richblack-900 hover:bg-yellow-25 transition-all duration-200"
            />
        </div>
    )
}

export default RenderTotalAmmount