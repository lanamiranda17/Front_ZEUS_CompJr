import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tela_erro.css';
import LogoComp from '../../assets/logo.svg'; // ajuste o caminho conforme seu projeto
import '../../components/Botao.css';

// Componente de tela de erro genérica para páginas não implementadas ou rotas inválidas
function Tela_erro() {
  // Hook de navegação do React Router
  const navigate = useNavigate();

  // Handler para voltar para a página anterior
  const handleVoltar = () => {
    navigate(-1);
  };

  // Renderização principal da tela de erro
  return (
    <div className="Tela_erro">
      {/* Logo da empresa */}
      <img src={LogoComp} alt="Logo da Empresa" className="Logo_comp" />
      <div className="Container_icone_texto">
        <div className="Icone_construcao" role="img" aria-label="Construção">
          🚧
        </div>
        <h1>Ops!</h1>
      </div>
      <p>Ainda não construímos essa página.</p>
      <small>Estamos trabalhando para deixar tudo pronto em breve.</small>
      {/* Botão para voltar */}
      <button className="Botao_padrao Botao_erro" onClick={handleVoltar}>
        Voltar para a página anterior
      </button>
    </div>
  );
}

export default Tela_erro;
