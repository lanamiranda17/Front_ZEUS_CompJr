import Top_login from '../../components/Top_login/Top_login';
import Imagem_recuperacao from '../../components/Imagens/Imagem_recuperacao';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import '../../components/Botao.css';
import './Tela_verificacao.css';

function Tela_verificacao() {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState(Array(6).fill(''));
  const [showAlert, setShowAlert] = useState(false); // Estado para popup

  useEffect(() => {
    const primeiroInput = document.getElementById("dig0");
    if (primeiroInput) primeiroInput.focus();
  }, []);

  const handleInput = (e, index) => {
    const value = e.target.value.slice(0, 1); // só 1 caractere

    // Se for a tecla Backspace E o campo estiver vazio, vai pro anterior
    if (e.type === 'keydown'){
      if (e.key === 'Backspace') {
        if (!codigo[index] && index > 0) {
          const anterior = document.getElementById(`dig${index - 1}`);
          if (anterior) anterior.focus();
        }
        if (codigo[index]){
          const novoCodigo = [...codigo];
          novoCodigo[index] = '';
          setCodigo(novoCodigo);
          
          setTimeout(() => {document.getElementById(`dig${index}`)?.focus()}, 0); // Pra nao dar erro no navegador
        }
      }
      if (e.key === 'ArrowLeft'){
        const anterior = document.getElementById(`dig${index - 1}`);
        if (anterior) anterior.focus();
        setTimeout(() => {anterior.setSelectionRange(1, 1)}, 0); // Pro cursor ficar depois do dígito
      }
      if (e.key === "ArrowRight"){
        const proximo = document.getElementById(`dig${index + 1}`);
        if (proximo) proximo.focus();
      }
      return; // para aqui, sem rodar o resto
    }

    // Se o evento for uma mudança no input (digitou um número)
    if (e.type === 'change') {
      if (!isNaN(value) && value.length === 1) {
        const novoCodigo = [...codigo];
        novoCodigo[index] = value;
        setCodigo(novoCodigo);

        const proximo = document.getElementById(`dig${index + 1}`);
        if (proximo) proximo.focus();
      }
    }
  };

  const Verificar_codigo = (e) => {
    e.preventDefault();
    if (codigo.some((dig) => dig === '')) {
      setShowAlert(true); // Mostra popup se algum campo estiver vazio
      return;
    }
    navigate('/confirmacao');
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
   <div className='Tela_toda_verificacao'>
      <div className='Verificacao_card_verificacao'>
        <div className='Verificacao_container_verificacao'>
          <Top_login />

          <div className='Recuperacao-verificar_container_verificacao'>
            <form onSubmit={Verificar_codigo}>
              <h2 className='Textos_pequenos'>Recuperação de senha</h2>
              <h1>Verificação de email</h1>
              <h2 style={{marginBottom: 40}} className='Textos_pequenos'>Por favor, digite o código de 6 dígitos que foi enviado para seu endereço de e-mail.</h2>
                <div className="Codigo_inputs_verificacao">
                {codigo.map((valor, index) => (
                  <input
                    key={index}
                    id={`dig${index}`}
                    type="text"
                    maxLength="1"
                    className="Input_codigo_verificacao"
                    value={valor}
                    onChange={(e) => handleInput(e, index)}
                    onKeyDown={(e) => handleInput(e, index)}
                  />
                ))}
              </div>              
              <button className='Textos_pequenos Botao_padrao' type='submit'>Verificar</button>
            </form>
          </div>
        </div>
      </div>
      <Imagem_recuperacao />

      {showAlert && (
        <div className="Popup_fundo">
          <div className="Popup_caixa">
            <div className="Popup_titulo">Preencha todos os dígitos</div>
            <div className="Popup_mensagem">Por favor, preencha todos os campos do código antes de verificar.</div>
            <button className="Popup_botao" onClick={handleCloseAlert}>OK</button>
          </div>
        </div>
      )}
   </div>
  )
}
export default Tela_verificacao
