import Logo_comp from './components/Logo_comp/Logo_comp';
import Botao_criar from './components/Botao_criar/Botao_criar';

import ImageLogin from './assets/image_login.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

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
  
    alert(`Login feito com o email: ${email}`);
  }
  
  return (
   <div className='Tela_toda'>
      <div className='Login_card'>
        <div className='Login_container'>
          <div className='Top_login'>
            <Logo_comp />
            <Botao_criar />
          </div>

          <div className='Bemvindo-entrar_container'>
            <form onSubmit={fazerLogin}>
              <p className='Textos_pequenos Texto_bemvindo'>Bem vindo de volta!</p>
              <h1 className='Texto_facalogin'>Faça o login novamente</h1>

              <div className='Input_box'>
                <label htmlFor="email" className='Textos_pequenos Input_label'>Email</label>
                <input id="email" type="email" placeholder='Entre com endereço de email' value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className='Input_box'>
                <label htmlFor="senha" className='Textos_pequenos Input_label'>Senha</label>
                <input id="senha" type='password' value={senha}
                    onChange={(e) => setSenha(e.target.value)}/>
              </div>

              <div className='Checkbox_container'>
                <div className='Checkbox'>
                  <input type='checkbox' id='lembrar_senha'></input> {/*className='Input_checkbox' removida: padrão do navegador*/}
                  <label htmlFor='lembrar_senha' className='Textos_pequenos Texto_checkbox'>Lembrar</label>
                </div>

                <div className='Link_esqueci_senha'>
                  <a href='#' className='Textos_pequenos'>Esqueci senha</a>
                </div>
              </div>
              
              
              <button className='Textos_pequenos Botao_entrar' type='submit'>Entrar</button>
            </form>
          </div>
          
        </div>
      </div>
    <div className='Imagem_card'>
      <img src={ImageLogin} className='Imagem'></img>
    </div>

   </div>
  )
}

export default App
