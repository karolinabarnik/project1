import React from "react";
import '../../Styles/BlocContent.css'
import arrow from '../../Images/arrow.png';
import plus from '../../Images/plus.png';

const BlocFirst = ({title, text, offer}) => {

    return ( 
        <div className="bloc-item">
            <div className="bloc-content">
                <h4 className="bloc-tit1">{title}</h4>
                <p className="bloc-paragraph">{text}</p>
                <span className="bloc-overlay-icon">
                    <img src={arrow} alt="Arrow" /> 
                    Find out more
                </span>
            </div>
            <div className="bloc-content2">
            <a className="bloc-overlay-link2" href="https://www.kaliop.com/en/offers/kaliop-consulting/">
                <hr className="bloc-overlay-item"></hr>
                <h3 className="bloc-overlay-tit1">Discover the {offer}
                <img src={plus} alt="plus" className="offerPlus" />
                </h3>  
                <span className="icon-add"></span>         
            </a>
            </div>
        </div>
    );
}        

export default BlocFirst;