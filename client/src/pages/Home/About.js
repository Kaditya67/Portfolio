import React from 'react';
import SectionTitle from './SectionTitle';
import { useSelector } from 'react-redux';

export default function About() {
    // const skills = [
    //     'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'JavaScript', 'Python', 'HTML', 'CSS',
    // ];

  const { loading, portfolioData } = useSelector(state => state.root || {});
  const {about}=portfolioData;
  const {lottieUrl,description1,description2,skills}=about;

    return (
        <div className='md:pt-20'>
            <SectionTitle title='About Me' />
            <div className='flex flex-col lg:gap-10 md:flex-row md:items-center md:gap-10 sm:flex-col sm:items-center sm:gap-5'>
                <div className=' md:w-1/2 sm:w-full'>
                    <dotlottie-player
                        src={lottieUrl}
                        background="transparent"
                        speed="1"
                        style={{ width: 300, height: 300 }}
                    ></dotlottie-player>
                </div>
                <div className='flex flex-col gap-5 md:w-1/2 sm:w-full'>
                    <p className='text-white'>
                        {description1}
                    </p>
                    <p className='text-white'>
                        {description2}
                    </p>
                </div>
            </div>
            <div className='py-5'>
                <h1 className='text-tertiary text-xl md:pt-5 sm:pt-5'>
                    Here are a few technologies I'm currently working on:
                </h1>
                <div className='flex flex-wrap gap-5 mt-5'>
                    {skills.map((skill, index) => (
                        <div key={index} className='border border-tertiary text-white py-2 px-6 rounded'>
                            <h1 className='text-tertiary'>{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
