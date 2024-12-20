import React from "react";
import SectionTitle from "./SectionTitle";

export default function About() {
  const currentSkills = [
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Django",
    "dbsqlite",
  ];
  const skills = [
    "NextJS",
    "aws",
    "docker",
    "jenkins",
    "git & github",
    "mysql",
    "java",
    "JavaFx",
    "JavaScript",
    "TypeScript",
    "Python",
    "Flask",
    "C++",
    "C",
    "HTML",
    "CSS",
    "TailwindCSS",
  ];

  return (
    <div className="md:pt-20">
      <SectionTitle title="About Me" />
      <div className="flex flex-col lg:gap-10 md:flex-row md:items-center md:gap-10 sm:flex-col sm:items-center sm:gap-5">
        <div className=" md:w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/f2740668-e051-4b8e-b837-4013eb1812ac/F7CNJBaRTF.json"
            background="transparent"
            speed="1"
            style={{ width: 300, height: 300 }}
          ></dotlottie-player>
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
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl md:pt-5 sm:pt-5">
          Here are a few technologies I've worked on:
        </h1>
        <div className="flex flex-wrap gap-5 mt-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-tertiary text-white py-2 px-6 rounded"
            >
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl md:pt-5 sm:pt-5">
          Currently working with:
        </h1>
        <div className="flex flex-wrap gap-5 mt-5">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className="border border-secondary text-white py-2 px-6 rounded"
            >
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
