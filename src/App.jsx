// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Tela_login from './Pages/Tela_login/Tela_login';
import Tela_autenticacao from './Pages/Tela_autenticacao/Tela_autenticacao';
import Tela_esqueceu from './Pages/Tela_esqueceu/Tela_esqueceu';
import Tela_verificacao from './Pages/Tela_verificacao/Tela_verificacao';
import Tela_redefinicao from './Pages/Tela_redefinicao/Tela_redefinicao';
import Tela_dashboard from './Pages/Tela_dashboard/Tela_dashboard';
import Tela_funcionarios from './Pages/Tela_funcionarios/Tela_funcionarios';
import Tela_novoFunc from './Pages/Tela_novoFunc/Tela_novoFunc';
import Tela_orcamento from './Pages/Tela_orcamento/Tela_orcamento';
import Tela_novo_orcamento from './Pages/Tela_novo_orcamento/Tela_novo_orcamento';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tela_login />} />
      <Route path="/verificar" element={<Tela_autenticacao />} />
      <Route path="/recuperacao_de_senha" element={<Tela_esqueceu />} />
      <Route path="/redefinicao" element={<Tela_verificacao />} />
      <Route path="/confirmacao" element={<Tela_redefinicao />} />
      <Route path="/dashboard" element={<Tela_dashboard />} />
      <Route path="/funcionarios" element={<Tela_funcionarios />} />
      <Route path="/novo" element={<Tela_novoFunc/>} />
      <Route path="/orcamento" element={<Tela_orcamento />} />
      <Route path="/novo_orcamento" element={<Tela_novo_orcamento />} />

    </Routes>
  );
}

export default App;

