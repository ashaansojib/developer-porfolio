import React from 'react';
import { FaBookBookmark, FaComment, FaDownload, FaHouse, FaLaptop, FaTelegram } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className='uppercase md:space-y-3 border-b py-6'>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/"><FaHouse /> Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/projects"><FaLaptop /> Projects</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/resume"><FaBookBookmark /> Resume</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/about"><FaComment /> about me</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/contact"><FaTelegram /> contact me</NavLink>
        </div>
    );
};

export default SideMenu;