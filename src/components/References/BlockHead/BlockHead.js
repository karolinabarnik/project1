import React from "react";
import '../../Styles/BlockHead.css';

const BlockHead = () => {
    return ( 
        <div className="container">
            <div className="container-inner1 references">
            <div className="bloc-head">
            <div className="block-head-titles">
                <h2 className="title-ref">References</h2>
                <h3 className="subtitle-ref">Project we're proud of</h3>
            </div> 
            <div className="block-head-more">
                <a className="more-ref" href="https://www.kaliop.com/en/references/"> </a>
            </div>
            </div>
        </div>
        </div>
    );
}

export default BlockHead;