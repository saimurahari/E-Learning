import React from "react";
import './css/Home.css';
import { FaBeer } from 'react-icons/fa';
function Home(){
    return(
        <>
            <header>
                <a href="/Home" className="logo">SAcademy.</a>
                <nav className="navbar">
                <a className="active" href="./home.html">Home</a>
                <a href="./dishes.html">dishes</a>
                <a href="#">about</a>
                <a href="#">Contact us</a>
           
                <a className="feed">feedback</a>
                <a href="#">Orders</a>
            </nav>
    
    </header>
        </>
    );
}
export default Home;