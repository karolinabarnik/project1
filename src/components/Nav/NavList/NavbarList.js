import React from "react";
import '../../Styles/Nav.css';
import { navItems } from "../navItems";
import NavItemsList from "./NavItemsList";

const NavList = () => {
    return (
    <div class="nav-list">
     <nav>
      <ul className="nav-links nav-menu">
        {navItems.map((menu, index) => {
        return <NavItemsList items={menu} key={index} className="nav-link nav-item"/>;
        })}
      </ul>
     </nav>
     <div class="hamburger" id="myDIV">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div> 
    </div> 
    );
   };
   
   export default NavList;