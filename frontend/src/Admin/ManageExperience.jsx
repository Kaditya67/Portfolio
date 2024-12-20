import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function ManageExperience() {
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    company: '',
    title: '',
    period: '',
    description: '',
  });
  const [editingExperience, setEditingExperience] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('/api/experiences');
        setExperiences(response.data);
        setMessage('Experiences loaded successfully.');
      } catch (err) {
        console.error('Error fetching experiences:', err);
        setMessage('Failed to load experiences. Please try again later.');
      }
    };
    fetchExperiences();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  const handleAddExperience = async () => {
    try {
      const createResponse = await axios.post('/api/experiences', newExperience);
      const response = await axios.get(`/api/experiences/${createResponse.data.experience._id}`);
      setExperiences([...experiences, response.data]);
      setNewExperience({ company: '', title: '', period: '', description: '' });
      setMessage('Experience added successfully.');
    } catch (err) {
      console.error('Error adding experience:', err);
      setMessage('Failed to add experience. Please try again.');
    }
  };

  const handleUpdateExperience = async () => {
    try {
      await axios.put(`/api/experiences/${editingExperience._id}`, editingExperience);
      const response = await axios.get(`/api/experiences/${editingExperience._id}`);
      const updatedExperience = response.data;
      setExperiences(
        experiences.map((exp) =>
          exp._id === editingExperience._id ? updatedExperience : exp
        )
      );
      setEditingExperience(null);
      setMessage('Experience updated successfully.');
    } catch (err) {
      console.error('Error updating experience:', err);
      setMessage('Failed to update experience. Please try again.');
    }
  };

  const handleDeleteExperience = async (id) => {
    try {
      await axios.delete(`/api/experiences/${id}`);
      setExperiences(experiences.filter((exp) => exp._id !== id));
      setMessage('Experience deleted successfully.');
    } catch (err) {
      console.error('Error deleting experience:', err);
      setMessage('Failed to delete experience. Please try again.');
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
        {/* Add Experience Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/3 max-h-screen overflow-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Add Experience</h1>

          <div className="space-y-6">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={newExperience.company}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newExperience.title}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="period"
              placeholder="Period"
              value={newExperience.period}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newExperience.description}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleAddExperience}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition duration-300"
            >
              Add Experience
            </button>
          </div>
        </div>

        {/* List of Experiences */}
        <div className="flex-1 overflow-y-auto ml-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Existing Experiences</h1>

          {/* Show message if no experiences */}
          {experiences.length === 0 ? (
            <div className="p-6 bg-yellow-100 border border-yellow-200 rounded-lg text-yellow-800 shadow-md">
              No experiences available. Add your first experience !
            </div>
          ) : (
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp._id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                  {editingExperience && editingExperience._id === exp._id ? (
                    <>
                      <input
                        type="text"
                        name="company"
                        value={editingExperience.company}
                        onChange={(e) =>
                          setEditingExperience({ ...editingExperience, company: e.target.value })
                        }
                        className="border border-gray-300 p-3 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <input
                        type="text"
                        name="title"
                        value={editingExperience.title}
                        onChange={(e) =>
                          setEditingExperience({ ...editingExperience, title: e.target.value })
                        }
                        className="border border-gray-300 p-3 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <input
                        type="text"
                        name="period"
                        value={editingExperience.period}
                        onChange={(e) =>
                          setEditingExperience({ ...editingExperience, period: e.target.value })
                        }
                        className="border border-gray-300 p-3 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <textarea
                        name="description"
                        value={editingExperience.description}
                        onChange={(e) =>
                          setEditingExperience({ ...editingExperience, description: e.target.value })
                        }
                        className="border border-gray-300 p-3 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <div className="flex space-x-4">
                        <button
                          onClick={handleUpdateExperience}
                          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingExperience(null)}
                          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold text-gray-800">{exp.company}</h3>
                      <p className="text-gray-600">{exp.title}</p>
                      <p className="text-gray-500">{exp.period}</p>
                      <p className="text-gray-700">{exp.description}</p>
                      <div className="flex space-x-4 mt-4">
                        <button
                          onClick={() => setEditingExperience(exp)}
                          className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteExperience(exp._id)}
                          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300"
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageExperience;
