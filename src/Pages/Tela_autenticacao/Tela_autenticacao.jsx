import Imagem_login from '../../components/Imagens/Imagem_login';
import LogoComp from "../../assets/logo.svg";
import '../../components/Botao.css';
import './Tela_autenticacao.css';
import { useState, useEffect } from 'react';

function Tela_autenticacao() {
  const [codigo, setCodigo] = useState(Array(6).fill(''));

  useEffect(() => { // Pro foco ficar no primeiro input assim que carregar a tela
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
    console.log("Código enviado:", codigo.join(''));
    // Validação do código pelo back-end viria aqui
    navigate ('/confirmacao');
  };

  return (
    <div className='Tela_toda'>
      <div className='Autenticacao_card'>
        <div className='Autenticacao_container'>        
          <div className="Login_logo">
            <img src= {LogoComp} />
          </div>
          <div className='Insira-verificar_container'>
            <form onSubmit={Verificar_codigo}>
              <h1>Insira o código enviado para seu e-mail</h1>
              <div className="Codigo_inputs">
                {codigo.map((valor, index) => (
                  <input
                    key={index}
                    id={`dig${index}`}
                    type="text"
                    maxLength="1"
                    className="Input_codigo"
                    value={valor}
                    onChange={(e) => handleInput(e, index)}
                    onKeyDown={(e) => handleInput(e, index)}
                  />
                ))}
              </div>              
              <button className='Textos_pequenos Botao_entrar' type='submit'>Verificar</button>
            </form>
          </div>
      </div>
    </div>
    <Imagem_login />
    </div>
  );
}

export default Tela_autenticacao;
