import Top_login from '../../components/Top_login/Top_login';
import Imagem_login from '../../components/Imagens/Imagem_login';
import Input_box from '../../components/Input_box/Input_box';
import { useNavigate } from 'react-router-dom';

import '../../components/Botao.css';
import './Tela_login.css';
import { useState } from 'react';

function Tela_login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  // Função que roda quando o botão é clicado
  function fazerLogin(event) {
    event.preventDefault();
    console.log('Função fazerLogin foi chamada!');
  
    if (!email.trim() || !senha.trim()) {
      alert('Preencha todos os campos!');
      return;
    }
    
    console.log('Email digitado:', email);
    console.log('Senha digitada:', senha);
    navigate('/verificar');
  };

  return (
   <div className='Tela_toda'>
      <div className='Login_card'>
        <div className='Login_container'>
          <Top_login />

          <div className='Bemvindo-entrar_container'>
            <form onSubmit={fazerLogin}>
              <h2 className='Textos_pequenos'>Bem vindo de volta!</h2>
              <h1>Faça o login novamente</h1>

              <Input_box id='email' label='Email' type='email' placeholder='Entre com endereço de email' value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

              <Input_box id='senha' label='Senha' type='password' placeholder='Digite sua senha' value={senha}
                    onChange={(e) => setSenha(e.target.value)}/>

              <div className='Checkbox_container'>
                <div className='Checkbox'>
                  <input type='checkbox' id='lembrar_senha'></input> {/*className='Input_checkbox' removida: padrão do navegador*/}
                  <label htmlFor='lembrar_senha' className='Textos_pequenos Texto_checkbox'>Lembrar</label>
                </div>

                <div className='Link_esqueci_senha'>
                  <a href='/recuperacao_de_senha' className='Textos_pequenos'>Esqueci senha</a>
                </div>
              </div>
              <button onClick={fazerLogin} className='Textos_pequenos Botao_entrar' type='submit'>Entrar</button>
            </form>
          </div>
        </div>
      </div>
    <Imagem_login />
   </div>
  )
}
export default Tela_login