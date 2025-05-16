import { useNavigate } from 'react-router-dom';
import './Tela_Dashboard.css';
import Nav_bar from '../../components/Nav_bar/Nav_bar';
import Top_direita from '../../components/Top_direita/Top_direita';
import Card_dashboard from '../../components/Card_dashboard/Card_dashboard';
import Icon_func from "../../assets/Icons/Icon_func_laranja.svg"

function Tela_dashboard() {
  const nome_usuario = "Lana";
  const dia_semana = "sábado";
  const data_dia = 17;
  const data_mes = "maio";
  const data_ano = 2025;
  const funcionarios = 250;
  const variacao_func = 12; // Positivo ou negativo
  const candidaturas = 100;
  const variacao_candid = -0.2

  return (
   <div className='Tela_toda'>
      <Nav_bar/>
      <div className='Dashboard_card'>
        <div className='Top_dashboard'>
        <div className='Top_esquerda'>
          <p className='Texto_saudacao'> Bem-vindo {nome_usuario}!</p>
          <p className='Texto_data'> Hoje é {dia_semana}, {data_dia} de {data_mes} de {data_ano}.</p>
        </div>
        <Top_direita/>
        </div>
        <div className='Cards_dashboard'>
          <Card_dashboard
            valor={funcionarios}
            titulo="Total de funcionários"
            variacao={`${variacao_func} a mais que no último trimestre`}
            tipoVariacao={variacao_func > 0 ? "positivo" : "negativo"}
            icone={Icon_func}
          />
          <Card_dashboard
            valor={candidaturas}
            titulo="Total de candidaturas"
            variacao={`${variacao_candid}% a baixo do último trimestre`}
            tipoVariacao={variacao_candid > 0 ? "positivo" : "negativo"}
            icone={Icon_func}
          />

        </div>
      </div>
      

   </div>
        
  )
}
export default Tela_dashboard