import React from 'react'

const IconButton = ({
    text,
    onClick,
    children,
    disabled,
    outLine = false,
    customClasses,
    type
}) => {
  return (
    <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`flex items-center gap-x-2 rounded-md py-2 px-4 text-sm font-medium transition-all duration-200
        ${outLine 
            ? "border border-yellow-50 text-yellow-50 hover:bg-yellow-50 hover:text-richblack-900" 
            : "bg-yellow-50 text-richblack-900 hover:bg-yellow-100"
        } ${customClasses}`}
    >
        {children ? (
            <>
                <span>{text}</span>
                {children}
            </>
        ) : (
            <span>{text}</span>
        )}
    </button>
  )
}

export default IconButton