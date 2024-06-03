"use client"

import React, { useState } from 'react';

//icons
import Image from 'next/image';

//data type
import { Course} from '@/types/course';

const Courses = () => {
    //data
    const [courseDeatil, setCoursesDetail] = useState<Course[]>(
        [
            {
                course_name: "React with Next JS",
                description: "A complete front end development course",
                duration: 3,
                detail: "The course will launch on 3rd Dec and last for 3 months, ending on 7th March.",
                course_img: null,
                course_extra_img: null,
            },
            {
                course_name: "Node.js with Express",
                description: "Backend development using Node.js and Express",
                duration: 4,
                detail: "The course starts on 1st Jan and will continue for 4 months, concluding on 30th April.",
                course_img: null,
                course_extra_img: null,
            },
            {
                course_name: "Full Stack Development",
                description: "Comprehensive full stack web development course",
                duration: 6,
                detail: "The course begins on 15th Feb and spans 6 months, finishing on 15th August.",
                course_img: null,
                course_extra_img: null,
            },
            {
                course_name: "Python for Data Science",
                description: "Data science course using Python",
                duration: 5,
                detail: "Starting on 10th March, this 5-month course will end on 10th August.",
                course_img: null,
                course_extra_img: null,
            },
            {
                course_name: "DevOps with Kubernetes",
                description: "DevOps practices and Kubernetes management",
                duration: 3,
                detail: "The course kicks off on 20th April and runs for 3 months, ending on 20th July.",
                course_img: null,
                course_extra_img: null,
            }
        ])


    //dropdown
    const [getIDToogle, setGetIDToogle] = useState<number | null>(false);

    const toggleDropdown = (id:number) => {
        setGetIDToogle (getIDToogle === id ? null: id);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {courseDeatil.map((course, index) => (
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow relative" key={index}>
                        <div className="flex justify-end px-4 pt-4">
                            <button
                                id="dropdownButton"
                                className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none rounded-lg text-sm p-1.5"
                                type="button"
                                onClick={()=>toggleDropdown(index)}
                            >
                                <span className="sr-only">Open dropdown</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                            </button>
                            {/* Dropdown menu */}
                            <div
                                id="dropdown"
                                className={`z-10 ${getIDToogle ? '' : 'hidden'} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-4 top-12`}
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
                            <h5 className="mb-1 text-xl font-medium text-gray-900">{course.course_name}</h5>
                            <span className="text-sm text-gray-500 ">{course.duration} months</span>
                            <div className="flex mt-4 md:mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">See More Detail</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Courses;
