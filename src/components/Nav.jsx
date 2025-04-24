import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { Menu, X } from 'lucide-react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">MySite</div>
        <div className="hamburger" onClick={toggleSidebar}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/view" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/add" onClick={toggleSidebar}>Add</Link></li>
          <li><Link to="/edit" onClick={toggleSidebar}>Edit</Link></li>
        </ul>
      </nav>
      {isOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
    </div>
  );
}

export default Nav;
