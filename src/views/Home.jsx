import React from "react";

import "./Home.css";

import NavBar from "../components/NavBar";


function Home(){
    return(
        <>
            <div className="home_container">
                <NavBar />
                
                <main className="home_main">
                    <h1 className='home_main_title'>THE F<span className="main_title_span">O</span>OD TRUCK !</h1>
                    <img src="../../public/empanada.png" alt="" className="main_img" />
                </main>

                <div className="home_menu">

                </div>
            </div>
        </>
    )
}

export default Home