import Top_login from '../../components/Top_login/Top_login';
import Imagem_recuperacao from '../../components/Imagens/Imagem_recuperacao';
import Input_box from '../../components/Input_box/Input_box';
import { useNavigate } from 'react-router-dom';

import '../../components/Botao.css';
import './Tela_esqueceu.css';
import { useState } from 'react';

function Tela_esqueceu() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // Função que roda quando o botão é clicado
  function esqueceuSenha(event) {
    event.preventDefault();
  
    if (!email.trim()) {
      alert('Preencha o campo!');
      return;
    }

    navigate('/redefinicao');
  };

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

              <button onClick={esqueceuSenha} className='Textos_pequenos Botao_entrar' type='submit'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    <Imagem_recuperacao />
   </div>
  )
}
export default Tela_esqueceu