import Top_login from '../../components/Top_login/Top_login';
import Imagem_recuperacao from '../../components/Imagens/Imagem_recuperacao';
import Input_box from '../../components/Input_box/Input_box';
import { useNavigate } from 'react-router-dom';

import '../../components/Botao.css';
import './Tela_redefinicao.css';
import { useState } from 'react';

function Tela_redefinicao() {
  const [senha, setSenha] = useState('');
  const [confirma_senha, setConfirma] = useState('');
  const navigate = useNavigate();

  // Função que roda quando o botão é clicado
  function redefinirSenha(event) {
    event.preventDefault();
    console.log('Função redefinirSenha foi chamada!');
  
    if (!senha.trim() || !confirma_senha.trim()) {
      alert('Preencha todos os campos!');
      return;
    }

    navigate('/confirmacao');
  };

  return (
   <div className='Tela_toda'>
      <div className='Redefinicao_card'>
        <div className='Redefinicao_container'>
          <Top_login />

          <div className='Recuperacao-redefinir_container'>
            <form onSubmit={redefinirSenha}>
              <h2 className='Textos_pequenos'>Recuperação de senha</h2>
              <h1>Redefinição de senha</h1>
              <h2 style={{marginBottom: 30}} className='Textos_pequenos'>Por favor, digite uma nova senha.</h2>

              <Input_box id='senha' label='Nova senha' type='password' value={senha}
                    onChange={(e) => setSenha(e.target.value)}/>

              <Input_box id='confirma_senha' label='Confirmar nova senha' type='password' value={confirma_senha}
                    onChange={(e) => setConfirma(e.target.value)}/>

              <button onClick={redefinirSenha} className='Textos_pequenos Botao_entrar' type='submit'>Redefinir</button>
            </form>
          </div>
        </div>
      </div>
    <Imagem_recuperacao />
   </div>
  )
}
export default Tela_redefinicao