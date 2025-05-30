import './Tela_novo_orcamento.css';
import '../../components/Popup_novo.css';
import Top_direita from '../../components/Top_direita/Top_direita';

import Layout_Nav from '../../components/Layout_Nav/Layout_Nav';
import '../../components/Botao.css';
import Icon_orcamento from "../../assets/Icons/Icon_orcam.svg";
import Input_box from '../../components/Input_box/Input_box';
import Icon_check from '../../assets/Icons/Icon_check.svg';
import Tabela_MUI from '../../components/Tabela_MUI/Tabela_MUI';

import { useState } from 'react';

// Componente de criação de novo orçamento
function Tela_novo_orcamento() {
  // Estados necessários para o formulário funcionar corretamente
  const [numero, setNumero] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [custos, setCustos] = useState("");
  const [cliente, setCliente] = useState("");
  const [membro, setMembro] = useState("");
  // Estado para exibir popup de sucesso ao criar orçamento
  const [showPopup, setShowPopup] = useState(false);
  // Estado para exibir popup ao enviar solicitação
  const [showPopupEnviar, setShowPopupEnviar] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Novo estado para alerta de campos obrigatórios
  // Hook de navegação do React Router

  // Handler de submit do formulário de novo orçamento
  function handleSubmit(e) {
    e.preventDefault();
    // Verifica se todos os campos estão preenchidos
    if (!numero.trim() || !descricao.trim() || !valor.trim() || !custos.trim() || !cliente.trim() || !membro.trim()) {
      setShowAlert(true); // Mostra alerta se faltar campo
      return;
    }
    setShowPopup(true); // Mostra popup de sucesso
  }
  // Handler para popup de envio de solicitação
  function handleEnviarClick() {
    setShowPopupEnviar(true);
  }

  // Colunas e dados da tabela de solicitações
  const colunasSolicitacao = [
    { id: 'sn', rotulo: 'S/N' },
    { id: 'orcamento', rotulo: 'Orçamento nº' },
    { id: 'descricao', rotulo: 'Descrição do projeto' },
    { id: 'valorEstimado', rotulo: 'Valor estimado (R$)', alinhamento: 'right' },
    { id: 'dataCriacao', rotulo: 'Data de criação' },
    { id: 'acao', rotulo: '' } // coluna do botão (sem título)
  ];
  const dadosSolicitacao = [
    {
      sn: '01',
      orcamento: '00211235',
      descricao: 'Criação de landingpage beneficente',
      valorEstimado: '1.400.000,00',
      dataCriacao: '18/11/2022',
      acao: (
        <button className="Botao_enviar" onClick={handleEnviarClick}>Enviar</button>
      )
    }
  ];

  // Renderização principal da tela de novo orçamento
  return (
    <Layout_Nav>
      <div className='Tela_toda'>
        <div className='Novo_orcamento_card'>
          <div className='Top_novo_orcamento'>
            <div className='Top_esquerda_novo'>
              <img src={Icon_orcamento} className="Icon_orcam" /> 
              <div className='Texto_topo'>
                <p className='Texto_titulo_novo_orcamento'>Orçamentos</p>
                <p className='Texto_subtitulo_novo_orcamento'>Visualizar, criar e enviar solicitação de orçamento.</p>
              </div>
            </div>
            <Top_direita/>
          </div>
          <div className='Conteudo_novo_orcamento'>
            {/* Link para voltar para a tela de orçamentos */}
            <a className='Link_voltar' href="/orcamento">
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
              <div classname= 'Texto_novo_orcamento'>Preencha o formulário abaixo para criar um novo orçamento.</div>
              {/* Formulário de novo orçamento */}
              <form className='Form_novo_orcamento' onSubmit={handleSubmit}>
                <div className='Coluna_imputs_novo_orcamento'>
                  <Input_box id ="numero" label="Número do orçamento" type="number" placeholder="Insira o número" value={numero} onChange={e => setNumero(e.target.value)} />
                  <Input_box id ="custos" label="Custos previstos" type="text" placeholder="Insira o custo previsto em R$" value={custos} onChange={e => setCustos(e.target.value)} />
                </div>
                <div className='Coluna_imputs_novo_orcamento'>
                  <Input_box id ="desc" label="Descrição" type="text" placeholder="Insira a descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
                  <Input_box id ="cliente" label="Cliente associado" type="text" placeholder="Insira o nome completo do cliente" value={cliente} onChange={e => setCliente(e.target.value)} />
                </div>
                <div className='Coluna_imputs_novo_orcamento'>
                  <Input_box id ="valor" label="Valor estimado" type="text" placeholder="Insira o valor estimado" value={valor} onChange={e => setValor(e.target.value)} />
                  <Input_box id ="membro" label="Membro responsável" type="text" placeholder="Selecione o membro" value={membro} onChange={e => setMembro(e.target.value)} />
                  {/* Botão de submit */}
                  <button className="Botao_padrao" type="submit">Criar orçamento</button>
                </div>
              </form>
            </div>
            {/* Tabela de solicitações de orçamento */}
            <Tabela_MUI titulo="Solicitação de orçamento" colunas={colunasSolicitacao} dados={dadosSolicitacao} />
          </div>
        </div>
      </div>
      {/* Popup de sucesso ao criar orçamento */}
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
      {/* Popup de alerta para campos obrigatórios */}
      {showAlert && (
        <div className="Popup_fundo">
          <div className="Popup_caixa">
            <div className="Popup_titulo">Preencha todos os campos</div>
            <div className="Popup_mensagem">Por favor, preencha todos os campos para adicionar um orçamento.</div>
            <button className="Popup_botao" onClick={() => setShowAlert(false)}>OK</button>
          </div>
        </div>
      )}
      {/* Popup de sucesso ao enviar solicitação */}
      {showPopupEnviar && (
        <div className="Popup_fundo">
          <div className="Popup_caixa">
            <img src={Icon_check} alt="Ícone de confirmação" className="Popup_icon" />
            <div className="Popup_titulo">Solicitação enviada!</div>
            <div className="Popup_mensagem">A solicitação de orçamento foi enviada com sucesso.</div>
            <button className="Popup_botao" onClick={() => setShowPopupEnviar(false)}>OK</button>
          </div>
        </div>
      )}
    </Layout_Nav>
  )
}
export default Tela_novo_orcamento