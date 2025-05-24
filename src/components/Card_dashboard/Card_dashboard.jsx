import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './Card_dashboard.css';

// Componente de card informativo do dashboard, exibe valores, variações e ícones de destaque.
function Card_dashboard({ valor, titulo, variacao, tipoVariacao, icone}) {
  const isPositivo = tipoVariacao === 'positivo';
  const sem_variacao = tipoVariacao === '';

  return (
    <div className="Card">
      <div className="Card_topo">
        <div>
          <div className="Numero_card">{valor}</div>
          <div className="Titulo_card">{titulo}</div>
        </div>

          <img src={icone} alt="icone" />
        
      </div>
      {!sem_variacao && (
      <div className= "Estatistica">
        <span className={`Seta ${isPositivo ? 'positivo' : 'negativo'}`}>
          {isPositivo ? <FaArrowUp /> : <FaArrowDown />}
        </span>
        <span>
          {variacao} {isPositivo? "a mais que no último trimestre" : "a menos que no último trimestre"}
        </span>
      </div>
      )}
    </div>
  );
}


export default Card_dashboard;
