import React from 'react';
import './styles/Container.css';
import Hand from "./Hand";
import CardCC from './CardCC';
import Navbar from './Navbar';

function Background() {
  return (
    <div className="background-container">
      <Navbar/>
      <div className="header">
        <h1>Blackjack</h1>

      </div>
      <Hand/>

      <div className="footer">
        Provided for you with ♥️ by BJ-Boyz
      </div>
    </div>
  );
}





export default Background;
