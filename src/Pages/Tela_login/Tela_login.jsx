import Top_login from '../../components/Top_login/Top_login';
import Imagem_login from '../../components/Imagens/Imagem_login';
import Input_box from '../../components/Input_box/Input_box';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../../components/Botao.css';
import './Tela_login.css';

// Componente de página de login. Responsável por autenticar o usuário.
function Tela_login() {
  // Estado para armazenar o email digitado
  const [email, setEmail] = useState('');
  // Estado para armazenar a senha digitada
  const [senha, setSenha] = useState('');
  // Estado para controlar exibição do popup de alerta
  const [showAlert, setShowAlert] = useState(false); // Novo estado para popup
  // Hook de navegação do React Router
  const navigate = useNavigate();

  // Handler de submit do formulário de login
  function fazerLogin(event) {
    event.preventDefault(); // Previne reload da página
  
    // Validação: se algum campo estiver vazio, mostra popup
    if (!email.trim() || !senha.trim()) {
      setShowAlert(true); // Mostra popup se campos vazios
      return;
    }
    // Aqui seria feita a autenticação real (API)
    console.log('Email digitado:', email);
    console.log('Senha digitada:', senha);
    // Após login, navega para tela de verificação
    navigate('/verificar');
  }

  // Handler para fechar o popup de alerta
  function handleCloseAlert() {
    setShowAlert(false);
  }

  // Renderização principal da tela de login
  return (
   <div className='Tela_toda_login'>
      <div className='Login_card_login'>
        <div className='Login_container_login'>
          {/* Topo com logo e botão de criar conta */}
          <Top_login />

          <div className='Bemvindo-entrar_container_login'>
            {/* Formulário de login */}
            <form onSubmit={fazerLogin}>
              <h2 className='Textos_pequenos'>Bem vindo de volta!</h2>
              <h1>Faça o login novamente</h1>

              {/* Campo de email */}
              <Input_box id='email' label='Email' type='email' placeholder='Entre com endereço de email' value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

              {/* Campo de senha */}
              <Input_box id='senha' label='Senha' type='password' placeholder='Digite sua senha' value={senha}
                    onChange={(e) => setSenha(e.target.value)}/>

              <div className='Checkbox_container_login'>
                <div className='Checkbox_login'>
                  {/* Checkbox para lembrar senha (não implementado) */}
                  <input type='checkbox' id='lembrar_senha'></input>
                  <label htmlFor='lembrar_senha' className='Textos_pequenos Texto_checkbox_login'>Lembrar</label>
                </div>
                <div className='Link_esqueci_senha_login'>
                  {/* Link para tela de recuperação de senha */}
                  <a href='/recuperacao_de_senha' className='Textos_pequenos'>Esqueci senha</a>
                </div>
              </div>
              {/* Botão de submit do formulário */}
              <button className='Textos_pequenos Botao_padrao' type='submit'>Entrar</button>
            </form>

            {/* Popup de alerta para campos obrigatórios */}
            {showAlert && (
              <div className="Popup_fundo">
                <div className="Popup_caixa">
                  <div className="Popup_titulo">Preencha todos os campos</div>
                  <div className="Popup_mensagem">Por favor, preencha todos os campos para continuar.</div>
                  <button className="Popup_botao" onClick={handleCloseAlert}>OK</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Imagem ilustrativa ao lado do formulário */}
      <Imagem_login />
   </div>
  );
}
export default Tela_login