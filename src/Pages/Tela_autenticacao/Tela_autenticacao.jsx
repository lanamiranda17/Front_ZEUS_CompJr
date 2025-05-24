import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Imagem_login from '../../components/Imagens/Imagem_login';
import LogoComp from "../../assets/logo.svg";
import '../../components/Botao.css';
import './Tela_autenticacao.css';
import Icon_check from "../../assets/Icons/Icon_check.svg";

function Tela_autenticacao() {
  const [codigo, setCodigo] = useState(Array(6).fill(''));
  const [showPopup, setShowPopup] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Novo estado para alerta
  const navigate = useNavigate();

  useEffect(() => {
    const primeiroInput = document.getElementById("dig0");
    if (primeiroInput) primeiroInput.focus();
  }, []);

  const handleInput = (e, index) => {
    const value = e.target.value.slice(0, 1);

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
      setShowAlert(true); // Mostra alerta se algum campo estiver vazio
      return;
    }
    setShowPopup(true);
  };

  const handleOkPopup = () => {
    setShowPopup(false);
    navigate('/dashboard');
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className='Tela_toda_autenticacao'>
      <div className='Autenticacao_card_autenticacao'>
        <div className='Autenticacao_container_autenticacao'>        
          <div className="Login_logo_autenticacao">
            <img src={LogoComp} />
          </div>
          <div className='Insira-verificar_container_autenticacao'>
            <form onSubmit={Verificar_codigo}>
              <h1>Insira o código enviado para seu e-mail</h1>
              <div className="Codigo_inputs_autenticacao">
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
              <button className='Textos_pequenos Botao_padrao' type='submit'>Verificar</button>
            </form>
          </div>
        </div>
      </div>
      <Imagem_login />

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
