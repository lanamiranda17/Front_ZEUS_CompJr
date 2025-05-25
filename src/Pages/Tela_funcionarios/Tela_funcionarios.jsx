import { useNavigate } from 'react-router-dom';
import './Tela_funcionario.css';
import Top_direita from '../../components/Top_direita/Top_direita';

import Tabela_MUI from '../../components/Tabela_MUI/Tabela_MUI';
import Layout_Nav from '../../components/Layout_Nav/Layout_Nav';
import '../../components/Botao.css';
import Icon_func from "../../assets/Icons/Icon_func_comprov.svg";
import { useState } from 'react';


function Tela_funcionarios() {
  const [filtro, setFiltro] = useState('todos');
  const [valorFiltro, setValorFiltro] = useState('');
  const [pesquisa, setPesquisa] = useState('');
  const [pesquisaAtiva, setPesquisaAtiva] = useState('');

  const numero_funcionarios = 250;
  const [pagina, setPagina] = useState(0);
  const [itensPorPagina, setItensPorPagina] = useState(5);
  const navigate = useNavigate();


  const colunasFuncionariosDetalhado = [
  { id: 'sn', rotulo: 'S/N' },
  { id: 'nome', rotulo: 'Nome' },
  { id: 'telefone', rotulo: 'Telefone' },
  { id: 'nascimento', rotulo: 'Nascimento' },
  { id: 'ingresso', rotulo: 'Ingresso' },
  { id: 'email', rotulo: 'Email' },
  { id: 'area', rotulo: 'Área' },
  { id: 'cargo', rotulo: 'Cargo' },
  { id: 'acao', rotulo: 'Ação' },
];

const dadosFuncionariosDetalhado = [
  {
    sn: '01',
    nome: 'Sandra',
    telefone: '(35) 98765-4321',
    nascimento: '01/01/1999',
    ingresso: '01/01/2024',
    email: 'sandra@compjr.com',
    area: 'Gerência',
    cargo: 'Recursos Humanos',
    acao: 'Ver mais',
  },
  {
    sn: '02',
    nome: 'Abdu',
    telefone: '(35) 98765-4321',
    nascimento: '01/01/1999',
    ingresso: '01/01/2024',
    email: 'abdu@compjr.com',
    area: 'Projetos',
    cargo: 'Operações',
    acao: 'Ver mais',
  },
  {
    sn: '03',
    nome: 'Jão',
    telefone: '(35) 98765-4321',
    nascimento: '01/01/1999',
    ingresso: '01/01/2024',
    email: 'jao@compjr.com',
    area: 'Projetos',
    cargo: 'Operações',
    acao: 'Ver mais',
  },
  {
    sn: '04',
    nome: 'José',
    telefone: '(35) 98765-4321',
    nascimento: '01/01/1999',
    ingresso: '01/01/2024',
    email: 'jose@compjr.com',
    area: 'Gerência',
    cargo: 'Gerente de projetos',
    acao: 'Ver mais',
  },
  {
    sn: '05',
    nome: 'Fatima',
    telefone: '(35) 98765-4321',
    nascimento: '01/01/1999',
    ingresso: '01/01/2024',
    email: 'fatima@compjr.com',
    area: 'RH',
    cargo: 'Atendimento ao Cliente',
    acao: 'Ver mais',
  },
  {
    sn: '06',
    nome: 'Carlota',
    telefone: '(35) 98765-4321',
    nascimento: '01/01/1999',
    ingresso: '01/01/2024',
    email: 'carlota@compjr.com',
    area: 'RH',
    cargo: 'Recursos Humanos',
    acao: 'Ver mais',
  },
  {
    sn: '07',
    nome: 'Sandro',
    telefone: '(35) 98765-4321',
    nascimento: '01/01/1999',
    ingresso: '01/01/2024',
    email: 'sandro@compjr.com',
    area: 'RH',
    cargo: 'Recursos Humanos',
    acao: 'Ver mais',
  },
  {
    sn: '08',
    nome: 'Josué',
    telefone: '(35) 98765-4321',
    nascimento: '01/01/1999',
    ingresso: '01/01/2024',
    email: 'josue@compjr.com',
    area: 'Projetos',
    cargo: 'Infraestrutura',
    acao: 'Ver mais',
  },
  {
    sn: '09',
    nome: 'Jericó',
    telefone: '(35) 98765-4321',
    nascimento: '01/01/1999',
    ingresso: '01/01/2024',
    email: 'lerico@compjr.com',
    area: 'Comercial',
    cargo: 'Operações',
    acao: 'Ver mais',
  },
  {
    sn: '10',
    nome: 'Lele',
    telefone: '(35) 98765-4321',
    nascimento: '01/01/1999',
    ingresso: '01/01/2024',
    email: 'lele@compjr.com',
    area: 'Gerência',
    cargo: 'Segurança',
    acao: 'Ver mais',
  },
];


  // Obter áreas e cargos únicos
  const areasUnicas = Array.from(new Set(dadosFuncionariosDetalhado.map(f => f.area))).filter(Boolean);
  const cargosUnicos = Array.from(new Set(dadosFuncionariosDetalhado.map(f => f.cargo))).filter(Boolean);

  // Filtro aplicado na tabela
  let dadosTabela = dadosFuncionariosDetalhado;
  if (filtro === 'area' && valorFiltro) {
    dadosTabela = dadosFuncionariosDetalhado.filter(f => f.area === valorFiltro);
  } else if (filtro === 'cargo' && valorFiltro) {
    dadosTabela = dadosFuncionariosDetalhado.filter(f => f.cargo === valorFiltro);
  } else if (filtro === 'todos') {
    dadosTabela = dadosFuncionariosDetalhado;
  }
  if (pesquisaAtiva.trim() !== '') {
    dadosTabela = dadosTabela.filter(f => f.nome.toLowerCase().includes(pesquisaAtiva.toLowerCase()));
  }

  // Paginação dos dados filtrados
  const totalPaginas = Math.ceil(dadosTabela.length / itensPorPagina);
  const dadosPaginados = dadosTabela.slice(pagina * itensPorPagina, (pagina + 1) * itensPorPagina);

  return (
    <Layout_Nav>
      <div className='Tela_toda'>
        <div className='Funcionarios_card'>
          <div className='Top_funcionarios'>
            <div className='Top_esquerda'>
              <img src={Icon_func} className="Icon_func" />
              <div className='Texto_topo'>
                <p className='Texto_titulo'>Todos os funcionários</p>
                <p className='Texto_subtitulo'> Visualizar, pesquisar e adicionar novos funcionários</p>
              </div>
            </div>
            <Top_direita/>
          </div>
          <div className='Conteudo_funcionarios'>
            <div className='Card_pesquisa'>
              <div className='Card_esquerda'>
                <div className='Barra_pesquisa_func'>
                  <div className='Texto_pesquisa'>Pesquisa rápida de um funcionário</div>
                  <div className='Caixa_pesquisa'>
                    <input
                      type="text"
                      className='Input_pesquisa'
                      placeholder='Digite o nome da pesquisa'
                      value={pesquisa}
                      onChange={e => {
                        setPesquisa(e.target.value);
                        if (e.target.value === '') setPesquisaAtiva('');
                      }}
                      onKeyDown={e => { if (e.key === 'Enter') { setPesquisaAtiva(pesquisa); } }}
                    />
                    <button
                      className='Botao_pesquisa'
                      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                      onClick={e => { e.preventDefault(); setPesquisaAtiva(pesquisa); }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#555"><circle cx="11" cy="11" r="7" stroke="#555" strokeWidth="2" fill="none"/><line x1="16" y1="16" x2="21" y2="21" stroke="#555" strokeWidth="2"/></svg>
                    </button>
                  </div>
                </div>
                <div className='Texto_funcionarios'>
                  <div className='Numero_funcionarios'>{numero_funcionarios}</div>
                  <div>Total de funcionários</div>
                </div>
              </div>
              <div className='Card_direita'>
                <div className='Filtro'>
                  <div className='Texto_pesquisa_func'>Filtrar funcionário</div>
                  <select className='Select_filtro' value={filtro} onChange={e => { setFiltro(e.target.value); setValorFiltro(''); }}>
                    <option value="todos">Todos</option>
                    <option value="area">Área</option>
                    <option value="cargo">Cargo</option>
                  </select>
                  {filtro === 'area' && (
                    <select className='Select_filtro' style={{marginTop: 8}} value={valorFiltro} onChange={e => setValorFiltro(e.target.value)}>
                      <option value="">Selecione a área</option>
                      {areasUnicas.map(area => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  )}
                  {filtro === 'cargo' && (
                    <select className='Select_filtro' style={{marginTop: 8}} value={valorFiltro} onChange={e => setValorFiltro(e.target.value)}>
                      <option value="">Selecione o cargo</option>
                      {cargosUnicos.map(cargo => (
                        <option key={cargo} value={cargo}>{cargo}</option>
                      ))}
                    </select>
                  )}
                </div>
                <div className='Botao_adicionar_func'>
                  <button className='Botao_padrao' onClick={() => navigate('/novo')}>Adicionar novo</button>
                </div>
              </div>
            </div>
            <Tabela_MUI titulo="Todos os funcionários" colunas={colunasFuncionariosDetalhado} dados={dadosPaginados} />

            <div className='Paginacao_func'>
              <button
                className={`Seta_paginacao${pagina === 0 ? ' desativado' : ''}`}
                onClick={() => setPagina(p => Math.max(0, p - 1))}
                disabled={pagina === 0}
                aria-label="Página anterior"
              >
                <svg width="18" height="18" viewBox="0 0 18 18"><polyline points="12 3 6 9 12 15" fill="none" stroke="#555" strokeWidth="2"/></svg>
              </button>
              {Array.from({ length: totalPaginas }, (_, i) =>
                <button
                  key={i}
                  className={`Botao_paginacao${pagina === i ? ' ativa' : ''}`}
                  onClick={() => setPagina(i)}
                  aria-current={pagina === i ? 'page' : undefined}
                >
                  {i + 1}
                </button>
              )}
              <button
                className={`Seta_paginacao${pagina >= totalPaginas - 1 ? ' desativado' : ''}`}
                onClick={() => setPagina(p => Math.min(totalPaginas - 1, p + 1))}
                disabled={pagina >= totalPaginas - 1}
                aria-label="Próxima página"
              >
                <svg width="18" height="18" viewBox="0 0 18 18"><polyline points="6 3 12 9 6 15" fill="none" stroke="#555" strokeWidth="2"/></svg>
              </button>
              <select
                className='Select_paginacao'
                value={itensPorPagina}
                onChange={e => { setItensPorPagina(Number(e.target.value)); setPagina(0); }}
              >
                {[5, 10, 20, 50].map(num => <option key={num} value={num}>{num} por página</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>
    </Layout_Nav>
  )
}
export default Tela_funcionarios