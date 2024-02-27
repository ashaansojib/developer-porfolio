import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='border'>
            this is aside
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
        </div>
    );
};

export default Sidebar;