import React from "react"
import { Link } from 'react-router-dom';
import "./Login.scss"
import Input from "../../Input";


const Login = () => {
    return (
        <div className="Login">
        <h1>Faça seu login aqui</h1>
        <input required className="input" type="email" placeholder="E-mail "></input>
        <input required className="input" type="password" placeholder="Senha" ></input>
        
        <div className="botao">
            <Link to="/doacao" ><button>Entrar</button></Link>
        </div>
    </div>
    );
    
}

export default Login;