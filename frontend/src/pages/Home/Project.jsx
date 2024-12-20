import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { projects } from '../../resources/projects';

function Project() {
    // Initialize selectedItem with the ID of the latest project (assuming the first item is the latest)
    const [selectedItem, setSelectedItem] = useState(projects[0]._id);
    const selectedProject = projects.find(project => project._id === selectedItem);

    return (
        <div className='min-h-[80vh]'>
            <SectionTitle title='Projects' />
            <div className='flex flex-col py-10 lg:flex-row lg:gap-10'>
                {/* For small screens: horizontal scroll, for large screens: vertical sidebar */}
                <div className='flex overflow-x-auto lg:overflow-auto lg:flex-col gap-5 border-b-2 lg:border-b-0 lg:border-l-2 border-[#135e4c82] pb-5 lg:pb-0 lg:w-1/3'>
                    {projects.map((project) => (
                        <div
                            key={project._id}
                            onClick={() => setSelectedItem(project._id)}
                            className='cursor-pointer flex-shrink-0 lg:flex-shrink'
                        >
                            <h1 className={`px-5 ${selectedItem === project._id ? 'text-tertiary lg:border-l-4 border-b-4 lg:border-b-0 border-tertiary -mb-[3px] lg:mb-0 lg:-ml-[3px] bg-[#1a7f5a5f] py-3' : 'text-white'}`}>
                                {project.title}
                            </h1>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col lg:flex-row gap-5 lg:ml-10 mt-5 lg:mt-0'>
                    {selectedProject ? (
                        <>
                            <div className='lg:w-1/2'>
                                <img src={selectedProject.image} alt={selectedProject.title} className='w-full h-auto' />
                            </div>
                            <div className='flex flex-col gap-5 lg:w-1/2'>
                                <h2 className='text-xl text-secondary'>{selectedProject.title}</h2>
                                <p className='text-white'>{selectedProject.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {selectedProject.technologies.map((tech, index) => (
                                        <span key={index} className='bg-secondary text-white px-2 py-1 rounded'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a href={selectedProject.links} className='text-tertiary underline' target='_blank' rel='noopener noreferrer'>View Project</a>
                            </div>
                        </>
                    ) : (
                        <p className='text-white'>Select a project to see the details</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Project;