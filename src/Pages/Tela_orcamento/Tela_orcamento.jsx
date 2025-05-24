import { useNavigate } from 'react-router-dom';
import './Tela_orcamento.css';
import Top_direita from '../../components/Top_direita/Top_direita';

import Tabela_MUI from '../../components/Tabela_MUI/Tabela_MUI';
import Layout_Nav from '../../components/Layout_Nav/Layout_Nav';
import '../../components/Botao.css';
import { useState } from 'react';
import Card_dashboard from '../../components/Card_dashboard/Card_dashboard';
import Icon_orcamento from "../../assets/Icons/Icon_orcam.svg";
import Icon_orcam_azul from '../../assets/Icons/Icon_orcam_azul.svg';
import Icon_orcam_laranja from '../../assets/Icons/Icon_orcam_laranja.svg';
import Icon_orcam_roxo from '../../assets/Icons/Icon_orcam_roxo.svg';
import Icon_orcam_verde from '../../assets/Icons/Icon_orcam_verde.svg';
import "../../components/Botao.css";


function Tela_orcamento() {
    
const colunasOrcamento = [
  { id: 'sn', rotulo: 'S/N' },
  { id: 'orcamento', rotulo: 'Orçamento nº' },
  { id: 'descricao', rotulo: 'Descrição do projeto' },
  { id: 'valorEstimado', rotulo: 'Valor estimado (R$)', alinhamento: 'right' },
  { id: 'custosPrevistos', rotulo: 'Custos previstos (R$)', alinhamento: 'right' },
  { id: 'cliente', rotulo: 'Cliente associado' },
  { id: 'status', rotulo: 'Status' },
];

const dadosOrcamento = [
  {
    sn: '01',
    orcamento: '00211235',
    descricao: 'Criação de landingpage beneficente',
    valorEstimado: '1,400,000.00',
    custosPrevistos: '1,380,000.00',
    cliente: 'Clovis',
    status: 'Em análise',
  },
  {
    sn: '02',
    orcamento: '36211235',
    descricao: 'Sistema de eventos',
    valorEstimado: '400,000.00',
    custosPrevistos: '500,000.00',
    cliente: 'Carlota',
    status: 'Reprovado',
  },
  {
    sn: '03',
    orcamento: '00211235',
    descricao: 'Chatbot eventos',
    valorEstimado: '2,000,000.00',
    custosPrevistos: '1,800,000.00',
    cliente: 'Jão',
    status: 'Em análise',
  },
  {
    sn: '04',
    orcamento: '00214465',
    descricao: 'Segunda versão do sistema de ingressos',
    valorEstimado: '1,400,000.00',
    custosPrevistos: '1,380,000.00',
    cliente: 'Gesonel',
    status: 'Aprovado',
  },
  {
    sn: '05',
    orcamento: '36211235',
    descricao: 'Sistema para leitura de arquivos',
    valorEstimado: '400,000.00',
    custosPrevistos: '500,000.00',
    cliente: 'Alex',
    status: 'Reprovado',
  },
  {
    sn: '06',
    orcamento: '00211235',
    descricao: 'Site da empresa junior',
    valorEstimado: '1,400,000.00',
    custosPrevistos: '1,380,000.00',
    cliente: 'Interno',
    status: 'Aprovado',
  },
  {
    sn: '07',
    orcamento: '00211235',
    descricao: 'Sistema de fluxo de caixa',
    valorEstimado: '1,400,000.00',
    custosPrevistos: '1,380,000.00',
    cliente: 'Gustavo',
    status: 'Aprovado',
  },
];

 const orcamento = "R$23,000,000";
 const variacao_orcamento = 5;
 const quantidade = "R$10,000,000";
 const saldo = "R$13,000,000";
 const utilizado = "48%";

  
  const navigate = useNavigate();

  return (
    <Layout_Nav>
      <div className='Tela_toda'>
        <div className='Orcamento_card'>
          <div className='Top_orcamento'>
            <div className='Top_esquerda_orcamento'>
              <img src={Icon_orcamento} className="Icon_orcam" />
              <div className='Texto_topo_orcamento'>
                <p className='Texto_titulo_orcamento'>Orçamentos</p>
                <p className='Texto_subtitulo_orcamento'>Visualizar, criar e enviar solicitação de orçamento.</p>
              </div>
            </div>
            <Top_direita/>
          </div>
          <div className='Cards_orcamento'>
              <Card_dashboard
                  valor={orcamento}
                  titulo="Orçamento anual total"
                  variacao={`${variacao_orcamento}%`}
                  tipoVariacao={variacao_orcamento> 0 ? "positivo" : "negativo"}
                  icone={Icon_orcam_azul}
              />
              <Card_dashboard
                  valor={quantidade}
                  titulo="Quantidade usada"
                  variacao=''
                  tipoVariacao=''
                  icone={Icon_orcam_laranja}
              />
              <Card_dashboard
                  valor={saldo}
                  titulo="Saldo orçamental total"
                  variacao=''
                  tipoVariacao=''
                  icone={Icon_orcam_roxo}
              />
              <Card_dashboard
                  valor={utilizado}
                  titulo="Orçamento utilizado"
                  variacao=''
                  tipoVariacao=''
                  icone={Icon_orcam_verde}
              />
          </div>
          <div className='Card_criar'>
            <p className='Texto_criar_orcamento'>Crie um orcamento</p>
            <button className="Botao_padrao Botao_adicionar" onClick={() => navigate('/novo_orcamento')}>Criar orçamento</button>
          </div>
          <div className='Tabela_orcamento'>
            <Tabela_MUI titulo="Histórico de orçamentos" colunas={colunasOrcamento} dados={dadosOrcamento} />
          </div>
        </div>
      </div>
    </Layout_Nav>
  )
}
export default Tela_orcamento