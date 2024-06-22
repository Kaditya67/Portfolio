import React from 'react';
import SectionTitle from './SectionTitle';

export default function About() {
    const skills = [
        'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'JavaScript', 'Python', 'HTML', 'CSS',
    ];

    return (
        <div className='md:pt-20'>
            <SectionTitle title='About Me' />
            <div className='flex flex-col lg:gap-10 md:flex-row md:items-center md:gap-10 sm:flex-col sm:items-center sm:gap-5'>
                <div className=' md:w-1/2 sm:w-full'>
                    <dotlottie-player
                        src="https://lottie.host/f2740668-e051-4b8e-b837-4013eb1812ac/F7CNJBaRTF.json"
                        background="transparent"
                        speed="1"
                        style={{ width: 300, height: 300 }}
                    ></dotlottie-player>
                </div>
                <div className='flex flex-col gap-5 md:w-1/2 sm:w-full'>
                    <p className='text-white'>
                        Hello, I'm Aditya, a passionate software developer with a love for coding and problem-solving.
                        With a strong foundation in various programming languages and a keen interest in emerging technologies,
                    </p>
                    <p className='text-white'>
                        I constantly strive to improve my skills and contribute to innovative projects.
                        Whether it's developing web applications, exploring machine learning, or delving into open-source projects,
                        I find joy in the process of creating and learning. Outside of coding, I enjoy reading tech blogs,
                        participating in hackathons, and collaborating with fellow enthusiasts in the tech community.
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
