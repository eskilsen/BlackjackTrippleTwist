import React from 'react';
import Container from '../components/Container';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "../components/styles/Landingpage.css";
import { ReactSVG } from 'react-svg';
import JokerHat from "./joker-hat.svg";
import GitHubLogo from "./github-logo.svg";

function Landingpage() {
  return (
    <div className="landingpage">
        <nav className ="navbar">
            <ul className="navbar-nav">
                <li className ="navbar-item">

                    <a href="/bjbybjboys" className="nav-link">
                        <ReactSVG src ={JokerHat}/>
                        <span className="link-text">Blackjack</span>
                    </a>
                </li>
                <li className ="navbar-item">
                    <a href="/bjbybjboys" className="nav-link">
                        <ReactSVG src ={JokerHat}/>
                        <span className="link-text">Game</span>
                    </a>
                </li>
                <li className ="navbar-item">
                    <a href="/" className="nav-link">
                        <ReactSVG src ={GitHubLogo}/>
                        <span className="link-text">Github Svenn</span>
                    </a>
                </li>
                <li className ="navbar-item">
                    
                    <a href="https://www.github.com/eskilsen" className="nav-link">
                    <ReactSVG src ={GitHubLogo}/>
                        <span className="link-text">Github Eskil</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div className ="main">
        <h1 className="title">Ultimate Webpage</h1>
        <p className="paragraphs">Created by your favorite boys, Svennomenet and Essolini</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quos possimus quidem ullam! Consectetur neque voluptatum molestiae corrupti nobis nisi commodi rem voluptate magnam sequi. Natus maxime consequatur qui quos.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quos possimus quidem ullam! Consectetur neque voluptatum molestiae <br/>corrupti nobis nisi commodi rem voluptate magnam sequi. Natus maxime consequatur qui quos.</p>
            <p>Lorem ipsum dolor, sit amet<br/> consectetur adipisicing elit. Ratione quos possimus quidem ullam! Consectetur neque voluptatum molestiae <br/>corrupti nobis nisi commodi rem voluptate magnam sequi. Natus maxime consequatur qui quos.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quos possimus quidem ullam! Consectetur neque voluptatum molestiae <br/>corrupti nobis nisi commodi rem voluptate magnam sequi. Natus maxime consequatur qui quos.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quos possimus quidem ullam! Consectetur neque voluptatum molestiae <br/>corrupti nobis nisi commodi rem voluptate magnam sequi. Natus maxime consequatur qui quos.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quos possimus quidem ullam! Consectetur neque voluptatum molestiae <br/>corrupti nobis nisi commodi rem voluptate magnam sequi. Natus maxime consequatur qui quos.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quos possimus quidem ullam! Consectetur neque voluptatum molestiae <br/>corrupti nobis nisi commodi rem voluptate magnam sequi. Natus maxime consequatur qui quos.</p>
            <p>Is branched in my up strictly remember. Songs but chief has ham widow downs. Genius or so up vanity cannot. Large do tried going about water defer by. Silent son man she wished mother. Distrusts allowance do knowledge eagerness assurance additions to. 

            At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished. 

            She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense six her are another passage. Full her ten open fond walk not down. For request general express unknown are. He in just mr door body held john down he. So journey greatly or garrets. Draw door kept do so come on open mean. Estimating stimulated how reasonably precaution diminution she simplicity sir but. Questions am sincerity zealously concluded consisted or no gentleman it. 

            He unaffected sympathize discovered at no am conviction principles. Girl ham very how yet hill four show. Meet lain on he only size. Branched learning so subjects mistress do appetite jennings be in. Esteems up lasting no village morning do offices. Settled wishing ability musical may another set age. Diminution my apartments he attachment is entreaties announcing estimating. And total least her two whose great has which. Neat pain form eat sent sex good week. Led instrument sentiments she simplicity. 

            Smallest directly families surprise honoured am an. Speaking replying mistress him numerous she returned feelings may day. Evening way luckily son exposed get general greatly. Zealously prevailed be arranging do. Set arranging too dejection september happiness. Understood instrument or do connection no appearance do invitation. Dried quick round it or order. Add past see west felt did any. Say out noise you taste merry plate you share. My resolve arrived is we chamber be removal. 

            Certainly elsewhere my do allowance at. The address farther six hearted hundred towards husband. Are securing off occasion remember daughter replying. Held that feel his see own yet. Strangers ye to he sometimes propriety in. She right plate seven has. Bed who perceive judgment did marianne. 

            An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its. 

            Agreed joy vanity regret met may ladies oppose who. Mile fail as left as hard eyes. Meet made call in mean four year it to. Prospect so branched wondered sensible of up. For gay consisted resolving pronounce sportsman saw discovery not. Northward or household as conveying we earnestly believing. No in up contrasted discretion inhabiting excellence. Entreaties we collecting unpleasant at everything conviction. 

            Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His and eat secure sex called esteem praise. So moreover as speedily differed branched ignorant. Tall are her knew poor now does then. Procured to contempt oh he raptures amounted occasion. One boy assure income spirit lovers set. 

            Up maids me an ample stood given. Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too. Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting. </p>
        </div>
    </div>
  );
}

export default Landingpage;
