import React from "react";
import './ListaProdutos.scss';
import { Link } from 'react-router-dom';
import usuario from '../imagens/user.png';

const ListaProdutos = () => {
    const [doar, setDoar] = React.useState([]);

    React.useEffect(() => carregaDoar(), []);

    const carregaDoar = () => {
        fetch('http://localhost:8000/api/doar/', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(value => {
            return value.json()
        }).then(value => {
            setDoar(value)
        })
    };

    return <table>
        <thead>
        <tr>
            <th>Nome</th>
            <th>Descriçao</th>
            
        </tr>
        </thead>
        <tbody>
        {doar.map(value => {
            return <tr key={value.id}>
                <td>{value.nome}</td>
                <td>{value.descricao}</td>
            </tr>
        })}
        <div className="ListaProdutos">
            <div className="Perfil">
                <img src={usuario}></img>
                <h1>Nome</h1>
                <Link to="/editar-perfil"><button>Editar perfil</button></Link>
            </div>
        </div>
        </tbody>
    </table>;
}
//     return(
//     )
// }

export default ListaProdutos;