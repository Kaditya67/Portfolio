import React, { useState } from "react";
import Footer from "../Home/Footer";

const projects = [
  {
    technologies: [],
    _id: "1",
    title: "Cool Pizza",
    images: [
      "https://sheysathya2.netlify.app/pizzas.svg",
      "https://sheysathya2.netlify.app/pizzas.svg",
    ],
    description:
      "An application that tracks the number of confirmed, recovered, and dead cases in the world. It also has an option to search for any country in the world.",
    links: "/",
    video: "",
  },
  {
    technologies: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    _id: "2",
    title: "Ecommerce",
    images: [
      "https://sheysathya2.netlify.app/ecommerce.svg",
      "https://sheysathya2.netlify.app/pizzas.svg",
    ],
    description:
      "An ecommerce application with features for browsing, searching, and purchasing products securely.",
    links: "/",
    video: "",
  },
  {
    technologies: ["Python", "Flask", "SQLAlchemy", "Bootstrap"],
    _id: "3",
    title: "Task Manager",
    images: [
      "https://sheysathya2.netlify.app/taskmanager.svg",
      "https://sheysathya2.netlify.app/ecommerce.svg",
    ],
    description:
      "A task management app to organize and track tasks with deadlines and priorities.",
    links: "/",
    video: "",
  },
  {
    technologies: ["React Native", "Firebase"],
    _id: "4",
    title: "Chat App",
    images: [
      "https://sheysathya2.netlify.app/chatapp.svg",
      "https://sheysathya2.netlify.app/taskmanager.svg",
    ],
    description:
      "A real-time chat application with support for group chats and multimedia sharing.",
    links: "/",
    video: "",
  },
];

function ProjectDisplay() {
  const [activeImage, setActiveImage] = useState(projects[0].images[0]);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const thumbnails = selectedProject.images;

  return (
    <div className="bg-primary px-8 sm:px-20 lg:px-40 xl:px-100">
      <div className="bg-primary text-tertiary min-h-screen">

        {/* Projects Section */}
        <section className="bg-primary py-10 max-w-6xl mx-auto px-5">
          <div className="flex gap-10 items-center py-10 ssm:flex-col">
            <h1 className="text-secondary text-3xl font-semibold">Projects</h1>
            <div className="w-60 h-[1px] bg-tertiary"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setActiveImage(project.images[0]);
                }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-primary text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-tertiary text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Project Details */}
        <header className="flex gap-10 items-center py-10 ssm:flex-col">
          <h1 className="text-secondary text-3xl font-semibold">
            {selectedProject.title}
          </h1>
          <div className="w-60 h-[1px] bg-tertiary"></div>
        </header>

        {/* About Section */}
        <section className="flex flex-col lg:gap-10 md:flex-row md:items-center md:gap-10 sm:flex-col sm:items-center sm:gap-5 h-[80vh]">
          <div className="md:w-1/2 sm:w-full">
            <img
              src={activeImage}
              alt={selectedProject.title}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-5 md:w-1/2 sm:w-full">
            <p className="text-white">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-secondary text-white px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="bg-primary py-10">
          <div className="flex gap-10 items-center py-10 ssm:flex-col">
            <h1 className="text-secondary text-3xl font-semibold">
              Screenshots
            </h1>
            <div className="w-60 h-[1px] bg-tertiary"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-2xl mb-5">
              <div className="aspect-w-16 aspect-h-9 h-[60vh]">
                <img
                  src={activeImage}
                  alt="Active Screenshot"
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              {thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setActiveImage(thumbnail)}
                  className={`w-24 h-24 rounded-lg cursor-pointer transition-transform transform hover:scale-105 shadow-lg ${
                    activeImage === thumbnail ? "ring-4 ring-tertiary" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="bg-primary py-10 min-h-[90vh] flex flex-col items-center">
          <div className="max-w-4xl w-full px-5 text-center">
            <div className="flex gap-10 items-center py-10 ssm:flex-col">
              <h1 className="text-secondary text-3xl font-semibold">
                Demo Video
              </h1>
              <div className="w-60 h-[1px] bg-tertiary"></div>
            </div>
            <div className="bg-white h-[25rem] rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-primary text-lg">
                Demo Video Placeholder
              </span>
            </div>
          </div>
          <div className="mt-10 max-w-3xl w-full px-5">
            <h2 className="text-2xl text-white font-semibold mb-4">
              Description:
            </h2>
            <p className="text-white text-base leading-relaxed">
              {selectedProject.description}
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default ProjectDisplay;
