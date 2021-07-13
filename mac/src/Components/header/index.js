import React from 'react';
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
            <Link to="/doctors">Dotors</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
