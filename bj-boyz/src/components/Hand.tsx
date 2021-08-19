import React, { useState, useEffect } from 'react';
import { Card, Deck, StandardDeck } from "fh-cards";
import CardCC from './CardCC';
import "./styles/Hand.css"


function Hand() {
  

  let summerizer = (cardHand: Card[]) =>{
    let sum = 0;
    cardHand.forEach(card => {
      sum += parseInt((card.toString().slice(0,-1)))
    });
    return setSum(sum);
  }


  let deck: Deck = new StandardDeck();
  

  let [cardHand, setCardHand] = useState(deck.draws(4));
  let [sum, setSum] = useState(0);

  useEffect(() => {
    summerizer(cardHand);
  }, [cardHand])

  useEffect(() => {
    console.log("Hand endret seg til " + cardHand)
  }, [cardHand])

  let drawCard = () =>{
    let tempHand = [...cardHand]
    tempHand.push(deck.draw())

    console.log(deck.draw())
    setCardHand(tempHand);
  }

  return (
    <div className = "main-container">
      <div className="hand-container">
        {cardHand.map((item) => {
          return(
            <CardCC card={item} />
          )
        })}
        </div>
        <h4 className="summerize">Sum: {sum}</h4>
        <button onClick={() => drawCard()}>draw</button>
      
    </div>
  );
}





export default Hand;
