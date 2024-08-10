import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { useSelector } from 'react-redux';

function Project() {
    const { portfolioData } = useSelector(state => state.root || {});
    const projects = portfolioData?.project || [];
    const [selectedItem, setSelectedItem] = useState(projects.length > 0 ? projects[0]._id : null);
    const selectedProject = projects.find(project => project._id === selectedItem);

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setImageLoaded(false); // Reset image loaded state when selected project changes
    }, [selectedItem]);

    return (
        <div className='min-h-[80vh]'>
            <SectionTitle title='Projects' />
            <div className='flex flex-col py-10 lg:flex-row lg:gap-10'>
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
                                {!imageLoaded && (
                                    <div className='w-full h-auto max-h-60 bg-gray-300 animate-pulse'></div>
                                )}
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className={`w-full h-auto max-h-60 ${imageLoaded ? 'block' : 'hidden'}`}
                                    onLoad={() => setImageLoaded(true)}
                                    style={{ width: '100%', height: 'auto', maxHeight: '240px' }}
                                />
                            </div>
                            <div className='flex flex-col gap-5 lg:w-1/2'>
                                <h2 className='text-xl text-secondary'>{selectedProject.title}</h2>
                                <p className='text-white'>{selectedProject.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {selectedProject.technologies.map((tech) => (
                                        <span key={tech} className='bg-secondary text-white px-2 py-1 rounded'>
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
