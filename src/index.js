import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';

function NaoExiste() {
  return (
    <div>Nao Existe</div>
  )
}

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={App} />
    <Route path='/cadastro/video' component={CadastroVideo} />
    <Route path='/cadastro/categoria' component={CadastroCategoria} />
    <Route component={NaoExiste} />
  </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
