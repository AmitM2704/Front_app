import React from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import bank from "./assets/bank.jpeg";
import "./assets/1.jpg";
import "./assets/2.jpg";
import "./assets/3.jpg";
import "./assets/4.jpg";
import Home from "./home";
import Header from "./header";
import {Formik,Form,Field,FormikProps,FormikHelpers,ErrorMessage} from 'formik';

function Info() {
    <Formik/>
    

    return(
        <div className="getstrpg">
            <Header/>
            <div className="infopg">
            <h3 className="ttl">Let us know your basic info:</h3>
            <form className="form1">
                <label>Enter your Full Name:</label>
                <input type="text" placeholder="Type your name here"></input>
                <label>Enter your Username:</label>
                <input placeholder="Create an Username" type="text"></input>
                <label>Choose your Password:</label>
                <input type="password" placeholder="Enter A Password"></input>
                <label>Purpose of Choosing Us:</label>
                <select>
                    <option></option>
                </select>
                <button type="submit" className="lgnbtn2">Submit</button>
            </form>
            </div>
        
        
        </div>
    );

    
}

export default Info;