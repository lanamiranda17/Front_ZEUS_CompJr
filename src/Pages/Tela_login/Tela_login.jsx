import Top_login from '../../components/Top_login/Top_login';
import Imagem_login from '../../components/Imagens/Imagem_login';
import Input_box from '../../components/Input_box/Input_box';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../../components/Botao.css';
import './Tela_login.css';

function Tela_login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showAlert, setShowAlert] = useState(false); // Novo estado para popup
  const navigate = useNavigate();

  // Função que roda quando o botão é clicado
  function fazerLogin(event) {
    event.preventDefault();
  
    if (!email.trim() || !senha.trim()) {
      setShowAlert(true); // Mostra popup se campos vazios
      return;
    }
    
    console.log('Email digitado:', email);
    console.log('Senha digitada:', senha);
    navigate('/verificar');
  }

  function handleCloseAlert() {
    setShowAlert(false);
  }

  return (
   <div className='Tela_toda_login'>
      <div className='Login_card_login'>
        <div className='Login_container_login'>
          <Top_login />

          <div className='Bemvindo-entrar_container_login'>
            <form onSubmit={fazerLogin}>
              <h2 className='Textos_pequenos'>Bem vindo de volta!</h2>
              <h1>Faça o login novamente</h1>

              <Input_box id='email' label='Email' type='email' placeholder='Entre com endereço de email' value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

              <Input_box id='senha' label='Senha' type='password' placeholder='Digite sua senha' value={senha}
                    onChange={(e) => setSenha(e.target.value)}/>

              <div className='Checkbox_container_login'>
                <div className='Checkbox_login'>
                  <input type='checkbox' id='lembrar_senha'></input>
                  <label htmlFor='lembrar_senha' className='Textos_pequenos Texto_checkbox_login'>Lembrar</label>
                </div>
                <div className='Link_esqueci_senha_login'>
                  <a href='/recuperacao_de_senha' className='Textos_pequenos'>Esqueci senha</a>
                </div>
              </div>
              <button className='Textos_pequenos Botao_padrao' type='submit'>Entrar</button>
            </form>
          </div>
        </div>
      </div>
    <Imagem_login />

    {showAlert && (
        <div className="Popup_fundo">
          <div className="Popup_caixa">
            <div className="Popup_titulo">Preencha todos os campos</div>
            <div className="Popup_mensagem">Por favor, preencha o email e a senha para continuar.</div>
            <button className="Popup_botao" onClick={handleCloseAlert}>OK</button>
          </div>
        </div>
      )}
   </div>
  )
}
export default Tela_login