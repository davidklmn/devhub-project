import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseDoorFill } from '../../node_modules/react-icons/bs';
import { HiNewspaper } from '../../node_modules/react-icons/hi';
import { MdWork } from '../../node_modules/react-icons/md';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

function Navigation() {
  return (
    <div>
      <div id="logo">
        <p>
          <span>Dev</span>Hub
        </p>
      </div>

      <Nav className="flex-column" id="nav">
        <Nav.Link
          as={Link}
          to="/home"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <BsFillHouseDoorFill /> Home
        </Nav.Link>

        <Nav.Link as={Link} to="/jobSearch">
          <MdWork /> Jobs
        </Nav.Link>

        <Nav.Link as={Link} to="/articleSearch">
          <HiNewspaper /> News
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Navigation;
