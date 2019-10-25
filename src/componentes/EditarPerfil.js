import React, {useState, useEffect} from 'react';
import './EditarPerfil.scss';

const EditarPerfil = () => {
    const [escolas, setEscolas] = React.useState([]);

    React.useEffect(() => carregaEscolas(), []);

    const carregaEscolas = () => {
        fetch('http://localhost:8000/api/escola/', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(value => {
            return value.json()
        }).then(value => {
            setEscolas(value)
        })
    };

    return <table>
        <thead>
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Localizaçao</th>
        </tr>
        </thead>
        <tbody>
        {escolas.map(value => {
            return <tr key={value.id}>
                <td>{value.nome}</td>
                <td>{value.email}</td>
                <td>{value.localizacao}</td>
            </tr>
        })}
        </tbody>
    </table>;
}

export default EditarPerfil;