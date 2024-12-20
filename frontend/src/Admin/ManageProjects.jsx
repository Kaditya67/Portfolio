import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: '',
    images: [],
    description: '',
    technologies: [],
    links: '',
    video: '',
  });
  const [editingProject, setEditingProject] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setProjects(response.data);
        setMessage('Projects loaded successfully.');
      } catch (err) {
        console.error('Error fetching projects:', err);
        setMessage('Failed to load projects. Please try again later.');
      }
    };
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleAddProject = async () => {
    try {
      await axios.post('/api/projects', newProject);
      const response = await axios.get('/api/projects/');
      setProjects(response.data);
      setNewProject({
        title: '',
        images: [],
        description: '',
        technologies: [],
        links: '',
        video: '',
      });
      setMessage('Project added successfully.');
    } catch (err) {
      console.error('Error adding project:', err);
      setMessage('Failed to add project. Please try again.');
    }
  };

  const handleUpdateProject = async () => {
    try {
      await axios.put(`/api/projects/${editingProject._id}`, editingProject);
      const response = await axios.get('/api/projects/');
      setProjects(response.data);
      setEditingProject(null);
      setMessage('Project updated successfully.');
    } catch (err) {
      console.error('Error updating project:', err);
      setMessage('Failed to update project. Please try again.');
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`/api/projects/${id}`);
      setProjects((prevProjects) => prevProjects.filter((proj) => proj._id !== id));
      setMessage('Project deleted successfully.');
    } catch (err) {
      console.error('Error deleting project:', err);
      setMessage('Failed to delete project. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {message && (
        <div className="mb-6 p-4 bg-blue-200 border border-blue-300 rounded-lg text-blue-800 shadow-md">
          {message}
        </div>
      )}

      <div className="flex flex-wrap justify-between">
        {/* Add Project Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/2 lg:w-1/3 max-h-screen overflow-auto">
          <h1 className="text-3xl font-semibold mb-6 text-gray-900">Add Project</h1>
          <div className="space-y-6">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newProject.title}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="images"
              placeholder="Images (comma-separated URLs)"
              value={newProject.images.join(', ')}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  images: e.target.value.split(',').map((url) => url.trim()),
                })
              }
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newProject.description}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="technologies"
              placeholder="Technologies (comma-separated)"
              value={newProject.technologies.join(', ')}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  technologies: e.target.value.split(',').map((tech) => tech.trim()),
                })
              }
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="links"
              placeholder="Project Link"
              value={newProject.links}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="video"
              placeholder="Video URL"
              value={newProject.video}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleAddProject}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition duration-300"
            >
              Add Project
            </button>
          </div>
        </div>

        {/* List of Projects */}
        <div className="flex-1 overflow-y-auto ml-6">
          <h1 className="text-3xl font-semibold mb-6 text-gray-900">Existing Projects</h1>
          <div className="space-y-6">
            {projects.length === 0 ? (
              <p>No projects available. Add a new project above.</p>
            ) : (
              projects.map((proj) => (
                <div key={proj._id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                  {editingProject && editingProject._id === proj._id ? (
                    <>
                      <input
                        type="text"
                        name="title"
                        value={editingProject.title}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, title: e.target.value })
                        }
                        className="border border-gray-300 p-3 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <input
                        type="text"
                        name="images"
                        value={editingProject.images.join(', ')}
                        onChange={(e) =>
                          setEditingProject({
                            ...editingProject,
                            images: e.target.value.split(',').map((url) => url.trim()),
                          })
                        }
                        className="border border-gray-300 p-3 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <textarea
                        name="description"
                        value={editingProject.description}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, description: e.target.value })
                        }
                        className="border border-gray-300 p-3 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <input
                        type="text"
                        name="technologies"
                        value={editingProject.technologies.join(', ')}
                        onChange={(e) =>
                          setEditingProject({
                            ...editingProject,
                            technologies: e.target.value.split(',').map((tech) => tech.trim()),
                          })
                        }
                        className="border border-gray-300 p-3 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <input
                        type="text"
                        name="links"
                        value={editingProject.links}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, links: e.target.value })
                        }
                        className="border border-gray-300 p-3 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <input
                        type="text"
                        name="video"
                        value={editingProject.video}
                        onChange={(e) =>
                          setEditingProject({ ...editingProject, video: e.target.value })
                        }
                        className="border border-gray-300 p-3 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <div className="flex space-x-4">
                        <button
                          onClick={handleUpdateProject}
                          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingProject(null)}
                          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold text-gray-800">{proj.title}</h3>
                      <p className="text-gray-500">
                        <strong>Images:</strong> {proj.images.join(', ')}
                      </p>
                      <p className="text-gray-600">{proj.description}</p>
                      <p className="text-gray-500">
                        <strong>Technologies:</strong> {proj.technologies.join(', ')}
                      </p>
                      <p className="text-gray-500">
                        <strong>Link to:</strong> {proj.links}
                      </p>
                      <p className="text-gray-500">
                        <strong>Video:</strong> {proj.video || 'N/A'}
                      </p>
                      <div className="flex space-x-4 mt-4">
                        <button
                          onClick={() => setEditingProject(proj)}
                          className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProject(proj._id)}
                          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300"
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageProjects;
