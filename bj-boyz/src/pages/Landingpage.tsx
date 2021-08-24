import React, { useEffect, useState } from 'react';
import "../components/styles/Landingpage.css";
import Navbar from '../components/Navbar';

let API_KEY = "Sbegnas5PHhXd0QUY7fZIZsdTZp5ZvwF4qN9kkOn";
let endpoint = "https://api.nasa.gov/planetary/apod?api_key=";
let url = `${endpoint}${API_KEY}`;



function Landingpage() {
    const [picture, setPicture] = useState("");
    const [showingPicture, setShowingPicture] = useState(false);
    const [pictureTitle, setPictureTitle] = useState("");

    const getSpacy = () => {
        return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setPicture(data.url)
            setPictureTitle(data.title)
        })
    }

    useEffect(() => {
        getSpacy();
    }, [])


    const showPicture = () => {
        return setShowingPicture(!showingPicture);
    }

    

    
  return (
    
    <div className="landingpage">
        <Navbar/>
        <div className ="main">
            <h1 className="title">Ultimate Webpage</h1>
            <p className="introductionHeader">Created by your favorite boys, Svennomenet and Essolini</p>
            <div className="informationContainer">
                <div className = "information" id="infoSvenn">
                    <p className = "informationHeader">Svennomentet</p>
                    <div className ="informationText">
                        <p>Most talented person since Ada Lovlace. Svenn leverer alltid på alle plan. Alltid. <br/>Svenn sier ofte <i>"I guess the attitude that I've tried to create here is that I'm a friend first and a boss second and probably an entertainer third."</i></p>
                    </div>
                </div>
                <div className = "information" id="infoEskil">
                    <p className = "informationHeader">Essolini</p>
                    <div className ="informationText">
                        <p>Eskil Hognestad, født i 1994, er den minst talentfulle av duoen. <br/>
                        Han startet sin karriere som fadder for Svennomenet, men skjønte tidlig at han ikke har sjans til å henge med når Svenn drar i gang sin maskin og åpner VS-Code.</p>
                    </div>
                </div>
            </div>

            <div className="spaceContainer">
                <button id ="spaceButton" onClick={showPicture}> {showingPicture ? "Hide":"Show"} Space</button>
                <div className="spacyPicture">
                    {showingPicture ? <img src = {picture} alt="spacy picture"></img> : <></>}
                    {showingPicture ? <div className="spacyPictureOverlay">{pictureTitle}</div> : <></>}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Landingpage;
