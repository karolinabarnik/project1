import React from "react"
import '../Styles/Nav.css';
import NavLogo from "./NavLogo/NavLogo";
import NavbarList from "./NavList/NavbarList";

const Nav = () => {
    return (
    <div className="oneone">
        <div class="container nav">
            <div class="nav-container">
                <NavLogo />
                <NavbarList />
            </div>
        </div>
    </div>

)}

export default Nav;