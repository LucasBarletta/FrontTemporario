import React, {useState, useEffect} from 'react';
import './Doacao.scss';
import Input from "./Input";
import { Link } from 'react-router-dom';

const Doacao = () => {
    const [nome, setNome] = useState("");
    const [descricao, setdescricao] = useState("");


    const handleSubmit = e =>{
        e.preventDefault();

        if(nome){
          const novaDoacao = {
            nome: nome,
            descricao: descricao,
            
          }

          fetch('http://localhost:8000/api/doar/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(novaDoacao)
            }
          ).then(response => {
              return response.json()
          }).then(response => {
            if(response.id) {
              setNome("")
              setdescricao("")
              alert("criado com sucesso")
            }else{
              alert("")
            }
          })
        }
        



    
    }
    return(
        <div className="Doacao">
            <h1>Faça sua doação!</h1>
            <form onSubmit={handleSubmit}>
                <aside> 
                    <Input atualizarState={setNome} value={nome} placeholder="Nome do item a ser doado"/>
                    <Input atualizarState={setdescricao} value={descricao} className="descricao" name="descrição" id="" cols="30" rows="10" placeholder="Descrição do produto"/>
                </aside>
                <h4>Imagem do item:</h4>
                <input type="file" />
                <Link to="/lista-de-produtos"><button>Enviar</button></Link>
                <Input type="submit" value="Cadastrar"/>
            </form>
        </div>
    );

}
export default Doacao;