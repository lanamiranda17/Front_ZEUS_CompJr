import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tela_erro.css';
import LogoComp from '../../assets/logo.svg'; // ajuste o caminho conforme seu projeto
import '../../components/Botao.css';

function Tela_erro() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate('/dashboard');
  };

  return (
    <div className="Tela_erro">
      <img src={LogoComp} alt="Logo da Empresa" className="Logo_comp" />
      <div className="Container_icone_texto">
        <div className="Icone_construcao" role="img" aria-label="Construção">
          🚧
        </div>
        <h1>Ops!</h1>
      </div>
      <p>Ainda não construímos essa página.</p>
      <small>Estamos trabalhando para deixar tudo pronto em breve.</small>

      <button className="Botao_entrar" onClick={handleVoltar}>
        Voltar para o Dashboard
      </button>
    </div>
  );
}

export default Tela_erro;
