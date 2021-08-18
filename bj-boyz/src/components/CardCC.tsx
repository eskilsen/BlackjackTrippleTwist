import React, {useEffect, useState}  from "react";
import { Card } from "fh-cards";
import "./styles/CardCC.css"

interface CardCCProps{
    card: Card
}

const letterTranslator = (cardString: string) => {
    let letter = cardString.slice(-1);
    let obj = {
        text: "X",
        color: "red"
    }
    if (letter === 'h'){
        obj.text="♥️";
        obj.color="red";
    }else if (letter === 's'){
        obj.text = "♠️";
        obj.color = "black";
    }else if (letter === 'c'){
        obj.text = "♣️";
        obj.color="black";
    }else if (letter === 'd'){
        obj.text = "♦️";
        obj.color = "red";
    }
    return obj;
}



const CardCC = (props: CardCCProps) => {

    const [cardNumber, setCardNumber] = useState(props.card.toString().slice(0,-1));
    const [cardType, setCardType] = useState(letterTranslator(props.card.toString()));
    
    
    /*useEffect(() => {
        let letter = letterTranslator(props.card.toString());
        let tempCardText = cardValue[0] + letter;   
        setCardValue(letter);
    }, []);*/
    
    return (
        <div className="card">
            <h1 style={{color: cardType.color}}>{cardNumber}</h1>
            <h3 style={{color: cardType.color}}>{cardType.text}</h3>
        </div>
    )
}

export default CardCC;