import React from "react";
import './ProdutosDoados.scss';
import { Link } from 'react-router-dom';
import usuario from '../imagens/user.png';

const ProdutosDoados = () => {
    return(
        <div className="ProdutosDoados">
            <div className="Perfil">
                <img src={usuario}></img>
                <h1>Nome</h1>
                <Link to="/editar-perfil"><button>Editar perfil</button></Link>
            </div>
        </div>
    )
}

export default ProdutosDoados;