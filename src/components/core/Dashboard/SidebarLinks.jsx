import React from 'react'
import * as Icons from "react-icons/vsc"
import { useDispatch } from 'react-redux';
import { matchPath, NavLink, useLocation } from 'react-router-dom';

const SidebarLinks = ({ link, iconName }) => {
    const Icon = Icons[iconName] ;
    const location = useLocation();
    const dispatch = useDispatch();

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    }

    return (
        <NavLink
            to={link.path}
            className={`relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium transition-all duration-200
                ${matchRoute(link.path)
                    ? "bg-yellow-800 text-yellow-50 font-semibold"
                    : "text-richblack-300 hover:text-yellow-50 hover:bg-richblack-700"
                }
            `}
        >
            <span className={`absolute left-0 top-0 h-full w-[0.15rem] sm:w-[0.2rem] bg-yellow-50 transition-all duration-200
                ${matchRoute(link.path) ? "opacity-100" : "opacity-0"}
            `}>
            </span>

            <div className='flex items-center gap-x-2 sm:gap-x-3'>
                <Icon className={`text-base sm:text-lg transition-all duration-200 
                    ${matchRoute(link.path) 
                        ? "text-yellow-50" 
                        : "text-richblack-300 group-hover:text-yellow-50"
                    }
                `}/>
                <span>{link.name}</span>
            </div>
        </NavLink>
    )
}

export default SidebarLinks