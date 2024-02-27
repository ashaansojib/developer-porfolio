import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckDouble, FaEye, FaGithub } from 'react-icons/fa6'
const Home = () => {
    return (
        <div className='px-4 py-2'>
            <div className='grid grid-cols-3 justify-between gap-4'>
                <div className='col-span-2'>
                    <h1 className='text-2xl font-bold'>Ashaduzzaman Sojib</h1>
                    <p className='font-semibold text-gray-600'>Jr. MERN Stack Developer</p>
                    <p className='text-gray-700 py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nostrum cupiditate quia officiis aut id. Nostrum quas minima, corrupti ea eligendi praesentium officia, optio dolores quam <Link><span className='text-green-600 hover:underline'>online project</span></Link> quis nesciunt sit.</p>
                    <div className='flex gap-3'>
                        <button className='rounded-md flex items-center gap-2 px-3 py-2 bg-green-500 text-white font-semibold uppercase'><FaEye className='animate-bounce' /> View Portfolio</button>
                        <button className='rounded-md flex items-center gap-2 px-3 py-2 bg-gray-500 text-white font-semibold uppercase'><FaGithub className='animate-bounce' /> View Github</button>
                    </div>
                </div>
                <div className="avatar justify-end">
                    <div className="rounded-md h-60">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
            <h2 className='text-xl font-semibold flex gap-2 items-center'><FaCheckDouble className='text-green-500' /> What I do...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum assumenda, aliquam perferendis corporis odio voluptate obcaecati inventore, molestiae consequatur iste quidem omnis! Tempora perspiciatis unde minus est, laudantium in sint?</p>
        </div>
    );
};

export default Home;