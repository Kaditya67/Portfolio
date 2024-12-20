import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Home/Footer";
import { useNavigate,Link } from "react-router-dom";

function ProjectDisplay() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects"); // Adjust API URL accordingly
        setProjects(response.data);
        setSelectedProject(response.data[0]); // Set the first project as the default
        setActiveImage(response.data[0]?.images[0]); // Set the first image as the active image
        setLoading(false);
      } catch (err) {
        setError("Error fetching projects. Please try again later.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Handle loading state and error
  if (loading) {
    return <p className="text-white">Loading projects...</p>;
  }

  if (error) {
    return <p className="text-white">{error}</p>;
  }

  if (!projects.length) {
    return <p className="text-white">No projects available</p>;
  }

  const thumbnails = selectedProject.images;

  return (
    <div className="bg-primary px-8 sm:px-20 lg:px-40 xl:px-100 relative">
      <div className="bg-primary text-tertiary min-h-screen">
    {/* Floating Back Button */}
    <Link
      to="/"
      className="fixed bottom-8 right-8 bg-secondary text-white px-6 py-3 rounded-lg shadow-lg flex items-center justify-center hover:bg-tertiary transition-colors z-50 text-lg font-semibold"
    >
      Portfolio
    </Link>

        {/* Projects Section */}
        <section className="bg-primary py-10 max-w-6xl mx-auto px-5">
          <div className="flex gap-10 items-center py-10 ssm:flex-col">
            <h1 className="text-secondary text-3xl font-semibold">Projects</h1>
            <div className="w-60 h-[1px] bg-tertiary"></div>
            <h6> Choose a project from here :</h6>
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
                <p className="text-secondary text-sm mb-4">{project.description}</p>
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
            <h1 className="text-secondary text-3xl font-semibold">Screenshots</h1>
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

        <Footer />
      </div>
    </div>
  );
}

export default ProjectDisplay;
