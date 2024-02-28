import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckDouble, FaEye, FaGear, FaGithub, FaToolbox } from 'react-icons/fa6'
const Home = () => {
    return (
        <div className='px-4 py-2'>
            <div className='grid grid-cols-3 justify-between gap-4'>
                <div className='col-span-2'>
                    <h1 className='text-2xl font-bold'>Ashaduzzaman Sojib</h1>
                    <p className='font-semibold text-gray-600'>Jr. MERN Stack Developer</p>
                    <p className='text-gray-700 py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nostrum cupiditate quia officiis aut id. Nostrum quas minima, corrupti ea eligendi praesentium officia, optio dolores quam <Link><span className='text-green-600 hover:underline'>online project</span></Link> quis nesciunt sit.</p>
                    <div className='flex gap-3'>
                        <button className='rounded-md flex items-center gap-2 px-3 py-2 bg-green-500 text-white font-semibold uppercase'><FaEye className='animate-bounce' /> Get Resume</button>
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
            <h4 className='font-semibold py-2 flex items-center gap-2'><FaGear className='animate-spin' /> Experties In..</h4>
            <div className='grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 justify-between items-center gap-3'>
                <button className='px-4 py-2 bg-slate-500 font-semibold text-white rounded-md'>Vanilla JS</button>
                <button className='px-4 py-2 bg-[#1210a0fb] font-semibold text-white rounded-md'>JS ES6</button>
                <button className='px-4 py-2 bg-[#4286ca] font-semibold text-white rounded-md'>React JS</button>
                <button className='px-4 py-2 bg-[#4286ca] font-semibold text-white rounded-md'>Router</button>
                <button className='px-4 py-2 bg-[#1779db] font-semibold text-white rounded-md'>TypeScript</button>
                <button className='px-4 py-2 bg-[#1d456d] font-semibold text-white rounded-md'>Node JS</button>
                <button className='px-4 py-2 bg-[#217ad3] font-semibold text-white rounded-md'>Express JS</button>
                <button className='px-4 py-2 bg-[#134db9] font-semibold text-white rounded-md'>MongoDB</button>
                <button className='px-4 py-2 bg-[#afb8c9] font-semibold text-white rounded-md'>MySQL</button>
                <button className='px-4 py-2 bg-[#134db9] font-semibold text-white rounded-md'>TailwindCss</button>
                <button className='px-4 py-2 bg-[#134db9] font-semibold text-white rounded-md'>Bootstrap</button>
                <button className='px-4 py-2 bg-[#1ae094] font-semibold text-white rounded-md'>HTML5</button>
                <button className='px-4 py-2 bg-[#1a80e0] font-semibold text-white rounded-md'>CSS3</button>
                <button className='px-4 py-2 bg-[#1ae05c] font-semibold text-white rounded-md'>SASS</button>
            </div>
            <h4 className='font-semibold pb-2 pt-4 flex items-center gap-2'><FaToolbox className='animate-bounce' /> Expert Tools..</h4>
            <div className='grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 justify-between items-center gap-3'>
                <button className='px-4 py-2 bg-[#d83988] font-semibold text-white rounded-md'>Github</button>
                <button className='px-4 py-2 bg-[#d839bd] font-semibold text-white rounded-md'>Redux</button>
                <button className='px-4 py-2 bg-[#4286ca] font-semibold text-white rounded-md'>JWT</button>
                <button className='px-4 py-2 bg-[#382535] font-semibold text-white rounded-md'>Firebase</button>
                <button className='px-4 py-2 bg-[#881577] font-semibold text-white rounded-md'>Axios</button>
                <button className='px-4 py-2 bg-[#1d456d] font-semibold text-white rounded-md'>Vercel</button>
                <button className='px-4 py-2 bg-[#24c783] font-semibold text-white rounded-md'>VSCode</button>
                <button className='px-4 py-2 bg-[#645] font-semibold text-white rounded-md'>Canva</button>
                <button className='px-4 py-2 bg-[#1210a0fb] font-semibold text-white rounded-md'>Figma</button>
            </div>
        </div>
    );
};

export default Home;