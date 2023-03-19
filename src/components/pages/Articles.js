import React from "react";
import ArticlesSearch from "../utils/Articles/ArticlesSearch";
import ArticleLogo from "../../images/Articles.png"
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

function Articles(){
    return(
        <div>
            <h1>This is the Articles page</h1>
         {/* <ArticlesSearch/> */}

         <Image
        src={ArticleLogo}
        alt="logo"
        style={{height:1000, width:2200}}

      />

        </div>
    )
};

export default Articles;