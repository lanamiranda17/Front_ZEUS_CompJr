import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Drawer, AppBar, Toolbar, IconButton, useMediaQuery, Typography } from '@mui/material';
import LogoComp from '../../assets/logo.svg';
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
import './Nav_bar.css';

function Nav_bar({ toggleDrawer, drawerOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  // Hook para detectar se a tela é mobile (menos de 900px)
  const isMobile = useMediaQuery('(max-width: 900px)');

  const handleClick = (rota) => {
    navigate(rota);
  };

  const renderizar_botao = (rota, icone, texto) => {
    const selecionado = pathname === rota;

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

  // Função para abrir e fechar o Drawer
  const handleDrawerToggle = () => {
    toggleDrawer();
  };

  return (
    <>
      {isMobile ? (
        <>
          {/* Botão de menu hambúrguer para abrir o Drawer */}
          <div className='Nav_bar_mobile'>
            <div classname='Botao_navbar'>
              <button className="Botao_navbar" edge="start" color="inherit" onClick={handleDrawerToggle}>
                ☰ 
              </button>
              {renderizar_botao('/dashboard', Icon_dashboard)}
              {renderizar_botao('/funcionarios', Icon_func_comprov)}
              {renderizar_botao('/*', Icon_pag)}
              {renderizar_botao('/*', Icon_comunicados)}
              {renderizar_botao('/*', Icon_circ)}
              {renderizar_botao('/*', Icon_manut)}
              {renderizar_botao('/*', Icon_logist)}
              {renderizar_botao('/orcamento', Icon_orcam)}
              {renderizar_botao('/*', Icon_estoq)}
              {renderizar_botao('/*', Icon_notif)}
              {renderizar_botao('/*', Icon_capac)}
              {renderizar_botao('/*', Icon_aquis)}
            </div>
          </div>

          <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
            <div style={{ width: 220, padding: 0 }}>
              <img src={LogoComp} alt="Logo" className='Login_logo_navbar_mobile'/>
              {renderizar_botao('/dashboard', Icon_dashboard, 'Dashboard')}
              {renderizar_botao('/funcionarios', Icon_func_comprov, 'Funcionários')}
              {renderizar_botao('/*', Icon_pag, 'Pagamentos recebidos')}
              {renderizar_botao('/*', Icon_comunicados, 'Comunicados')}
              {renderizar_botao('/*', Icon_circ, 'Circulares')}
              {renderizar_botao('/*', Icon_manut, 'Manutenção')}
              {renderizar_botao('/*', Icon_logist, 'Logística')}
              {renderizar_botao('/orcamento', Icon_orcam, 'Orçamento')}
              {renderizar_botao('/*', Icon_estoq, 'Estoques e inventário')}
              {renderizar_botao('/*', Icon_notif, 'Notificações')}
              {renderizar_botao('/*', Icon_capac, 'Capacitação')}
              {renderizar_botao('/*', Icon_aquis, 'Aquisições')}
            </div>
          </Drawer>
        </>
      ) : (
        // Barra de navegação fixa para telas grandes
        <div className="Nav_bar">
          <div className="Login_logo_navbar">
            <img src={LogoComp} alt="Logo" />
          </div>
          {renderizar_botao('/dashboard', Icon_dashboard, 'Dashboard')}
          {renderizar_botao('/funcionarios', Icon_func_comprov, 'Funcionários')}
          {renderizar_botao('/*', Icon_pag, 'Pagamentos recebidos')}
          {renderizar_botao('/*', Icon_comunicados, 'Comunicados')}
          {renderizar_botao('/*', Icon_circ, 'Circulares')}
          {renderizar_botao('/*', Icon_manut, 'Manutenção')}
          {renderizar_botao('/*', Icon_logist, 'Logística')}
          {renderizar_botao('/orcamento', Icon_orcam, 'Orçamento')}
          {renderizar_botao('/*', Icon_estoq, 'Estoques e inventário')}
          {renderizar_botao('/*', Icon_notif, 'Notificações')}
          {renderizar_botao('/*', Icon_capac, 'Capacitação')}
          {renderizar_botao('/*', Icon_aquis, 'Aquisições')}
        </div>
      )}
    </>
  );
}

export default Nav_bar;


