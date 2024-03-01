import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaRegMoon } from 'react-icons/fa6'
import SideMenu from './SideMenu';
const Sidebar = () => {
    return (
        <div className='border px-4 py-2'>
            <div className='text-center'>
                <h2 className='font-semibold pb-2 md:block hidden'>Ashaduzzaman Sojib</h2>
                <div className="avatar">
                    <div className="md:w-44 w-36 rounded-full">
                        <img src="https://ashaduzzaman-sojib.netlify.app/mypp-modified.png" />
                    </div>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, saepe accusantium veniam tempora debitis ea dolores cumque iure</p>
            </div>
            <div className='flex gap-3 justify-center items-center py-3 border-b'>
                <Link to="/linkedin.com"><FaLinkedinIn className='icon-link bg-[#0077B5]' /></Link>
                <Link to="/github.com"><FaGithub className='icon-link bg-[#3f3b3b]' /></Link>
                <Link to="mailto:ashaduzzamansojib67@gmail.com"><FaEnvelope className='icon-link bg-[#4545]' /></Link>
                <Link to="twitter.com"><FaFacebookF className='icon-link bg-[#1873EB]' /></Link>
            </div>
            <SideMenu />
            <div className='text-center pt-4 pb-2'>
                <p className='font-medium flex justify-center items-center gap-1 pb-2'><FaRegMoon /> Dark Mode</p>
                <input type="checkbox" className="toggle toggle-success" />
            </div>
        </div>
    );
};

export default Sidebar;