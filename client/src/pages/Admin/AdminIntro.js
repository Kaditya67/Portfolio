// src/pages/AdminIntro.js

import { Form, Input, Button, message } from 'antd';
import React from 'react';
import '../../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminIntro() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector(state => state.root || {});

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading()); // Dispatch loading state
            const response = await axios.post('/api/portfolio/update-intro', {
                ...values,
                _id: portfolioData?.intro._id, // Assuming _id is needed for updating
            });
            dispatch(HideLoading()); // Hide loading state
            if (response.data.success) {
                message.success(response.data.message); // Show success message
            } else {
                message.error(response.data.message); // Show error message
            }
        } catch (error) {
            console.error('Error updating intro:', error);
            dispatch(HideLoading()); // Hide loading state in case of error
            message.error('Failed to update intro. Please try again.'); // Display generic error message
        }
    };

    return (
        <div className="form-container">
            <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={portfolioData?.intro}
            >
                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter your Name!' }]}
                >
                    <Input className="admin-input" placeholder="Enter name" />
                </Form.Item>

                <Form.Item
                    label="Caption"
                    name="caption"
                    rules={[{ required: true, message: 'Please enter a caption!' }]}
                >
                    <Input.TextArea className="admin-input" rows={4} placeholder="Enter caption" />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please enter a description!' }]}
                >
                    <Input.TextArea className="admin-input" rows={4} placeholder="Enter description" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AdminIntro;
