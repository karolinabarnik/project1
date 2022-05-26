import React from "react";
import '../../Styles/Nav.css';
import logoKaliopText from '../../Images/logoKaliopText.svg';

const NavLogo = () => {

    return (
        <div className="nav-content">
            <a className="nav-logo1" href="https://www.kaliop.com/en/">
            <img className="nav-logo-img" src={logoKaliopText} alt="logo-Kaliop-2021"></img>
            </a>
        </div>
    ) 
};

export default NavLogo;