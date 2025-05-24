import { useNavigate } from 'react-router-dom';
import './Tela_novo_orcamento.css';
import '../../components/Popup_novo.css';
import Top_direita from '../../components/Top_direita/Top_direita';

import Layout_Nav from '../../components/Layout_Nav/Layout_Nav';
import '../../components/Botao.css';
import Icon_orcamento from "../../assets/Icons/Icon_orcam.svg";
import Input_box from '../../components/Input_box/Input_box';
import Select_box from '../../components/Input_box/Select_box';
import Icon_check from '../../assets/Icons/Icon_check.svg';

import { useState } from 'react';

function Tela_novo_orcamento() {
  // Estados necessários para o formulário funcionar corretamente
  const [numero, setNumero] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [custos, setCustos] = useState("");
  const [cliente, setCliente] = useState("");
  const [membro, setMembro] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Função de submit (placeholder)
  function handleSubmit(e) {
    e.preventDefault();
    setShowPopup(true);
  }
  
  return (
    <Layout_Nav>
      <div className='Tela_toda'>
        <div className='Novo_orcamento_card'>
          <div className='Top_novo_orcamento'>
            <div className='Top_esquerda_novo'>
              <img src={Icon_orcamento} className="Icon_orcam" /> 
              <div className='Texto_topo'>
                <p className='Texto_titulo_novo_orcamento'>Orçamento</p>
                <p className='Texto_subtitulo_novo_orcamento'>Visualizar, criar e enviar solicitação de orçamento.</p>
              </div>
            </div>
            <Top_direita/>
          </div>
          <div className='Conteudo_novo_orcamento'>
            <a className='Link_voltar' href="/funcionarios">
              <svg className="Link_voltar_icon" width="18" height="18" viewBox="0 0 18 18">
                <defs>
                  <linearGradient id="gradiente-voltar" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
                <polyline points="12 3 6 9 12 15" fill="none" stroke="url(#gradiente-voltar)" strokeWidth="2"/>
              </svg>
              Voltar
            </a>

            <div className='Card_novo_orcamento'>
              <div className='Texto_titulo_novo_orcamento'>Criar orçamento</div>
              <p>Preencha o formulário abaixo para criar um novo orçamento.</p>
              <form className='Form_novo_orcamento' onSubmit={handleSubmit}>
                <button className='Botao_entrar' type="submit">Adicionar funcionário</button>
                <div className='Linha_imputs_novo_orcamento'>
                  <Input_box id ="numero" label="Número do orçamento" type="number" placeholder="Insira o número" value={numero} onChange={e => setNumero(e.target.value)} />
                  <Input_box id ="desc" label="Descrição" type="text" placeholder="Insira a descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
                  <div className = "Input_valor">
                    <label htmlFor="valor" className="Input_label">Valor estimado</label>
                    <NumberFormat id="valor" value={valor} onValueChange={(val) => setValor(val.value)}
                        thousandSeparator="."
                        decimalSeparator=","
                        prefix="R$ "
                        allowNegative={false}
                        placeholder="Insira o valor estimado"
                        className="Input_box"
                    />
                    </div>
                </div>
                <div className='Linha_Inputs_novo_orcamento'>
                  <Input_box id ="custos" label="Custos previstos" type="text" placeholder="Insira o custo previsto em R$" value={custos} onChange={e => setCustos(e.target.value)} />
                  <Input_box id ="cliente" label="Cliente associado" type="text" placeholder="Insira o nome completo do cliente" value={cliente} onChange={e => setCliente(e.target.value)} />
                  <Select_box id="membro" label="Membro responsável" value={membro} placeholder="Selecione o membro"
                    onChange={e => setMembro(e.target.value)}
                    options={[
                      { value: "feminino", label: "Feminino" },
                      { value: "masculino", label: "Masculino" },
                      { value: "nao_identificar", label: "Prefiro não identificar" },
                    ]}
                  />
                </div>
              </form>
              <button className="Botao_entrar" type="submit">Criar orçamento</button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="Popup_fundo">
          <div className="Popup_caixa">
            <img src={Icon_check} alt="Ícone de confirmação" className="Popup_icon" />
            <div className="Popup_titulo">Orçamento criado!</div>
            <div className="Popup_mensagem">Você criou um novo orçamento com sucesso.</div>
            <button className="Popup_botao" onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </Layout_Nav>
  )
}
export default Tela_novo_orcamento