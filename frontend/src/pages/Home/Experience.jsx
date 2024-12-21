import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import axios from 'axios';

function Experience() {
    const [experiences, setExperiences] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/experiences`);
                setExperiences(response.data);
                setSelectedItem(response.data[0]._id); // Set the first item as the default selected item
                setLoading(false);
            } catch (err) {
                console.error('Error fetching experiences:', err);
                setLoading(false);
            }
        };
        fetchExperiences();
    }, []);

    if (loading) {
        return <p className="text-white">Loading...</p>;
    }

    const selectedExperience = experiences.find(experience => experience._id === selectedItem);

    return (
        <div className=''>
            <SectionTitle title='Experience' />
            <div className='flex flex-col py-10 lg:flex-row lg:gap-10'>
                {/* Sidebar with horizontal scrolling for small screens, vertical for large */}
                <div className='flex overflow-x-auto lg:overflow-y-auto lg:flex-col gap-5 border-b-2 lg:border-b-0 lg:border-l-2 border-[#135e4c82] pb-5 lg:pb-0 lg:w-1/3'>
                    {experiences.map((experience) => (
                        <div
                            key={experience._id}
                            onClick={() => setSelectedItem(experience._id)}
                            className='cursor-pointer flex-shrink-0 lg:flex-shrink-0 hover:bg-[#1a7f5a5f]'
                        >
                            <h1
                                className={`px-5 py-3 ${selectedItem === experience._id 
                                    ? 'text-tertiary lg:border-l-4 border-b-4 lg:border-b-0 border-tertiary -mb-[3px] lg:mb-0 lg:-ml-[3px] bg-[#1a7f5a5f]'
                                    : 'text-white'}`}
                            >
                                {experience.period}
                            </h1>
                        </div>
                    ))}
                </div>

                {/* Main content */}
                <div className='flex flex-col gap-5 lg:ml-10 w-full'>
                    {selectedExperience ? (
                        <>
                            <h2 className='text-xl text-secondary'>{selectedExperience.title}</h2>
                            <h3 className='text-tertiary'>{selectedExperience.company}</h3>
                            <p className='text-white'>{selectedExperience.description}</p>
                        </>
                    ) : (
                        <p className='text-white'>Select an experience to see the details</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experience;
