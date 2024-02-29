import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import { FaBars, FaX } from 'react-icons/fa6';

const Main = () => {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <div className='my-container md:my-2'>
            <div className='absolute top-2 right-0 p-2 block md:hidden'>
                {
                    showMenu ? <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' /> : <FaX onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
                }
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 justify-between gap-3 '>
                <aside className={`md:sticky top-0 h-screen w-[300px] ${showMenu ? 'block' : 'hidden'}`}>
                    <Sidebar />
                </aside>
                <div className='md:col-span-3 border'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Main;