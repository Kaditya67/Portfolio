import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { experiences } from '../../resources/experiences';

function Experience() {
    // Initialize selectedItem with the ID of the latest experience (assuming the first item is the latest)
    const [selectedItem, setSelectedItem] = useState(experiences[0]._id);
    const selectedExperience = experiences.find(experience => experience._id === selectedItem);

    return (
        <div className='experience-container'>
            <SectionTitle title='Experience' />
            <div className='experience-content flex flex-col py-10 lg:flex-row lg:gap-10'>
                {/* For small screens: horizontal scroll, for large screens: vertical sidebar */}
                <div className='flex overflow-x-auto lg:overflow-auto lg:flex-col gap-5 border-b-2 lg:border-b-0 lg:border-l-2 border-[#135e4c82] pb-5 lg:pb-0 lg:w-[300px] lg:flex-none'>
                    {experiences.map((experience) => (
                        <div 
                            key={experience._id} 
                            onClick={() => setSelectedItem(experience._id)} 
                            className={`cursor-pointer ${selectedItem === experience._id ? 'text-tertiary lg:border-l-4 border-b-4 lg:border-b-0 border-tertiary -mb-[3px] lg:mb-0 lg:-ml-[3px] bg-[#1a7f5a5f] py-3' : 'text-white'}`}
                            role="button"
                            aria-pressed={selectedItem === experience._id}
                            tabIndex={0}
                            onKeyPress={() => setSelectedItem(experience._id)}
                        >
                            <h1 className='px-5'>
                                {experience.period}
                            </h1>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col gap-5 lg:ml-10'>
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
