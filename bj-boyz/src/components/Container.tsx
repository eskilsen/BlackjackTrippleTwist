import React from 'react';
import './styles/Container.css';
import Hand from "./Hand";
import CardCC from './CardCC';

function Background() {
  return (
    <div className="background-container">
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
