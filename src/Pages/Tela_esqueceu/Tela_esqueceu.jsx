import Top_login from '../../components/Top_login/Top_login';
import Imagem_recuperacao from '../../components/Imagens/Imagem_recuperacao';
import Input_box from '../../components/Input_box/Input_box';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../../components/Botao.css';
import './Tela_esqueceu.css';

function Tela_esqueceu() {
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false); // Novo estado para popup
  const navigate = useNavigate();

  // Função que roda quando o botão é clicado
  function esqueceuSenha(event) {
    event.preventDefault();
  
    if (!email.trim()) {
      setShowAlert(true); // Mostra popup se campo vazio
      return;
    }

    navigate('/redefinicao');
  }

  function handleCloseAlert() {
    setShowAlert(false);
  }

  return (
   <div className='Tela_toda_esqueceu'>
      <div className='Recuperacao_card_esqueceu'>
        <div className='Recuperacao_container_esqueceu'>
          <Top_login />

          <div className='Recuperacao-enviar_container_esqueceu'>
            <form onSubmit={esqueceuSenha}>
              <h2 className='Textos_pequenos'>Recuperação de senha</h2>
              <h1>Esqueceu sua senha?</h1>
              <h2 style={{marginBottom: 20}} className='Textos_pequenos'>Insira o endereço de e-mail vinculado a esta conta
                e lhe enviaremos um código para que você possa alterar sua senha.</h2>
              
              <Input_box id='email' label='Endereço de email' type='email' placeholder='Entre com seu email' value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

              <button className='Textos_pequenos Botao_padrao' type='submit'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
      <Imagem_recuperacao />

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
  )
}
export default Tela_esqueceu