import React from "react";
import { menuItems } from "./menuItems";
import '../../Styles/TopMenu.css';
import TopMenuItems from './TopMenuItems';

const TopMenuItem = () => {
    return (
        <nav className="one">
            <div className="topbar container">
            <ul className="topbar-menu">
                <li className="topbar-item"> 
                    <a className="topbar-tech" href="https://www.kaliop.com/en/technologies/">Technologies</a>
                </li>
                {menuItems.map((menu, index) => {
                    return <TopMenuItems items={menu} key={index} className="topbar-trigger"/>
                })}
            </ul>
            </div>
        </nav>
    );
};

export default TopMenuItem;