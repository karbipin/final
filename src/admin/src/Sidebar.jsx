import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BsGrid1X2Fill, BsPeopleFill,
} from 'react-icons/bs';
import {
  AiFillCopy
} from "react-icons/ai";
import {
  HiAcademicCap, HiSun, HiCubeTransparent, HiArchive, HiCollection
} from "react-icons/hi";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          Admin Panel
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <NavLink to="/admin/home" activeClassName="active">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/admin/college" activeClassName="active">
            <HiAcademicCap className='icon' /> College
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/admin/users" activeClassName="active">
            <BsPeopleFill className='icon' /> Users
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/admin/notes" activeClassName="active">
            <AiFillCopy className='icon' /> Notes
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/admin/admission" activeClassName="active">
            <HiSun className='icon' /> Admissions
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/admin/admissionapplicationstable" activeClassName="active">
            <HiSun className='icon' /> Admission Applications
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/admin/enrollmentrequeststable" activeClassName="active">
            <HiSun className='icon' /> Enrollment Requests
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/admin/training" activeClassName="active">
            <HiCubeTransparent className='icon' /> Training
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/admin/coursepage" activeClassName="active">
            <HiArchive className='icon' /> Course
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/admin/syllabuspage" activeClassName="active">
            <HiCollection className='icon' /> Syllabus
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/admin/adspage" activeClassName="active">
            <HiCollection className='icon' /> AdsPage
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
