// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Tela_login from './Pages/Tela_login/Tela_login';
import Tela_autenticacao from './Pages/Tela_autenticacao/Tela_autenticacao';
import Tela_esqueceu from './Pages/Tela_esqueceu/Tela_esqueceu';
import Tela_verificacao from './Pages/Tela_verificacao/Tela_verificacao';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tela_login />} />
      <Route path="/verificar" element={<Tela_autenticacao />} />
      <Route path="/recuperacao_de_senha" element={<Tela_esqueceu />} />
      <Route path="/redefinicao" element={<Tela_verificacao />} />
    </Routes>
  );
}

export default App;
