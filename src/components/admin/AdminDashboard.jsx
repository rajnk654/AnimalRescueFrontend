import React, { useState } from 'react';
import '../SideBar.css';
import { Outlet } from 'react-router-dom';
import Sidebar from '../SideBar';

const AdminDashboard = ({ children }) => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className="grid-container">
            <Sidebar openSideBarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <div className="container">
                <Outlet/>
            </div>
        </div>
    )
}

export default AdminDashboard;