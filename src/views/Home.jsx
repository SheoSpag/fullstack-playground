import React from "react";

import "./Home.css";

import NavBar from "../components/NavBar";
import FindUs from "../components/FindUs";
import MenuItem from "../components/MenuItem";
import Footer from "../components/Footer";



function Home(){
    return(
        <>
            <div className="home_container">
                <NavBar />
                
                <main className="home_main">
                    <h1 className='home_main_title'>THE FOOD TRUCK<span className="menu_title_span">©</span> !</h1>
                    <img src="../../public/empanada.png" alt="" className="main_img" />
                </main>

                <div className="home_find_us">
                    <FindUs />
                </div>

                <div className="home_menu">
                    <h2 className="home_menu_title">THE F<span className="menu_title_span">O</span>OD TRUCK MENU</h2>
                    <div className="home_menu_items">    
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                    </div>
                </div>

                <div className="home_footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home