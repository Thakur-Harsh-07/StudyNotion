import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../services/operations/authAPI";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FcLeft } from "react-icons/fc";
const UpdatePassword = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const[formData, setFormData] = useState({
        password:"",
        confirmPassword:"",
    });
    const { password, confirmPassword } = formData
    const{loading} = useSelector((state)=>state.auth);
    const[showPassword, setShowPassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleOnChange = (e)=>{
        setFormData((prevData)=>({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };
  const handleOnSubmit = (e)=>{
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword,token));
  }
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-richblack-900 pt-16 sm:pt-20">
            {loading ? (
                <div className="text-richblack-5">Loading...</div>
            ) : (
                <div className="flex flex-col gap-4 w-full max-w-[500px] p-4 sm:p-8 md:p-12">
                    <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-richblack-5">
                        Choose new Password
                    </h1>
                    <p className="text-center text-sm sm:text-base md:text-lg text-richblack-200">
                        Almost done. Enter Your new Password and youre all set.
                    </p>
                    <form onSubmit={handleOnSubmit} className="flex flex-col gap-2 sm:gap-4">
                        <label className="flex flex-col gap-2 relative">
                            <p className="text-sm sm:text-base text-richblack-5">New password<sup>*</sup></p>
                            <div className="relative">
                                <input 
                                    required
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Enter new password"
                                    name="password"
                                    value={password}
                                    onChange={handleOnChange}
                                    className="w-full rounded-lg border-2 border-richblack-700 bg-richblack-800 p-3 sm:p-4 text-richblack-5 text-sm sm:text-base pr-10"
                                />
                                <span
                                    onClick={()=>setShowPassword((prev)=>!prev)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-richblack-300 hover:text-richblack-100"
                                >
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible fontSize={24}/>
                                    ) : (
                                        <AiOutlineEye fontSize={24}/>
                                    )}
                                </span>
                            </div>
                        </label>
                        <label className="flex flex-col gap-2 relative">
                            <p className="text-sm sm:text-base text-richblack-5">Confirm password<sup>*</sup></p>
                            <div className="relative">
                                <input 
                                    required
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm new password"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={handleOnChange}
                                    className="w-full rounded-lg border-2 border-richblack-700 bg-richblack-800 p-3 sm:p-4 text-richblack-5 text-sm sm:text-base pr-10"
                                />
                                <span
                                    onClick={()=>setShowConfirmPassword((prev)=>!prev)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-richblack-300 hover:text-richblack-100"
                                >
                                    {showConfirmPassword ? (
                                        <AiOutlineEyeInvisible fontSize={24}/>
                                    ) : (
                                        <AiOutlineEye fontSize={24}/>
                                    )}
                                </span>
                            </div>
                        </label>
                        <button 
                            type="submit" 
                            className="w-full rounded-lg bg-yellow-50 p-3 sm:p-4 text-richblack-900 mt-4 text-sm sm:text-base font-medium hover:bg-yellow-100 transition-all duration-200"
                        >
                            {loading ? "Updating..." : "Update Password"}
                        </button>
                    </form>
                    <Link to="/login" className="text-sm text-richblack-500 hover:text-richblack-100 text-center">
                        <FcLeft className="inline-block mr-2"/>
                        Back To login
                    </Link>
                </div>
            )}
        </div>
    )
}

export default UpdatePassword;
