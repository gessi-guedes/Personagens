import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import Logo from '../assets/logo.png';

const Home = () => {
    return (
        <div id='sla' >
            <img src={Logo} />
            <h1>Conheça todos os personagens <br /> de Rick and Morty!</h1>
            <Link to="Lista" >
                <button className='bttn'>Ver Personagens</button>
            </Link>
        </div>
    );
}

export default Home;
