import React from "react";
import { useState } from "react";
import NavDropdown from "./NavDropdown";
import '../../Styles/Nav.css';


const NavItemsList = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    return (
     <li className="nav-link nav-item">
      {items.submenu ? (
       <>
        <button type="button" className="nav-trigger" aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}
         >
         {items.title}{" "}
        </button>
        <NavDropdown submenus={items.submenu} 
        dropdown={dropdown} 
        />
       </>
      ) : (
       <a href="/#">{items.title}</a>
      )}
     </li>
    );
   };
   
   export default NavItemsList;