import { useNavigate } from 'react-router-dom';
import './Tela_Dashboard.css';
import Top_direita from '../../components/Top_direita/Top_direita';
import Card_dashboard from '../../components/Card_dashboard/Card_dashboard';
import Icon_func from "../../assets/Icons/Icon_func_laranja.svg";
import Icon_candid from "../../assets/Icons/Icon_candid.svg";
import Icon_proj from "../../assets/Icons/Icon_proj.svg";
import Icon_depart from "../../assets/Icons/Icon_depart.svg" ;
import Tabela_MUI from '../../components/Tabela_MUI/Tabela_MUI';
import Layout_Nav from '../../components/Layout_Nav/Layout_Nav';
import Donut_MUI from '../../components/Donut_MUI/Donut_MUI';


function Tela_dashboard() {
  // Data e informações do usuário e do dashboard
  const dataAtual = new Date();
  const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
                 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const dia_semana = diasSemana[dataAtual.getDay()];
  const data_dia = dataAtual.getDate();
  const data_mes = meses[dataAtual.getMonth()];
  const data_ano = dataAtual.getFullYear();

  // Dados simulados para cards e gráficos
  const nome_usuario = "Lana";
  const funcionarios = 250;
  const variacao_func = 12; // Positivo ou negativo
  const candidaturas = 100;
  const variacao_candid = -0.2;
  const projetos = 100;
  const variacao_proj = 2;
  const departamentos = 10;

  // Colunas e dados da tabela de comunicados
  const colunasComunicados = [
    { id: 'sn', rotulo: 'S/N' },
    { id: 'titulo', rotulo: 'Título' },
    { id: 'de', rotulo: 'Enviado de' },
    { id: 'para', rotulo: 'Enviado para' },
    { id: 'status', rotulo: 'Status' },
  ];
  const dadosComunicados = [
    {
      sn: '01',
      titulo: 'Comunicado de operações',
      de: 'João Jão',
      para: 'Israel',
      status: 'Pendente',
    },
    {
      sn: '02',
      titulo: 'Projeto de operações',
      de: 'Fatima',
      para: 'Mu de Áries',
      status: 'Aprovado',
    },
    {
      sn: '03',
      titulo: 'Aviso de projeto',
      de: 'João Jão',
      para: 'James brown',
      status: 'Aprovado',
    },
    {
      sn: '04',
      titulo: 'Comunicado de operações',
      de: 'Israel',
      para: 'João Jão',
      status: 'Aprovado',
    },
  ];

  const colunasFuncionarios = [
    { id: 'sn', rotulo: 'S/N' },
    { id: 'nome', rotulo: 'Nome' },
    { id: 'funcao', rotulo: 'Função' },
    { id: 'designacao', rotulo: 'Designação' },
  ];

  const dadosFuncionarios = [
    {
      sn: '01',
      nome: "Israel kamakawiwo'ole",
      funcao: 'Admin',
      designacao: 'Recursos Humanos'
    },
    {
      sn: '02',
      nome: 'Obi-Wan Kenobi',
      funcao: 'Admin',
      designacao: 'Gerenciamento'
    },
    {
      sn: '03',
      nome: 'Darth Sidious',
      funcao: 'Head TI',
      designacao: 'Pessoas e Operação'
    },
    {
      sn: '04',
      nome: 'Padmé Amidala',
      funcao: 'Head Contas',
      designacao: 'Contas'
    }
  ];

  const colunasPagamentos = [
    { id: 'sn', rotulo: 'S/N' },
    { id: 'assunto', rotulo: 'Assunto' },
    { id: 'data', rotulo: 'Data' },
    { id: 'status', rotulo: 'Status' },
  ];

  const dadosPagamentos = [
    {
      sn: '01',
      assunto: 'Solicitação de orçamento para outubro',
      data: '25/01/2023',
      status: 'Pendente'
    },
    {
      sn: '02',
      assunto: 'Solicitação de taxa de proposta',
      data: '19/01/2023',
      status: 'Aprovado'
    },
    {
      sn: '03',
      assunto: 'Solicitação de orçamento para fevereiro',
      data: '10/01/2023',
      status: 'Aprovado'
    },
    {
      sn: '04',
      assunto: 'Solicitação de taxa de proposta',
      data: '03/01/2023',
      status: 'Pendente'
    }
  ];
  const dadosCandidaturas = [
      { id: 0, value: 370, label: 'Aprovado', color: '#1c9e4b' },
      { id: 1, value: 80, label: 'Pendente', color: '#f2994a' },
      { id: 2, value: 50, label: 'Rejeitado', color: '#eb5757' },
    ];

  // Renderização principal do dashboard
  return (
    <Layout_Nav>
      {/* Topo do dashboard com saudação e data */}
      <div className="Dashboard_topo">
        <div className="Dashboard_saudacao">
          <h1>Olá, {nome_usuario}!</h1>
          <span>{dia_semana}, {data_dia} de {data_mes} de {data_ano}</span>
        </div>
        <Top_direita />
      </div>
      {/* Cards de resumo */}
      <div className="Dashboard_cards">
        <Card_dashboard titulo="Funcionários" valor={funcionarios} variacao={variacao_func} icone={Icon_func} />
        <Card_dashboard titulo="Candidaturas" valor={candidaturas} variacao={variacao_candid} icone={Icon_candid} />
        <Card_dashboard titulo="Projetos" valor={projetos} variacao={variacao_proj} icone={Icon_proj} />
        <Card_dashboard titulo="Departamentos" valor={departamentos} variacao={0} icone={Icon_depart} />
      </div>
      {/* Gráfico de donut com candidaturas */}
      <div className="Dashboard_grafico">
        <Donut_MUI titulo="Candidaturas por área" dados={[]} />
      </div>
      {/* Tabela de comunicados */}
      <div className="Dashboard_tabela">
        <Tabela_MUI titulo="Comunicados" colunas={colunasComunicados} dados={dadosComunicados} />
      </div>
    </Layout_Nav>
  );
}
export default Tela_dashboard