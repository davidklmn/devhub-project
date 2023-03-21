import React from 'react';
import Article from '../components/ArticleSearch';
import Home from './Home';
import Jobs from '../components/JobSearch';
import { Link } from 'react-router-dom';

import {
  Nav,
  NavItem,
  Container,
  Icon,
  // Link,
  List,
  ListItem,
  Offcanvas,
  OffcanvasContainer,
  Navbar,
  NavbarContainer,
  NavbarSticky,
  Section,
} from 'uikit-react';

import { BsFillHouseDoorFill } from '../../node_modules/react-icons/bs';
import { HiNewspaper } from '../../node_modules/react-icons/hi';
import { MdWork } from '../../node_modules/react-icons/md';
import { AiFillHeart } from '../../node_modules/react-icons/ai';

function Navigation() {
  return (
    <div>
      <Nav preset="default">
        <p id="logo">
          <span>Dev</span>Hub
        </p>
        <NavItem>
          <BsFillHouseDoorFill />
          <Link to="/home">Home</Link>
        </NavItem>
        <NavItem>
          <HiNewspaper />
          <Link to="/articleSearch">Articles</Link>
        </NavItem>
        <NavItem>
          <MdWork />
          <Link to="/jobSearch">Jobs</Link>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;
