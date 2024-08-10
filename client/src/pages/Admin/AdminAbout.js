// src/pages/AdminAbout.js

import { Form, Input, Button, message } from 'antd';
import React from 'react';
import '../../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminAbout() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector(state => state.root || {});

    const onFinish = async (values) => {
        try {
            const tempSkills=values.skills.split(',');
            values.skills=tempSkills
            dispatch(ShowLoading()); // Dispatch loading state
            const response = await axios.post('/api/portfolio/update-About', {
                ...values,
                _id: portfolioData?.about._id, // Assuming _id is needed for updating
            });
            dispatch(HideLoading()); // Hide loading state
            if (response.data.success) {
                message.success(response.data.message); // Show success message
            } else {
                message.error(response.data.message); // Show error message
            }
        } catch (error) {
            console.error('Error updating About:', error);
            dispatch(HideLoading()); // Hide loading state in case of error
            message.error('Failed to update About. Please try again.'); // Display generic error message
        }
    };

    return (
        <div className="form-container">
            <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={{...portfolioData?.about,
                    skills:portfolioData?.about?.skills.join(' , '),
                }}
            >
                <Form.Item
                    label="lottieUrl"
                    name="lottieUrl"
                    rules={[{ required: true, message: 'Please enter your lottieUrl!' }]}
                >
                    <Input className="admin-input" placeholder="Enter lottieUrl" />
                </Form.Item>

                <Form.Item
                    label="Description1"
                    name="description1"
                    rules={[{ required: true, message: 'Please enter a description1!' }]}
                >
                    <Input.TextArea className="admin-input" rows={4} placeholder="Enter description1" />
                </Form.Item>

                <Form.Item
                    label="Description2"
                    name="description2"
                    rules={[{ required: true, message: 'Please enter a description2!' }]}
                >
                    <Input.TextArea className="admin-input" rows={4} placeholder="Enter description2" />
                </Form.Item>

                <Form.Item
                    label="Skills"
                    name="skills"
                    rules={[{ required: true, message: 'Please enter your skills!' }]}
                >
                    <Input className="admin-input" placeholder="Enter skills" />
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

export default AdminAbout;
