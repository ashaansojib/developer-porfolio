import React from 'react';
import { FaUserGear } from 'react-icons/fa6';

const About = () => {
    return (
        <div className=''>
            <h2 className='flex items-center gap-3 px-2 border-l-2 border-teal-600 ms-1 mt-2 text-xl font-semibold'>About Me <FaUserGear className='animate-bounce text-blue-500'/></h2>
            <p className='px-4'>Lorem Eligendi eveniet in magnam, assumenda deleniti illo exercitationem enim est facere. Sequi corporis quisquam fugiat? Cumque rerum ut fuga natus quis molestias?</p>
            <div className='m-4 grid md:grid-cols-2 grid-cols-1 gap-6 justify-between'>
                <div className='border p-4 md:space-y-2 text-gray-700'>
                    <h3 className='text-xl font-semibold'>Personal Information</h3>
                    <h4><span className='font-semibold'>Name:</span> Ashaduzzaman Sojib</h4>
                    <h4><span className='font-semibold'>Email:</span> ashaduzzamansojib67@gmail.com</h4>
                    <h4><span className='font-semibold'>Mobile:</span> +880 1892932859</h4>
                    <h4><span className='font-semibold'>Location:</span> Rangpur, Bangladesh</h4>
                    <h4><span className='font-semibold'>Age:</span> 25 Years</h4>
                </div>
                <div className='border p-4 md:space-y-2 text-gray-700'>
                    <h3 className='text-xl font-semibold'>B.A. Honours in English Literature</h3>
                    <p>National University - Bangladesh</p>
                    <button className='px-2 py-1 bg-[#48a0e7fd] text-white font-semibold'>2021 - 2024</button>
                    <p>Hi, I'm running students of a gratuation candidate. The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                </div>
                <div className='border p-4 md:space-y-2 text-gray-700'>
                    <h3 className='text-xl font-semibold'>Complete Web Development Course</h3>
                    <p>With Jhankar Mahbub - ProgrammingHero</p>
                    <button className='px-2 py-1 bg-[#48a0e7fd] text-white font-semibold'>2022 - 2023</button>
                    <p>Hi, I'm running a successfull running students of programmingHero Batch 7. The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                </div>
            </div>
        </div>
    );
};

export default About;