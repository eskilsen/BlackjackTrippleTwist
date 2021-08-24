import React from "react";
import { Card, Deck, StandardDeck } from "fh-cards";


function CardTesting() {

    let deck: Deck = new StandardDeck();
    console.log("Dekkk: ",deck)
    deck.shuffle();
    console.log("Dekkk2: ",deck)
    let card: Card = deck.draw();
    let num: number = parseInt(card.toString()[0]);

    return (
        <div>
            {card.toString()} - {num}
            Holy number is {num + 3}
        </div>
    )
}
    


export default CardTesting;