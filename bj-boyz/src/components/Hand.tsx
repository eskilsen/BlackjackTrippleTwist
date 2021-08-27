import React, { useState, useEffect, useRef } from 'react';
import CardCC from './CardCC';
import "./styles/Hand.css"

import jsonData from "../deck.json";



function Hand() {

  //creates the deck from JSON-file
  const data = JSON.parse(JSON.stringify(jsonData.cards));
  const [deck, setDeck]: any[] = useState(data);
  const [cardHand, setCardHand]: any[] = useState([]);
  const [cardSum, setCardSum] = useState(0);

  const [dealerCards, setDealerCards]: any[] = useState([]);
  const [dealerSum, setDealerSum] = useState(0);
  const [playerIsFinished, setPlayerIsFinished] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  
  let drawCard = (hand: any[]) => {
    if (deck.length > 0){
      const randomIndex = Math.floor(Math.random()*deck.length);
      const card = deck[randomIndex];
      deck.splice(randomIndex,1);
      setDeck([...deck])
      hand.push(card);
    }
  }

  let dealDealerCards = () => {
    drawCard(dealerCards);
    summerizeDealerHand(dealerCards);
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

  let summerizeDealerHand = (cardHand: any[]) => {
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
    setDealerSum(total);
  }


  //if (!gameOver) setTimeout(finishDealerPlay,0);

  let checkGameStatus = () => {
    return gameOver;
  }

  let finishDealerPlay = () => {
    if (dealerSum >= 21 || dealerSum > cardSum){
      setGameOver(true);
      console.log("Stopped");
    }
    else{
      dealDealerCards();
      //finishDealerPlay();
    }
  }

  let stay = () => {
    setPlayerIsFinished(true);
    //setTimeout(finishDealerPlay,1000);
  }

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
    } else {
      finishDealerPlay()
    }
  }, [playerIsFinished]);


  useEffect(() =>{
    summerizeCardHand(cardHand);
  },)
 
  
  useEffect(() => {
    dealDealerCards()
    dealDealerCards()
  }, [])

  let refreshPage = () =>{
    window.location.reload(false);
  }


  return (
    <div className = "main-container">
      <div className = "hand-container" id="dealer">
        <h3>Dealer</h3>
        <p>Sum: {dealerSum}</p>
        <div className = "cards">{dealerCards.map((card: any, index: number) => {
          return (
            <CardCC key = {index} value = {card.value} suit={card.suit}/>
          );
        })}
        
        </div>
      </div>
      <div className="hand-container" id= "player">
        <h3 className = "card-holder">Your cards</h3>
        <div className = "cards">{cardHand.map((card: any, index: number) => {
          return (
            <CardCC key = {index}  value={card.value} suit = {card.suit}/>
          )
        })}
        </div>
        </div>
        <div className="sumAndDraw">
        {cardSum > 1 ? 
          <p className = "summerizer">Sum: {cardSum}</p> 
          :
          <p className = "summerizer-hidden"> Sum: {cardSum}</p>}
          
        {playerIsFinished ? 
          <div className = "sumAndDraw">
          <h1 className="finished-title">The winner is: {cardSum <= 21 && cardSum > dealerSum && dealerSum <= 21 ? <>YOU!</> : <>Dealer</>}</h1>
          <button className="drawButton" onClick = {() => {refreshPage()}}>Play again</button>
          </div>
          :
          <div>
          <button className = "drawButton" onClick={() => {drawCard(cardHand)}}>draw</button>
          <button className = "drawButton" onClick={() => {stay()}}>Stay</button>
          </div>
          }
        </div>
    </div>
  );
}


/**/


export default Hand;
