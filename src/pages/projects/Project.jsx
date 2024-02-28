import React from 'react';
import { FaEye } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Project = ({ pro }) => {
    const { title, ss, link, } = pro;
    return (
        <div className='pro-card'>
            <img src={ss} className='w-1/2 h-36' alt="" />
            <div>
                <h2 className='text-xl font-semibold italic pb-2'>{title}</h2>
                <div className='grid grid-cols-2 gap-3 justify-between'>
                    <Link target='_blank' to={link} className='btn btn-sm col-span-2'><FaEye className='animate-bounce' /> Live View</Link>
                    <button className='btn btn-sm bg-gradient-to-tl from-[#2087db] to-[#3f25d1] text-white border-none'>FrontEnd</button>
                    <button className='btn btn-sm bg-gradient-to-tl from-[#9020db] to-[#257bd1] text-white border-none'>BackEnd</button>
                </div>
            </div>
        </div>
    );
};

export default Project;