import React from 'react';
import { Link } from 'react-router-dom';

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
            <div>
                
            </div>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
        </div>
    );
};

export default Sidebar;