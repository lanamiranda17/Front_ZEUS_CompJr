import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Imagem_login from '../../components/Imagens/Imagem_login';
import LogoComp from "../../assets/logo.svg";
import '../../components/Botao.css';
import './Tela_autenticacao.css';
import Icon_check from "../../assets/Icons/Icon_check.svg";

// Componente de autenticação por código enviado ao e-mail do usuário
function Tela_autenticacao() {
  // Estado para armazenar os dígitos do código
  const [codigo, setCodigo] = useState(Array(6).fill(''));
  // Estado para exibir popup de sucesso
  const [showPopup, setShowPopup] = useState(false);
  // Estado para exibir alerta de campos obrigatórios
  const [showAlert, setShowAlert] = useState(false); // Novo estado para alerta
  // Hook de navegação do React Router
  const navigate = useNavigate();

  // Foca automaticamente no primeiro input ao montar o componente
  useEffect(() => {
    const primeiroInput = document.getElementById("dig0");
    if (primeiroInput) primeiroInput.focus();
  }, []);

  // Handler para inputs do código (teclas e mudanças)
  const handleInput = (e, index) => {
    const value = e.target.value.slice(0, 1);
    // Navegação entre campos com setas e backspace
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
          setTimeout(() => {document.getElementById(`dig${index}`)?.focus()}, 0);
        }
      }
      if (e.key === 'ArrowLeft'){
        const anterior = document.getElementById(`dig${index - 1}`);
        if (anterior) anterior.focus();
        setTimeout(() => {anterior.setSelectionRange(1, 1)}, 0);
      }
      if (e.key === "ArrowRight"){
        const proximo = document.getElementById(`dig${index + 1}`);
        if (proximo) proximo.focus();
      }
      return;
    }
    // Preenche o campo e avança para o próximo
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
  const Verificar_codigo = (e) => {
    e.preventDefault();
    // Validação: todos os campos devem estar preenchidos
    if (codigo.some((dig) => dig === '')) {
      setShowAlert(true); // Mostra alerta se algum campo estiver vazio
      return;
    }
    setShowPopup(true); // Mostra popup de sucesso
  };

  // Handler para fechar popup de sucesso e navegar para dashboard
  const handleOkPopup = () => {
    setShowPopup(false);
    navigate('/dashboard');
  };

  // Handler para fechar alerta de campos obrigatórios
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  // Renderização principal da tela de autenticação
  return (
    <div className='Tela_toda_autenticacao'>
      <div className='Autenticacao_card_autenticacao'>
        <div className='Autenticacao_container_autenticacao'>        
          {/* Logo da empresa */}
          <div className="Login_logo_autenticacao">
            <img src={LogoComp} />
          </div>
          <div className='Insira-verificar_container_autenticacao'>
            {/* Formulário para digitar o código */}
            <form onSubmit={Verificar_codigo}>
              <h1>Insira o código enviado para seu e-mail</h1>
              <div className="Codigo_inputs_autenticacao">
                {/* Inputs individuais para cada dígito do código */}
                {codigo.map((valor, index) => (
                  <input
                    key={index}
                    id={`dig${index}`}
                    type="text"
                    maxLength="1"
                    className="Input_codigo_autenticacao"
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
      <Imagem_login />

      {/* Popup de sucesso ao verificar código */}
      {showPopup && (
        <div className="Popup_fundo">
          <div className="Popup_caixa">
            <img src={Icon_check} alt="Ícone de confirmação" className="Popup_icon" />
            <div className="Popup_titulo">Código verificado!</div>
            <div className="Popup_mensagem">Seu código foi verificado com sucesso.</div>
            <button className="Popup_botao" onClick={handleOkPopup}>Ir para dashboard</button>
          </div>
        </div>
      )}

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

export default Tela_autenticacao;
