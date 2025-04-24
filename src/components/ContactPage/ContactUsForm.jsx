import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { apiConnector } from '../../services/apiconnector';
import { contactusEndpoint } from '../../services/apis';
import toast from 'react-hot-toast';
import CountryCode from "../../data/countrycode.json"

const ContactUsForm = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessfull }
    } = useForm();

    useEffect(() => {
        if (isSubmitSuccessfull) {
            reset({
                email: "",
                firstname: "",
                lastname: "",
                message: "",
                phoneNo: ""
            })
        }
    }, [reset, isSubmitSuccessfull])

    const submitContactForm = async (data) => {
        console.log("Login data", data);
        try {
            setLoading(true);
            const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
            console.log("Loggig Response", response);
            if (response.data.success) {
                toast.success("Contact Form Submitted");
                // Reset form after successful submission
                reset({
                    email: "",
                    firstname: "",
                    lastname: "",
                    message: "",
                    phoneNo: "",
                    countrycode: ""
                });
            }
            // toast.success("Contact Form Submitted")
            setLoading(false);
        }
        catch (err) {
            toast.error("Error while submitting a form");
            console.log(err.message);
            setLoading(false);
        }
    }

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit(submitContactForm)} className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* firstname */}
                    <div className="flex flex-col gap-2 w-full sm:w-1/2">
                        <label htmlFor='firstname' className="text-sm sm:text-base font-medium text-richblack-5">
                            First Name
                        </label>
                        <input
                            type='text'
                            name='firstname'
                            id='firstname'
                            placeholder='Enter first name'
                            className="w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 border-b border-richblack-200 focus:outline-none focus:border-yellow-50 transition-all duration-200"
                            {...register("firstname", { required: true })}
                        />
                        {errors.firstname && (
                            <span className="text-pink-200 text-xs sm:text-sm">
                                Please enter Your name
                            </span>
                        )}
                    </div>
                    {/* lastname*/}
                    <div className="flex flex-col gap-2 w-full sm:w-1/2">
                        <label htmlFor='lastname' className="text-sm sm:text-base font-medium text-richblack-5">
                            Last Name
                        </label>
                        <input
                            type='text'
                            name='lastname'
                            id='lastname'
                            placeholder='Enter last name'
                            className="w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 border-b border-richblack-200 focus:outline-none focus:border-yellow-50 transition-all duration-200"
                            {...register("lastname")}
                        />
                    </div>
                </div>

                {/* email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor='email' className="text-sm sm:text-base font-medium text-richblack-5">
                        Email Address
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Enter your email'
                        className="w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 border-b border-richblack-200 focus:outline-none focus:border-yellow-50 transition-all duration-200"
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <span className="text-pink-200 text-xs sm:text-sm">
                            Please enter your email Address
                        </span>
                    )}
                </div>

                {/* phone number */}
                <div className="flex flex-col gap-2">
                    <label htmlFor='phoneNo' className="text-sm sm:text-base font-medium text-richblack-5">
                        Phone Number
                    </label>
                    <div className="flex flex-row gap-4">
                        {/* country code dropdown */}
                        <div className="w-[30%] sm:w-[25%]">
                            <select
                                name='countrycode'
                                id='countrycode'
                                className="w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 border-b border-richblack-200 focus:outline-none focus:border-yellow-50 transition-all duration-200"
                                {...register("countrycode", { required: true })}
                            >
                                {CountryCode.map((element, index) => (
                                    <option key={index} value={element.code} className="bg-richblack-800 text-richblack-5">
                                        {element.code} - {element.country}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* phone number input */}
                        <div className="w-[70%] sm:w-[75%]">
                            <input
                                type='tel'
                                name='phoneNo'
                                id='phoneNo'
                                placeholder='123456789'
                                className="w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 border-b border-richblack-200 focus:outline-none focus:border-yellow-50 transition-all duration-200"
                                {...register("phoneNo", {
                                    required: { value: true, message: "Please enter phone Number" },
                                    maxLength: { value: 10, message: "Invalid Phone Number" },
                                    minLength: { value: 7, message: "Invalid Phone Number" }
                                })}
                            />
                        </div>
                    </div>
                    {errors.phoneNo && (
                        <span className="text-pink-200 text-xs sm:text-sm">
                            {errors.phoneNo.message}
                        </span>
                    )}
                </div>

                {/* message */}
                <div className="flex flex-col gap-2">
                    <label htmlFor='message' className="text-sm sm:text-base font-medium text-richblack-5">
                        Message
                    </label>
                    <textarea
                        name='message'
                        id='message'
                        cols="30"
                        rows="7"
                        placeholder='Enter Your Message Here'
                        className="w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 border-b border-richblack-200 focus:outline-none focus:border-yellow-50 transition-all duration-200 resize-none"
                        {...register("message", { required: true })}
                    />
                    {errors.message && (
                        <span className="text-pink-200 text-xs sm:text-sm">
                            Please Add Your Message
                        </span>
                    )}
                </div>

                <button
                    type='submit'
                    className="rounded-lg bg-yellow-50 py-3 px-6 text-center text-sm sm:text-base font-bold text-richblack-900 hover:bg-yellow-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    )
}

export default ContactUsForm