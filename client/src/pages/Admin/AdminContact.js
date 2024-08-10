// src/pages/AdminContact.js

import { Form, Input, Button, message } from 'antd';
import React from 'react';
import '../../index.css'; // Assuming you have global styles imported here
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice'; // Redux actions for showing and hiding loading state
import axios from 'axios';

function AdminContact() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector(state => state.root || {});

    // Handle form submission
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading()); // Dispatch loading state
            const response = await axios.post('/api/portfolio/update-contact', {
                ...values,
                _id: portfolioData?.contact._id, // Assuming _id is needed for updating
            });
            dispatch(HideLoading()); // Hide loading state
            if (response.data.success) {
                message.success(response.data.message); // Show success message
            } else {
                message.error(response.data.message); // Show error message
            }
        } catch (error) {
            console.error('Error updating contact:', error);
            dispatch(HideLoading()); // Hide loading state in case of error
            message.error('Failed to update contact. Please try again.'); // Display generic error message
        }
    };


    return (
        <div className="form-container">
            <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={portfolioData?.contact}
            >
                {/* Form items for Full Name, Email, Phone, Gender, Age, Address */}
                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter your Name!' }]}
                >
                    <Input className="admin-input" placeholder="Enter name" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please enter your Email!' }]}
                >
                    <Input className="admin-input" placeholder="Enter email" />
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="mobile"
                    rules={[
                        { required: true, message: 'Please enter your Phone!' },
                        { pattern: /^[0-9]{10}$/, message: 'Phone number must be 10 digits' } // Adjust pattern as per your requirements
                    ]}
                >
                    <Input className="admin-input" placeholder="Enter phone" disabled/>
                </Form.Item>


                <Form.Item
                    label="Gender"
                    name="gender"
                    rules={[{ required: true, message: 'Please enter your Gender!' }]}
                >
                    <Input className="admin-input" placeholder="Enter gender" />
                </Form.Item>

                <Form.Item
                    label="Age"
                    name="age"
                    rules={[{ required: true, message: 'Please enter your Age!' }]}
                >
                    <Input className="admin-input" placeholder="Enter age" />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="country"
                    rules={[{ required: true, message: 'Please enter your Country!' }]}
                >
                    <Input className="admin-input" placeholder="Enter country" />
                </Form.Item>

                {/* Submit button */}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AdminContact;
