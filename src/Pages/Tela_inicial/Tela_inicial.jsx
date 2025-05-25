import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // IMPORTANTE: importa o hook
import './Tela_inicial.css';
import logoComp from '../../assets/logo.svg';

function Tela_inicial() {
  const navigate = useNavigate(); // declara o navigate

  useEffect(() => {
    // Após 3 segundos, navega para /login
    const timer = setTimeout(() => {
      navigate('/login'); // redireciona para a rota da tela de login
    }, 3000);

    return () => clearTimeout(timer); // limpa timer se componente desmontar
  }, [navigate]);

  return (
    <div className="tela-inicial-container">
      <img src={logoComp} alt="Logo Comp" className="tela-inicial-logo" />
      <h1 className="tela-inicial-titulo">Bem vindo ao Zeus!</h1>
    </div>
  );
}

export default Tela_inicial;
