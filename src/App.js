import React from 'react';
import './App.scss';
import Navbar from './componentes/Navbar';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Home from './componentes/Home';
import Cadastro from './componentes/Cadastro/Cadastro.js';
import Projeto from './componentes/Projeto';
import Footer from './componentes/Footer';
import EscolaCadastro from './componentes/Cadastro/EscolaCadastro';
import DoadorCadastro from './componentes/Cadastro/DoadorCadastro';
import Doacao from './componentes/Doacao';
import ProdutosDoados from './componentes/ProdutosDoados';
import ListaProdutos from './componentes/ListaProdutos';
import Login from './componentes/Cadastro/Login/Login';
import EditarPerfil from './componentes/EditarPerfil';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/doacao" component={Doacao} />
      <Route exact path="/cadastro" component={Cadastro} />
      <Route exact path="/sobre" component={Projeto} />
      <Route exact path="/escola" component={EscolaCadastro} />
      <Route exact path="/doador" component={DoadorCadastro} />
      <Route exact path="/lista-de-produtos" component={ProdutosDoados} />
      <Route exact path="/lista-de-doacoes" component={ListaProdutos} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/editar-perfil" component={EditarPerfil} />
      <Footer />
    </Router>
  );
}

export default App;
