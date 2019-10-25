import React from "react";
import './Home.scss';
import { Link } from "react-router-dom";


const Home = () => {
    return(
        <div className="Casa">
            <header>
                <div className="titulo">
                    <h1>PASSA PRA FRENTE</h1>  
                </div>
                <Link to="/login"><button>Login</button></Link>
            </header>
        </div>
    );

}

export default Home;