import React from 'react';
import HighlightText from '../HomePage/HighlightText';

const Quote = () => {
    return (
        <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-richblack-300 leading-relaxed">
                We are passionate about revolutionizing the way we learn. Our innovative platform
                <HighlightText text={"Combine technology"}/>
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text font-semibold">
                    {" "}
                    experties
                </span>
                , and community to create an
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text font-semibold">
                    {" "}
                    unparalleled educational experience.
                </span>
            </p>        
        </div>
    );
};  

export default Quote;
