import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaRegMoon, FaTwitter } from 'react-icons/fa6'
import SideMenu from './SideMenu';
const Sidebar = () => {
    return (
        <div className='border px-4 py-2'>
            <div className='text-center'>
                <h2 className='text-xl font-bold pb-2'>Ashaduzzaman Sojib</h2>
                <div className="avatar">
                    <div className="w-44 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, saepe accusantium veniam tempora debitis ea dolores cumque iure</p>
            </div>
            <div className='flex gap-3 justify-center items-center py-3'>
                <Link to="/linkedin.com"><FaLinkedinIn className='icon-link' /></Link>
                <Link to="/github.com"><FaGithub className='icon-link' /></Link>
                <Link to="mailto:ashaduzzamansojib67@gmail.com"><FaEnvelope className='icon-link' /></Link>
                <Link to="twitter.com"><FaTwitter className='icon-link' /></Link>
            </div>
            <SideMenu />
            <div className='text-center pt-6 pb-2'>
                <p className='font-medium flex justify-center items-center gap-1 pb-2'><FaRegMoon /> Dark Mode</p>
                <input type="checkbox" className="toggle toggle-success" />
            </div>
        </div>
    );
};

export default Sidebar;