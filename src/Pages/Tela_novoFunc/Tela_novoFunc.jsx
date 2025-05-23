import { useNavigate } from 'react-router-dom';
import './Tela_novoFunc.css';
import './PopupNovoFuncionario.css';
import Top_direita from '../../components/Top_direita/Top_direita';

import Layout_Nav from '../../components/Layout_Nav/Layout_Nav';
import '../../components/Botao.css';
import Icon_func from "../../assets/Icons/Icon_func_comprov.svg";
import Avatar_MUI from '../../components/Avatar_MUI/Avatar_MUI';
import Imput_box from '../../components/Input_box/Input_box';
import Select_box from '../../components/Input_box/Select_box';
import Icon_check from '../../assets/Icons/Icon_check.svg';
import { useState } from 'react';

function Tela_novoFunc() {
  const [genero, setGenero] = useState("");
  const [setor, setSetor] = useState("");
  const [cargo, setCargo] = useState("");

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataAdmissao, setDataAdmissao] = useState("");
  const [habilidades, setHabilidades] = useState([]); // array vazio
  const [showPopup, setShowPopup] = useState(false);

  const opcoesCargoPorSetor = {
    vendas: [
      { value: "diretor comercial", label: "Diretor Comercial" },
      { value: "gerente de vendas", label: "Gerente de Vendas" },
      { value: "assessor de vendas", label: "Assessor de Vendas"},
    ],
    marketing: [
      { value: "gerente de marketing", label: "Gerente de Marketing" },
      { value: "assessor de marketing", label: "Assessor de Marketing" },
    ],
    gestao_de_pessoas: [
      { value: "vice de gente e gestão", label: "Vice-Presidente de Gente e Gestão" },
      { value: "gerente gp", label: "Gerente de Gestão de Pessoas" },
      { value: "recruiter", label: "Recruiter" },
      { value: "assesor de gp", label: "Assessor de Gestão de Pessoas" },
    ],
    projetos: [
      { value: "diretor de projetos", label: "Diretor de Projetos" },
      { value: "gerente de projetos", label: "Gerente de Projetos" },
      { value: "gerente de qualidade", label: "Gerente de Qualidade" },
      { value: "projetista", label: "Projeista" },
    ],
    presidencia: [
      { value: "presidente", label: "Presidente" },
      { value: "assessor admFinanceiro", label: "Assessor Administrativo-Financeiro" },
    ],
  };

  const opcoesCargo = setor ? opcoesCargoPorSetor[setor] || [] : [];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar os dados para a API ou fazer o que precisar
    const novoFuncionario = {
      nome,
      email,
      genero,
      setor,
      cargo,
      dataNascimento,
      cpf,
      telefone,
      dataAdmissao,
      habilidades,
    };

    setShowPopup(true);
  };

  return (
    <Layout_Nav>
      <div className='Tela_toda'>
        <div className='Novo_card'>
          <div className='Top_novo'>
            <div className='Top_esquerda_novo'>
              <img src={Icon_func} className="Icon_func" /> 
              <div className='Texto_topo'>
                <p className='Texto_titulo_novo'>Novo funcionário</p>
                <p className='Texto_subtitulo_novo'>Criar um novo funcionário</p>
              </div>
            </div>
            <Top_direita/>
          </div>
          <div className='Conteudo_novo'>
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

            <div className='Card_novo'>
              <div className='Texto_titulo_novo'>Adicionar funcionário</div>
              <form className='Form_novo' onSubmit={handleSubmit}>
                <div className='Coluna_avatar_novo'> 
                  <div className='Borda_avatar_novo'>
                    <Avatar_MUI/>
                    <div className='Texto_avatar_novo'>
                      <div className= 'Texto_claro_novo'>Formato permitido</div>
                      <div> JPEG, JPG e PNG</div>
                      <div className= 'Texto_claro_novo'>Tamanho máximo</div>
                      <div>2MB</div>
                    </div>
                  </div>
                  <button className='Botao_entrar' type="submit">Adicionar funcionário</button>
                </div>
                <div className='Coluna_imputs_novo'>
                  <Imput_box id ="nome" label="Nome" type="text" placeholder="Digite o primeiro nome" value={nome} onChange={e => setNome(e.target.value)} />
                  <Imput_box id ="email" label="Email" type="text" placeholder="Digite o endereço de email" value={email} onChange={e => setEmail(e.target.value)} />
                  <Select_box id="genero" label="Gênero" value={genero} placeholder="Selecione o gênero"
                    onChange={e => setGenero(e.target.value)}
                    options={[
                      { value: "feminino", label: "Feminino" },
                      { value: "masculino", label: "Masculino" },
                      { value: "nao_identificar", label: "Prefiro não identificar" },
                    ]}
                  />
                  <Select_box multiple={false} id="setor" label="Setor" value={setor} placeholder="Selecione o setor"
                    onChange={e => {
                      setSetor(e.target.value);
                      setCargo(""); // Limpa o cargo ao trocar setor
                    }}
                    options={[
                      { value: "vendas", label: "Vendas" },
                      { value: "marketing", label: "Marketing" },
                      { value: "gestao_de_pessoas", label: "Gestão de pessoas" },
                      { value: "projetos", label: "Projetos" },
                      { value: "presidencia", label: "Presidência" },
                    ]}
                  />
                  <Select_box multiple={false} id="cargo" label="Cargo" value={cargo} placeholder={"Selecione o cargo"}
                    onChange={e => setCargo(e.target.value)}
                    options={opcoesCargo}
                    disabled={!setor}
                  />
                </div>
                <div className='Coluna_imputs_novo'>
                  <Imput_box id ="data_nascimento" label="Data de nascimento" type="date" placeholder="Selecione a data de nascimento" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} />
                  <Imput_box id ="cpf" label="CPF" type="text" placeholder="Digite o CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
                  <Imput_box id ="telefone" label="Telefone" type="text" placeholder="Digite o telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
                  <Imput_box id ="data_admissao" label="Data de admissão" type="date" placeholder="Selecione a data de admissão" value={dataAdmissao} onChange={e => setDataAdmissao(e.target.value)} />
                  <Select_box multiple={true} id="habilidades" label="Habilidades" value={habilidades} placeholder={"Selecione as habilidades"}
                    onChange={e => setHabilidades(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
                    options={[
                      { value: "front-end", label: "Front-end" },
                      { value: "back-end", label: "Back-end" },
                      { value: "mobile", label: "Mobile" },
                      { value: "infraestrutura", label: "Infraestrutura" },
                      { value: "design", label: "Design" },
                    ]}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="Popup_fundo">
          <div className="Popup_caixa">
            <img src={Icon_check} alt="Ícone de confirmação" className="Popup_icon" />
            <div className="Popup_titulo">Funcionário cadastrado!</div>
            <div className="Popup_mensagem">Você adicionou um novo funcionário com sucesso.</div>
            <button className="Popup_botao" onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </Layout_Nav>
  )
}
export default Tela_novoFunc