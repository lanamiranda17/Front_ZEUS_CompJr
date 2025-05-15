import Top_login from '../../components/Top_login/Top_login';
import Imagem_recuperacao from '../../components/Imagens/Imagem_recuperacao';
import { useNavigate } from 'react-router-dom';

import '../../components/Botao.css';
import './Tela_verificacao.css';
import { useState, useEffect } from 'react';

function Tela_verificacao() {
  const navigate = useNavigate();
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
    navigate('/confirmacao');

  };

  return (
   <div className='Tela_toda'>
      <div className='Verificacao_card'>
        <div className='Verificacao_container'>
          <Top_login />

          <div className='Recuperacao-verificar_container'>
            <form onSubmit={Verificar_codigo}>
              <h2 className='Textos_pequenos'>Recuperação de senha</h2>
              <h1>Verificação de email</h1>
              <h2 style={{marginBottom: 40}} className='Textos_pequenos'>Por favor, digite o código de 6 dígitos que foi enviado para seu endereço de e-mail.</h2>
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
              <button onClick={Verificar_codigo} className='Textos_pequenos Botao_entrar' type='submit'>Verificar</button>
            </form>
          </div>
        </div>
      </div>
    <Imagem_recuperacao />
   </div>
  )
}
export default Tela_verificacao
