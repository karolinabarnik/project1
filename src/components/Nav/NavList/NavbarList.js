import React from "react";
import '../../Styles/Nav.css';
import { navItems } from "../navItems";
import NavItemsList from "./NavItemsList";
import { useState } from "react";

const NavList = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }


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
      <button className="burgerButton" onClick={handleToggle}>{navbarOpen ? "" : ""}
      <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </ul>
      </button>
      </div> 
    </div> 
    );
   };
   
   export default NavList;