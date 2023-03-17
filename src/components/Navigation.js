import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Articles from "../components/pages/Articles"
import Home from "../components/pages/Home"
import Jobs from "../components/pages/Jobs"
import Saved from "../components/pages/Saved"
import {
  Nav,
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
    <Router>
     
     <div>
      
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="jobs" element={<Jobs />} />
          {/* Define a route that will have descendant routes */}
          <Route path="saved" element={<Saved />} />
        </Routes>
      </div>


{/* Work on the router wit ui kit */}
{/* Work on the router wit ui kit */}
{/* Work on the router wit ui kit */}



    </Router>
  );
}

export default Navigation;
