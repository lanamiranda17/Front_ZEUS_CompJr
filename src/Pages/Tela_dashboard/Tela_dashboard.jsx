import { useNavigate } from 'react-router-dom';
import './Tela_Dashboard.css';
import Nav_bar from '../../components/Nav_bar/Nav_bar';
import Top_direita from '../../components/Top_direita/Top_direita';

function Tela_dashboard() {
  const nome_usuario = "Lana";
  const dia_semana = "sábado";
  const data_dia = 17;
  const data_mes = "maio";
  const data_ano = 2025;

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
          

        </div>
      </div>
      

   </div>
        
  )
}
export default Tela_dashboard