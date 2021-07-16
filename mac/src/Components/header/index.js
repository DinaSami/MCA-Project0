import React from 'react';
import '../header/header.css'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>Medical Clinics</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booking">Book Now!</Link>
          </li>
          <li>
            <Link to="/doctors">Dotors</Link>
          </li>
          <li>
            <Link to="/chat">Direct Message</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
