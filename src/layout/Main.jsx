import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';

const Main = () => {
    return (
        <div className='my-container md:my-2'>
            <div className='grid md:grid-cols-4 grid-cols-1 justify-between gap-3 '>
                <aside className='sticky top-0 h-screen hidden md:block'>
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