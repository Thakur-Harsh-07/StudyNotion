import React from 'react'
import ContactUsForm from '../../ContactPage/ContactUsForm'

const ContactFormSection = () => {
    return (
        <div className="mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
            <div className="flex flex-col gap-4 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-richblack-5">
                    Get in Touch
                </h1>
                <p className="text-base sm:text-lg text-richblack-300">
                    We'd love to hear from you, please fill out this form
                </p>
            </div>
            <div className="bg-richblack-800 p-4 sm:p-6 lg:p-8 rounded-xl border border-richblack-700">
                <ContactUsForm />
            </div>
        </div>
    )
}

export default ContactFormSection