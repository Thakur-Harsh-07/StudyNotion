import React from "react";
import HighlightText from "../HomePage/HighlightText";
import CTAButton from "../HomePage/Button";
const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/login",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
  ];
const LearningGrid=()=>{
    return(
        <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10 gap-4 p-4 sm:p-6 md:p-8">
            {LearningGridArray.map((card, index) => {
                return(
                    <div 
                        key={index}
                        className={`p-4 sm:p-6 md:p-8 rounded-lg
                        ${index===0 && "lg:col-span-2"}
                        ${
                            card.order %2 ===1 ? "bg-richblack-700" : "bg-richblack-800"
                        }
                        ${
                            card.order===3 && "lg:col-start-2"
                        }
                        ${
                            card.order<0 && "bg-transparent"
                        }`}
                    >
                        {card.order<0 ? (
                            <div className="flex flex-col gap-4 sm:gap-6">
                                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-richblack-5">
                                    {card.heading}
                                    <HighlightText text={card.highlightText}/>
                                </h1>
                                <p className="text-sm sm:text-base md:text-lg text-richblack-200">{card.description}</p>
                                <div className="mt-4 sm:mt-6">
                                    
                                    <CTAButton active={true} linkto={card.BtnLink}>
                                        {card.BtnText}
                                    </CTAButton>
                                </div>            
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-richblack-5">{card.heading}</h1>
                                <p className="text-sm sm:text-base text-richblack-200">{card.description}</p>       
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default LearningGrid