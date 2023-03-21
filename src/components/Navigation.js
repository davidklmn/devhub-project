import React from 'react';
import Articles from '../components/pages/Articles';
import Home from '../components/pages/Home';
import Jobs from '../components/pages/Jobs';
import Saved from '../components/pages/Saved';
import {
  Nav,
  NavItem,
  Container,
  Icon,
  Link,
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
import { GrArticle } from '../../node_modules/react-icons/gr';
import { MdOutlineWorkOutline } from '../../node_modules/react-icons/md';
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
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          <GrArticle />
          <Link href="/articles">Articles</Link>
        </NavItem>
        <NavItem>
          <MdOutlineWorkOutline />
          <Link href="/jobs">Jobs</Link>
        </NavItem>
        <NavItem>
          <AiFillHeart />
          <Link href="/saved">Saved</Link>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;
