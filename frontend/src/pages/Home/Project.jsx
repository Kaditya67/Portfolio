import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Project() {
    const [projects, setProjects] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the projects (if you're fetching dynamically)
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/projects`);
                setProjects(response.data);
                setSelectedItem(response.data[0]?._id); // Set the first project as the default selected item
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // Fallback if there are no projects available
    if (loading) {
        return <p className="text-white">Loading projects...</p>;
    }

    if (projects.length === 0) {
        return <p className="text-white">No projects available</p>;
    }

    const selectedProject = projects.find(project => project._id === selectedItem);

    return (
        <div className='min-h-[80vh]'>
            <SectionTitle title='Projects' />
            <div className='flex flex-col py-10 lg:flex-row lg:gap-10'> 
                {/* Sidebar for project selection */}
                <div className='flex overflow-x-auto lg:overflow-auto lg:flex-col gap-5 border-b-2 lg:border-b-0 lg:border-l-2 border-[#135e4c82] pb-5 lg:pb-0 lg:w-1/3'>
                    {projects.map((project) => (
                        <div
                            key={project._id}
                            onClick={() => setSelectedItem(project._id)}
                            className='cursor-pointer flex-shrink-0 lg:flex-shrink'
                        >
                            <h1 className={`px-5 py-3 ${selectedItem === project._id ? 'text-tertiary lg:border-l-4 border-b-4 lg:border-b-0 border-tertiary -mb-[3px] lg:mb-0 lg:-ml-[3px] bg-[#1a7f5a5f]' : 'text-white'}`}>
                                {project.title}
                            </h1>
                        </div>
                    ))}
                </div>

                {/* Main content */}
                <div className='flex flex-col lg:flex-row gap-5 lg:ml-10 mt-5 lg:mt-0 w-full'>
                    {selectedProject ? (
                        <>
                            <div className='lg:w-1/2'>
                                <img 
                                    src={selectedProject.images[0] || 'fallback-image-url'} 
                                    alt={selectedProject.title || 'Project Image'} 
                                    className='w-full h-auto object-cover rounded-md' 
                                />
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
                                <Link to="/projects" className="text-tertiary underline">
                                View Project
                                </Link>
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
