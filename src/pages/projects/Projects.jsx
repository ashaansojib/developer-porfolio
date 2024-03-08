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
            <p className='px-4'>Here is some of my demo projects that i created for showcase. All these project I create to explore the all tools and framework and show my professional knowledge. I mentioned the code link with live website link if you have free time then review them.</p>
            <div className='grid md:grid-cols-2 grid-cols-1 justify-between gap-4 items-center p-4'>
                {
                    projectDb?.map(project => <Project key={project._id} pro={project} />)
                }
            </div>
        </>
    );
};

export default Projects;