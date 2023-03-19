import React from "react";
import JobSearch from "../JobSearch";
import JobSearchLogo from "../../images/JobSearch.png"
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
  

function Jobs(){
    return(
        <div>
            <h1>This is the Jobs page</h1>
            {/* <JobSearch /> */}
                <Image
        src={JobSearchLogo}
        alt="logo"
        style={{height:1000, width:2200}}

      />
        </div>
    )
};

export default Jobs;