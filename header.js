import React from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import bank from "./assets/bank.jpeg";
import "./assets/1.jpg";
import "./assets/2.jpg";
import "./assets/3.jpg";
import "./assets/4.jpg";

function Header(){
    return(
        <div className="homepg">
        <div className="cont_test">
        <div className="nvgbar-cont5">
            <nav className="nvgbar">
                <ul style={{listStyleType:"none"}}>
                    <a href="/"><li>Home</li></a>
                    <li>About</li>
                    <li><a href="#">Services</a></li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
                <br></br>
                <hr style={{width:"390%" , height:"2%"}}></hr>
            </nav>
            </div>
        </div>
    </div>
    );            
}

export default Header;