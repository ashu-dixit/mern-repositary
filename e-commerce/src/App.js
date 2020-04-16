import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Corousel from './components/slider'
import Card from "./components/card";
import Header from './components/Header'
import Navbar from './components/Navbar'


function App() {
  return (

    <div>
      <div className="header"><Header /></div>
      <div className="nabs"><Navbar></Navbar></div>
      <div className="sss"><Corousel></Corousel></div>
        <div className="card-grp">
        <div className="col-12 pt-5 text-center"><h3 style={{fontSize:"50px"}}>For you</h3></div>
          <div className="card-env"><Card /></div>
          <div className="card-env"><Card /></div>
          <div className="card-env"><Card /></div>
          <div className="card-env"><Card /></div>
          <div className="card-env"><Card /></div>
          <div className="card-env"><Card /></div>
          <div className="card-env"><Card /></div>
          <div className="card-env"><Card /></div>
          <div className="card-env"><Card /></div>
          <div className="card-env"><Card /></div>
      </div> 
      
    </div>

  );
}

export default App;
