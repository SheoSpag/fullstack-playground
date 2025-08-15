import React, { useState} from "react";

import "./FindUs.css";


function FindUs() {
 
    return(
        <div className="find_us_container">
            <div className="find_us_title">
                <h2 className="find_us_title">WHERE CAN                                                                                                                                                                                                                         <span className="find_us_title_span">U</span> FIND <span className="find_us_title_span">US</span> ?</h2>
            </div>
            <div className="find_us_map">
               <iframe src="https://snazzymaps.com/embed/729830" width="800px" height="350px" style={{border: "none"}}></iframe>
            </div>

        </div>
    )
}

export default FindUs