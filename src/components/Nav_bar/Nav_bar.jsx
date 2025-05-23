import './Nav_bar.css';
import LogoComp from "../../assets/logo.svg";
import { useLocation, useNavigate } from 'react-router-dom';
import Icon_dashboard from "../../assets/Icons/Icon_dashboard.svg";
import Icon_func_comprov from "../../assets/Icons/Icon_func_comprov.svg";
import Icon_pag from "../../assets/Icons/Icon_pag.svg";
import Icon_comunicados from "../../assets/Icons/Icon_comunicados.svg";
import Icon_circ from "../../assets/Icons/Icon_circ.svg";
import Icon_manut from "../../assets/Icons/Icon_manut.svg";
import Icon_logist from "../../assets/Icons/Icon_logist.svg";
import Icon_orcam from "../../assets/Icons/Icon_orcam.svg";
import Icon_estoq from "../../assets/Icons/Icon_estoq.svg";
import Icon_notif from "../../assets/Icons/Icon_notif.svg";
import Icon_capac from "../../assets/Icons/Icon_capac.svg";
import Icon_aquis from "../../assets/Icons/Icon_aquis.svg";

function Nav_bar() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  // Função para tratar clique e navegar
  const handleClick = (rota) => {
    navigate(rota);
  };

  // Função para renderizar botão, recebe lista de rotas para marcar selecionado
  const renderizar_botao = (rota, icone, texto, rotasSelecionadas = []) => {
    // O botão fica selecionado se o pathname atual for a rota principal
    // ou se estiver em alguma rota extra da lista
    const selecionado = pathname === rota || rotasSelecionadas.includes(pathname);

    return (
      <button
        className={selecionado ? 'Botao_selecionado' : 'Botao_navbar'}
        onClick={() => handleClick(rota)}
      >
        <div className="Barra_azul"></div>
        <img src={icone} alt="" />
        <span>{texto}</span>
      </button>
    );
  };

  return (
    <div className='Nav_bar'>
      <div className="Login_logo_navbar">
        <img src={LogoComp} alt="Logo" />
      </div>
      {renderizar_botao('/dashboard', Icon_dashboard, 'Dashboard')}
      {renderizar_botao('/funcionarios', Icon_func_comprov, 'Funcionários', ['/novo'])}
      {renderizar_botao('/*', Icon_func_comprov, 'Comprovantes de pagamento')}
      {renderizar_botao('/*', Icon_pag, 'Pagamentos recebidos')}
      {renderizar_botao('/*', Icon_comunicados, 'Comunicados')}
      {renderizar_botao('/*', Icon_circ, 'Circulares')}
      {renderizar_botao('/*', Icon_manut, 'Manutenção')}
      {renderizar_botao('/*', Icon_logist, 'Logística')}
      {renderizar_botao('/orcamento', Icon_orcam, 'Orçamento', ['/novo_orcamento'])}
      {renderizar_botao('/*', Icon_estoq, 'Estoques e inventário')}
      {renderizar_botao('/*', Icon_notif, 'Notificações')}
      {renderizar_botao('/*', Icon_capac, 'Capacitação')}
      {renderizar_botao('/*', Icon_aquis, 'Aquisições')}
    </div>
  );
}

export default Nav_bar;
