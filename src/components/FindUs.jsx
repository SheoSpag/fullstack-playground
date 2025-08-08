import React from "react";

import "./FindUs.css";


function FindUs() {
    return(
        <div className="find_us_container">
            <div className="find_us_title">
                <h2 className="find_us_title">WHERE <span className="find_us_title_span">U</span> CAN FIND <span className="find_us_title_span">US</span> ?</h2>
            </div>
            <div className="find_us_map">
               <iframe
                title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1638.123456789!2d6.9392!3d50.9364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v0000000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    center={{ lat: 50.936389, lng: 6.939167 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </div>
    )
}

export default FindUs