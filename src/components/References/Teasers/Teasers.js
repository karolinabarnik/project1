import React from "react";
import '../../Styles/Teasers.css';
import TeasersImageFirst from "./TeasersItemFirst/TeasersImageFirst";
import TeasersLogoFirst from "./TeasersItemFirst/TeasersLogoFirst";
import TeasersTagFirst from "./TeasersItemFirst/TeasersTagFirst";
import TeasersLabel from "./TeasersLabel";
import TeasersImageSecond from "./TeasersItemSecond/TeasersImageSecond";
import TeasersLogoSecond from './TeasersItemSecond/TeasersLogoSecond';
import TeasersTagSecond from "./TeasersItemSecond/TeasersTagSecond";
import TeasersImageThird from "./TeasersItemThird/TeasersImageThird";
import TeasersLogoThird from "./TeasersItemThird/TeasersLogoThird";
import TeasersTagThird from "./TeasersItemThird/TeasersTagThird";
import TeasersImageFour from "./TeasersItemFour/TeasersImageFour";
import TeasersLogoFour from "./TeasersItemFour/TeasersLogoFour";
import TeasersTagFour from "./TeasersItemFour/TeasersTagFour";


const Teasers = () => {
    return ( 
        <div className="container">
            <div className="container-inner1 references">
                <div className="teasers">
                <div className="teasers-item item-first">
                    <TeasersImageFirst />
                    <TeasersLabel />            
                    <TeasersLogoFirst />
                    <TeasersTagFirst />
                </div>       
                <div className="teasers-item item-second">
                    <TeasersImageSecond />
                    <TeasersLabel />
                    <TeasersLogoSecond />
                    <TeasersTagSecond />         
                </div>
                <div className="teasers-item item-third">
                    <TeasersImageThird />
                    <TeasersLogoThird />
                    <TeasersTagThird />         
                </div>
                <div className="teasers-item item-four">
                    <TeasersImageFour />
                    <TeasersLabel />
                    <TeasersLogoFour />
                    <TeasersTagFour /> 
                </div>
                </div>
            </div>
        </div>
        );      
    }

    export default Teasers;