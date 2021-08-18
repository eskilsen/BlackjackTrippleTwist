import React from 'react';
import { Card, Deck, StandardDeck } from "fh-cards";
import CardCC from './CardCC';

function Hand() {
  let deck: Deck = new StandardDeck();
  {console.log(deck)}
  let hand: Card[] = deck.draws(2);
  return (
    <div className="hand-container">
      {hand[0].toString()}
      {hand.map((item) => {
        return(
          <CardCC card={item} />
        )
      })}
    </div>
  );
}





export default Hand;
