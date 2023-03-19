import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Articles from "./Articles";
import Home from "./Home";
import Jobs from "./Jobs";
import Saved from "./Saved";
import Logo from "../../images/devhublogo.png";
import {
  Nav,
  Image,
  NavItem,
  NavbarDropdown,
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
      {/* <Nav preset="default">
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
      </Nav> */}

      <NavbarSticky>
        <NavbarContainer>
          <Navbar left>
            <NavItem>
              <Link style={{color:"black",fontSize:30}}>Menu</Link>
              <NavbarDropdown>
                <NavItem>
                  <Link to="/">Home</Link>
                </NavItem>

                <NavItem>
                  <Link to="/articles">Articles</Link>
                </NavItem>

                <NavItem>
                  <Link to="/jobs">Find Jobs</Link>
                </NavItem>

                <NavItem>
                  <Link to="/saved">Saved Jobs</Link>
                </NavItem>
              </NavbarDropdown>
            </NavItem>
          </Navbar>
        </NavbarContainer>
      </NavbarSticky>
    </div>
  );
}

export default Navigation;
