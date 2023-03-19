import React from "react";
import SavedLogo from "../../images/Saved.png"
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

function Saved(){
    return(
        <div>
            <h1>This is the saved page</h1>
            <Image
        src={SavedLogo}
        alt="logo"
        style={{height:1000, width:2200}}

      />
        </div>
    )
};

export default Saved;