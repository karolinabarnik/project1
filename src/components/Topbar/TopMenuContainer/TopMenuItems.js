import React from "react";
import Dropdown from "./Dropdown";
import '../../Styles/TopMenu.css';
import { useState } from "react";

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

 return (
  <li className="topbar-item">
   {items.submenu ? (
    <>
     <button type="button" className="topbar-trigger" aria-haspopup="menu" 
      aria-expanded={dropdown ? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)}
     >
      {items.title}{" "}
     </button>
     <Dropdown submenus={items.submenu}      
      dropdown={dropdown} 
    />
    </>
   ) : (
    <a href="/#" className="topbar-trigger">{items.title}</a>
   )}
  </li>
 );
};

export default MenuItems;