import React from "react";

const stats = [
    {
        count: "5K",
        label: "Active Students"
    },
    {
        count: "10+",
        label: "Mentors"
    },
    {
        count: "200+",
        label: "Courses"
    },
    {
        count: "50+",
        label: "Awards"       
    }
];

const StatsComponent = () => {
    return (
        <div className="  flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-10 p-4 sm:p-6 lg:p-8 bg-richblack-800 rounded-lg">
            {stats.map((data, index) => (
                <div 
                    key={index} 
                    className=" flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg bg-richblack-700 hover:bg-richblack-600 transition-all duration-300 min-w-[120px] sm:min-w-[150px]"
                >
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-50 mb-2">
                        {data.count}
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-richblack-200 text-center">
                        {data.label}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default StatsComponent;