import React, { useEffect, useState } from 'react'
import { Link, matchPath } from 'react-router-dom'
import logo from '../../Asset/Logo/Logo-Full-Light.png'
import { NavbarLinks } from '../../data/Navbar-Link'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart} from "react-icons/ai";
import ProfileDropDown from '../core/Auth/ProfileDropDown';
import { apiConnector } from '../../services/apiconnector'
import { courseEndpoints } from '../../services/apis'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaSpinner } from "react-icons/fa";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const {token} = useSelector((state)=> state.auth);
    const{user} = useSelector((state)=>state.profile);
    const{totalItems} = useSelector((state)=>state.cart);

    const[subLinks, setsubLinks]  = useState([]);
    const fetchSublinks =  async()=>{
        try{
            setLoading(true);
            const result =  await apiConnector("GET", courseEndpoints.COURSE_CATEGORIES_API);
            console.log("Printing sublinks result",result);
            if(result?.data?.data) {
                const formattedCategories = result.data.data.map(category => ({
                    title: category.name,
                    link: `/catalog/${category.name.toLowerCase().replace(/\s+/g, '-')}`
                }));
                setsubLinks(formattedCategories);
            } else {
                setsubLinks([]);
            }
        }
        catch(err){
            console.log("Could not fetch the catalog list", err);
            setsubLinks([]);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
       fetchSublinks();
    },[]);

    const location = useLocation();
    const matchRoute=(route)=>{
        return matchPath({path:route},location.pathname);
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    const renderCatalogItems = () => {
        if(loading) {
            return (
                <div className='flex items-center justify-center py-4'>
                    <FaSpinner className='animate-spin text-richblack-900 text-xl' />
                </div>
            );
        }
        
        if(!subLinks || subLinks.length === 0) {
            return (
                <p className='text-richblack-900 text-center py-4'>No categories available</p>
            );
        }

        return subLinks.map((sublink, index) => (
            <Link 
                to={`${sublink.link}`} 
                key={index}
                className='px-4 py-2 rounded-md transition-all duration-200'
            >
                <p className='text-richblack-900 hover:text-richblack-700 hover:text-xl hover:bg-richblack-100 rounded-md'>{sublink.title}</p>
            </Link>
        ));
    };

    const renderMobileCatalogItems = () => {
        if(loading) {
            return (
                <div className='flex items-center justify-center py-4'>
                    <FaSpinner className='animate-spin text-richblack-25 text-xl' />
                </div>
            );
        }
        
        if(!subLinks || subLinks.length === 0) {
            return (
                <p className='text-richblack-200 text-center py-4'>No categories available</p>
            );
        }

        return subLinks.map((sublink, idx) => (
            <Link 
                to={sublink.link} 
                key={idx} 
                className="text-richblack-200 hover:text-yellow-25 transition-all duration-200"
                onClick={toggleMobileMenu}
            >
                {sublink.title}
            </Link>
        ));
    };

    return (
        <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
            <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <img src={logo} width={160} height={32} loading='lazy' className="w-32 sm:w-40"/>
                </Link>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden text-richblack-25 p-2"
                    onClick={toggleMobileMenu}
                >
                    {mobileMenuOpen ? <RxCross2 size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:block">
                    <ul className='flex gap-x-6 text-richblack-25'>
                        {
                            NavbarLinks.map((link,index)=>(
                                <li key={index}>
                                    {
                                        link.title === "Catalog" ? (
                                            <div className='relative group'>
                                                <div className='flex items-center gap-2 cursor-pointer hover:text-yellow-25 transition-all duration-200'>
                                                    <p>{link.title}</p>
                                                    <MdOutlineKeyboardDoubleArrowDown className='group-hover:rotate-180 transition-transform duration-200' />
                                                </div>

                                                {/* Catalog Dropdown */}
                                                <div className='absolute left-0 top-full mt-2 w-64 bg-richblack-5 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
                                                invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50'>
                                                    {/* Arrow */}
                                                    <div className='absolute -top-2 left-6 w-4 h-4 bg-richblack-5 rotate-45'></div>
                                                    
                                                    {/* Content */}
                                                    <div className='relative p-4'>
                                                        {renderCatalogItems()}
                                                    </div>
                                                </div>
                                            </div>
                                        ) :(
                                            <Link to={link?.path}>
                                                <p className={`${matchRoute(link?.path)? "text-yellow-25":"text-richblack-25"} hover:text-yellow-25 transition-all duration-200`}>
                                                    {link.title}
                                                </p>
                                            </Link>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                {/* Mobile Navigation */}
                <div className={`lg:hidden fixed inset-0 z-50 bg-richblack-900 transition-all duration-300 ${
                    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="flex flex-col h-full p-6">
                        <div className="flex justify-between items-center mb-8">
                            <Link to="/">
                                <img src={logo} width={160} height={32} loading='lazy' className="w-32"/>
                            </Link>
                            <button onClick={toggleMobileMenu} className="text-richblack-25">
                                <RxCross2 size={24} />
                            </button>
                        </div>
                        <nav className="flex-1">
                            <ul className='flex flex-col gap-y-6 text-richblack-25'>
                                {NavbarLinks.map((link,index)=>(
                                    <li key={index}>
                                        {link.title === "Catalog" ? (
                                            <div className='flex flex-col gap-2'>
                                                <div className='flex items-center gap-2'>
                                                    <p className='text-xl font-medium'>{link.title}</p>
                                                    <MdOutlineKeyboardDoubleArrowDown />
                                                </div>
                                                <div className='flex flex-col pl-4 gap-2 border-l border-l-richblack-700'>
                                                    {renderMobileCatalogItems()}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link to={link?.path} onClick={toggleMobileMenu}>
                                                <p className={`${matchRoute(link?.path)? "text-yellow-25":"text-richblack-25"} hover:text-yellow-25 transition-all duration-200 text-xl`}>
                                                    {link.title}
                                                </p>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Login/Signup/Dashboard */}
                <div className='hidden lg:flex gap-x-4 items-center'>
                    {
                        user && user?.accountType!="Instructor" && (
                            <Link to="/dashboard/cart" className='relative'>
                                <AiOutlineShoppingCart className="text-xl hover:text-yellow-25 transition-all duration-200"/>
                                {
                                    totalItems>0 && (
                                        <span className="absolute -top-2 -right-2 bg-yellow-25 text-richblack-900 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                            {totalItems}
                                        </span>
                                    )
                                }
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to="/login">
                                <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md hover:bg-richblack-700 transition-all duration-200'>
                                    Log in
                                </button>
                            </Link>
                        )
                    }
                    {
                        token===null && (
                            <Link to="/signup">
                                <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md hover:bg-richblack-700 transition-all duration-200'>
                                    Sign Up
                                </button>
                            </Link>
                        )
                    }
                    {
                        token!==null && <ProfileDropDown/>
                    }
                </div>

                {/* Mobile Auth Buttons */}
                <div className="lg:hidden flex gap-x-4 items-center">
                    {
                        user && user?.accountType!="Instructor" && (
                            <Link to="/dashboard/cart" className='relative'>
                                <AiOutlineShoppingCart className="text-xl hover:text-yellow-25 transition-all duration-200"/>
                                {
                                    totalItems>0 && (
                                        <span className="absolute -top-2 -right-2 bg-yellow-25 text-richblack-900 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                            {totalItems}
                                        </span>
                                    )
                                }
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to="/login">
                                <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md text-sm hover:bg-richblack-700 transition-all duration-200'>
                                    Log in
                                </button>
                            </Link>
                        )
                    }
                    {
                        token===null && (
                            <Link to="/signup">
                                <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md text-sm hover:bg-richblack-700 transition-all duration-200'>
                                    Sign Up
                                </button>
                            </Link>
                        )
                    }
                    {
                        token!==null && <ProfileDropDown/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar