import React from "react";
import '../Styles/Footer.css';
import twitter from '../Images/twitter.svg';
import logoKaliop from '../Images/logoKaliop.svg';
import linkedin from '../Images/linkedin.svg';
import instagram from '../Images/instagram.svg';
import facebook from '../Images/facebook.svg';

const Footer = () => {
    return (
        <footer>
        <div className="container">
            <div className="container-inner1">
                <div className="footer">
                    <div className="footer-top">
                        <div className="footer-logo">
                            <img src={logoKaliop} alt="logo-Kaliop"></img>
                        </div>
                        <div className="footer-columns">
                            <div className="footer-column">
                                <p className="footer-col-1">International</p>
                                <a href="https://www.kaliop.pl/" className="footer-col-link">Poland</a>
                            </div>
                            <div className="footer-column">
                                <p className="footer-col-2">Around Kaliop</p>
                                <a href="https://www.kaliop.com/en/technologies/" className="footer-col-link">Technologies</a>
                                <a href="https://www.kaliop.com/en/partners/" className="footer-col-link">Partners</a>
                            </div>
                            <div className="footer-column">
                                <p className="footer-col-3">Jobs</p>
                                <a href="https://kaliop.candidats.talents-in.com/#" className="footer-col-link">Applicant area</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-socialnetwork">
                            <p className="footer-socialnetwork-follow">Follow us </p>
                            <a className="footer-socialnet" href="https://twitter.com/Kaliop">
                                <img className="footer-social-icon" src={twitter} alt="twitter"></img>
                            </a>
                            <a className="footer-socialnet" href="https://www.linkedin.com/company/kaliop/">
                                <img className="footer-social-icon" src={linkedin} alt="linkedin"></img>
                            </a>
                            <a className="footer-socialnet" href="https://www.facebook.com/kaliop.community/">
                                <img className="footer-social-icon" src={facebook} alt="facebook"></img>
                            </a>
                            <a className="footer-socialnet" href="https://www.instagram.com/kalioplive/">
                                <img className="footer-social-icon" src={instagram} alt="facebook"></img>
                            </a>
                        </div>
                        <div className="footer-cont">
                            <a href="https://www.kaliop.com/en/contact/" className="footer-contact">Contact</a>
                        </div>
                        <div className="footer-copyright">
                            <a className="footer-policy" href="https://www.kaliop.com/en/legal-notice/">Legal notice - credits</a>
                            <span className="icon-footer-copyright">
                                <i className="fa-solid fa-copyright"></i> 
                                Kaliop 2021
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>  
)};

export default Footer;