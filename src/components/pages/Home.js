import React from "react";
import LandingPage from "../../images/Landing-Page-Text.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Articles from "./Articles";
// import Home from "./Home";
import Jobs from "./Jobs";
import Saved from "./Saved";

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

function Home() {
  return (
    <div>
      {/* <h1>This is the Home page</h1> */}
      <Image
        src={LandingPage}
        alt="logo"
        style={{ height: 1000, width: 2200 }}
      />
    </div>
  );
}

export default Home;
