import { ReactSVG } from 'react-svg';
import JokerHat from "../assets/joker-hat.svg";
import GitHubLogo from "../assets/github-logo.svg";
import Home from "../assets/icons8-home.svg";
import "../components/styles/Navbar.css";

function Navbar() {
    return(
        <nav className ="navbar">
            <ul className="navbar-nav">
            <li className ="navbar-item">
                    <a href="/" className="nav-link">
                        <ReactSVG src ={Home}/>
                        <span className="link-text">Home</span>
                    </a>
                </li>
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
    )
}

export default Navbar;



