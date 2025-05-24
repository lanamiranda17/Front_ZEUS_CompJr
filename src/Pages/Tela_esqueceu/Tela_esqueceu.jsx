import Top_login from '../../components/Top_login/Top_login';
import Imagem_recuperacao from '../../components/Imagens/Imagem_recuperacao';
import Input_box from '../../components/Input_box/Input_box';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../../components/Botao.css';
import './Tela_esqueceu.css';

// Componente de recuperação de senha. Permite ao usuário solicitar redefinição via e-mail.
function Tela_esqueceu() {
  // Estado para armazenar o e-mail digitado
  const [email, setEmail] = useState('');
  // Estado para exibir alerta de campo obrigatório
  const [showAlert, setShowAlert] = useState(false); // Novo estado para popup
  // Hook de navegação do React Router
  const navigate = useNavigate();

  // Handler de submit do formulário de recuperação
  function esqueceuSenha(event) {
    event.preventDefault();
    // Validação: campo de e-mail não pode estar vazio
    if (!email.trim()) {
      setShowAlert(true); // Mostra popup se campo vazio
      return;
    }
    // Após envio, navega para tela de redefinição de senha
    navigate('/redefinicao');
  }

  // Handler para fechar o popup de alerta
  function handleCloseAlert() {
    setShowAlert(false);
  }

  // Renderização principal da tela de recuperação de senha
  return (
    <div className='Tela_toda_esqueceu'>
      <div className='Recuperacao_card_esqueceu'>
        <div className='Recuperacao_container_esqueceu'>
          {/* Topo com logo */}
          <Top_login />

          <div className='Recuperacao-enviar_container_esqueceu'>
            {/* Formulário para solicitar recuperação */}
            <form onSubmit={esqueceuSenha}>
              <h2 className='Textos_pequenos'>Recuperação de senha</h2>
              <h1>Esqueceu sua senha?</h1>
              <h2 style={{marginBottom: 20}} className='Textos_pequenos'>Insira o endereço de e-mail vinculado a esta conta
                e lhe enviaremos um código para que você possa alterar sua senha.</h2>
              {/* Campo de e-mail */}
              <Input_box id='email' label='Endereço de email' type='email' placeholder='Entre com seu email' value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
              {/* Botão de submit */}
              <button className='Textos_pequenos Botao_padrao' type='submit'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
      {/* Imagem ilustrativa */}
      <Imagem_recuperacao />

      {/* Popup de alerta para campo obrigatório */}
      {showAlert && (
        <div className="Popup_fundo">
          <div className="Popup_caixa">
            <div className="Popup_titulo">Preencha o campo</div>
            <div className="Popup_mensagem">Por favor, preencha o campo de email para continuar.</div>
            <button className="Popup_botao" onClick={handleCloseAlert}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Tela_esqueceu