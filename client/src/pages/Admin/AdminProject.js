import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Form, Modal, Input, Select, message } from 'antd';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';

function Projects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector(state => state.root || {});
  const { project } = portfolioData || {};

  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [form] = Form.useForm(); // Ant Design form instance
  const [type, setType] = useState('add'); // Track whether it's 'add' or 'edit'

  useEffect(() => {
    if (selectedItemForEdit) {
      setType('edit');
      form.setFieldsValue(selectedItemForEdit);
    } else {
      setType('add');
      form.resetFields(); // Reset form fields for adding a new project
    }
  }, [selectedItemForEdit, form]);

  const handleFormSubmit = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (type === 'edit') {
        response = await axios.post('/api/portfolio/update-project', { ...values, _id: selectedItemForEdit._id });
      } else {
        response = await axios.post('/api/portfolio/add-project', values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(ReloadData(true));
        form.resetFields(); // Reset the form fields
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.error('Error updating project:', error);
      dispatch(HideLoading());
      message.error('Failed to update project. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post('/api/portfolio/delete-project', { _id: id });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error('Failed to delete project');
    }
  };

  const handleCancel = () => {
    setSelectedItemForEdit(null);
    form.resetFields(); // Reset form fields using Ant Design form instance
    setShowAddEditModal(false);
  };

  if (!project || !Array.isArray(project)) {
    return <div>No projects available</div>;
  }

  return (
    <div>
      <div className='flex justify-end pb-5'>
        <button className='bg-primary text-white px-3 py-1' onClick={() => {
          form.resetFields(); // Reset the form fields before opening the modal
          setSelectedItemForEdit(null); // Ensure no item is selected for editing
          setShowAddEditModal(true);
        }}>Add Project</button>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {project.map((proj) => (
          <div key={proj._id} className='shadow border p-5 border-gray-400 flex flex-col gap-2'>
            <h1 className='text-primary text-xl font-bold'>{proj.title}</h1>
            <hr />
            <img src={proj.image} alt={proj.title} />
            <h1><b>Description : </b>{proj.description}</h1>
            <h1><b>Technologies : </b>{proj.technologies.join(', ')}</h1>
            <div className='flex justify-end gap-5 mt-5'>
              <button className='bg-red-500 text-white px-3 py-1' onClick={() => handleDelete(proj._id)}>DELETE</button>
              <button
                className='bg-primary text-white px-3 py-1'
                onClick={() => {
                  setSelectedItemForEdit(proj);
                  setShowAddEditModal(true);
                }}
              >
                EDIT
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        visible={showAddEditModal}
        title={type === 'edit' ? 'Edit Project' : 'Add Project'}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form} // Pass the form instance to the Form component
          layout='vertical'
          onFinish={handleFormSubmit}
          initialValues={selectedItemForEdit || {}}
        >
          <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input the title!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Image URL" name="image" rules={[{ required: true, message: 'Please input the image URL!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please input the description!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Technologies"
            name="technologies"
            rules={[{ required: true, message: 'Please select technologies!' }]}
          >
            <Select
              mode="tags"
              placeholder="Select technologies"
              style={{ width: '100%' }}
              tokenSeparators={[',']}
            />
          </Form.Item>
          <Form.Item label="Links" name="links" rules={[{ required: true, message: 'Please input the links!' }]}>
            <Input />
          </Form.Item>
          <div className='flex justify-end'>
            <button type='submit' className='bg-primary text-white px-3 py-1'>Submit</button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default Projects;
