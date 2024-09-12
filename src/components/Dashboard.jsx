import React, { useState } from 'react';
import './SideBar.css';
import Sidebar from './SideBar';

const Dashboard = ({ children }) => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className="grid-container">
            <Sidebar openSideBarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Dashboard