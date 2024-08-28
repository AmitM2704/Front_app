import React from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import bank from "./assets/bank.jpeg";
import "./assets/1.jpg";
import "./assets/2.jpg";
import "./assets/3.jpg";
import "./assets/4.jpg";
import { Navigate, Route, useNavigate } from "react-router-dom";
import Info from "./getstr";

function Home() {
    let navigate = useNavigate();
    function redinfo() {
        //<Route path="/login" element ={<Info/>}></Route>
        navigate("/Login")
        
    }
    

    return(
        <div className="homepg">
        <div className="cont_test">
        <div className="nvgbar-cont">
            <nav className="nvgbar">
                <ul style={{listStyleType:"none"}}>
                    <li>Home</li>
                    <li>About</li>
                    <li><a href="#">Services</a></li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
                <button type="button" onClick={()=>redinfo()} className="start">Get Started!</button>

                <div>
                    <p className='text-cont1'style={{fontSize:"xx-large",fontWeight:"900"}}>Empowering<br></br>Micro<br></br> Enterprises</p>
                    <div>
                        <p className="text-cont2">Revolutionizing credit access with AI-powered financing solutions.Connect with diverse lenders and optimize financial management.</p>
                    </div>
                </div>
                <div className="lgnbtn-cont">
                    <button className="lgnbtn" type="button">Login Now!</button>
                </div>
                
            </nav>
            <div className="text-cont3">
                <h2 id="#">Comprehensive Financing Services</h2>
                <p>Explore a range of financial options tailored to "micro-enterprises" for growth and stability</p>
                <div className="threeimgs">
                    <img style={{width:"20%"}} src={require("./assets/1.jpg")}/>
                    <h5>Financing Connections</h5>
                    <h7 className="h7">Connect with a diverse range of financing options from lenders,investors and government programs</h7>
                    <img style={{width:"140%"}} src={require("./assets/2.jpg")}/>
                    <h5>Credit Assessment</h5>
                    <h7 className="h7">Utilize AI-powered utilization for efficient credit evaluation and access streamlined data-exchange processes</h7>
                    <img style={{width:"140%"}} src={require("./assets/3.jpg")}/>
                    <h5>Financial Literacy</h5>
                    <h7 style={{position:"relative",left:"-185px"}} className="h7" >Promote financial education and empower businesses to improve their creditworthy</h7>
                </div>
                
                
            </div>
            
        </div>
        </div>

        <div></div>

        </div>
    );

    
}

export default Home;