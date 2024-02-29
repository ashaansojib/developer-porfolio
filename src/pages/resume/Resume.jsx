import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <div className='mx-auto lg:w-[860px] p-4 bg-slate-100 my-2'>
            <div className='grid lg:grid-cols-2 grid-cols-1 justify-between gap-2'>
                <div>
                    <h1 className='text-2xl ps-1 font-bold border-l-2 border-teal-600'>Ashaduzzaman Sojib</h1>
                    <p className='font-semibold ps-1 text-gray-600'>Jr. MERN Stack Developer</p>
                </div>
                <div className='md:text-right'>
                    <h4><span className='font-medium'>Mobile:</span> (+880) 1892932859</h4>
                    <h4><span className='font-medium'>Email:</span> <Link className='text-blue-600' to="mailto:ashaduzzamansojib67@gmail.com">ashaansojib@bd.com</Link></h4>
                    <h4><span className='font-medium'>Address:</span> Rangpur, Bangladesh</h4>
                    <div className='font-medium text-blue-600 flex md:justify-end gap-2'>
                        <Link>Linkedin</Link> |
                        <Link>Github</Link> |
                        <Link>Website</Link>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-2xl ps-1 font-bold border-l-2 border-teal-600'>Skills</h1>
                <div className='py-2 text-gray-600'>
                    <h4><span className='font-medium'>Experties:</span> React.JS, Next.JS, JavaScript ES6, TailwindCSS, Bootstrap, HTML5, CSS3</h4>
                    <h4><span className='font-medium'>Comfortable:</span> Express.js, React Router, MongoDB, TypeScript, Redux-Toolkit</h4>
                    <h4><span className='font-medium'>Familiar:</span> Nodejs, Nextjs, Axios, Tanstack Query, MySQL</h4>
                    <h4><span className='font-medium'>Tools:</span> Firebase Auth, Github, Netlify, Vercel, VS Code, Ubuntu OS, Canva, Figma, AWS, Docar</h4>
                </div>
            </div>
            <div>
                <h1 className='text-2xl ps-1 font-bold border-l-2 border-teal-600'>Personal Projects</h1>
                <div className='border-t mt-2'>
                    <div className='md:flex justify-between'>
                        <h3 className='font-semibold text-gray-700'>O-GSM Servcie</h3>
                        <div className='font-medium text-blue-600 flex gap-2'>
                            <Link>Live-Link</Link> |
                            <Link>Back-End</Link> |
                            <Link>Front-End</Link>
                        </div>
                    </div>
                    <p>This is my first full-stack website with MERN technology. On this website, I create three roles as an
                        admin, instructor & normal user. Here one has an admin that can manage all parts from the front-
                        end. An instructor posts a course and a student enrolled in this course with many functionalities.</p>
                    <li>Its's responsive & full stack MERN website, as well admin controlable user experience.</li>
                    <li>A instructor can add class and manage students, A student can enrolled classes by payment.</li>
                    <li>Reactjs, React Router, JWT, Expressjs, Nodejs, Cors, Stripejs, Axios TailwindCss, are used</li>
                    <div className='md:flex justify-between pt-2'>
                        <h3 className='font-semibold text-gray-700'>Ed-Tech : Learning English Plateform</h3>
                        <div className='font-medium text-blue-600 flex gap-2'>
                            <Link>Live-Link</Link> |
                            <Link>Back-End</Link> |
                            <Link>Front-End</Link>
                        </div>
                    </div>
                    <p>This is my first full-stack website with MERN technology. On this website, I create three roles as an admin, instructor & normal user. Here one has an admin that can manage all parts from the front-end. An instructor posts a course and a student enrolled in this course with many functionalities.</p>
                    <li>Its's responsive & full stack MERN website, as well admin controlable user experience.</li>
                    <li>A instructor can add class and manage students, A student can enrolled classes by payment.</li>
                    <li>Reactjs, React Router, JWT, Expressjs, Nodejs, Cors, Stripejs, Axios TailwindCss, are used</li>
                    <div className='md:flex justify-between pt-2'>
                        <h3 className='font-semibold text-gray-700'>Chief: Grilled Corn Recipes Store</h3>
                        <div className='font-medium text-blue-600 flex gap-2'>
                            <Link>Live-Link</Link> |
                            <Link>Back-End</Link> |
                            <Link>Front-End</Link>
                        </div>
                    </div>
                    <p>Basically, this website is a recipe chief website. Here a chef can display his favorite recipe for food lovers. On this website, A user can read details of a chief's item and comment about his recipe. This website has all data stored in Mongodb and retrieved to show the front end.</p>
                    <li>It's responsive and a specific user manageable web application related to be a recipe's item.</li>
                    <li>A Chief can publish articles about his recipe's also manage post like delete, update.</li>
                    <li>In this application I used are Reactjs, Nodejs, Expressjs, TailwindCss, DaisyUI, Router Etc.</li>

                </div>
            </div>
            <h1 className='text-2xl mt-2 ps-1 font-bold border-l-2 border-teal-600'>Education</h1>
            <div className='border-t mt-2'>
                <div className='md:flex justify-between'>
                    <h3 className='font-semibold text-gray-700'>B. A. in English 3rd year - running</h3>
                    <h3 className='font-semibold text-gray-700'>National University - Bangladesh</h3>
                </div>
                <li>Currently, I'm studying at Bachelor of Arts in English, and in 2024 will complete my graduation.</li>
            </div>
            <h1 className='text-2xl mt-2 ps-1 font-bold border-l-2 border-teal-600'>Certificate</h1>
            <div className='border-t mt-2'>
                <div className='md:flex justify-between'>
                    <h3 className='font-semibold text-gray-700'>Complete Web Development Course</h3>
                    <h3 className='font-semibold text-gray-700'>Programming-Hero</h3>
                </div>
                <li>Basically, It's a MERN stack web development course both for frontend and backend. They
                    also provide crash courses with Redux, advanced Nodejs and MongoDB for the best students.</li>
                <li>I completed full course in top position and get the top reward as named Blackbelt Certificate.</li>
            </div>
            <h1 className='text-2xl mt-2 ps-1 font-bold border-l-2 border-teal-600'>Language</h1>
            <div className='border-t mt-2'>
                <li>Bangla (Nation)</li>
                <li>English - Fluent</li>
            </div>
        </div>
    );
};

export default Resume;