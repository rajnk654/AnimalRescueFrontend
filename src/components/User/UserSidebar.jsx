import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'


function UserSidebar({openSidebarToggle, OpenSidebar}) {
    return (
      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
          <div className='sidebar-title'>
              <div className='sidebar-brand'>
                  <BsCart3  className='icon_header'/> User Dashboard
              </div>
              <span className='icon close_icon' onClick={OpenSidebar}>X</span>
          </div>
  
          <ul className='sidebar-list'>
              <li className='sidebar-list-item'>
                  <Link to="">
                      <BsGrid1X2Fill className='icon'/> Dashboard
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="/admin/animals">
                      <BsFillArchiveFill className='icon'/> Animals
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="/admin/rescuers">
                      <BsFillGrid3X3GapFill className='icon'/> Rescuer
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="/">
                      <BsPeopleFill className='icon'/> Adopters
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="/employee/inventory">
                      <BsListCheck className='icon'/> Foster Care
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="/employee/order">
                      <BsListCheck className='icon'/>Notifications
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="">
                      <BsMenuButtonWideFill className='icon'/> Reports
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="">
                      <BsFillGearFill className='icon'/> Setting
                  </Link>
              </li>
          </ul>
      </aside>
    )
  }

export default UserSidebar