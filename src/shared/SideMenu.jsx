import React from 'react';
import { FaBookBookmark, FaComment, FaDownload, FaHouse, FaLaptop, FaTelegram } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className='uppercase md:space-y-3'>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/"><FaHouse /> Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/portfolio"><FaLaptop /> Projects</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/portfolio"><FaBookBookmark /> Resume</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/portfolio"><FaComment /> about me</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/portfolio"><FaTelegram /> contact me</NavLink>
            <div className='download-btn'>
                <FaDownload />
                <button className='uppercase'>Download Resume</button>
            </div>

        </div>
    );
};

export default SideMenu;