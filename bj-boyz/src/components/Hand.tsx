import React, { useState, useEffect } from 'react';
import { Card, Deck, StandardDeck } from "fh-cards";
import CardCC from './CardCC';
import "./styles/Hand.css"

import jsonData from "../deck.json";


function Hand() {

  //creates the deck from JSON-file
  const data = JSON.parse(JSON.stringify(jsonData.cards));
  const [deck, setDeck]: any[] = useState(data);
  const [cardHand, setCardHand]: any[] = useState([]);
  const [cardSum, setCardSum] = useState(0);
  
  let drawCard = () => {
    if (deck.length > 0){
      const randomIndex = Math.floor(Math.random()*deck.length);
      console.log(randomIndex);
      const card = deck[randomIndex];
      deck.splice(randomIndex,1);
      setDeck([...deck])
      cardHand.push(card);
    }
  }

  let summerizeCardHand = (cardHand: any[]) => {
    let total = 0;
    cardHand.forEach((card: any) => {
      if (card.value !== 'A'){
        switch (card.value)
        {
          case 'K':
            total += 10;
            break;
          case 'Q':
            total += 10;
            break;
          case 'J':
            total += 10;
            break;
          default:
            total += Number(card.value);
        }
      }
    });

    const aces = cardHand.filter((card: any) => {
      return card.value === 'A';
    });

    aces.forEach((card: any) => {
      if((total + 11) > 21){
        total += 1
      }
      else if ((total + 11) === 21){
        if (aces.length > 1){
          total += 1;
        }
        else {
          total += 11;
        }
      }
      else{
        total += 11;
      }
    });
    setCardSum(total);
  }

  useEffect(() =>{
    summerizeCardHand(cardHand);
  })

  return (
    <div className = "main-container">
      <div className="hand-container">
        {cardHand.map((card: any, index: number) => {
          return (
            <CardCC key = {index}  value={card.value} suit = {card.suit}/>
          )
        })}
        
        </div>
        <div className="sumAndDraw">
        {cardSum > 0 ? <p className = "summerizer">Sum: {cardSum}</p> : <></>}
        <button className = "drawButton" onClick={() => {drawCard()}}>draw</button>
        </div>
    </div>
  );
}


/**/


export default Hand;
