import Top_login from '../../components/Top_login/Top_login';
import Imagem_recuperacao from '../../components/Imagens/Imagem_recuperacao';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import '../../components/Botao.css';
import './Tela_verificacao.css';

// Componente de verificação de código (ex: redefinição de senha)
function Tela_verificacao() {
  // Hook de navegação do React Router
  const navigate = useNavigate();
  // Estado para armazenar os dígitos do código
  const [codigo, setCodigo] = useState(Array(6).fill(''));
  // Estado para exibir alerta de campos obrigatórios
  const [showAlert, setShowAlert] = useState(false); // Estado para popup

  // Foca automaticamente no primeiro input ao montar o componente
  useEffect(() => {
    const primeiroInput = document.getElementById("dig0");
    if (primeiroInput) primeiroInput.focus();
  }, []);

  // Handler para inputs do código (teclas e mudanças)
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

  // Handler de submit do formulário de verificação
  function verificarCodigo(e) {
    e.preventDefault();
    // Validação: todos os campos devem estar preenchidos
    if (codigo.some((dig) => dig === '')) {
      setShowAlert(true); // Mostra alerta se algum campo estiver vazio
      return;
    }
    // Após verificação, navega para tela de redefinição de senha
    navigate('/confirmacao');
  }

  // Handler para fechar alerta de campos obrigatórios
  function handleCloseAlert() {
    setShowAlert(false);
  }

  // Renderização principal da tela de verificação
  return (
    <div className='Tela_toda_verificacao'>
      <div className='Verificacao_card_verificacao'>
        <div className='Verificacao_container_verificacao'>
          {/* Topo com logo */}
          <Top_login />

          <div className='Verificacao-enviar_container_verificacao'>
            {/* Formulário para digitar o código */}
            <form onSubmit={verificarCodigo}>
              <h2 className='Textos_pequenos'>Verificação de código</h2>
              <h1>Digite o código recebido</h1>
              <h2 style={{marginBottom: 20}} className='Textos_pequenos'>Insira o código enviado para seu e-mail para continuar.</h2>
                <div className="Codigo_inputs_verificacao">
                {/* Inputs individuais para cada dígito do código */}
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
              {/* Botão de submit */}
              <button className='Textos_pequenos Botao_padrao' type='submit'>Verificar</button>
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
            <div className="Popup_titulo">Preencha todos os dígitos</div>
            <div className="Popup_mensagem">Por favor, preencha todos os campos do código antes de verificar.</div>
            <button className="Popup_botao" onClick={handleCloseAlert}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Tela_verificacao
