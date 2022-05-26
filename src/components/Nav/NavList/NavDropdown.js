import React from "react";
import '../../Styles/Nav.css';


const NavDropdown = ({ submenus, dropdown }) => {
    return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
        <li key={index} className="nav-submenu-link">
            <a href="/#">{submenu.title}</a>
        </li>
    ))}
        <li>
            <span class="nav-separator">
            <a class="nav-separator1" href="https://www.kaliop.com/en/expertises/our-web-expertise/">All expertise</a>
        </span>
        </li>
     </ul>
    );
   };
   
   export default NavDropdown;
