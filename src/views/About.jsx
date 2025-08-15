import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about_container">
      <div className="about_intro">
        <div className="intro_izquierda">
          <h1 className="intro_title">
            WHO <span className="intro_title--accent">WE</span> ARE
          </h1>
          <p className="intro_text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            doloribus error sint iure, hic minus perferendis aspernatur officia
            enim omnis repellendus ea suscipit facere quas animi odio ipsum
            veniam inventore! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quia doloribus error sint iure, hic minus
            perferendis aspernatur officia enim omnis repellendus ea suscipit
            facere quas animi odio ipsum veniam inventore! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Quia doloribus error sint iure,
            hic minus perferendis aspernatur officia enim omnis repellendus ea
            suscipit facere quas animi odio ipsum veniam inventore!
          </p>
        </div>

        <div className="intro_derecha">
          <img src="../../public/revista.png" alt="collage" className="intro_img" />
        </div>
      </div>
    </div>
  );
}

export default About;
