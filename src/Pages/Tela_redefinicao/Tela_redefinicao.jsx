import Top_login from '../../components/Top_login/Top_login';
import Imagem_recuperacao from '../../components/Imagens/Imagem_recuperacao';
import Input_box from '../../components/Input_box/Input_box';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../../components/Botao.css';
import './Tela_redefinicao.css';

// Componente de redefinição de senha. Permite ao usuário cadastrar uma nova senha.
function Tela_redefinicao() {
  // Estado para armazenar a nova senha
  const [senha, setSenha] = useState('');
  // Estado para armazenar a confirmação da nova senha
  const [confirma_senha, setConfirma] = useState('');
  // Estado para exibir alerta de campos obrigatórios
  const [showAlert, setShowAlert] = useState(false); // Estado para popup
  // Hook de navegação do React Router
  const navigate = useNavigate();

  // Handler de submit do formulário de redefinição
  function redefinirSenha(event) {
    event.preventDefault();
    // Validação: ambos os campos devem estar preenchidos
    if (!senha.trim() || !confirma_senha.trim()) {
      setShowAlert(true); // Mostra popup se campos vazios
      return;
    }
    // Após redefinir, navega para tela de login
    navigate('/'); // Redireciona para "/" ao redefinir
  }

  // Handler para fechar o popup de alerta
  function handleCloseAlert() {
    setShowAlert(false);
  }

  // Renderização principal da tela de redefinição de senha
  return (
   <div className='Tela_toda_redefinicao'>
      <div className='Redefinicao_card_redefinicao'>
        <div className='Redefinicao_container_redefinicao'>
          {/* Topo com logo */}
          <Top_login />

          <div className='Recuperacao-redefinir_container_redefinicao'>
            {/* Formulário para redefinir senha */}
            <form onSubmit={redefinirSenha}>
              <h2 className='Textos_pequenos'>Recuperação de senha</h2>
              <h1>Redefinição de senha</h1>
              <h2 style={{marginBottom: 30}} className='Textos_pequenos'>Por favor, digite uma nova senha.</h2>
              {/* Campo de nova senha */}
              <Input_box id='senha' label='Nova senha' type='password' value={senha}
                    onChange={(e) => setSenha(e.target.value)}/>
              {/* Campo de confirmação de nova senha */}
              <Input_box id='confirma_senha' label='Confirmar nova senha' type='password' value={confirma_senha}
                    onChange={(e) => setConfirma(e.target.value)}/>
              {/* Botão de submit */}
              <button className='Textos_pequenos Botao_padrao' type='submit'>Redefinir</button>
            </form>
          </div>
        </div>
      </div>
      {/* Imagem ilustrativa */}
      <Imagem_recuperacao />

      {/* Popup de alerta para campos obrigatórios */}
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
  );
}
export default Tela_redefinicao