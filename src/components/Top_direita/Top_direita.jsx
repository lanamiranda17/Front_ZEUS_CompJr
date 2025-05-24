import './Top_direita.css';
import * as React from 'react';
import Icon_notif from "../../assets/Icons/Icon_notif.svg";
import Icon_perfil from "../../assets/Icons/Icon_perfil.svg";
import Icon_menu from "../../assets/Icons/Icon_menu.svg";
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Componente de topo direito das telas internas. Exibe informações do usuário, notificações e menu de ações (perfil, configurações, sair).
function Top_direita() {
  const nome_usuario = "Lana";
  const setor = "Vendas";
  const navigate = useNavigate();

  // Estado do menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // Estado do popup de confirmação
  const [showConfirm, setShowConfirm] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick_erro = () => {
     navigate('/*');
  };
  const handleLogout = () => {
    handleClose();
    setShowConfirm(true); // Mostra popup de confirmação
  };
  const handleConfirmLogout = () => {
    setShowConfirm(false);
    navigate('/');
  };
  const handleCancelLogout = () => {
    setShowConfirm(false);
  };

  return (
    <div className='Top_direita'>
      <button onClick={handleClick_erro} className="Botao_notificacao">
        <img src={Icon_notif} alt="Notificação" />
      </button>
      <img src={Icon_perfil} alt="Perfil" />
      <div className='Textos_direita'>
        <p className='Textos_pequenos'>{nome_usuario}</p>
        <p className='Texto_setor'>{setor}</p>
      </div>

      {/* Botão com menu Material UI */}
      <Button
        id="botao-menu-top"
        aria-controls={open ? 'menu-top-direita' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="Botao_menu"
      >
        <img src={Icon_menu} alt="Menu" />
      </Button>
      <Menu
        id="menu-top-direita"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            navigate('/*');
          }}
          style={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: 15 }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Novo ícone de perfil: user outline */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6"/></svg>
            Perfil
          </span>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate('/*');
          }}
          style={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: 15 }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Novo ícone de configurações: engrenagem simples */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15 8.6a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z"/></svg>
            Configurações
          </span>
        </MenuItem>
        <MenuItem onClick={handleLogout} style={{ fontFamily: 'Nunito, Arial, sans-serif', fontSize: 15 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/><path d="M21 12H3"/></svg>
            Sair
          </span>
        </MenuItem>
      </Menu>

      {/* Popup de confirmação de logout */}
      {showConfirm && (
        <div className="Popup_fundo">
          <div className="Popup_caixa">
            <div className="Popup_titulo">Deseja sair?</div>
            <div className="Popup_mensagem">Tem certeza que deseja sair da sua conta?</div>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 16 }}>
              <button className="Popup_botao" onClick={handleConfirmLogout}>Sim</button>
              <button className="Popup_botao" onClick={handleCancelLogout}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Top_direita;
