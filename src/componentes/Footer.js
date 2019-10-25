import React from 'react';
import "./Footer.scss";
import facebook from '../imagens/facebook.png';
import instagram from '../imagens/instagram.png';
import twitter from '../imagens/twitter.png';

const Footer = () => {
    return (
    <div className="Footer">
        <h1>Whats: (11) 99801-1661</h1>
        <h2>Email: oi@mastertech.tech</h2>
        <footer>
            <a target="_blank" href="https://www.facebook.com/mastertech.tech"><img src={facebook}/></a>
            <a target="_blank" href="https://www.instagram.com/mastertech.tech"><img src={instagram}/></a>
            <a target="_blank" href="https://twitter.com/mastertech_tech"><img src={twitter}/></a>

        </footer>
    </div>
    );
}

export default Footer;