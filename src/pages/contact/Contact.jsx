import React from 'react';
import { FaEnvelope, FaLocationArrow, FaPhone, FaPhoneVolume } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h2 className='flex items-center gap-3 px-2 border-l-2 border-teal-600 ms-1 mt-2 text-xl font-semibold'>Contact Me <FaPhoneVolume className='animate-bounce' /></h2>
            <p className='ps-4'>Here is some of my active contact Information. If you feel free to direct call me also you can send mail through Email. I also linked my social profile that you can visite them.</p>
            <div className='p-4 text-gray-700 grid md:grid-cols-2 grid-cols-1 gap-4 justify-between border m-4'>
                <div>
                    <p className='flex items-center gap-2 font-semibold'><FaEnvelope className='text-2xl pText' /> My Email</p>
                    <Link to="mailto:ashaduzzamansojib67@gmail.com">ashaduzzamansojib67@gmail.com</Link>
                    <p className='flex items-center gap-2 font-semibold pt-3'><FaPhone className='text-2xl pText' /> My Phone</p>
                    <p>+8801892932859</p>
                    <p className='flex items-center gap-2 font-semibold pt-3'><FaLocationArrow className='text-2xl pText' /> My Phone</p>
                    <p>Rangpur, Bangladesh</p>
                </div>
                <div>
                    <h3 className='text-xl font-semibold'>Want to Talk?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi.</p>
                    <form>
                        <input type="email" className='input input-bordered my-2 w-full' placeholder='Email Address' />
                        <div className='grid grid-cols-2 justify-center gap-2'>
                            <input type="text" className='input input-bordered' placeholder='Full Name' />
                            <input type="text" className='input input-bordered' placeholder='Mobile' />
                        </div>
                        <textarea className="textarea textarea-bordered my-2 w-full" placeholder="Type Your Message"></textarea>
                        <input type="submit" value="Send Message" className='gradientBg p-4 rounded-full font-semibold cursor-pointer' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;