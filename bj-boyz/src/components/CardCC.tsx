import React, {Props, useEffect, useState}  from "react";
import "./styles/CardCC.css"

interface CardCCProps{
    value: string;
    suit: string;
}


const CardCC: React.FC<CardCCProps> = ({suit, value})  => {

 

    const letterTranslator = () =>{
        let obj = {
            text: "X",
            color: "red"
        }
        if (suit === "hearts"){
            obj.color="red";
            obj.text="♥️"
        }else if (suit === 'spades'){
            obj.text = "♠️";
            obj.color = "black";
        }else if (suit === 'clubs'){
            obj.text = "♣️";
            obj.color="black";
        }else if (suit === 'diamonds'){
            obj.text = "♦️";
            obj.color = "red";
        }
        return obj;
    }

    const [cardSuit, setCardSuit] = useState(letterTranslator());
    const [cardValue, setCardValue] = useState(value);


    useEffect(() => {
    }, []);


    
    return (
        <div className="card">
            <h1 style={{color: cardSuit.color}}>{cardValue}</h1>
            <h1 style={{color: cardSuit.color}}>{cardSuit.text}</h1>
        </div>
    )
}

export default CardCC;