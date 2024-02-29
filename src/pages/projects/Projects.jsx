import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projectDb, setProjectDb] = useState([]);
    useEffect(() => {
        fetch('/projectDb.json')
            .then(res => res.json())
            .then(data => setProjectDb(data))
    }, [])
    return (
        <>
            <h2 className='px-2 border-l-2 border-teal-600 ms-1 mt-2 text-xl font-semibold'>Showcase</h2>
            <p className='px-4'>Lorem Eligendi eveniet in magnam, assumenda deleniti illo exercitationem enim est facere. Sequi corporis quisquam fugiat? Cumque rerum ut fuga natus quis molestias?</p>
            <div className='grid md:grid-cols-2 grid-cols-1 justify-between gap-4 items-center p-4'>
                {
                    projectDb?.map(project => <Project key={project._id} pro={project} />)
                }
            </div>
        </>
    );
};

export default Projects;