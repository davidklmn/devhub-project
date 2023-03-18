import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Articles from "../components/pages/Articles";
import Home from "../components/pages/Home";
import Jobs from "../components/pages/Jobs";
import Saved from "../components/pages/Saved";
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
} from "uikit-react";

function Navigation() {
  return (
    <div>
      <Nav preset="default">
        
        <NavItem>
      
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          
          <Link href="/articles">Articles</Link>
        </NavItem>
        <NavItem>
          
          <Link href="/jobs">Jobs</Link>
        </NavItem>
        <NavItem>
          
          <Link href="/saved">Saved</Link>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;
