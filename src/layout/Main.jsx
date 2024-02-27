import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';

const Main = () => {
    return (
        <div className='my-container'>
            <div className='grid grid-cols-3 justify-between gap-3'>
                <Sidebar />
                <div className='col-span-2 border'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Main;