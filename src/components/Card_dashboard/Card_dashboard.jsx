import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './Card_dashboard.css';

function Card_dashboard({ valor, titulo, variacao, tipoVariacao, icone, corIcone }) {
  const isPositivo = tipoVariacao === 'positivo';

  return (
    <div className="Card">
      <div className="Card_topo">
        <div>
          <div className="Numero_card">{valor}</div>
          <div className="Titulo_card">{titulo}</div>
        </div>

          <img src={icone} alt="icone" />
        
      </div>
      <div className= "Estatistica">
        <span className={`Seta ${isPositivo ? 'positivo' : 'negativo'}`}>
          {isPositivo ? <FaArrowUp /> : <FaArrowDown />}
        </span>
        <span>{variacao}</span>
      </div>
    </div>
  );
}

export default Card_dashboard;
