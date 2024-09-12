import React, { useState } from 'react';
import UserSidebar from './UserSidebar';


const UserDashboard = ({ children }) => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const Sidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className="grid-container">
            <UserSidebar openSideBarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default UserDashboard