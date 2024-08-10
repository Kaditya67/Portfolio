import { Form, Modal, Input, message } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';

function Experiences() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector(state => state.root || {});
  const { experience } = portfolioData || {};

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
      form.resetFields(); // Reset form fields for adding a new experience
    }
  }, [selectedItemForEdit, form]);

  const handleFormSubmit = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (type === 'edit') {
        response = await axios.post('/api/portfolio/update-experience', { ...values, _id: selectedItemForEdit._id });
      } else {
        response = await axios.post('/api/portfolio/add-experience', values);
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
      console.error('Error updating Experience:', error);
      dispatch(HideLoading());
      message.error('Failed to update Experience. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post('/api/portfolio/delete-experience', { _id: id });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error('Failed to delete experience');
    }
  };

  const handleCancel = () => {
    setSelectedItemForEdit(null);
    form.resetFields(); // Reset form fields using Ant Design form instance
    setShowAddEditModal(false);
  };

  if (!experience || !Array.isArray(experience)) {
    return <div>No experiences available</div>;
  }

  return (
    <div className=''>
      <div className='flex justify-end pb-5'>
        <button className='bg-primary text-white px-3 py-1' onClick={() => {
          form.resetFields(); // Reset the form fields before opening the modal
          setSelectedItemForEdit(null); // Ensure no item is selected for editing
          setShowAddEditModal(true);
        }}>Add Experience</button>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {experience.map((exp) => (
          <div key={exp._id} className='shadow border p-5 border-gray-400 flex flex-col gap-2'>
            <h1 className='text-primary text-xl font-bold'>{exp.period}</h1>
            <hr />
            <h1><b>Company : </b>{exp.company}</h1>
            <h1><b>Role : </b>{exp.title}</h1>
            <h1>{exp.description}</h1>
            <div className='flex justify-end gap-5 mt-5'>
              <button className='bg-red-500 text-white px-3 py-1' onClick={() => handleDelete(exp._id)}>DELETE</button>
              <button
                className='bg-primary text-white px-3 py-1'
                onClick={() => {
                  setSelectedItemForEdit(exp);
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
        title={type === 'edit' ? 'Edit Experience' : 'Add Experience'}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form} // Pass the form instance to the Form component
          layout='vertical'
          onFinish={handleFormSubmit}
          initialValues={selectedItemForEdit || {}}
        >
          <Form.Item label="Period" name="period" rules={[{ required: true, message: 'Please input the period!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Role" name="title" rules={[{ required: true, message: 'Please input the role!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Company" name="company" rules={[{ required: true, message: 'Please input the company name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please input the description!' }]}>
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

export default Experiences;
