"use client"

import React, { useState } from 'react';

//icons
import Image from 'next/image';



const Courses = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
                    <div className="flex justify-end px-4 pt-4">
                        <button
                            id="dropdownButton"
                            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none rounded-lg text-sm p-1.5"
                            type="button"
                            onClick={toggleDropdown}
                        >
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                        {/* Dropdown menu */}
                        <div
                            id="dropdown"
                            className={`z-10 ${dropdownOpen ? '' : 'hidden'} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-4 top-12`}
                        >
                            <ul className="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/Images/react.png" alt="Bonnie image" width={90} height={70} />
                        <h5 className="mb-1 text-xl font-medium text-gray-900">React with Next</h5>
                        <span className="text-sm text-gray-500 ">3 months</span>
                        <div className="flex mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">See More Detail</a>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
                    <div className="flex justify-end px-4 pt-4">
                        <button
                            id="dropdownButton"
                            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none rounded-lg text-sm p-1.5"
                            type="button"
                            onClick={toggleDropdown}
                        >
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                        {/* Dropdown menu */}
                        <div
                            id="dropdown"
                            className={`z-10 ${dropdownOpen ? '' : 'hidden'} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-4 top-12`}
                        >
                            <ul className="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/Images/react.png" alt="Bonnie image" width={90} height={70} />
                        <h5 className="mb-1 text-xl font-medium text-gray-900">GO Lang</h5>
                        <span className="text-sm text-gray-500 ">With Backend intergration</span>
                        <div className="flex mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">See More Detail</a>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
                    <div className="flex justify-end px-4 pt-4">
                        <button
                            id="dropdownButton"
                            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none rounded-lg text-sm p-1.5"
                            type="button"
                            onClick={toggleDropdown}
                        >
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                        {/* Dropdown menu */}
                        <div
                            id="dropdown"
                            className={`z-10 ${dropdownOpen ? '' : 'hidden'} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-4 top-12`}
                        >
                            <ul className="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/Images/react.png" alt="Bonnie image" width={90} height={70} />
                        <h5 className="mb-1 text-xl font-medium text-gray-900">Java Course</h5>
                        <span className="text-sm text-gray-500 ">Swing and SpringBoot</span>
                        <div className="flex mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">See More Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;
