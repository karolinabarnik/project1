import React from "react";
import '../../Styles/TopMenu.css';

const Dropdown = ({ submenus, dropdown }) => {
    return (
     <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
       <li key={index} className="topbar-submenu-item">
        <a href="/#">{submenu.title}</a>
       </li>
      ))}
     </ul>
    );
   };
   
   export default Dropdown;