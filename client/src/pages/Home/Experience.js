import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { useSelector } from 'react-redux';

function Experience() {
  const { portfolioData } = useSelector(state => state.root || {});
  const experiences = portfolioData?.experience || [];
  const [selectedItem, setSelectedItem] = useState(experiences.length > 0 ? experiences[0]._id : null);

  // Update selectedItem when experiences data is loaded
  useEffect(() => {
    if (experiences.length > 0) {
      setSelectedItem(experiences[0]._id);
    }
  }, [experiences]);

  return (
    <div className=''>
      <SectionTitle title='Experience' />
      <div className='flex flex-col py-10 lg:flex-row lg:gap-10'>
        <div className='flex overflow-x-auto lg:overflow-auto lg:flex-col gap-5 border-b-2 lg:border-b-0 lg:border-l-2 border-[#135e4c82] pb-5 lg:pb-0 lg:w-1/3'>
          {experiences.map((experience) => (
            <div
              key={experience._id}
              onClick={() => setSelectedItem(experience._id)}
              className='cursor-pointer flex-shrink-0 lg:flex-shrink'
            >
              <h1 className={`px-5 ${selectedItem === experience._id ? 'text-tertiary lg:border-l-4 border-b-4 lg:border-b-0 border-tertiary -mb-[3px] lg:mb-0 lg:-ml-[3px] bg-[#1a7f5a5f] py-3' : 'text-white'}`}>
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-5 lg:ml-10'>
          {experiences.map((experience) => (
            experience._id === selectedItem && (
              <div key={experience._id}>
                <h2 className='text-xl text-secondary'>{experience.title}</h2>
                <h3 className='text-tertiary'>{experience.company}</h3>
                <p className='text-white'>{experience.description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
