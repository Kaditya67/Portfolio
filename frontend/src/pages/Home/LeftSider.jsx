import React from 'react';

const icons = [
    { id: 'mail', iconClass: 'ri-mail-line', link: 'mailto:ojhaadity913@gmail.com' },
    { id: 'linkedin', iconClass: 'ri-linkedin-box-line', link: 'https://www.linkedin.com/in/aditya-ojha-83406825a/' },
    { id: 'twitter', iconClass: 'ri-twitter-x-line', link: 'https://x.com/Aditya_Ojha__' },
    { id: 'instagram', iconClass: 'ri-instagram-line', link: 'https://www.instagram.com/kaditya67/?hl=en' },
    // { id: 'facebook', iconClass: 'ri-facebook-circle-line', link: 'https://www.facebook.com/aditya.ojha.3785373' },
    { id: 'github', iconClass: 'ri-github-line', link: 'https://github.com/Kaditya67/kaditya' },
];

export default function LeftSider() {
    return (
        <div className="fixed left-0 bottom-0 p-5 bg-transparent flex flex-col items-center">
            <div className="flex flex-col items-center space-y-4 mt-5">
                {icons.map(icon => (
                    <a key={icon.id} href={icon.link} target="_blank" rel="noopener noreferrer">
                        <i className={`ri ${icon.iconClass} text-gray-400 text-2xl`}></i>
                    </a>
                ))}
            </div>
            <div className="hidden sm:block h-32 w-[1px] bg-gray-700"></div>
        </div>
    );
}
