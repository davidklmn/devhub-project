import React from "react";

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
  NavItem,
} from "uikit-react";

function Navigation() {
  return (
    <Nav preset="default">
      {" "}
      <NavItem>
        {" "}
        <Link href="#">Link</Link>{" "}
      </NavItem>{" "}
      <NavItem>
        {" "}
        <Link href="#">Link</Link>{" "}
      </NavItem>{" "}
      <NavItem>
        {" "}
        <Link href="#">Link</Link>{" "}
      </NavItem>{" "}
    </Nav>
  );
}

export default Navigation;
