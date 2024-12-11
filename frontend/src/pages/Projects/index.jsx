import React, { useState } from 'react'; 
import Footer from '../Home/Footer';

function ProjectDisplay() {
    const [activeImage, setActiveImage] = useState('https://via.placeholder.com/450x300');
  const thumbnails = [
    'https://via.placeholder.com/450x300',
    'https://via.placeholder.com/451x300',
    'https://via.placeholder.com/452x300',
    'https://via.placeholder.com/453x300',
  ];
  return (
    <div className="bg-primary px-8 sm:px-20 lg:px-40 xl:px-100">
    <div className="bg-primary text-tertiary min-h-screen">  
      <header className='flex gap-10 items-center py-10 ssm:flex-col'>
        <h1 className='text-secondary text-3xl font-semibold'>TrendSight</h1>
        <div className='w-60 h-[1px] bg-tertiary'></div>
      </header> 
      
      <section className="flex flex-col lg:gap-10 md:flex-row md:items-center md:gap-10 sm:flex-col sm:items-center sm:gap-5 h-[55vh]">
        <div className=" md:w-1/2 sm:w-full">
          <img
            src="https://via.placeholder.com/450x300"
            alt="Placeholder"
            style={{ width: 450, height: 300 }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-5 md:w-1/2 sm:w-full">
          <p className="text-white">
            Hello, I'm Aditya, a passionate software developer with a deep love
            for crafting innovative solutions and solving complex problems. My
            journey in technology is fueled by curiosity and the excitement of
            building impactful applications that make a difference.
          </p>
          <p className="text-white">
            Beyond coding, I solve daily leetcode problems to improve my problem solving skills,
            participate in hackathons, and contribute to open source projects. In my free time, you'll often find me
            exploring new tools, writing technical blogs, or collaborating with
            like-minded enthusiasts on exciting projects.
          </p> 
          <p className="text-white">
            Always looking to collaborate and learn from others !
          </p>
        </div>
      </section> 
 
      <section className="bg-primary py-10 max-w-6xl mx-auto px-5 h-screen"> 
        <div className='flex gap-10 items-center py-10 ssm:flex-col'>
        <h1 className='text-secondary text-3xl font-semibold'>Screenshots</h1>
        <div className='w-60 h-[1px] bg-tertiary'></div>
        </div> 
          <div className="flex flex-col items-center h-screen w-content">
            <div className="w-full max-w-2xl mb-5">
              <img
                src={activeImage}
                alt="Active Screenshot"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              {thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setActiveImage(thumbnail)}
                  className={`w-24 h-24 rounded-lg cursor-pointer transition-transform transform hover:scale-105 shadow-lg ${
                    activeImage === thumbnail ? 'ring-4 ring-tertiary' : ''
                  }`}
                />
              ))}
            </div>
          </div>
      </section>


      {/* Demo Video Section */}
      <section className="bg-primary py-10">
        <div className="max-w-4xl mx-auto px-5 text-center">
        <div className='flex gap-10 items-center py-10 ssm:flex-col'>
        <h1 className='text-secondary text-3xl font-semibold'>Demo Video</h1>
        <div className='w-60 h-[1px] bg-tertiary'></div>
        </div>
          <div className="bg-white h-[25rem] rounded-lg shadow-lg flex items-center justify-center">
            <span className="text-primary text-lg">Demo Video Placeholder</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </div>
  );
}

export default ProjectDisplay;