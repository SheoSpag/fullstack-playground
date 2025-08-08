import React from "react";

import "./MenuItem.css";

function MenuItem(){

    return (
        <div className="item_container"> 
            <div className="item_header">
                <h2 className="item_header_title">FIRE SPISY</h2>
                <img src="../../public/logo.png" alt="" className="item_header_img" />
            </div>
            <div className="item_img_container">
                <img className="item_img" src="../../public/empanada.png" alt="" />
            </div>

            <img src="../../public/sticker.svg" alt="" className="new_product" />
        </div>
    )
}

export default MenuItem;