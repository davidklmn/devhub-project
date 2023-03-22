import React from "react";
import Articles from "../components/ArticleSearch";
import Home from "./Home";
import Jobs from "../components/JobSearch";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { BsFillHouseDoorFill } from "../../node_modules/react-icons/bs";
import { HiNewspaper } from "../../node_modules/react-icons/hi";
import { MdWork } from "../../node_modules/react-icons/md";
import { AiFillHeart } from "../../node_modules/react-icons/ai";
import ReactDOM from "react-dom";

// import { Nav } from "react-bootstrap";

// function Navigation() {
//   return (
//     <div>
//       <div>
//         <p id="logo">
//           <span>Dev</span>Hub
//         </p>
//       </div>
//       <Nav className="flex-column">
//         <Nav.Link as={Link} to="/home">
//           Home
//           <BsFillHouseDoorFill />
//         </Nav.Link>
//         <Nav.Link as={Link} to="/jobSearch">
//           Jobs
//           <MdWork />
//         </Nav.Link>
//         <Nav.Link as={Link} to="/articleSearch">
//           Articles
//           <HiNewspaper />
//         </Nav.Link>
//       </Nav>
//     </div>
//   );
// }

// export default Navigation;

import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <div>
      <div>
        <p id="logo">
          <span>Dev</span>Hub
        </p>
      </div>

      <Nav className="flex-column">
        <Nav.Link as={Link} to="/home">
          Home
          <BsFillHouseDoorFill />
        </Nav.Link>

        <Nav.Link as={Link} to="/jobSearch">
          Jobs
          <MdWork />
        </Nav.Link>

        <Nav.Link as={Link} to="/articleSearch">
          Articles <HiNewspaper />
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Navigation;
