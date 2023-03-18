import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Articles from "./Articles";
import Home from "./Home";
import Jobs from "./Jobs";
import Saved from "./Saved";
import Logo from "../../images/devhublogo.png"
import {
  Nav,
  Image,
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
} from "uikit-react";

function Navigation() {
  return (
    <div>
   
<Image src={Logo} alt="logo" style={{height:150, width:200}}/>
      <Nav preset="default">


        <NavItem>
      
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          
          <Link to="/articles">Articles</Link>
        </NavItem>
        <NavItem>
          
          <Link to="/jobs">Jobs</Link>
        </NavItem>
        <NavItem>
          
          <Link to="/saved">Saved</Link>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;
