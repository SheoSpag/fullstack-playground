import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_logo">
          <img src="../../public/logo.png" alt="The Food Truck" className="footer_img" />
          <h2 className="footer_title">THE F<span className="footer_title_span">O</span>OD TRUCK <span className="footer_title_span_c">©</span></h2>
        </div>

        <div className="footer_contacto">
            <a href="" className="contacto_direccion"></a>
            <a href="" className="contacto_telefono"></a>
        </div>
      </div>

      <div className="footer_bottom">
        <p>© 2025 The Food Truck - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
