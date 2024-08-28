import logo from './logo.svg';
import './App.css';
import Home from "./home";
import React from "react";
import ReactDOM from 'react-dom';
import Info from "./getstr";
import {BrowserRouter,Routes,Route,useNavigate, Router} from "react-router-dom";
//import {express} from "nodemon";





function App() {
  //const navigate = useNavigate();
  return (
    <div className="root">
      <div className='main'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/Login' element={<Info/>} ></Route>
          </Routes>
        </BrowserRouter>
        

      <div>
        {/* <p className='text-cont'style={{fontSize:"x-large",fontWeight:"800"}}>Empowering<br></br> Micro<br></br> Enterprises</p> */}
      </div>

      </div>

      </div>

  );
}

export default App;
