import React from 'react';
import { FaEye } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Project = ({ pro }) => {
    const { title, ss, link, } = pro;
    return (
        <div className='pro-card'>
            <img src={ss} className='w-1/2 h-36 rounded-md' alt="" />
            <div>
                <h2 className='text-xl font-semibold italic pb-2'>{title}</h2>
                <div className='grid grid-cols-2 gap-3 justify-between'>
                    <Link target='_blank' to={link} className='btn btn-sm col-span-2'><FaEye className='animate-bounce' /> Live View</Link>
                    <button className='btn btn-sm gradientBg border-none'>FrontEnd</button>
                    <button className='btn btn-sm secondGradientBg border-none'>BackEnd</button>
                </div>
            </div>
        </div>
    );
};

export default Project;