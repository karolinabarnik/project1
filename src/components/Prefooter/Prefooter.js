import React from "react";
import '../Styles/Prefooter.css';
import logo from '../Images/logo.jpg';

const Prefooter = () => {
    return (
        <div className="prefooter">
            <img className="prefooter-logo" src={logo} alt="logo"></img>
            <h2 className="title-prefooter">Have a project? Our teams are here to answear your questions</h2>
            <button className="prefooter-btn">Contact us</button>
        </div>
    )};

export default Prefooter;    

