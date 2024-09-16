import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../SideBar.css'
import Dashboard from '../Dashboard'


function FosterCareSidebar({openSidebarToggle, OpenSidebar}) {
    return (
      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
          <div className='sidebar-title'>
              <div className='sidebar-brand'>
                  {/* <BsCart3  className='icon_header'/> */}
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
                  <Link to="/employee/order">
                      <BsListCheck className='icon'/>Notifications
                  </Link>
              </li>
              
              <li className='sidebar-list-item'>
                  <Link to="">
                      <BsFillGearFill className='icon'/> LogOut
                  </Link>
              </li>
          </ul>
      </aside>
    )
  }

export default FosterCareSidebar