import React, { useState } from 'react';
import '../SideBar.css';
import FosterCareSidebar from './FosterCareSideBar';
import { Outlet } from 'react-router-dom';

const FosterCareDashboard = () => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className="grid-container ">
            <FosterCareSidebar openSideBarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <div className="container">
                <Outlet/>
            </div>
        </div>
    )
}

export default FosterCareDashboard