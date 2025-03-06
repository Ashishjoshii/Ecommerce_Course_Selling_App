import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../public/logo.webp";
import toast from 'react-hot-toast';
import axios from 'axios';
import { BACKEND_URL } from '../utils/utils';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const AboutCourseNova = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    //logout
    const handleLogout = async () => {
        try {
          const response = await axios.get(`${BACKEND_URL}/user/logout`, {
            withCredentials: true,
          });
          toast.success(response.data.message);
          localStorage.removeItem("user");
          setIsLoggedIn(false);
        } catch (error) {
          console.log("Error in logging out ", error);
          toast.error(error.response.data.errors || "Error in logging out");
        }
      };
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);
    return (
        <>
            <div className="bg-gradient-to-r from-black to-blue-950 ">
                <div className="h-[1250px] md:h-[1050px] text-white container mx-auto">
                    <header className="flex items-center justify-between p-6 ">
                              <div className="flex items-center space-x-2">
                                <img
                                  src={logo}
                                  alt=""
                                  className="w-7 h-7 md:w-10 md:h-10 rounded-full"
                                />
                                <h1 className="md:text-2xl text-orange-500 font-bold">
                                  CourseNova
                                </h1>
                              </div>
                              <div className="space-x-4">
                                {isLoggedIn ? (
                                  <button
                                    onClick={handleLogout}
                                    className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
                                  >
                                    Logout
                                  </button>
                                ) : (
                                  <>
                                    <Link
                                      to={"/login"}
                                      className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
                                    >
                                      Login
                                    </Link>
                                    <Link
                                      to={"/signup"}
                                      className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
                                    >
                                      Signup
                                    </Link>
                                  </>
                                )}
                              </div>
                            </header>
                    <section className='m-16'>
                        <div className="max-w-screen-md mx-auto px-4 sm:px-6">
                            <div className="flex flex-col items-center justify-center py-12">
                                <h1 className="text-3xl font-bold text-center text-orange-500">
                                    About CourseNova
                                </h1>
                                <p className="text-lg leading-relaxed text-center pt-8">
                                    CourseNova is a platform that connects educators and students. We help them find and purchase quality online courses at affordable prices. Our mission is to provide a safe and enjoyable learning experience for everyone.
                                </p>
                            </div>

                            {/* you can also create course as a admin  */}
                            <div className="flex flex-col items-center justify-center py-12">
                                <h1 className="text-3xl font-bold text-center text-orange-500">
                                    Create Your Course
                                </h1>
                                <p className="text-lg leading-relaxed text-center pt-8">
                                    To create your course, you'll need to sign up as an admin. Once you're logged in, you'll be able to add courses, manage students, and track progress.
                                </p>
                                <div className="space-x-4 mt-8">
                                    <Link
                                        to={"/admin/login"}
                                        className="bg-green-500 text-white p-2 md:py-3 md:px-6 rounded font-semibold hover:bg-white duration-300 hover:text-black"
                                    >
                                        Admin Login
                                    </Link>
                                    <Link
                                        to={"/admin/signup"}
                                        className="bg-white text-black  p-2 md:py-3 md:px-6 rounded font-semibold hover:bg-green-500 duration-300 hover:text-white"
                                    >
                                        Admin Signup
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Footer */}
                    <footer className="m-10 my-14">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="flex flex-col items-center md:items-start">
                                <div className="flex items-center space-x-2">
                                    <img src={logo} alt="" className="w-10 h-10 rounded-full" />
                                    <h1 className="text-2xl text-orange-500 font-bold">
                                        CourseNova
                                    </h1>
                                </div>
                                <div className="mt-3 ml-2 md:ml-8">
                                    <p className="mb-2">Follow us</p>
                                    <div className="flex space-x-4">
                                        <a href="">
                                            <FaFacebook className="text-2xl hover:text-blue-400 duration-300" />
                                        </a>
                                        <a href="">
                                            <FaInstagram className="text-2xl hover:text-pink-600 duration-300" />
                                        </a>
                                        <a href="">
                                            <FaTwitter className="text-2xl hover:text-blue-600 duration-300" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="items-center mt-6 md:mt-0 flex flex-col">
                                <h3 className="text-lg font-semibold md:mb-4">connects</h3>
                                <ul className=" space-y-2 text-gray-400">
                                    <li className="hover:text-white cursor-pointer duration-300">
                                        youtube- learn course
                                    </li>
                                    <li className="hover:text-white cursor-pointer duration-300">
                                        telegram- learn course
                                    </li>
                                    <li className="hover:text-white cursor-pointer duration-300">
                                        Github- learn course
                                    </li>
                                </ul>
                            </div>
                            <div className="items-center mt-6 md:mt-0 flex flex-col">
                                <h3 className="text-lg font-semibold mb-4">
                                    copyrights &#169; 2024
                                </h3>
                                <ul className=" space-y-2 text-center text-gray-400">
                                    <li className="hover:text-white cursor-pointer duration-300">
                                        Terms & Conditions
                                    </li>
                                    <li className="hover:text-white cursor-pointer duration-300">
                                        Privacy Policy
                                    </li>
                                    <li className="hover:text-white cursor-pointer duration-300">
                                        Refund & Cancellation
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default AboutCourseNova
