import Top_login from '../../components/Top_login/Top_login';
import Imagem_recuperacao from '../../components/Imagens/Imagem_recuperacao';
import Input_box from '../../components/Input_box/Input_box';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../../components/Botao.css';
import './Tela_redefinicao.css';

function Tela_redefinicao() {
  const [senha, setSenha] = useState('');
  const [confirma_senha, setConfirma] = useState('');
  const [showAlert, setShowAlert] = useState(false); // Estado para popup
  const navigate = useNavigate();

  // Função que roda quando o botão é clicado
  function redefinirSenha(event) {
    event.preventDefault();
    if (!senha.trim() || !confirma_senha.trim()) {
      setShowAlert(true); // Mostra popup se campos vazios
      return;
    }
    navigate('/'); // Redireciona para "/" ao redefinir
  }

  function handleCloseAlert() {
    setShowAlert(false);
  }

  return (
   <div className='Tela_toda_redefinicao'>
      <div className='Redefinicao_card_redefinicao'>
        <div className='Redefinicao_container_redefinicao'>
          <Top_login />

          <div className='Recuperacao-redefinir_container_redefinicao'>
            <form onSubmit={redefinirSenha}>
              <h2 className='Textos_pequenos'>Recuperação de senha</h2>
              <h1>Redefinição de senha</h1>
              <h2 style={{marginBottom: 30}} className='Textos_pequenos'>Por favor, digite uma nova senha.</h2>

              <Input_box id='senha' label='Nova senha' type='password' value={senha}
                    onChange={(e) => setSenha(e.target.value)}/>

              <Input_box id='confirma_senha' label='Confirmar nova senha' type='password' value={confirma_senha}
                    onChange={(e) => setConfirma(e.target.value)}/>

              <button className='Textos_pequenos Botao_padrao' type='submit'>Redefinir</button>
            </form>
          </div>
        </div>
      </div>
    <Imagem_recuperacao />

    {showAlert && (
      <div className="Popup_fundo">
        <div className="Popup_caixa">
          <div className="Popup_titulo">Preencha todos os campos</div>
          <div className="Popup_mensagem">Por favor, preencha e confirme a nova senha para continuar.</div>
          <button className="Popup_botao" onClick={handleCloseAlert}>OK</button>
        </div>
      </div>
    )}
   </div>
  )
}
export default Tela_redefinicao