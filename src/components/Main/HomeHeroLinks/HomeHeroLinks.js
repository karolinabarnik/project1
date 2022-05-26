import React from "react";
import '../../Styles/HomeHeroLinks.css';


const HomeHeroLinks = () => {

    return(
      <div className="home-hero-links">
        <a className="home-hero-link" href="https://www.kaliop.com/en/expertises/our-web-expertise/"> Web</a>
        <a className="home-hero-link" href="https://www.kaliop.com/en/expertises/commerce-digital/">Digital commerce</a>
        <a className="home-hero-link" href="https://www.kaliop.com/en/expertises/our-mobile-expertise/">Mobile </a>
        <a className="home-hero-link" href="https://www.kaliop.com/en/expertises/digital-marketing-2/">Digital Marketing </a>
        <a className="home-hero-link" href="https://www.kaliop.com/en/expertises/our-iot-expertise/">IoT</a>
      </div>
     
    );
}

export default HomeHeroLinks;