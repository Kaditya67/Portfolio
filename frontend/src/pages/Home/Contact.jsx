import React from 'react';
import SectionTitle from './SectionTitle';

function Contact() {
    const user = {
        name: "Aditya",
        gender: "male",
        age: 21,
        mobile: 7033529453,
        email: "ojhaadity913@gmailcom",
        country: "India",
    };

    return (
        <div>
            <SectionTitle title='Say Hello' />
            <div className='flex flex-col items-center justify-between lg:flex-row lg:items-start lg:gap-10 md:flex-row md:items-start md:gap-10 sm:flex-col sm:items-center sm:gap-5'>
                <div className='flex flex-col gap-1 lg:py-20 md:py-20'>
                    <h1 className='text-white'>{'{'}</h1>
                    <div className='ml-5'>
                        {Object.keys(user).map((key) => (
                            <h1 key={key}>
                                <span className='text-tertiary'>{`${key}: `}</span>
                                <span className='text-white'>{user[key]}</span>
                            </h1>
                        ))}
                    </div>
                    <h1 className='text-white'>{'}'}</h1>
                </div>
                <div className='h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] mt-5 lg:mt-0'>
                    <dotlottie-player
                        src="https://lottie.host/66525341-52b1-4ebb-9b9a-434a31d7ee53/oVHH0OdSAE.json"
                        background="transparent"
                        speed="1"
                        autoplay
                    ></dotlottie-player>
                </div>
            </div>
        </div>
    );
}

export default Contact;
