// src/pages/Admin/Admin.js

import React from 'react';
import Header from '../../components/Header';
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import Experiences from './Experiences';
import AdminProject from './AdminProject';
import AdminContact from './AdminContact';

const { TabPane } = Tabs;

function Admin() {
    const { portfolioData } = useSelector(state => state.root || {});
    return (
        <div>
            {portfolioData && (
                <>
                    <Header />
                    <div className='mt-5 px-10'>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Intro" key="1">
                                <AdminIntro />
                            </TabPane>
                            <TabPane tab="About" key="2">
                                <AdminAbout />
                            </TabPane>
                            <TabPane tab="Experiences" key="3">
                                <Experiences />
                            </TabPane>
                            <TabPane tab="Projects" key="4">
                                <AdminProject />
                            </TabPane>
                            <TabPane tab="Contact" key="5">
                                <AdminContact />
                            </TabPane>
                        </Tabs>
                    </div>
                </>
            )}
        </div>
    )
}

export default Admin;
