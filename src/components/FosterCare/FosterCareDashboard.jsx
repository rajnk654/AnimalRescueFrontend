import React, { useState } from 'react';
import '../SideBar.css';
import FosterCareSidebar from './FosterCareSideBar';

const FosterCareDashboard = ({ children }) => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className="grid-container ">
            <FosterCareSidebar openSideBarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default FosterCareDashboard