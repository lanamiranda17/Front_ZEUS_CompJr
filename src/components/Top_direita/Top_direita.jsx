import './Top_direita.css';
import Icon_notif from "../../assets/Icons/Icon_notif.svg";
import Icon_perfil from "../../assets/Icons/Icon_perfil.svg";
import Icon_menu from "../../assets/Icons/Icon_menu.svg";

function Top_direita() {
  const nome_usuario = "Lana";
  const setor = "Vendas";

  return (
    <div className='Top_direita'>
      <img src={Icon_notif} alt="Notificação" />
      <img src={Icon_perfil} alt="Perfil" />
      <div className='Textos_direita'>
        <p className='Textos_pequenos'>{nome_usuario}</p>
        <p className='Texto_setor'>{setor}</p>
      </div>
      <button className='Botao_menu'>
        <img src={Icon_menu} alt="Menu" />
      </button>
    </div>
  );
}

export default Top_direita;
