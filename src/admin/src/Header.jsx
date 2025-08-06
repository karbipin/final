import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BsJustify,
  BsSearch,
} from 'react-icons/bs';

const sidebarItems = [
  { name: 'Dashboard', path: '/admin/home' },
  { name: 'College', path: '/admin/college' },
  { name: 'Users', path: '/admin/users' },
  { name: 'Notes', path: '/admin/notes' },
  { name: 'Admissions', path: '/admin/admission' },
  { name: 'Admission Applications', path: '/admin/admissionapplicationstable' },
  { name: 'Enrollment Requests', path: '/admin/enrollmentrequeststable' },
  { name: 'Training', path: '/admin/training' },
  { name: 'Course', path: '/admin/coursepage' },
  { name: 'Syllabus', path: '/admin/syllabuspage' },
  { name: 'AdsPage', path: '/admin/adspage' }
];

function Header({ OpenSidebar }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/admin/login");
    window.location.reload();
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = sidebarItems.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value ? filtered : []);
  };

  const handleSelect = (path) => {
    navigate(path);
    setSearchTerm('');
    setSuggestions([]);
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>

      <div className='header-left search-container'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='Search...'
          className='search-input'
        />
        <BsSearch className='search-icon' />

        {suggestions.length > 0 && (
          <ul className='search-dropdown'>
            {suggestions.map((item) => (
              <li key={item.path} onClick={() => handleSelect(item.path)}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='header-right'>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}

export default Header;
